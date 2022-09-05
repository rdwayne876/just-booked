import { Component, OnInit } from '@angular/core';
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
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
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

@Component({
  selector: 'app-provider-appointments',
  templateUrl: './provider-appointments.component.html',
  styleUrls: ['./provider-appointments.component.scss']
})

export class ProviderAppointmentsComponent implements OnInit {

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  events$!: Observable<CalendarEvent<any>[]>;
  activeDayIsOpen!: boolean;

  constructor(private provider: ProviderService, private auth: ProviderAuthService, private dialog: MatDialog, private appointment: ProviderAppointmentService  ) { }

  ngOnInit(): void {
    this.fetchEvents()
  }

  fetchEvents(): void {

    this.events$ = this.provider.getAppointments(this.auth.id).pipe(
      map((resp: any) => {
        return resp.data.appointments.appointments.map((appointment: any) => {
          const date = new Date(appointment.date)
          const year = date.getFullYear()
          const month = date.getMonth()
          const day = date.getDate()
          const hours = date.getHours()
          const min = date.getMinutes()
          console.log(date);

          console.log(appointment.services
          );

          return {
            title: appointment.user.firstName,
            start: new Date(appointment.date),
            end: addMinutes(new Date(appointment.date), resp.data.time),
            color: appointment.confirmed ? colors.green : colors.yellow,
            allDay: false,
            meta: { appointment }
          }
        })
      })
    )

    console.log(this.events$);

    this.events$.subscribe(resp => {
      console.log(resp);
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

  openDialog( appt: any) {
    this.dialog.open( ProviderAppointmentsDialogComponent, {
      width: '50%',
      data: appt
    })
  }

  eventClicked( event: CalendarEvent<any>): void {
    // this.openDialog( event.meta)
    console.log(event.meta.appointment._id);
    
    Swal.fire({
      title: `Confirm ${event.meta.appointment.services[0].name} with ${event.meta.appointment.user.firstName} ${event.meta.appointment.user.lastName}`,
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: 'Cancel',
      cancelButtonText: 'Back',
    }).then(( result) => {
      if( result.isConfirmed) {
        this.confirmAppointment( event.meta.appointment._id)
        Swal.fire('Confirmed', 'Your appointment has been confirmed', 'success')
      } else if( result.isDenied) {
        Swal.fire( 'Cancelled!', 'The appointment has been cancelled', 'error')
      }
    })
  }

  confirmAppointment( id: string){
    const appointment = { confirmed: true}
    this.appointment.updateAppointment( id, appointment).subscribe( resp => { console.log(resp);
    })
  }
}
