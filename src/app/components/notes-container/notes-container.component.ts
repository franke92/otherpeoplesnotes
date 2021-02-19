import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('opaqueDiv', { static: false }) opaqueDiv: ElementRef;

  constructor(private resource: ResourceService, private renderer : Renderer2) { }


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

  /** Manage on resize device event and adapt the dynamics opaque div */
  onResize() {
    this.renderer.setStyle(
      this.opaqueDiv.nativeElement, 
      'width', 
      this.scrollingDiv.nativeElement.offsetWidth-10+`px` //-10px as scrollingbar size
    );
  }


  ngAfterViewChecked(){
      /** dynamically adapting the width of the opaque div with the dimension of box */
    this.renderer.setStyle(
      this.opaqueDiv.nativeElement, 
      'width', 
      this.scrollingDiv.nativeElement.offsetWidth-10+`px` //-10px as scrollingbar size
    );
    
    
    
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
