import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fiv-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  @Input() hideIcon: string = 'eye-off';
  @Input() placeholder: string;
  @Input() position: 'floating' | 'inline' | 'fixed' | 'stacked' = 'floating';
  @Input() show: boolean;
  @Input() showIcon: string = 'eye';

  constructor() { }

  ngOnInit() {
  }

  toggleShowPassword() {
    this.show = !this.show;
  }

}
