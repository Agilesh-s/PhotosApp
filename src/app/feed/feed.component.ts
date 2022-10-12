import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private myApi:ServerService ) {
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
