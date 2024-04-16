import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { HeaderInterceptor } from './interceptors/header-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
      multi:true
    }
  ]
  
}
