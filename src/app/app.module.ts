import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatChipsModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatStepperModule
} from '@angular/material';
import { MessageHistoryComponent } from './message-history/message-history.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';
import { DetailsPageComponent } from './details-page/details-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageHistoryComponent,
    HomeComponent,
    OrderByDoneAndDatePipe,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatStepperModule
  ],
  entryComponents: [
    DetailsPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
