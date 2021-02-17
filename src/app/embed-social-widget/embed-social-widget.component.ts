import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-embed-social-widget',
  templateUrl: './embed-social-widget.component.html',
  styleUrls: ['./embed-social-widget.component.scss']
})
export class EmbedSocialWidgetComponent implements OnInit {
  @Input() refId: string;

  constructor() {
  }

  ngOnInit(): void {
    (function(d, s, id) {
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

}
