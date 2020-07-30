import {AfterContentInit, Component, ViewChild} from '@angular/core';
import {NavbarComponent as navmdb} from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'emanuele-caloisi';
  @ViewChild('navbarid')
  private navbaridRef: navmdb;

  constructor() {
  }

  ngAfterContentInit(): void {
    const script = document.getElementsByTagName('nav')[0];
    script.setAttribute('style', 'background: linear-gradient(to right, #FFFFFF, #EF3B36)');
  }

  onClick(): void {
    if (this.navbaridRef.shown) {
      this.navbaridRef.toggle();
    }
  }
}
