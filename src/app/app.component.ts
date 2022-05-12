import { Component } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'carousel-app';

  faArrowCircleLeft = faChevronCircleLeft;
  faArrowCircleRight = faChevronCircleRight;
  faChevronRight = faChevronRight;

  carouselData = [
    {
      title: 'Get a device',
      url: 'https://picsum.photos/id/944/900/500',
    },
    {
      title: 'Home internet',
      url: 'https://picsum.photos/id/1011/900/500',
    },
    {
      title: 'Mobile internet',
      url: 'https://picsum.photos/id/984/900/500',
    },
    {
      title: 'Add a phone-line',
      url: 'https://picsum.photos/id/944/900/500',
    },
    {
      title: 'Upgrade',
      url: 'https://picsum.photos/id/1011/900/500',
    },
  ];

  config: Slick.Config = {
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 3,
    infinite: true,
    speed: 1000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1,
        },
      },
    ],
  };
}
