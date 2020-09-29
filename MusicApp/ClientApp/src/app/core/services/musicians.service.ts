import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Musician } from "../models/musician.model";

@Injectable()
export class MusiciansService {
  private url = "api/musicians";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Musician[]>(this.url);
  }
}
