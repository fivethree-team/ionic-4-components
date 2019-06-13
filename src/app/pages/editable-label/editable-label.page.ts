import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.page.html',
  styleUrls: ['./editable-label.page.scss']
})
export class EditableLabelPage implements OnInit {
  editing: boolean;
  model: string;

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.setupForm();
  }

  ngOnInit() {}

  setupForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  onSubmit() {}
}
