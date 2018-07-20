import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class AdventuresProvider {

  url: string = "https://firebase.lyfx.co/adventures-lab";

  constructor(private api: ApiProvider) {}

  getAdventures() {
    return this.api.get(this.url);
  }

}
