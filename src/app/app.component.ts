import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {NavbarComponent as navmdb} from 'angular-bootstrap-md';
import {ImageInBase64} from '../assets/imageInBase64';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'emanuele-caloisi';
  @ViewChild('navbarid')
  private navbaridRef: navmdb;
  public chiSono;
  public ecLogo;

  constructor(private base64Img: ImageInBase64) {
  }

  ngAfterContentInit(): void {
    const script = document.getElementsByTagName('nav')[0];
    script.setAttribute('style', 'background: linear-gradient(to right, #FFFFFF, #EF3B36)');
  }

  ngOnInit() {
    this.chiSono = this.base64Img.chiSono;
    this.ecLogo = this.base64Img.getECLogo;
  }

  onClick(): void {
    if (this.navbaridRef.shown) {
      this.navbaridRef.toggle();
    }
  }
}
