import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleMusicComponent } from './single-music/single-music.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActuMusicComponent } from './actu-music/actu-music.component';
import { Navbar } from './navbar/navbar.component';
import { AllMusicsComponent } from './all-musics/all-musics.component'
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SingleMusicComponent,
    ActuMusicComponent,
    Navbar,
    AllMusicsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
