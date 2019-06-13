import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Platforms } from '@ionic/core';

@Directive({
  selector: '[fivIf]'
})
export class FivIfPlatform {
  constructor(
    private platform: Platform,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input()
  set fivIf(platforms: Platforms[]) {
    let show = true;
    platforms.forEach(p => {
      if (!this.platform.is(p)) {
        show = false;
      }
    });

    if (show) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
