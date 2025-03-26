import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimengModule { }
