import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';

import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {DummyDataService} from './core/services/common/dummy-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule
  ],
  providers: [DummyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
