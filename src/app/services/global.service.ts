import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GlobalService {
  private searchUrl: string="";
  private artistUrl: string="";
  private albumUrl: string = "";

  constructor(private http: HttpClient) {
    
  }

  public getQuery(query: string) {
    let token:string = "BQDdgABtpcp8fKLCShXYJDgcB3Ilo5Mkd6TJScCsJMe67XtutO8GktAeHGpYckB-epgG_32eH0VFtJysxX5ZjEAmLnbusLnYrs_J65wVVNkLUUbGsllLfSt4izOLZqK-fD8euRRdHUuH2wPSEU-_SB0CnPoZ0KApVqbDRFuo75l6laRZDOyKMr_ZytPJZ3giPRpjzyJkMKoFsh3KWrbC8sqjB8uO14uwe7w7APRewsubciMcqg_6SWTydoHDc2emZSnt3NSur1nao4jNXBucrh_vHTT9IomnpacfjjpCuoKU";
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
<<<<<<< HEAD
      'Authorization': 'Bearer BQCI4-7U1Uk1TlEc0d1ArXSiFCIJXSR-rEyadc0IW8nEf3tsVW4K-yK8FtTYvJeCl6tJ6Mk9HaycSR3OKlEIZ9qIyPVt8mCVobCXzcQjrPCpaMuuYcJ5AuyKo3SSeso8mnxS2YkvaP70sCztihPCi4xwu1o6J4t76WhTIPhoEymC4tk22mXLbcjy-v2tvXq4H_Ee3iz-wRkgMfAjGY3_SgCxiyKVUOQ2gUxc7CCbQqli0rXBj2PiJgn7QOtBZ-68H3Lj5qTZIt6__tLHYuvFztxiIs0eHuYRFaexOG5wfbKs'
    });
    
    // execute request
=======
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
>>>>>>> 46418e1f111aabeef60f3b1d617ee8a1a0bdd409
    return this.http.get(url, { headers });
  }

  public searchMusic(element:string, type="artist"){
      this.searchUrl = `search?q=${element}&type=${type}&market=FR&limit=10&offset=5`;
      return this.getQuery(this.searchUrl).pipe(map((res:any) => res));
  }

  public getArtist(id:string){
    this.artistUrl = `artists/${id}`;
    return this.getQuery(this.artistUrl).pipe(map((res:any) => res));
  }

  public getAlbums(artistId:string){
    this.albumUrl = `artists/${artistId}/albums`;
    return this.getQuery(this.albumUrl).pipe(map((res:any) => res));
  }
}
