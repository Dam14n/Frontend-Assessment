import { Component, OnInit } from '@angular/core';
import { CreditCardComponent } from "../credit-card/credit-card.component";
import { UserInteractionsComponent } from "../user-interactions/user-interactions.component";
import { TransactionHistoryComponent } from "../transaction-history/transaction-history.component";
import { CreditCard } from "../../models/credit-card";

@Component({
    selector: 'home',
    standalone: true,
    imports: [
        CreditCardComponent,
        UserInteractionsComponent,
        TransactionHistoryComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    creditCards: CreditCard[] = [];

    ngOnInit(): void {

        this.creditCards = [
            new CreditCard(1234567891011000, "https://cdn2.iconfinder.com/data/icons/bitsies/128/Mastercard-512.png", this.getRandomInt(1000)),
            new CreditCard(1234567891019999, "https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Visa-512.png", this.getRandomInt(1000))
        ]
    }


    getRandomInt(max: number): number {
        return Math.random() * max;
    }


}