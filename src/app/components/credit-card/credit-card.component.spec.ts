import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardComponent } from './credit-card.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CreditCard } from "../../models/credit-card";

describe('CreditCardComponent', () => {
    let component: CreditCardComponent;
    let fixture: ComponentFixture<CreditCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CreditCardComponent,
                NoopAnimationsModule
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CreditCardComponent);
        fixture.componentInstance.creditCard = new CreditCard(1234567891011000, "https://cdn2.iconfinder.com/data/icons/bitsies/128/Mastercard-512.png", 100);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});