import {
  Component,
  Input,
  HostBinding,
  forwardRef,
  AfterContentInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { IonInput } from '@ionic/angular';
import { timer } from 'rxjs';

export const CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FivEditableLabel),
  multi: true
};

@Component({
  selector: 'fiv-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss'],
  animations: [
    trigger('titleAnim', [
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(-20%)' }),
        animate(
          '175ms ease-out',
          style({ opacity: '1', transform: 'translateY(0)' })
        )
      ])
    ])
  ],
  providers: [CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR]
})
export class FivEditableLabel
  implements AfterContentInit, ControlValueAccessor {
  @Input()
  get editing(): boolean {
    return this._editing;
  }
  set editing(edit: boolean) {
    this._editing = edit;
  }

  @Input() value: string;
  @Input() type: 'title' | 'label' = 'label';
  @HostBinding('class.editable-label-disabled')
  @Input()
  disabled = false;

  @Output() blur = new EventEmitter();

  @ViewChild('input', { static: false }) input: IonInput;

  private _editing: boolean;
  private _value: string;
  private onTouchedCallback: () => {};
  private onChangeCallback: (_: any) => {};

  constructor() {}

  ngAfterContentInit() {
    timer(0).subscribe(() => (this.internalValue = this.value));
  }

  set internalValue(value: string) {
    if (value !== this._value) {
      this._value = value;
      if (this.onChangeCallback) {
        this.onChangeCallback(this._value);
      }
    }
  }
  get internalValue(): string {
    return this._value;
  }

  edit() {
    this.editing = true;
  }

  stopEdit() {
    this.editing = false;
  }

  onEscapeClick() {
    this.internalValue = this.value;
    this.stopEdit();
  }

  onEnterClick() {
    this.value = this.internalValue;
    this.stopEdit();
  }

  writeValue(value: any) {
    if (value !== undefined && value !== this._value) {
      this._value = value;
    }
  }

  onBlur() {
    this.blur.emit();
    this.stopEdit();
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

  titleAnimDone(event) {
    if (event.toState === 'void') {
      this.input.setFocus();
    }
  }
}
