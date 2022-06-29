import { Component, Directive, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  openQuestion: number;
  serviceCarouselCounter: number = 0;

  scrollContainer = document.querySelector("logo-box") as HTMLElement;

  constructor() { }

  ngOnInit(): void {}


  toggleQuestion(i: number) {
    if (this.openQuestion !== i) {
      this.openQuestion = i
    } else {
      this.openQuestion = -1
    }
  }

  nextServices(){
    if (this.serviceCarouselCounter < 2) {
      this.serviceCarouselCounter = this.serviceCarouselCounter + 1;
      this.countService();  
    }    
  }

  prevServices(){
    if (this.serviceCarouselCounter > 0) {
      this.serviceCarouselCounter = this.serviceCarouselCounter - 1;
      this.countService();    
    }
  }

  countService() {
    let carousel = document.getElementById('servicesCarousel') as HTMLElement;
    if (this.serviceCarouselCounter === 0) {
      carousel.style.transform = "translateX(0%)";
    }
    if (this.serviceCarouselCounter === 1) {
      carousel.style.transform = "translateX(-33.33333333333333%)";
    }
    if (this.serviceCarouselCounter === 2) {
      carousel.style.transform = "translateX(-66.6666666667%)";
    }
  }

  playAbout(){
    console.log('play')
    var playVideo = document.getElementById('HowItWorksVideo') as HTMLVideoElement;
    // var button = document.getElementById('videoAboutButton') as HTMLElement;
    if (playVideo.paused) {
        playVideo.play();
        // button.innerHTML= "pause";
    } else {
      //  button.innerHTML= "play";
        playVideo.pause();
    }    
  }
  
  
}
