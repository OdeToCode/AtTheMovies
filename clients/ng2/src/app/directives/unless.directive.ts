import { Directive, Input, TemplateRef, ViewContainerRef } 
    from '@angular/core';

@Directive({ 
    selector: '[unless]' 
})
export class UnlessDirective {
  constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) 
    { 

    }

  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}