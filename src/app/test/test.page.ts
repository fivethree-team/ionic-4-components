import { Component, OnInit, ComponentRef } from '@angular/core';
import { FivNetworkStatus, FivOverlayService } from '@fivethree/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  componentRef: ComponentRef<FivNetworkStatus>;


  constructor(private overlay: FivOverlayService) { }

  ngOnInit() {
  }

  show() {
    if (!this.componentRef) {
      this.componentRef = this.overlay.createOverlay(FivNetworkStatus);
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

  onclick(component: FivNetworkStatus) {
    console.log(component);
  }






}
