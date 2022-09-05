import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'mwl-utils-calendar-header',
  template: `
    <div class="flex justify-between">
      <div class="flex justify-center items-center">
        <div class="inline-flex">
          <div
            class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-l"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Previous
          </div>
          <div
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent"
            mwlCalendarToday
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Today
          </div>
          <div
            class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-r"
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Next
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <h3 class="text-2xl text-center align-middle mb-0">{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>
      </div>
      <div class="col-md-4">
        <div class="inline-flex">
          <div
            class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-l"
            (click)="viewChange.emit(CalendarView.Month)"
            [class.bg-blue-700]="view === CalendarView.Month"
          >
            Month
          </div>
          <div
            class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4"
            (click)="viewChange.emit(CalendarView.Week)"
            [class.bg-blue-700]="view === CalendarView.Week"
          >
            Week
          </div>
          <div
            class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-r"
            (click)="viewChange.emit(CalendarView.Day)"
            [class.bg-blue-700]="view === CalendarView.Day"
          >
            Day
          </div>
        </div>
      </div>
    </div>
    <br />
  `,
  styleUrls: ['../../../node_modules/angular-calendar/css/angular-calendar.css']
})
export class CalendarHeaderComponent {
  @Input() view!: CalendarView;

  @Input() viewDate!: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}
