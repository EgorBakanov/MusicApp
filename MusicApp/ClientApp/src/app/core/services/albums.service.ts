import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AlbumForm } from "../models/album-form.model";

@Injectable()
export class AlbumsService {
  private readonly url = "api/albums";

  constructor(private http: HttpClient) {}

  get(id: number): Observable<AlbumForm> {
    return this.http.get<AlbumForm>(this.url + "/" + id);
  }

  create(album: AlbumForm): Observable<AlbumForm> {
    return this.http.post<AlbumForm>(this.url, album);
  }

  update(album: AlbumForm): Observable<AlbumForm> {
    return this.http.put<AlbumForm>(this.url, album);
  }

  delete(id: number): Observable<AlbumForm> {
    return this.http.delete<AlbumForm>(this.url + "/" + id);
  }
}
