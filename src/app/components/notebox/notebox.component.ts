import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
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


  @ViewChild('textdiv', { static: false }) textDiv: ElementRef;
  @ViewChild('textdiv2', { static: false }) textDivInput: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    //handle lines and character calculation of the specific div rendered (the left one or the right one)

    //the left one
    if (this.textDiv) {
      var message_lines = document.getElementById('textdiv');
      var divheight = this.textDiv.nativeElement.offsetHeight;
      var divWidth = this.textDiv.nativeElement.offsetWidth;


      var amount = this.countLinesAndCharacters(message_lines, divheight, divWidth);
      if (amount.lines > 3) {
        //trim 
        this.textTruncated = this.data.text.substring(0, amount.amount_of_characters_in_a_line * 3);
        this.lastText = this.data.text.substring(amount.amount_of_characters_in_a_line * 3)
      }
      this.cdRef.detectChanges(); //to force change detection run otherwise an error in console of angular changed espression after it has been checked
    }

    //the right one -> decommented following if the right one can be truncated
    if (this.textDivInput) {
      var message_lines = document.getElementById('textdiv2');
      var divheight = this.textDivInput.nativeElement.offsetHeight;
      var divWidth = this.textDivInput.nativeElement.offsetWidth;


      var amount = this.countLinesAndCharacters(message_lines, divheight, divWidth);
      if (amount.lines > 3) {
        //trim 
        this.textTruncated = this.data.text.substring(0, amount.amount_of_characters_in_a_line * 3);
        this.lastText = this.data.text.substring(amount.amount_of_characters_in_a_line * 3)
        this.cdRef.detectChanges();
      }
    }

  }
  /**Handler of read more CTA */
  readMoreText(): void {
    this.readMoreClicked = true;
  }


  //** DOM reading for calculation of lines and amount of characters */
  countLinesAndCharacters(target: any, divheight: any, divWidth: any): any {
    var style: any = window.getComputedStyle(target, null);
    var fontsize: any = parseInt(style.getPropertyValue('font-size'));
    var paddingWidth: any = parseInt(style.getPropertyValue('padding-left')) + parseInt(style.getPropertyValue('padding-right'))
    var amount_of_characters_in_a_line: any = Math.ceil((divWidth - paddingWidth) / (fontsize / 2.3)); // 2.3 font-constant

    var line_height: any = parseInt(style.getPropertyValue("line-height"));
    var lines: any = Math.ceil(divheight / line_height);

    return { lines: lines - 2, amount_of_characters_in_a_line }; // 2 to remove padding
  }
}
