import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    constructor(private http: Http ){
        console.log('post service Initialized....')
    }

    getData(){
        return this.http.get('http://localhost:8000/api/wholeSales/users')
        .map(res => res.json());
    }
    addData(newData: string): any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }
    // userData(userInfo: string): any{
    //   var headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.post('http://localhost:8080/api/wholeSales', JSON.stringify(userInfo), {headers: headers})
    //   .map(res => res.json());
    // }
}
