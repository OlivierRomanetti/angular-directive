import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]',
})
export class CreditCardDirective {
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    // We remove spaces
    let trimmed = input.value.replace(/\s+/g, '');
    // We only want 16 digits
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    // We want group of 4 digits separate by space
    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    input.value = numbers.join(' ');
  }
}
