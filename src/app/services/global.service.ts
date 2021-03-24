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
      'Authorization': 'Bearer BQBJ1WaFI8o3lcqFqbFV7jDCKOwJgfL7pJSoGpoxphC0HmWN-VpwvDBwuoaE-ucMAO35owzhqDxtQB0wa5StXBESHqT5XTAiYagT-vEwUpcs05Ze1mppSBgWvCIPCV3ElZrtPxF62zQ-1VEraXxLrjEC7vLxTIiBXfc'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
