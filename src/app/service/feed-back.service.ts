import {Injectable} from '@angular/core';
import {FeedBackItem} from '../feed-back/feed-back-item';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {


  feedBackItemArray: Array<FeedBackItem>;

  constructor() {
    this.feedBackItemArray =
      [new FeedBackItem('Kysymys 1'),
        new FeedBackItem('Kysymys 2'),
        new FeedBackItem('Kysymys 3'),
      ];
  }

  getFeedBack(): Array<FeedBackItem> {
    return this.feedBackItemArray;
  }
}
