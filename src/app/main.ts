import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
import { enableProdMode } from "@angular/core";

const pageUrl = window.location.href.toLowerCase();

if (pageUrl.indexOf("localhost") === -1) {
  enableProdMode();
  alert('prod mode enabled');
} else {
  alert('dev mode left');
}
