import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { TeamComponent } from './views/team/team.component';
import { SpecialCardComponent } from './components/special-card/special-card.component';
import { SpecialSliderComponent } from './components/special-slider/special-slider.component';
import { AdsCardComponent } from './components/ads-card/ads-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { DownlaodComponent } from './views/downlaod/downlaod.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { DownloadApplicationComponent } from './components/download-application/download-application.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TeamComponent,
    SpecialCardComponent,
    SpecialSliderComponent,
    AdsCardComponent,
    TestimonialCardComponent,
    MemberCardComponent,
    DownlaodComponent,
    PrivacyPolicyComponent,
    DownloadApplicationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SwiperModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
