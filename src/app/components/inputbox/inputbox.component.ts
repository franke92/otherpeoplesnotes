import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { INotesItem } from 'src/app/models/notes.model';


@Component({
  selector: 'inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  /**@internal */
  inputText: String;

   /**@internal */
  note: INotesItem;

  @Output() notesWritten: EventEmitter<INotesItem> = new EventEmitter<INotesItem>();

  constructor() { }

  ngOnInit() {
  }


  /** Compose the note item and emit to parent the result */
  onPublish(): void {
    if (this.inputText && this.inputText != '') {
      
      let today = new Date();
      //create result object
      this.note = {
        name: "You",
        surname: "",
        publishingDate: today.toISOString().slice(0, 10),
        publishingTime: today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2),
        photo: "assets/img/avatar1.png",
        text: JSON.parse(JSON.stringify(this.inputText)),
        isInput: true
      }
      //emit result to parent
      this.notesWritten.emit(this.note);

      //clear input box
      this.inputText = '';
    }

  }

}
