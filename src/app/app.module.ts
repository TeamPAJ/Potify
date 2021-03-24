import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleMusicComponent } from './single-music/single-music.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { ActuMusicComponent } from './actu-music/actu-music.component';
=======
import { Navbar } from './navbar/navbar.component';
import { AllMusicsComponent } from './all-musics/all-musics.component'
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
>>>>>>> d071da35ec829c0ae96e2b938a87d1638e5686d6

@NgModule({
  declarations: [
    AppComponent,
    SingleMusicComponent,
<<<<<<< HEAD
    ActuMusicComponent
=======
    Navbar,
    AllMusicsComponent
>>>>>>> d071da35ec829c0ae96e2b938a87d1638e5686d6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
