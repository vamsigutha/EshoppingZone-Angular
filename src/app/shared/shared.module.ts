import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { ChevronDownComponent } from './components/chevron-down/chevron-down.component';
import { ProductThumbnailCardComponent } from './components/product-thumbnail-card/product-thumbnail-card.component';


@NgModule({
  declarations: [LogoComponent,ChevronDownComponent,ProductThumbnailCardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[LogoComponent,ChevronDownComponent,ProductThumbnailCardComponent]
})
export class SharedModule { }
