import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articleCarouselCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextNews(){
    if (this.articleCarouselCounter < 2) {
      this.articleCarouselCounter = this.articleCarouselCounter + 1;
      this.countNews();  
    }    
  }
  prevNews(){
    if (this.articleCarouselCounter > 0) {
      this.articleCarouselCounter = this.articleCarouselCounter - 1;
      this.countNews();    
    }
  }
  countNews() {
    let carousel = document.getElementById('articleCarousel') as HTMLElement;
    if (this.articleCarouselCounter === 0) {
      carousel.style.transform = "translateX(0%)";
    }
    if (this.articleCarouselCounter === 1) {
      carousel.style.transform = "translateX(-20%)";
    }
    if (this.articleCarouselCounter === 2) {
      carousel.style.transform = "translateX(-40%)";
    }
  }

}
