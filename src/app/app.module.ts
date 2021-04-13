import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BlocksModule } from './blocks/blocks.module';
import { AppComponent } from './blocks/root/app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlocksModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule]
})
export class AppModule { }
