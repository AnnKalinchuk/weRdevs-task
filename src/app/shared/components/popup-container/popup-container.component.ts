import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalendarState } from 'src/app/store/reducers/calendar.reducer';
import { selectDate } from 'src/app/store/selectors/calendar.selector';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.scss']
})
export class PopupContainerComponent implements OnInit {

  public selectedDate$: Observable<any> = this.store.pipe(select(selectDate));

  constructor(public modalRef: BsModalRef,
              private store: Store<CalendarState>) { }

  ngOnInit(): void {
  }

}
