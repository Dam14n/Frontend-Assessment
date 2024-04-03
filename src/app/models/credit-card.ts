export class CreditCard {


    constructor(cardNumber: number, icon: string, value: number) {
        this.cardNumber = cardNumber;
        this.icon = icon;
        this.value = value;
    }

    cardNumber!: number;
    icon!: string;
    value!: number;
}