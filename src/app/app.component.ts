import {Component, ViewChild} from '@angular/core';
import { NavbarComponent as navmdb} from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emanuele-caloisi';
  @ViewChild('navbarid')
  private navbaridRef: navmdb;

  onClick(): void {
    if (this.navbaridRef.shown) {
      this.navbaridRef.toggle();
    }
  }
}
