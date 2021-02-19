import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {


  @Input() path:String;
  
  constructor() { }

  ngOnInit() {
  }

}
