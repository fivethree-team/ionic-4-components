import {
  Injectable, TemplateRef, Type, ComponentFactoryResolver,
  ApplicationRef, Injector, EmbeddedViewRef, ComponentRef
} from '@angular/core';
export type NgContent<T> = TemplateRef<T> | Type<T>;


@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  createOverlay<T>(component: Type<T>, content?: TemplateRef<any>): ComponentRef<T> {
    const resolvedContent = this.resolveNgContent(content);
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector, resolvedContent);


    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return componentRef;
  }


  private resolveNgContent<T>(content: NgContent<T>) {
    if (!content) { return; }
    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [viewRef.rootNodes];
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }
}
