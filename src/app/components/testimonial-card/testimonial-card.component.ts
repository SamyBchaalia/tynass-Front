import { Component, Input, OnInit } from '@angular/core';
import { TestimonialUser } from 'src/app/TestimonialUser';

@Component({
  selector: 'testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css'],
})
export class TestimonialCardComponent implements OnInit {

  @Input('data') data:TestimonialUser;

  constructor() { }

  ngOnInit(): void {
  }

}
