import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'notebox',
  templateUrl: './notebox.component.html',
  styleUrls: ['./notebox.component.css']
})
export class NoteboxComponent implements OnInit {
  @Input() data:any;
  @Input() isInput:boolean = false;

  /**@internal */
  readMoreClicked:boolean=false;

  /**@internal */
  textTruncated:String = '';
  
  /**@internal */
  lastText:String = '';

  constructor() { }
  
  ngOnInit() {
    console.log("data",this.data)
    if(this.data.text.length > 226){
      this.textTruncated = this.data.text.substring(0,221);
      this.lastText = this.data.text.substring(221)

    }
  }

  readMoreText():void{
    this.readMoreClicked=true;
  }

}
