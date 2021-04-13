import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { AppComponent } from './root/app.component';
import { SharedModule } from '@shared/shared.module';
import { HeaderModule } from '../features/header/header.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    SharedModule,
    HeaderModule
  ],
  exports:[AppComponent]
  
})
export class BlocksModule {  }
