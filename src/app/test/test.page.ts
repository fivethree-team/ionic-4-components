import { Component, OnInit, ComponentRef, ViewChild, TemplateRef } from '@angular/core';
import { OverlayService } from '@fivethree/core';
import { NetworkStatusComponent, DialogService, DialogOptions } from '@fivethree/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  componentRef: ComponentRef<NetworkStatusComponent>;


  constructor(private overlay: OverlayService) { }

  ngOnInit() {
  }

  show() {
    if (!this.componentRef) {
      this.componentRef = this.overlay.createOverlay(NetworkStatusComponent);
      this.componentRef.instance.onClick.subscribe(this.onclick);
    } else {
      this.componentRef.instance.show();

    }
  }
  hide() {
    if (this.componentRef) {
      this.componentRef.instance.hide();
    }
  }

  online() {
    if (this.componentRef) {
      this.componentRef.instance.setStatus('online');
    }
  }
  offline() {
    if (this.componentRef) {
      this.componentRef.instance.setStatus('offline');
    }
  }

  onclick(component: NetworkStatusComponent) {
    console.log(component);
  }






}
