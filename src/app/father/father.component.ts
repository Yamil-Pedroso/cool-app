import { Component } from '@angular/core';
import books from '../data/books';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {
  count: number = 0;
  Fathermessage: string = 'Message from Father: Hello Son!';

  localStorageObj: any = JSON.parse(localStorage.getItem('myobject') || '{}');
  recievedMessage: string = '';

  books = books;

  getBookClass(i: number): string {
    return i % 2 === 0 ? 'even-book' : 'odd-book';
  }

  receiveMessage($event: string) {
    this.recievedMessage = $event;
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }
  }
}
