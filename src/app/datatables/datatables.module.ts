import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatatablesRoutingModule } from './datatables-routing.module';
import { DatatablesComponent } from './datatables.component';


@NgModule({
  declarations: [
    DatatablesComponent
  ],
  imports: [
    CommonModule,
    DatatablesRoutingModule
  ]
})
export class DatatablesModule { }
