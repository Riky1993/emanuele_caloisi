import {AfterContentInit, Component, OnInit} from '@angular/core';
declare global {
  interface Window {
    Calendly: any;
  }
}

@Component({
  selector: 'app-generic-prezzi',
  templateUrl: './generic-prezzi.component.html',
  styleUrls: ['./generic-prezzi.component.scss']
})
export class GenericPrezziComponent implements OnInit, AfterContentInit {
  // public mailForm: FormGroup;
  public calendlyUrl = 'https://calendly.com/emanuelecaloisi/30min';

  constructor() { }

  ngOnInit(): void {
    // this.mailForm = new FormGroup({
    //   nome: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   telefono: new FormControl('', []),
    //   messaggio: new FormControl('', [Validators.required]),
    // })
  }

  public onSubmit() {
    // if (this.mailForm.invalid) {
    //   console.error('FORM INVALIDO');
    // } else {
    //   console.log('MAIL INVIATA')
    // }
  }

  ngAfterContentInit(): void {
    window.Calendly.initInlineWidget({
      url: this.calendlyUrl,
      parentElement: document.querySelector('.calendly-inline-widget'),
      prefill: {}
    });
  }
}
