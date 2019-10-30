// Step 3 - Create the service
import { Injectable } from '@angular/core';
// Step 4 - Import HttpClient
import  { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // Step 5 - set up this constructor
  constructor(private http: HttpClient) { }

  // Step 6 - make the request
  fetchData(subName) {
    
    //this returns an observable
    return this.http.get(`https://www.reddit.com/r/${subName}.json`);
  }
}
