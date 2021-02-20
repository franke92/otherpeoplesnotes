import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { INotes, INotesItem } from 'src/app/models/notes.model';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {
  /**@internal */
  notes: INotesItem[] = [];

  @ViewChild('scrollDiv', { static: false }) scrollingDiv: ElementRef;
  @ViewChild('opaqueDiv', { static: false }) opaqueDiv: ElementRef;

  constructor(private resource: ResourceService, private renderer: Renderer2) { }


  ngOnInit() {
    //if notes are stored in local store takes from it
    if (!!localStorage.getItem('notes')) {
      this.notes = (JSON.parse(localStorage.getItem('notes')));
    } else {
      this.resource.getNotes().subscribe((notes: INotes) => {

        //order by date
        this.notes = notes.notes.sort((a: INotesItem, b: INotesItem) => { return (Date.parse(a.publishingDate + " " + a.publishingTime)) - (Date.parse(b.publishingDate + " " + b.publishingTime)) });
        //insert notes on localstorage
        localStorage.setItem("notes", JSON.stringify(this.notes));



      })
    }

  }
  ngAfterViewInit() {
    this.scrollToBottom();
  }

  /** Handler of resolution resizing to adapt the dynamics opaque div in top of the notes container*/
  onResize() {
    this.renderer.setStyle(
      this.opaqueDiv.nativeElement,
      'width',
      this.scrollingDiv.nativeElement.offsetWidth - 10 + `px` //-10px as scrollingbar size
    );
  }


  ngAfterViewChecked() {
    /** dynamically adapting the width of the opaque div with the dimension of box */
    this.renderer.setStyle(
      this.opaqueDiv.nativeElement,
      'width',
      this.scrollingDiv.nativeElement.offsetWidth - 10 + `px` //-10px as scrollingbar size
    );

  }

  /** Method for updating the notes list */
  onWriteNotes(e: INotesItem): void {
    this.notes.push(e);

    //update on the localstorage
    localStorage.setItem("notes", JSON.stringify(this.notes));
    this.scrollToBottom();
  }



  /**Handler of scrolling bar */
  scrollToBottom(): void {
    setTimeout(() => {
      this.scrollingDiv.nativeElement.scrollTop = this.scrollingDiv.nativeElement.scrollHeight;
    }, 100)
  }

}
