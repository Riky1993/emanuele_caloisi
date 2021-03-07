import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-formazione',
  templateUrl: './formazione.component.html',
  styleUrls: ['./formazione.component.scss']
})
export class FormazioneComponent implements OnInit {
  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
    this.isMobile = false;
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
