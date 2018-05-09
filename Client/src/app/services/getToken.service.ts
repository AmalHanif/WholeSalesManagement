import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetTokenService{
  constructor(private http: Http ){
    console.log('get service Initialized....')
  }
  getData(){
    return this.http.get('http://localhost:8080/api/cards')
      .map(res => res.json());
  }

  getToken(response: string): any{
    console.log("token data response in service")
      console.log(response)
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/api/cards', JSON.stringify(response), {headers: headers})
      .map(res => res.json());
  }
  addData(newData: string): any{
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/api/customers', JSON.stringify(newData), {headers: headers})
      .map(res => res.json());
  }
}
