import { Component } from '@angular/core';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent {
  inputNumber: number=0;
  numbersList: any[] = [];

  constructor(private numberService: NumberService) {}

  onProcess() {
    if (this.inputNumber >= 0) {
      this.numbersList = this.numberService.generateNumbers(this.inputNumber);
      this.numberService.saveResult(this.inputNumber, this.numbersList);
    } else {
      alert('Por favor, ingresa un número válido mayor o igual a 0.');
    }
  }
}
