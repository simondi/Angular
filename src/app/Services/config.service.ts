import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUserHttp } from '../models/http-models/user-http-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable( )
export class ConfigService {

  configUrl = '';

  constructor(private http: HttpClient) { }

  getConfig() {
    // #enddocregion getConfig_1, getConfig_2, getConfig_3
    return '';
  }
}


