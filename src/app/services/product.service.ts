import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MacbookPro } from '../models/macbook-pro.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getMacbookInfo() {
    return this.http.get<MacbookPro[]>('/assets/data/macbookpro.json');
  }
}
