import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewreleasesService {

  Auth: HttpHeaders = new HttpHeaders({
    'Authorization':'Bearer VOTRE TOKEN',
  });
  constructor(private http: HttpClient, private router:Router) { }

  getNewRealases(){
   return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=FR&limit=27&offset=5',{headers: this.Auth});
  }
}
