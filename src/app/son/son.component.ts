import { Component, EventEmitter, Input, Output } from '@angular/core';
import books from '../data/books';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {
  // This message will be passed from the father component
  @Input() getSon?: string;

  @Output() messageEventFromSon = new EventEmitter<string>();
  @Output() incrementFromSon = new EventEmitter<void>();
  @Output() decrementFromSon = new EventEmitter<void>();

  message: string = '';


  sendMessage() {

    this.messageEventFromSon.emit(this.message);
    const myobject = [
      {
        book: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988,
        pages: 208

      },
      {
        message: this.message
      }
    ];
    const toLocalObj = localStorage.setItem('myobject', JSON.stringify(myobject));
    console.log('SonComponent -> message:', this.message);

     return toLocalObj;
  }

   increment() {
     this.incrementFromSon.emit();
   }

   decrement() {
      this.decrementFromSon.emit();
   }
}
