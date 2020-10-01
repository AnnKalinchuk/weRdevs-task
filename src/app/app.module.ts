import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopupComponent } from './shared/components/popup/popup.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PopupContainerComponent } from './shared/components/popup-container/popup-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AboutUsPageComponent,
    CalendarComponent,
    MomentPipe,
    PopupComponent,
    PopupContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
