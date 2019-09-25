import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip',
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');

  @Input()
  set appTooltip(value) {
    this.tooltipElement.textContent = value;
  }

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
    console.log(this.tooltipElement.classList);
  }
  show() {
    this.tooltipElement.classList.add('tooltip--active');
    console.log(this.tooltipElement.classList);
  }
}
