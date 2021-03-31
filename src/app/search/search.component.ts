import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
//import {Artist} from '../../Artist';
import { ArtistComponent } from '../artist/artist.component';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [GlobalService],
})


export class SearchComponent implements OnInit {
  searchStr:string;
  searchRes:any;

  constructor(private spotifyService:GlobalService) {
    this.searchStr = "";
    //this.searchRes = new Artist();
   }

  ngOnInit(): void {
  }

  searchMusic(){
    //console.log(this.searchStr);
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
