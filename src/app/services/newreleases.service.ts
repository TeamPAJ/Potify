import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewreleasesService {

  Auth: HttpHeaders = new HttpHeaders({
    'Authorization':'Bearer BQAgpr33ZSaWq023P1GcuZIEuMATGD7nMdiKXAjxErW19-CI3EQGamjtbSzzgD0UsN7kJT9_AMBTu7ifmgZzRU9b_qmwHkk2JTLwT6Avs9-ZI_zLwXEO834Dtom7mVT175RHDGxC6nBmgZh0AAPDeJFGz7-H6GvsPrz6JUcnjH9kdoaotX-ocP-EzvcLeHpVG4rSSbnhMT6Kvqv_QmE7eMTVF98I94ahGXFnbo4qsQSXVm9M6wb407hr2ODv5dCi761zlnOh-29AwvnyXjT3sfyvtRaYxvKMS3PRAFxsfsbf',
  });
  constructor(private http: HttpClient) { }

  getNewRealases(){
   return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=FR&limit=27&offset=5',{headers: this.Auth});
  }
}
