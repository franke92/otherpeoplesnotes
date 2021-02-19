import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  /**@internal */
  inputText: String;
  note: any;

  @Output() notesWritten: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onPublish(): void {
    if (this.inputText && this.inputText != '') {
      let today = new Date();
      this.note = {
        name: "You",
        surname: "",
        publishingDate: today.toISOString().slice(0, 10),
        publishingTime: today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2),
        photo: "assets/img/avatar6.png",
        text: JSON.parse(JSON.stringify(this.inputText)),
        isInput: true
      }
      this.notesWritten.emit(this.note);
      this.inputText = ''
    }

  }

}
