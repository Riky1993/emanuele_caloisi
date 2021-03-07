import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-facebook-reviews',
  templateUrl: './facebook-reviews.component.html',
  styleUrls: ['./facebook-reviews.component.scss']
})
export class FacebookReviewsComponent implements OnInit {
  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
    this.isMobile = false;
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }
}
