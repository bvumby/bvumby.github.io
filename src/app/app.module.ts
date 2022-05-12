import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSlickJsModule } from 'ngx-slickjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: 'https://code.jquery.com/jquery-3.4.0.min.js',
        slickJs:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        slickCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        slickThemeCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
