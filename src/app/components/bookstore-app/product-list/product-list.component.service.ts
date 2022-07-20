import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { book } from "./model/book";


@Injectable()

export class BooksService
{
  private Url = ' http://localhost:4200/';

  HttpOptons ={
    Headers: new HttpHeaders({'content-type': 'aplication/jason'})
 
  }

constructor(private http:HttpClient){}


getBook(){

    return this.http.get(this.Url)
}


}

