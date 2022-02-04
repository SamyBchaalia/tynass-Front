import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.css']
})
export class SpecialCardComponent implements OnInit {

  @Input("data") data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
