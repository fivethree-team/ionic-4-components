import { Component, Input, forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Color } from '@ionic/core';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FivPasswordInput),
  multi: true
};

@Component({
  selector: 'fiv-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FivPasswordInput implements ControlValueAccessor {
  @Input() clearOnEdit = false;

  @Input() color: Color;

  @HostBinding('class.password-disabled')
  @Input()
  disabled = false;

  @Input() hideIcon = 'eye';

  @Input() lines?: 'full' | 'inset' | 'none';

  @Input() placeholder: string;

  @Input() position: 'floating' | 'inline' | 'fixed' | 'stacked' = 'floating';

  @Input() show: boolean;

  @Input() showIcon = 'eye-off';

  private _passwordValue = '';
  private onTouchedCallback: () => {};
  private onChangeCallback: (_: any) => {};

  constructor() {}

  toggleShowPassword() {
    this.show = !this.show;
  }

  get passwordValue(): any {
    return this._passwordValue;
  }

  set passwordValue(v: any) {
    if (v !== this._passwordValue) {
      this._passwordValue = v;
      if (this.onChangeCallback) {
        this.onChangeCallback(this._passwordValue);
      }
    }
  }

  writeValue(value: any) {
    if (value !== undefined && value !== this._passwordValue) {
      this._passwordValue = value;
    }
  }

  blur() {
    if (this.onTouchedCallback) {
      this.onTouchedCallback();
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
