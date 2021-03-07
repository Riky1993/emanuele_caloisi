import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
