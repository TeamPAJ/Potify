import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleMusicComponent } from './single-music/single-music.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActuMusicComponent } from './actu-music/actu-music.component';
import { Navbar } from './navbar/navbar.component';

import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { GlobalService } from './services/global.service';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

const routes : Routes = [
  {
    path: 'accueil', component: ActuMusicComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'artist/:id', component: ArtistComponent
  },
];
>>>>>>> 46418e1f111aabeef60f3b1d617ee8a1a0bdd409

@NgModule({
  declarations: [
    AppComponent,
    SingleMusicComponent,
    ActuMusicComponent,
    Navbar,
<<<<<<< HEAD
    AllMusicsComponent
=======
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
>>>>>>> 46418e1f111aabeef60f3b1d617ee8a1a0bdd409
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
<<<<<<< HEAD
    MatCardModule,
    
=======
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    GlobalService
>>>>>>> 46418e1f111aabeef60f3b1d617ee8a1a0bdd409
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
