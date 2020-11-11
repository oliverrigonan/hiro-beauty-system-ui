// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routing
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [LandingComponent, HomePageComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LandingModule { }
