import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
    this.isMobile = false;
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
