import { Component } from '@angular/core';
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "../home/home.component";
import { ExchangeComponent } from "../exchange/exchange.component";
import { SettingsComponent } from "../settings/settings.component";
import { MapComponent } from "../map/map.component";

@Component({
    selector: 'tabs',
    standalone: true,
    imports: [
        MatTabsModule,
        MatIconModule,
        HomeComponent,
        ExchangeComponent,
        SettingsComponent,
        MapComponent
    ],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})
export class TabsComponent {

}