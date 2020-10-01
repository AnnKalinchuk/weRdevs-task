import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../shared/services/date.service';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Week } from '../shared/models/day.model';
import { Store } from '@ngrx/store';
import { CalendarState } from '../store/reducers/calendar.reducer';
import { SaveSelectedDateAction } from '../store/actions/calendar.action';
import { PopupContainerComponent } from '../shared/components/popup-container/popup-container.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  modalRef: BsModalRef;
  calendar: Week[];

  constructor(public dateService: DateService,
              private modalService: BsModalService,
              private store: Store<CalendarState>
              ) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this));
  }

  go(dir: number): void{
    this.dateService.changeMonth(dir);
  }

  generate(now: moment.Moment): void {
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');
    const calendar = [];

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');

            return {
                value,
                active,
                disabled,
                selected
            };
          })
      });
    }

    this.calendar = calendar;
  }

  onSelect(day: moment.Moment): void {
      this.dateService.changeDate(day);
      this.store.dispatch(new SaveSelectedDateAction({month: day.format('MMMM') , day: day.format('Do dddd')}));
      this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.show(PopupContainerComponent,  {class: 'modal-dialog-centered'});
  }

}
