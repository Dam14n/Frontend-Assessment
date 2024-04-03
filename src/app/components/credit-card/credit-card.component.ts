import { Component, Input } from '@angular/core';
import { CreditCard } from "../../models/credit-card";
import { CurrencyPipe } from "@angular/common";
import { CreditCardNumberPipe } from "../../pipes/credit-card-number.pipe";

@Component({
  selector: 'credit-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    CreditCardNumberPipe
  ],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {
  @Input() creditCard!: CreditCard;
}