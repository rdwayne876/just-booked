import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addMinutes, format } from 'date-fns';

@Component({
  selector: 'app-provider-appointments-dialog',
  templateUrl: './provider-appointments-dialog.component.html',
  styleUrls: ['./provider-appointments-dialog.component.scss']
})
export class ProviderAppointmentsDialogComponent implements OnInit {

  constructor(@Inject( MAT_DIALOG_DATA) public appointment: any ) { }

  startDate = format(new Date(this.appointment.resp.data.appointments.appointments[0].date), 'PPPPp')
  endDate = format( new Date( addMinutes( new Date(this.appointment.resp.data.appointments.appointments[0].date), this.appointment.resp.data.time)), 'p')

  ngOnInit(): void {
    console.log(this.appointment.resp.data.time);
    console.log(this.appointment);
    console.log(this.startDate);
    

    console.log(this.endDate);
    
    
  }

}
