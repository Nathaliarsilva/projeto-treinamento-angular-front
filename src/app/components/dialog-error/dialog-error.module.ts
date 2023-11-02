import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogErrorComponent } from './dialog-error/dialog-error.component';



@NgModule({
  declarations: [
    DialogErrorComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DialogErrorComponent
  ]
})
export class DialogErrorModule { }
