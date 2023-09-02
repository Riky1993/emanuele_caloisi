import {Component, HostListener, Input, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-embed-social-widget',
  templateUrl: './embed-social-widget.component.html',
  styleUrls: ['./embed-social-widget.component.scss']
})
export class EmbedSocialWidgetComponent implements OnInit {
  @Input() refId: string;
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
  }

  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
    this.isMobile = false;
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://embedsocial.com/cdn/ht.js';
      d.getElementsByTagName('head')[0].appendChild(js);
    }(document, 'script', 'EmbedSocialHashtagScript'));
  }

  /* ngAfterViewInit() {

     console.log(document.getElementById("es-new"));
     console.log(document.getElementsByClassName("es-free table-cell"));

   }*/
}
