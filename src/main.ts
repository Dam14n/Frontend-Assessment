import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TabsComponent } from './app/components/tabs/tabs.component';

bootstrapApplication(TabsComponent, appConfig)
  .catch((err) => console.error(err));