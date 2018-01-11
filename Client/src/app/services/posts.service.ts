import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
  constructor(private http: Http ){
    console.log('post service Initialized....')
  }

  getData(){
    return this.http.get('http://localhost:5000/api/wholeSales')
      .map(res => res.json());
  }
  addData(newData: string): any{
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:5000/api/wholesales', JSON.stringify(newData), {headers: headers})
      .map(res => res.json());
  }

}
