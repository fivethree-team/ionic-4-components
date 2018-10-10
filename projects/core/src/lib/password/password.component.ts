import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PasswordComponent),
  multi: true
};

export const CUSTOM_INPUT_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PasswordComponent),
  multi: true,
};

@Component({
  selector: 'fiv-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    CUSTOM_INPUT_VALIDATOR
  ],
})
export class PasswordComponent implements ControlValueAccessor, OnInit, Validator {

  @Input() hideIcon = 'eye-off';
  @Input() placeholder: string;
  @Input() position: 'floating' | 'inline' | 'fixed' | 'stacked' = 'floating';
  @Input() show: boolean;
  @Input() showIcon = 'eye';
  @Input() clearOnEdit = false;

  private innerValue: any = '';
  private onTouchedCallback: () => {};
  private onChangeCallback: (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  toggleShowPassword() {
    this.show = !this.show;
  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  validate(control: AbstractControl): ValidationErrors {
    return null;
  }

}
