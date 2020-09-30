import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Musician } from "../models/musician.model";
import { MusicianForm } from "../models/musician-form.model";

@Injectable()
export class MusiciansService {
  private readonly url = "api/musicians";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Musician[]> {
    return this.http.get<Musician[]>(this.url);
  }

  get(id: number): Observable<MusicianForm> {
    return this.http.get<MusicianForm>(this.url + "/" + id);
  }

  create(musician: MusicianForm): Observable<MusicianForm> {
    return this.http.post<MusicianForm>(this.url, musician);
  }

  update(musician: MusicianForm): Observable<MusicianForm> {
    return this.http.put<MusicianForm>(this.url, musician);
  }

  delete(id: number): Observable<MusicianForm> {
    return this.http.delete<MusicianForm>(this.url + "/" + id);
  }
}
