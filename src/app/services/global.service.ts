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
    let token:string = "BQB-c-i3PVF4CWPBlpgvNAHaA1Xns6PIAp40Wt330HHe8dYhyBeKpk2MjvL5DI04mk4-Hh7X7-DquJuf4Ch0mga6N6KxNSHdil1lo2mpi_75RZGe3Sf2oNJLOKVJIj_c_WJmy4E6M55mnKzimDPDcLLun9XBLiuueNhX8Hy8bQxkJ8UTlAIzXN3-8dvKXKW4qW92b8qiE541KO0aVSrDRpZ7ggWDR52NrfT667vNbp7Bjyvf6Ce1sHa2x0OwuF5V6qbcqSxxBbKKQzeJXZTxMmXcz36AI0vaugcwa6mQbC2v";
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
