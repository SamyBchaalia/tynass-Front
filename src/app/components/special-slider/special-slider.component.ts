import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'special-slider',
  templateUrl: './special-slider.component.html',
  styleUrls: ['./special-slider.component.css']
})
export class SpecialSliderComponent implements OnInit {

  @ViewChild('previous') previous:ElementRef;
  @ViewChild('next') next:ElementRef;

  data=[
    {background_image:"../../../assets/achievments/TynassIT-Afric'up.jpg",logo_image:"../../../assets/achievments/africup.png",text:"Was selected as one of the best 3 startups in the international competition Afric’up In The E-commerce mobile Application.",alt:"Startup TynassIT honored for winning 3rd place in afric'up competition in tunisia"},
    {background_image:"../../../assets/achievments/startup-act.jpg",logo_image:"../../../assets/achievments/act-logo.png",text:"Tynass IT Achieved Startup Act label In November 2020.",alt:"Tynass IT Achieved Startup Act label In November 2020."},
    {background_image:"../../../assets/achievments/Tynas-IT-Minister-of-Cultural-Affaires.jpg",logo_image:"../../../assets/achievments/logo-culture-4.png",text:"We were honored by the ex Minister of cultural affaires Mr Mohamed Zine El Abidine for winning the Afric'up competition to be the youngest team that ever had the Trophy of Ibn Khaldun in Tunisia.",alt:"Tynass IT was honored by the ex minister of cultural affaires Mohamed Zine El Abidine to be the youngest team to have the trophy of ibn khaldun"},
    {background_image:"../../../assets/achievments/Tynass-IT-Co founders.JPG",logo_image:"../../../assets/achievments/ost.png",text:"We are pround to be one of the 9 finalists in the OST pre incubator program from a total of 121 other startups.",alt:"Tynass IT was one of the finalist in the OST pre incubator program from 121 startups"},
    {background_image:"../../../assets/achievments/Tynass-IT-Cité-de-la-culture.jpg",logo_image:"../../../assets/achievments/ticdce2.png",text:"We were selected for the prize choice of people in our last demo day in the Tunis International Center for Digital Cultural Economy.",alt:"Tynass IT was selected as the best startup in Tunis International Center for Digital Cultural Economy demo day."},
    {background_image:"../../../assets/achievments/TynassIT-Ryeda.jpg",logo_image:"../../../assets/achievments/riyeda.png",text:"Tynass IT achieved the prize of the most innovative startup by Innov'i and The Jury's Favourite Prize in Riyeda challenge 2021.",alt:"Tynass IT won favourite startup prize by INNOV'I in Ryeda competition."},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  slide(direction:String){
    switch(direction){
      case 'previous':
        this.previous.nativeElement.click();
        break;
      case 'next':
        this.next.nativeElement.click();
        break;
    }
  }

}
