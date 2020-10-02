import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Track } from "../models/track.model";
import { TrackForm } from "../models/track-form.model";

@Injectable()
export class TracksService {
  private readonly url = "api/tracks";

  constructor(private http: HttpClient) {}

  getAll(musician?: number, album?: number): Observable<Track[]> {
    var url = this.url;
    if (musician != null && album != null)
      url += `?musician=${musician}&album=${album}`;
    else if (album != null) url += `?album=${album}`;
    else if (musician != null) url += `?musician=${musician}`;

    return this.http.get<Track[]>(url);
  }

  userAction(
    id: number,
    action: { rating?: number; isFavorite?: boolean; isListened?: boolean }
  ): Observable<Track> {
    return this.http.post<Track>(`${this.url}/user-action/${id}`, action);
  }

  get(id: number): Observable<TrackForm> {
    return this.http.get<TrackForm>(this.url + "/" + id);
  }

  create(track: TrackForm): Observable<TrackForm> {
    return this.http.post<TrackForm>(this.url, track);
  }

  update(track: TrackForm): Observable<TrackForm> {
    return this.http.put<TrackForm>(this.url, track);
  }

  delete(id: number): Observable<TrackForm> {
    return this.http.delete<TrackForm>(this.url + "/" + id);
  }
}
