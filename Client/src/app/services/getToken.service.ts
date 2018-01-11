import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetTokenService{
  constructor(private http: Http ){
    console.log('get service Initialized....')
  }
  getData(){
    return this.http.get('http://localhost:8080/api/customers')
      .map(res => res.json());
  }

  postToken(token: string): any{
      console.log(token)
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/api/customers', JSON.stringify(token), {headers: headers})
      .map(res => res.json());
  }
  getToken(token: string): any{
      console.log(token)
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/api/customers', JSON.stringify(token), {headers: headers})
      .map(res => res.json());
  }
}
