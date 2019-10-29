import {
  Injectable,
  TemplateRef,
  Type,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Renderer2,
  RendererFactory2,
  ViewContainerRef
} from '@angular/core';
export type NgContent<T> = TemplateRef<T> | Type<T>;

@Injectable({
  providedIn: 'root'
})
export class FivOverlayService {
  private renderer: Renderer2;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    rendererFactory: RendererFactory2,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  createOverlay<T>(
    view: ViewContainerRef,
    component: Type<T>,
    content?: NgContent<T>
  ): ComponentRef<T> {
    const resolvedContent = this.resolveNgContent(view, content);
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector, resolvedContent);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return componentRef;
  }

  private resolveNgContent<T>(
    viewContainerRef: ViewContainerRef,
    content: NgContent<T>
  ) {
    if (!content) {
      return;
    }
    if (content instanceof TemplateRef) {
      const viewRef = viewContainerRef.createEmbeddedView(content);
      return [viewRef.rootNodes];
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      content
    );
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }
}
