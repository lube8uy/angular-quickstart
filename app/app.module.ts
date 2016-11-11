import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CarPartsComponent } from './car-parts.component';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CarPartsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
