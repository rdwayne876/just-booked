import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-pickr',
  templateUrl: './date-pickr.component.html',
  styleUrls: ['./date-pickr.component.scss']
})
export class DatePickrComponent implements OnInit {

  dateTimeValue: Date = new Date();

  @Output() selectedDateChange = new EventEmitter< Date>();

  getDate( value: Date){
    this.selectedDateChange.emit( value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}