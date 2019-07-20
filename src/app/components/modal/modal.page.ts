import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FivRouterStateService, FivGallery } from '@fivethree/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss']
})
export class ModalPage implements OnInit {
  picsum: string[] = Array.from(
    new Array(10),
    (x, i) => `https://picsum.photos/500/?${i}`
  );

  constructor(
    public modalController: ModalController,
    private nav: NavController,
    private routing: FivRouterStateService
  ) {}

  ngOnInit() {}

  async presentModal() {
    const m = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123 }
    });

    this.routing.registerNavigateable(m);

    m.present();
  }

  navigate(url: string) {
    this.nav.navigateForward(url);
  }

  register(gallery: FivGallery) {
    this.routing.registerNavigateable(gallery);
  }

  unregister() {
    this.routing.pop();
  }
}
