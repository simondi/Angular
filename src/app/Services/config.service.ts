import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUserHttp } from '../models/http-models/user-http-interface';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { IConfig } from '../models/config.interface';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = `${environment.apiUrl}config.json`;

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<IConfig> {
    return this._http.get<IConfig>(this.configUrl);
  }
}


