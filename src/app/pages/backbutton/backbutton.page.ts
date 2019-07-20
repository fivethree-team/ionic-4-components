import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalPage } from '@components/modal/modal.page';
import { FivRouterStateService, FivGallery } from '@fivethree/core';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.page.html',
  styleUrls: ['./backbutton.page.scss']
})
export class BackButtonPage implements OnInit {
  picsum: string[] = Array.from(
    new Array(10),
    (x, i) => `https://picsum.photos/500/?${i}`
  );

  constructor(
    public routing: FivRouterStateService,
    private modal: ModalController
  ) {}

  ngOnInit() {}

  async presentModal() {
    const m = await this.modal.create({
      component: ModalPage,
      componentProps: { value: 123 }
    });

    this.routing.registerNavigateable(m);

    m.present();
  }

  register(gallery: FivGallery) {
    this.routing.registerNavigateable(gallery);
  }

  unregister() {
    this.routing.pop();
  }
}
