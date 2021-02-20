import { Component, Input, OnInit } from '@angular/core';
import { INotesItem } from 'src/app/models/notes.model';

@Component({
  selector: 'notebox',
  templateUrl: './notebox.component.html',
  styleUrls: ['./notebox.component.css']
})
export class NoteboxComponent implements OnInit {
  @Input() data: INotesItem;
  @Input() isInput: boolean = false; // if false is a text received from notes static json file else is text written by the user

  /**@internal */
  readMoreClicked: boolean = false;

  /**@internal */
  textTruncated: String = '';

  /**@internal */
  lastText: String = '';

  constructor() { }

  ngOnInit() {

    //truncate the text if too much long and activate the read more CTA
    if (this.data.text.length > 226) {
      this.textTruncated = this.data.text.substring(0, 221);
      this.lastText = this.data.text.substring(221)

    }
  }
  /**Handler of read more CTA */
  readMoreText(): void {
    this.readMoreClicked = true;
  }

}
