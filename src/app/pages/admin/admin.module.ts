import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ declarations: [], imports: [CommonModule,
        AdminRoutingModule,
        RouterOutlet,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AdminModule { }
