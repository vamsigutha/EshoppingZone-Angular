import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BlocksModule } from './blocks/blocks.module';
import { AppComponent } from './blocks/root/app.component';
import {HttpClientModule} from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from './auth/auth.module';
import {ReactiveFormsModule} from "@angular/forms";
import { CartModule } from './features/cart/cart.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlocksModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    ReactiveFormsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule,CoreModule]
})
export class AppModule { }
