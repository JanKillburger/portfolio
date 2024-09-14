import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withInMemoryScrolling(
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }
    )),
    provideAnimations()
  ]
})
  .catch(err => console.error(err));
