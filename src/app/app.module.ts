import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgParticlesModule } from "ng-particles";
import { ModalPhotoComponent } from './modal-photo/modal-photo.component';
import { BackgroundParticlesComponent } from './background-particles/background-particles.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPhotoComponent,
    BackgroundParticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgParticlesModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
