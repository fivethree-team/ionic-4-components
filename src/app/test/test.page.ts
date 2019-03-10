import { Component, OnInit, ComponentRef, ViewChild, TemplateRef } from '@angular/core';
import { OverlayService } from '@fivethree/core';
import { NetworkStatusComponent, DialogService, DialogOptions } from '@fivethree/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  off: boolean;
  componentRef: ComponentRef<NetworkStatusComponent>;
  @ViewChild('template') template: TemplateRef<any>;


  constructor(private dialogS: DialogService, private overlay: OverlayService) { }

  ngOnInit() {
  }


  onClick() {
    this.componentRef = this.overlay.createOverlay(NetworkStatusComponent);
  }

  toggle() {
    this.componentRef.instance.toggleOff();
  }

  dialog() {
    const options: DialogOptions = {
      title: 'title',
      subtitle: 'subtitle',
      duration: 2700,
      verticalAlign: 'bottom',
      backdrop: true
    };
    this.dialogS.openDialog('Cooler Content', options);
  }

}
