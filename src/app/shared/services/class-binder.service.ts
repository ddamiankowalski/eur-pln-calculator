import {ElementRef, inject, Injectable} from "@angular/core";

@Injectable()
export class ClassBinder {
  private nativeElement: HTMLElement = inject(ElementRef).nativeElement;

  public bind(className: string): void {
    if(!this.hasClass(className)) {
      this.nativeElement.classList.add(className);
    }
  }

  public unbind(className: string): void {
    this.nativeElement.classList.remove(className);
  }

  private hasClass(className: string): boolean {
    return this.nativeElement.classList.contains(className);
  }
}
