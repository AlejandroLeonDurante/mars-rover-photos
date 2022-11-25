import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  endpoint: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
  apiKey: string = 'DEMO_KEY';
  constructor(private http: HttpClient) { }

  getPhotos(sol: number) {
    var params = new HttpParams()
    .set("sol", sol)
    .set("page", 1)
    .set("api_key", this.apiKey);
    const options = {params: params}

    return this.http.get<Photo[]>(this.endpoint, options);
  }
}
