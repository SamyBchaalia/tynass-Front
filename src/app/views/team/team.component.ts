import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fade } from 'src/app/animations';
// import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { TeamMember } from '../../team-member';

declare var UIkit:any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations:[
    fade
  ]
  // animations:[
  //   fadeInOnEnterAnimation(),
  //   fadeOutOnLeaveAnimation()
  // ]
})
export class TeamComponent implements OnInit {

  @ViewChild('nextButton') nextButton:ElementRef;

  // team:Array<TeamMember> = [
  //   {name:"Karim Hermi",role:"Chief executive officer",picturePath:"../../assets/karim.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus exercitationem excepturi facere sapiente minus nostrum non perspiciatis facilis laudantium possimus, cupiditate officia? Optio soluta voluptate officia ad repudiandae. Explicabo.",linkedIn:"#",message:"#"},
  //   {name:"Samy Ben Chaalia",role:"Chief executive officer",picturePath:"../../assets/samy.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus exercitationem excepturi facere sapiente minus nostrum non perspiciatis facilis laudantium possimus, cupiditate officia? Optio soluta voluptate officia ad repudiandae. Explicabo.",linkedIn:"#",message:"#"},
  //   {name:"Anwer Baccar",role:"Developer",picturePath:"../../assets/anwer.jpg",description:"perspiciatis facilis laudantium possimus, cupiditate officia? Optio soluta voluptate officia ad repudiandae. Explicabo.",linkedIn:"#",message:"#"},
  //   {name:"Monta Sghaier",role:"Developer",picturePath:"../../assets/monta.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus exercitationem excepturi facere sapiente minus nostrum non perspiciatis facilis laudantium possimus, cupiditate officia? Optio soluta voluptate officia ad repudiandae. Explicabo.",linkedIn:"#",message:"#"},
  // ]
  animState:boolean = true;

  ind = 0;

  constructor(private rd:Renderer2) { }

  ngOnInit(): void {
  }

  // nextMember(){
  //   if(this.ind+1 == this.team.length){
  //     this.ind = 0;
  //   }else{
  //     this.ind++;
  //     this.nextButton.nativeElement.click();
  //   }
  // }

  animStart(event: AnimationEvent) {
    console.log('Animation Started', event);
  }
  
  animDone(event: AnimationEvent) {
    console.log('Animation Ended', event);
    this.animState = !this.animState;
  }

}
