import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slideInLeft,slideInRight,fade } from 'src/app/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { BrainStorming } from 'src/app/brainstormingClass';
import { TeamMember } from 'src/app/team-member';
import { TestimonialUser } from 'src/app/TestimonialUser';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[slideInLeft,slideInRight,fade]
})
export class MainComponent implements OnInit,AfterViewInit {

  loading:boolean = true;

  registration:any = 0;
  userForm:FormGroup;
  config:SwiperOptions={
    direction:"vertical",
    slidesPerView:2,
    setWrapperSize:true,
    pagination:true,
    loop:true,
    autoplay:true,
    breakpoints:{
      0:{
        slidesPerView:1
      },
      501:{
        slidesPerView:2
      }
    }
  }

  brainstormingConfig:SwiperOptions={
    direction:"horizontal",
    slidesPerView:3,
    setWrapperSize:true,
    spaceBetween:-25,
    pagination:true,
    grabCursor:true,
    loop:true,
    autoplay:true,
    breakpoints:{
      0:{
        slidesPerView:1
      },
      810:{
        slidesPerView:2
      },
      1000:{
        slidesPerView:3
      },
      1920:{
        slidesPerView:3
      }
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    // autoplayTimeout:1000,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    // stagePadding:50,
    
    autoplaySpeed:1000,
    navText: ['<', '>'],
    items:3,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      }
      // ,
      // 940: {
      //   items: 4
      // }
    },
    // nav: true
  }

 @ViewChild('slider1_PreviousButton') slider1_PreviousButton:ElementRef;
 @ViewChild('slider1_NextButton') slider1_NextButton:ElementRef;

 @ViewChild('slider2_PreviousButton') slider2_PreviousButton:ElementRef;
 @ViewChild('slider2_NextButton') slider2_NextButton:ElementRef;

  trusts=[
    "../../../assets/trusts/A.S.M-logo.png",
    "../../../assets/trusts/logo-africup-e1563055818126.png",
    "../../../assets/trusts/open-startup-tunisia-logo.png",
    "../../../assets/trusts/Startup-act-logo.png",
    "../../../assets/trusts/Tunis-international-center-for-dgital-cultural-economy-logo.png",
  ]

  slider2=[
    {img:"../../../assets/TynasIT-Company.jpg",alt:"Tynass IT photoshooting with Open Startup Pre Incubator in Vermeg Tunisia"},
    {img:"../../../assets/TynassIT-Tunis-International-Center-for-Digital-Cultural-Economy.jpg",alt:"Tynass IT at the Tunis International Center for Digital Cultural Economy"},
    {img:"../../../assets/img1.jpg",alt:""},
    {img:"../../../assets/img2.jpg",alt:""},
    {img:"../../../assets/img3.jpg",alt:""},
    {img:"../../../assets/TynassIT-Tourathna-CEO.jpg",alt:"Tynass IT with the CEO of Tourathna at the Tunis International Center for Digital Cultural Economy"},
    {img:"../../../assets/TynassIT-Office.jpg",alt:"Tynass IT office at the Tunis International Center for Digitat Cultural Economy"},
    

  ]
  teamArray:Array<TeamMember>=[
    {img:"../../../assets/team/Karim-Hermi-TynassIT.jpg",name:"Karim Hermi",role:"Chief executive officer",alt:"Karim Hermi CEO and Co-Founder for the startup tynassIT in tunisia."},
    {img:"../../../assets/team/Khalil-Ben-Ali-TynassIT.jpg",name:"Khalil Ben Ali",role:"Chief Technology Officer",alt:"khalil ben ali CTO and Co-Founder for the startup TynassIT in tunisia."},
    {img:"../../../assets/team/Mohamd-Hsin-Trabelsi-TynassIT.jpg",name:"Mohamd Hsin Trabelsi",role:"Chief marketing officer",alt:"Samy Ben Chaalia a developer and Co-Founder for the startup TynassIT in tunisia."},
    {img:"../../../assets/team/Mahdy-Ben-Rezg-TynassIT.jpg",name:"Mahdy Ben Rezg",role:"3D Artist",alt:"Mahdy Ben Rezg Co-Founder and 3D artist for the startup TynassIT in tunisia."},
    {img:"../../../assets/team/Samy-Ben-Chaalia-TynassIT.jpg",name:"Samy Ben Chaalia",role:"Developer",alt:"Samy Ben Chaalia a developer and Co-Founder for the startup TynassIT in tunisia."},
    {img:"../../../assets/team/Anwer-Baccar-TynassIT.jpg",name:"Anwer Baccar",role:"Developer",alt:"Anwer baccar a mobile developer for the startup TynassIT in tunisia."},
    {img:"../../../assets/team/Montassar-Sghaier-TynassIT.jpg",name:"Montassar Sghaier",role:"Developer",alt:"Montassar Sghaier a developer for the startup TynassIT in tunisia."},
    {img:"../../../assets/team/Youssef-ben-Abdallah-TynassIT.jpg",name:"Youssef ben Abdallah",role:"3D Artist",alt:"Youssef Ben Abdallah 3D artist for the startup TynassIT in tunisia"},
  ]

  brainstorming:Array<BrainStorming>=[
    {img:"../../../assets/brainstorming/1.png",title:"Augmented reality",description:"Some of our applications will be using augmented reality as a tool to help the consumer have the best experience possible.",extra:["Apps based on ARcore and ARkit"]},
    {img:"../../../assets/brainstorming/2.png",title:"Trend design",description:"In our application we offer a user friendly and simple interface with an appealing visual design and user experience.",extra:["Brand development","Wireframing And Concept"]},
    {img:"../../../assets/brainstorming/3.png",title:"AI",description:"Our products will be using an AI assisted interface to collect data about our users needs for us to be able to meet their demands anytime and anywhere",extra:["Intelligent characters"]},
  ]

  testimonial:Array<TestimonialUser>=[
    {img:"../../../assets/testimonial/Fatma-Mhiri-OST.jpg",person:"Fatma Mhiri",role:"Open Startup",text:"For me Tynass will disrupt the cultural tourism, it will make the experience more fun and sexy. The gamification and the interactive experience will allow more inclusiveness especially within the youngest population. Besides I can testimony of the commitment and the passion of you guy have shown during the 5 months of OST!"},
    {img:"../../../assets/testimonial/Chams-Eddine-Temtem-OST-Coach.jpg",person:"Chams Eddine Temtem",role:"PDM at Open Startup",text:"I remember the first time I met the team behind TynassIT, I could easily see the commitment and passion for what they do, that allowed them to build a Startup with very great potential, working on a problem that others neglected, and offering travelers a way to really dive into history. I know this Startup and these gifted individuals are going place!"},
    {img:"../../../assets/testimonial/Saif-Jedidi-CBS-Mentor.jpg",person:"Saif Jedidi",role:"CBS Mentor",text:"It was awesome working with the Tynass team! I loved their attention to detail, their vision, and most importantly, their focus on the customer! I’m really excited to see what’s next for them in their journey"},
  ]

  constructor(private fb:FormBuilder,private userService:UserService) { 
  }

  ngAfterViewInit(): void {
    this.loading = false;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullname:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      email:['',[
        Validators.required,
        Validators.email
      ]],
      offer:['',[
        Validators.required,
      ]],
    })    
  }

  clickSlider1(direction:String){
    switch(direction){
      case 'previous':
        this.slider1_PreviousButton.nativeElement.click();
        break;
      case 'next':
        this.slider1_NextButton.nativeElement.click();
        break;
    }
  }

  clickSlider2(direction:String){
    switch(direction){
      case 'previous':
        this.slider2_PreviousButton.nativeElement.click();
        break;
      case 'next':
        this.slider2_NextButton.nativeElement.click();
        break;
    }
  }

  nextStep(){
    this.registration+=1;
  }

  goTo(element:HTMLElement){
    element.scrollIntoView();
  }

  subscription(){    
    this.userForm.markAllAsTouched();
    if(this.userForm.invalid){
      console.log("invalid");
    }else{
    this.userService.sendEmail(this.userForm);
      this.nextStep();
    }
  }

  get fullname(){
    return this.userForm.get('fullname');
  }

  get email(){
    return this.userForm.get('email');
  }

  get offer(){
    return this.userForm.get('offer');
  }

}
