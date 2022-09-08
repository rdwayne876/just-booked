import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format,
  addMinutes,
  parseISO
} from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { Observable, Subject } from 'rxjs';
import { colors } from '../../calendar-utils/colors'
import { Appointment } from 'src/app/models/appointment';
import { ProviderService } from 'src/app/services/provider.service';
import { ProviderAuthService } from 'src/app/services/provider-auth.service';
import { map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ProviderAppointmentsDialogComponent } from '../provider-appointments-dialog/provider-appointments-dialog.component';
import Swal from 'sweetalert2';
import { ProviderAppointmentService } from 'src/app/services/provider-appointment.service';
import { CustomEventTitleFormatter } from 'src/app/custom-event-title-formatter.provider';
import flatpickrInstance from 'flatpickr'
import { DatePickrComponent } from '../date-pickr/date-pickr.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-appointments',
  templateUrl: './provider-appointments.component.html',
  styleUrls: ['./provider-appointments.component.scss'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    }
  ]
})

export class ProviderAppointmentsComponent implements OnInit {

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  events$!: Observable<CalendarEvent<any>[]>;
  activeDayIsOpen!: boolean;
  isModal: boolean = false;
  apptId!: string
  newDate!: object


  @ViewChild('myInput', { static: false })
  myInput!: ElementRef;

  constructor(private provider: ProviderService,
    private auth: ProviderAuthService,
    private dialog: MatDialog,
    private appointment: ProviderAppointmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchEvents()
  }

  getDate(date: Date, id: string) {
    console.log(date);
    this.newDate = { date: date }
    this.appointment.updateAppointment(id, this.newDate).subscribe(
      resp => {
        if (resp) {
          console.log(resp);

          Swal.close()
        }
      },
      err => {
        alert(err.error.message)
      }
    )

  }

  fetchEvents(): void {

    this.events$ = this.provider.getAppointments(this.auth.id).pipe(
      map((resp: any) => {
        return resp.data.appointments.appointments.map((appointment: any) => {
          // console.log(appointment);

          return {
            title: `${appointment.service.name} - ${appointment.user.firstName} ${appointment.user.lastName}`,
            start: new Date(appointment.date),
            end: addMinutes(new Date(appointment.date), resp.data.time),
            color: appointment.confirmed ? colors.green : appointment.cancelled ? colors.red : colors.yellow,
            allDay: false,
            meta: { appointment }
          }
        })
      })
    )

    // console.log(this.events$);

    this.events$.subscribe(resp => {
      // console.log(resp);
    })
  }

  dayClicked({
    date,
    events,
  }: {
    date: Date;
    events: CalendarEvent<any>[];
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  openDialog(appt: any) {
    this.dialog.open(ProviderAppointmentsDialogComponent, {
      width: '50%',
      data: appt
    })
  }

  eventClicked(event: CalendarEvent<any>): void {
    // this.openDialog( event.meta)
    console.log(event.meta.appointment.cancelled);
    if (event.meta.appointment.cancelled) {
      Swal.fire({
        title: 'Appointment is cancelled',
        html: 'No Actions Available',
        timer: 2000,
        timerProgressBar: true,
      })

      return
    }

    if( event.meta.appointment.confirmed){
      this.isModal = true;
      this.apptId = event.meta.appointment._id
      Swal.fire({
        title: `Cancel/Reschedule ${event.meta.appointment.service.name} with ${event.meta.appointment.user.firstName} ${event.meta.appointment.user.lastName}`,
        icon: 'question',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Reschedule',
        denyButtonText: 'Cancel',
        cancelButtonText: 'Abort'      
      }).then(( result) => {
        if( result.isConfirmed){
          Swal.fire({
            title: 'Reschedule appointment',
            icon: 'question',
            showConfirmButton: false,
            html: this.myInput.nativeElement,
            cancelButtonText: 'Abort',
          })
        } else if( result.isDenied){
          Swal.fire({
            title: `Are you sure want to Cancel this appointment?`,
            text: 'This action is irreversible!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Cancel it!',
            cancelButtonText: 'No, keep it',
      
          }).then((result) => {
            if (result.value) {
              this.cancelAppointment( this.apptId)
              Swal.fire(
                'Cancelled!',
                `Your appointment has been cancelled`,
                'success'
              )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Aborted',
                'Your Appointment is safe ',
                'error'
              )
            }
          })
        }
      })

      return
    }

    this.isModal = true;
    this.apptId = event.meta.appointment._id

    Swal.fire({
      title: `Confirm ${event.meta.appointment.service.name} with ${event.meta.appointment.user.firstName} ${event.meta.appointment.user.lastName}`,
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirm Appointment',
      denyButtonText: 'Reschedule/Cancel',
      cancelButtonText: 'Abort',
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmAppointment(event.meta.appointment._id)
        Swal.fire('Confirmed', 'Your appointment has been confirmed', 'success')
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Reschedule or Canel appointment',
          icon: 'question',
          showDenyButton: true,
          showCancelButton: true,
          html: this.myInput.nativeElement,
          denyButtonText: 'Cancel Appointment',
          cancelButtonText: 'Abort',
        }).then((result) => {
          if (result.isDenied) {
            this.cancelAppointment(event.meta.appointment._id)
            Swal.fire('Appointment Cancelled', 'Your appointment has been Cancelled', 'success')
          }
        })
      }
    })
  }

  confirmAppointment(id: string) {
    const appointment = { confirmed: true }
    this.appointment.updateAppointment(id, appointment).subscribe(resp => {
      // console.log(resp);
    })
  }

  cancelAppointment(id: string) {
    const appointment = { cancelled: true }
    this.appointment.updateAppointment(id, appointment).subscribe(resp => {
      // console.log(resp);
    })
  }

}
