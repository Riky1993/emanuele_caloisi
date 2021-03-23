import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-generic-news',
  templateUrl: './generic-news.component.html',
  styleUrls: ['./generic-news.component.scss']
})
export class GenericNewsComponent implements OnInit {
  public isMobile: boolean;
  public dynamicWidth = 500;

  constructor(public deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

  /*ngDoCheck(): void {
    console.log(document.getElementById('riga').offsetWidth);
  }*/

}
