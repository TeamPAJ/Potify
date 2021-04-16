import { Component, OnInit } from '@angular/core';
import { NewreleasesService } from '../services/newreleases.service';
import { GlobalService } from '../services/global.service';


@Component({
  selector: 'app-actu-music',
  templateUrl: './actu-music.component.html',
  styleUrls: ['./actu-music.component.scss']
})

export class ActuMusicComponent implements OnInit {

InfoSons: any[] = [];


  constructor(private service: NewreleasesService) { }

  ngOnInit(): void {
    this.service.getNewRealases().
      subscribe((data:any) =>{
        console.log(data.albums.items);
        this.InfoSons = data.albums.items;
  });
  
 

  }
}
