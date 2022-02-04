import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";


export const slideInRight =  trigger('slideInRight', [
  transition(':enter', [
    style({transform: 'translateX(100%)'}),
    animate('500ms', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
      style({opacity: '1'}),
      animate('500ms', style({opacity: '0'}))
  ])
])

export const slideInLeft =  trigger('slideInLeft', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('1s linear', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
      style({opacity: '1'}),
      animate('1s linear', style({opacity: '0'}))
  ])
])

export const slideInOut =  trigger('slideInOut', [
    transition(':enter', [
      style({opacity: '0'}),
      animate('1s linear', style({opacity: '1'}))
    ]),
    transition(':leave', [
        style({opacity: '1'}),
        animate('1s linear', style({opacity: '0'}))
    ])
])

export const fade =  trigger('fade', [
  transition(':enter', [
    style({opacity: '0'}),
    animate('0.25s', style({opacity: '1'}))
  ]),
  transition(':leave', [
      style({opacity: '1'}),
      animate('0.25s', style({opacity: '0'}))
  ])
])

