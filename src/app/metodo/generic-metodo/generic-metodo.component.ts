import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-generic-metodo',
  templateUrl: './generic-metodo.component.html',
  styleUrls: ['./generic-metodo.component.scss']
})
export class GenericMetodoComponent implements OnInit {
  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

}
