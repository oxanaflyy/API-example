import { Component, OnInit } from '@angular/core';
// Step 7 - import our service into the component that will use the methods
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  redditPosts: any [] = [];

// Step 8 - set up the constructor
  constructor(private searchService: SearchService) { }


  search(subName: string): void {
    // Step 9 -  call the service's method that makes the request
    
    this.searchService
    .fetchData(subName)
    // Step 10 - subscribe to the observable to get the response (data from request)
    .subscribe(response => {
      console.log(response);
      this.redditPosts = response.data.children;
    }, error => {
      console.log('oh, no. ${error}');
    });
  }

  ngOnInit() {
    
  }

}
