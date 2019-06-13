import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fivPermissions]'
})
export class FivPermissions {
  allowedPermissions: string[] = [];
  uPermissions: string[] = [];

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input() set fivPermissionsUserPermissions(userPermissions: string[]) {
    this.uPermissions = userPermissions || [];
    this.updateView();
  }

  @Input()
  set fivPermissions(allowed: string[]) {
    this.allowedPermissions = allowed || [];
    this.updateView();
  }

  checkPermission(): boolean {
    let show = false;
    this.uPermissions.forEach(role => {
      if (
        this.allowedPermissions.find(
          a => a.toUpperCase() === role.toUpperCase()
        )
      ) {
        show = true;
      }
    });

    return show;
  }

  updateView() {
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
