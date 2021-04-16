import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewreleasesService {

  Auth: HttpHeaders = new HttpHeaders({
    'Authorization':'Bearer BQB-c-i3PVF4CWPBlpgvNAHaA1Xns6PIAp40Wt330HHe8dYhyBeKpk2MjvL5DI04mk4-Hh7X7-DquJuf4Ch0mga6N6KxNSHdil1lo2mpi_75RZGe3Sf2oNJLOKVJIj_c_WJmy4E6M55mnKzimDPDcLLun9XBLiuueNhX8Hy8bQxkJ8UTlAIzXN3-8dvKXKW4qW92b8qiE541KO0aVSrDRpZ7ggWDR52NrfT667vNbp7Bjyvf6Ce1sHa2x0OwuF5V6qbcqSxxBbKKQzeJXZTxMmXcz36AI0vaugcwa6mQbC2v',
  });
  constructor(private http: HttpClient, private router:Router) { }

  getNewRealases(){
   return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=FR&limit=27&offset=5',{headers: this.Auth});
  }
}
