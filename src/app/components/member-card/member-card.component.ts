import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/team-member';

@Component({
  selector: 'member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input("member") member:any;

  constructor() { }

  ngOnInit(): void {
  }

}
