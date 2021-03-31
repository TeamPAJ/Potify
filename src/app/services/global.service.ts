import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable() // provide service in module
export class GlobalService {

  constructor(private http: HttpClient) { /*empty*/ }

  public getQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCI4-7U1Uk1TlEc0d1ArXSiFCIJXSR-rEyadc0IW8nEf3tsVW4K-yK8FtTYvJeCl6tJ6Mk9HaycSR3OKlEIZ9qIyPVt8mCVobCXzcQjrPCpaMuuYcJ5AuyKo3SSeso8mnxS2YkvaP70sCztihPCi4xwu1o6J4t76WhTIPhoEymC4tk22mXLbcjy-v2tvXq4H_Ee3iz-wRkgMfAjGY3_SgCxiyKVUOQ2gUxc7CCbQqli0rXBj2PiJgn7QOtBZ-68H3Lj5qTZIt6__tLHYuvFztxiIs0eHuYRFaexOG5wfbKs'
    });
    
    // execute request
    return this.http.get(url, { headers });
  }
}
