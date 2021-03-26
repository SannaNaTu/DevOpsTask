import {Component, OnInit} from '@angular/core';
import {FeedBackService} from '../service/feed-back.service';

import {FeedBackItem} from './feed-back-item';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  feedBackItemArray: Array<FeedBackItem>;

  constructor(private fData: FeedBackService) {
    this.feedBackItemArray = this.fData.getFeedBack();
  }

  ngOnInit() {
    // let feedBackItemArray = new array<feedBackItemList>
    // this.feedBackItemList.push(new FeedbackItem("Kysymys"),
    //                         new FeedbackItem("Kysymys"));
  }

  onInputChange(feedBackEvent: any, fbItem: FeedBackItem) {
    console.log(feedBackEvent.value)
    console.log(fbItem.question)
    fbItem.setAnswer(feedBackEvent.value);
  }

// onInputChange(event:any,feedback:Feedback)
}
