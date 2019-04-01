import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { isPrefixNartawakValidator } from '../model/Password.validatror';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  constructor(fb: FormBuilder) {
    // Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]); 1
    this.passwordCtrl = fb.control('', [isPrefixNartawakValidator]);
    // Création du groupe (aka le formulaire)
    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }
  handleClear() {
    this.emailCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }
  handleSubmit() {
    console.log(this.userForm.value);
  }
  ngOnInit() {
  }
}