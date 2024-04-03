import { Component, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatIconButton, MatMiniFabButton } from "@angular/material/button";

export class ButtonConfiguration {


    constructor(icon: string, value: string) {
        this.icon = icon;
        this.value = value;
    }

    icon: string;
    value: string;
}

@Component({
    selector: 'user-interactions',
    standalone: true,
    imports: [
        MatIconModule,
        MatIconButton,
        MatMiniFabButton
    ],
    templateUrl: './user-interactions.component.html',
    styleUrl: './user-interactions.component.scss'
})
export class UserInteractionsComponent implements OnInit {

    buttons: ButtonConfiguration[] = []

    ngOnInit(): void {
        this.buttons = [
            new ButtonConfiguration("outbox", "Send"),
            new ButtonConfiguration("archive", "Receive"),
            new ButtonConfiguration("account_balance", "Utilities"),
            new ButtonConfiguration("account_balance", "Stats"),
        ]
    }

}