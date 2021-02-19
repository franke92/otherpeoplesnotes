import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {
  /**@internal */
  notes: any = [];
  @ViewChild('scrollDiv', { static: false }) scrollingDiv: ElementRef;

  constructor(private resource: ResourceService) { }


  ngOnInit() {

    this.resource.getNotes().subscribe((notes) => {

      //order by date
      this.notes = notes.notes.sort((a, b) => { return (Date.parse(a.publishingDate + " " + a.publishingTime)) - (Date.parse(b.publishingDate + " " + b.publishingTime)) });
      if (!!localStorage.getItem('notes')) {
        this.notes = (JSON.parse(localStorage.getItem('notes')));
      }


    })
  }
  ngAfterViewInit() {
    this.scrollToBottom();

  }

  onWriteNotes(e: any): void {
    console.log("EVENT", e),
      this.notes.push(e);
    localStorage.setItem("notes", JSON.stringify(this.notes));
    this.scrollToBottom();
  }


  scrollToBottom(): void {
    setTimeout(() => {
      this.scrollingDiv.nativeElement.scrollTop = this.scrollingDiv.nativeElement.scrollHeight;
    }, 100)
  }

}
