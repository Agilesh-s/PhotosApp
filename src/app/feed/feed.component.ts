import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private myApi:ApiS ) {
    this.fetchData()
   }

  fetchData = ()=>{
    this.myApi.datas().subscribe(
      (data) =>{
        this.feedData = data
      }
    )
  }

  feedData:any = {}

  ngOnInit(): void {
  }

}
