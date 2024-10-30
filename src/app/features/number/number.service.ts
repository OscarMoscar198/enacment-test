import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  constructor(private firestore: AngularFirestore) {}

  generateNumbers(inputNumber: number): any[] {
    const numbers = [];
    for (let i = 0; i <= inputNumber; i++) {
      const multiples = [];
      if (i % 3 === 0 && i !== 0) multiples.push(3);
      if (i % 5 === 0 && i !== 0) multiples.push(5);
      if (i % 7 === 0 && i !== 0) multiples.push(7);

      let color = 'black';
      if (multiples.length > 0) {
        const minMultiple = Math.min(...multiples);
        if (minMultiple === 3) color = 'green';
        else if (minMultiple === 5) color = 'red';
        else if (minMultiple === 7) color = 'blue';
      }

      numbers.push({ value: i, multiples, color });
    }
    return numbers;
  }

  saveResult(inputNumber: number, numbers: any[]): Promise<void> {
    const data = {
      inputNumber,
      numbers,
      date: new Date(),
    };
    return this.firestore.collection('results').add(data).then(() => {});
  }
}
