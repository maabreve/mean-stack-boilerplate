import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent, FooterComponent, LogoComponent } from '.';
import { CartModule } from '../shop/cart';

const COMPONENTS = [
  HeaderComponent,
    FooterComponent,
    LogoComponent ];

@NgModule({
  imports: [
    MaterialModule,
    CartModule,
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class LayoutModule { }
