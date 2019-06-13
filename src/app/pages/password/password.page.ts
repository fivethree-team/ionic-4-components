import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss']
})
export class PasswordPage implements OnInit {
  show = true;

  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]]
    });
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  onSubmit() {}

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
