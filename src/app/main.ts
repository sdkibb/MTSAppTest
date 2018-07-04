import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
import { enableProdMode } from "@angular/core";

const pageUrl = window.location.href.toLowerCase();

//### the 60002 check is temporary, Ionic view app uses localhost address with 60002 port.
if (pageUrl.indexOf("localhost") === -1 && pageUrl.indexOf("60002") === -1) {
  enableProdMode();
  alert('prod mode enabled');
} else {
  alert('dev mode left: ' + pageUrl);

}
