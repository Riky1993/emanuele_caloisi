import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-generic-prezzi',
  templateUrl: './generic-prezzi.component.html',
  styleUrls: ['./generic-prezzi.component.scss']
})
export class GenericPrezziComponent implements OnInit {
  // public mailForm: FormGroup;

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
}
