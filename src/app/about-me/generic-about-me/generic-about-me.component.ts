import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-generic-about-me',
  templateUrl: './generic-about-me.component.html',
  styleUrls: ['./generic-about-me.component.scss']
})
export class GenericAboutMeComponent implements OnInit {
  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
    this.isMobile = false;
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
