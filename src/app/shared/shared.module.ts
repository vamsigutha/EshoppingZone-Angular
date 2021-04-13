import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { ChevronDownComponent } from './components/chevron-down/chevron-down.component';


@NgModule({
  declarations: [LogoComponent,ChevronDownComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[LogoComponent,ChevronDownComponent]
})
export class SharedModule { }
