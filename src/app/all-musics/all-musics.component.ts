import { Component, OnInit } from '@angular/core';
import { NewreleasesService } from '../services/newreleases.service';


@Component({
  selector: 'app-all-musics',
  templateUrl: './all-musics.component.html',
  styleUrls: ['./all-musics.component.scss']
})
export class AllMusicsComponent implements OnInit {

  constructor(private service: NewreleasesService) { }

  ngOnInit(): void {
this.service.getNewRealases().
subscribe(data =>{
  console.log(data);
});
  }
}
