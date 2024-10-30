import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { NumberInputComponent } from './number-input/number-input.component';


@NgModule({
  declarations: [NumberInputComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SharedModule
  ],
  exports: [NumberInputComponent]
})
export class NumberModule { }
