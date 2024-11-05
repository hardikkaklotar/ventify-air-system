import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { debounceTime, map } from 'rxjs/operators';
import { fromEvent, Observable, of } from 'rxjs';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit{
  title = 'VentifyAirSystem';
  showBtn$: Observable<boolean>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.showBtn$ = fromEvent(document, 'scroll').pipe(
        debounceTime(0),
        map(() => window.scrollY > 280),
      );
    } else {
      this.showBtn$ = of(false);
    }
  }

  ngOnInit(): void {
    AOS.init();
  }
  
  pageScrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
}
