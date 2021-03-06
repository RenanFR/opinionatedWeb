import { Component, OnInit } from '@angular/core';
import { switchMap, map, filter } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private titleHandler: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ){
    translate.setDefaultLang('pt');
    translate.use('pt');
  }
  
  ngOnInit(): void {
    this.router.events
      .pipe(filter((routeEvent) => routeEvent instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((routeItem) => {
        while (routeItem.firstChild) {
          routeItem = routeItem.firstChild;
          return routeItem;
        }
      }))
      .pipe(switchMap((currentRoute) => currentRoute.data))
      .subscribe((dataPropertiesFromRoute) => this.titleHandler.setTitle(dataPropertiesFromRoute.title));
  }
  
}
