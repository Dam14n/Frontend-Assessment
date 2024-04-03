import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { CurrencyPipe, DatePipe } from "@angular/common";
import { PrettyDatePipe } from "../../pipes/pretty-date.pipe";
import moment from "moment";

export enum TransactionType {
    IN,
    OUT
}

export class Transaction {

    constructor(icon: string, name: string, date: Date, value: number, transactionType: TransactionType) {
        this.icon = icon;
        this.name = name;
        this.date = date;
        this.value = value;
        this.transactionType = transactionType;
    }

    icon: string;
    name: string;
    date: Date;
    value: number;
    transactionType: TransactionType;
}

export class TransactionGroup {


    constructor(transactions: Transaction[], date: Date) {
        this.transactions = transactions;
        this.date = date;
    }

    transactions: Transaction[];
    date: Date;
}

@Component({
    selector: 'transaction-history',
    standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        DatePipe,
        CurrencyPipe,
        PrettyDatePipe
    ],
    templateUrl: './transaction-history.component.html',
    styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent implements OnInit {
    transactionGroups: TransactionGroup[] = [];

    ngOnInit(): void {
        const transactions = [
            new Transaction("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png", "Netflix", new Date(), this.getRandomInt(100), TransactionType.IN),
            new Transaction("https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/starbucks-64.png", "Starbucks", new Date(), this.getRandomInt(100), TransactionType.OUT)
        ];
        const transactions1 = [
            new Transaction("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png", "Netflix", new Date(), this.getRandomInt(100), TransactionType.IN),
            new Transaction("https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/starbucks-64.png", "Starbucks", new Date(), this.getRandomInt(100), TransactionType.OUT)
        ]
        const transactions2 = [
            new Transaction("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png", "Netflix", new Date(), this.getRandomInt(100), TransactionType.IN),
            new Transaction("https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/starbucks-64.png", "Starbucks", new Date(), this.getRandomInt(100), TransactionType.OUT)
        ]
        const transactions3 = [
            new Transaction("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png", "Netflix", new Date(), this.getRandomInt(100), TransactionType.IN),
            new Transaction("https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/starbucks-64.png", "Starbucks", new Date(), this.getRandomInt(100), TransactionType.OUT)
        ]
        this.transactionGroups = [
            new TransactionGroup(transactions, moment().toDate()),
            new TransactionGroup(transactions1, moment().subtract(1, "days").toDate()),
            new TransactionGroup(transactions2, moment().subtract(2, "days").toDate()),
            new TransactionGroup(transactions3, moment().subtract(5, "days").toDate())
        ]
    }

    getRandomInt(max: number): number {
        return Math.random() * max;
    }

    incomingTransaction(transactionType: TransactionType): boolean {
        return TransactionType.IN === transactionType;
    }
}