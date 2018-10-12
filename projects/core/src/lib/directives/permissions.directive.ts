import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fivPermissions]'
})
export class PermissionsDirective {

  allowedPermissions: string[] = [];
  uPermissions: string[] = [];

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {
    console.log('constructor Permissionsdirective');
  }

  @Input() set fivPermissionsUserPermissions(userPermissions: string[]) {
    console.log('userPermissions', userPermissions);
    this.uPermissions = userPermissions || [];
    this.updateView();

  }

  @Input()
  set fivPermissions(allowed: string[]) {
    console.log('fivPermissions', allowed);
    this.allowedPermissions = allowed || [];
    this.updateView();
  }

  checkPermission(): boolean {
    let show = false;
    this.uPermissions.forEach(role => {
      if (this.allowedPermissions.find(a => a.toUpperCase() === role.toUpperCase())) {
        show = true;
      }
    });
    console.log('has role permission', this.uPermissions, this.allowedPermissions);
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
