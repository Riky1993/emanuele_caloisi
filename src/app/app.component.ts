import {Component, OnInit, ViewChild} from '@angular/core';
import { NavbarComponent as navmdb} from 'angular-bootstrap-md';
import {ImageInBase64} from '../assets/imageInBase64';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'emanuele-caloisi';
  @ViewChild('navbarid')
  private navbaridRef: navmdb;
  public chiSono;

  constructor(private base64Img: ImageInBase64) {}

  ngOnInit() {
    this.chiSono = this.base64Img.chiSono;
  }

  onClick(): void {
    if (this.navbaridRef.shown) {
      this.navbaridRef.toggle();
    }
  }
}
