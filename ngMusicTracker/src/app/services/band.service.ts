import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  private baseUrl = 'http://localhost:8082/api/bands'
  constructor(
    private  http: HttpClient
  ) { }
}
