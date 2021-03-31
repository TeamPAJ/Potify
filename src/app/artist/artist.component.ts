import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumComponent } from '../album/album.component'
import { GlobalService } from '../services/global.service';
import { ActivatedRoute} from '@angular/router'
import { map } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']

})
export class ArtistComponent implements OnInit {
  id:string = "";
  artist:any;
  albums:any;
  constructor(private spotifyService:GlobalService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .pipe(map(params => params['id']))
    .subscribe((id:string) => {
      this.spotifyService.getArtist(id)
        .subscribe(artist => {
          this.artist = artist;
        })
        this.spotifyService.getAlbums(id)
        .subscribe(albums => {
          this.albums = albums.items;
        })
    })
  }

}
