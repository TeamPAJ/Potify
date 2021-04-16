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
    let token:string = "VOTRE TOKEN";
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
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
