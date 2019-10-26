```html
<fiv-password></fiv-password>
```

```html
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <ion-item>
    <ion-label position="floating">Email</ion-label>
    <ion-input formControlName="email" type="text"></ion-input>
  </ion-item>

  <ion-item *ngIf="email.invalid && email.touched" lines="none">
    <ion-text color="danger" class="form-error">
      Please enter a valid email.
    </ion-text>
  </ion-item>

  <fiv-password
    placeholder="Password"
    formControlName="password"
  ></fiv-password>

  <ion-item *ngIf="password.invalid && password.touched" lines="none">
    <ion-text color="danger" class="form-error">
      Please enter a valid password with atleast 4 characters.
    </ion-text>
  </ion-item>

  <ion-button
    block
    shape="round"
    color="primary"
    type="submit"
    [disabled]="loginForm.invalid"
  >
    Login
  </ion-button>
</form>
```

```typescript
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
export class PasswordExample implements OnInit {
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

  onSubmit() {}

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
```

# fiv-password-input

## Usage 

Import `FivPasswordInputModule` into your page.

```typescript
import { FivPasswordInputModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

import { FivPasswordInputModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FivPasswordInputModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
```