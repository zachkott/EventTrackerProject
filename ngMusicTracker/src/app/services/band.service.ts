import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Band } from '../models/band';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  private baseUrl = 'http://localhost:8082/api/bands'
  private homeUrl =  'http://localhost:8082/#'
  constructor(
    private  http: HttpClient
  ) { }


home(){
  return this.homeUrl;
}

index(): Observable<Band[]> {
  return this.http.get<Band[]>(this.baseUrl).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error( 'TodoService.create(): error creating Todo: ' + err )
      );
    })
  );
}

create(band: Band): Observable<Band> {
  return this.http.post<Band>(this.baseUrl, band).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error( 'BandService.create(): error creating Artist: ' + err )
      );
    })
  );
}

update(updatedArtist: Band) {


  return this.http.put<Band>(this.baseUrl + '/' + updatedArtist.id, updatedArtist).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error( 'BandService.update(): error updating Band: ' + err )
      );
    })
  );

}


destroy(id: number){
  return this.http.delete<void>(this.baseUrl + '/' + id).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error( 'BandService.delete(): error deleting Artist: ' + err )
      );
    })
  );

}
}



