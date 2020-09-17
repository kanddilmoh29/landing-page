import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForcastComponent } from './forcast/forcast.component';



@NgModule({
  declarations: [ForcastComponent],
  imports: [
    CommonModule
  ]
})
export class WeatherModule { }
