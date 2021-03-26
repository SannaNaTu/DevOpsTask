import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieNews} from '../finnkino/movie-news';
import {map} from 'rxjs/operators';
import {parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string;
  private movieObservable: Observable<any>;
  newsCount: number;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://www.finnkino.fi/xml/news/';
  }

  getData(): Observable<any> {
    // return of ('testing');
    // return of ([new MovieNews ("title","2019-11-12","lead","www.finnkino.fi")]);

    return this.httpClient.get(this.url, {responseType: 'text'})
        .pipe(map(response => {

        let newsData: [] = [];
        // console.log('getXMLData.....'+ response);
        // let newsData:MovieNews[]=[];
        // tslint:disable-next-line:only-arrow-functions
        parseString(response, {trim: true, explicitArray: false, mergeAttrs: true}, function(err, result) {
          newsData = result.News.NewsArticle;
        })
        ;
        this.newsCount = newsData.length;
        console.log('************' + this.newsCount);

        return newsData;
      }));


  }
}
