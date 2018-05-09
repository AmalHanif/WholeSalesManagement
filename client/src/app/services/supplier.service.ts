import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SupplierService{
    constructor(private http: Http ){
        console.log('post service Initialized....')
    }

    getSupplierData(){
        return this.http.get('http://localhost:8080/api/wholeSales')
        .map(res => res.json());
    }
    addData(newData: string): any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/wholeSales', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }
    // userData(userInfo: string): any{
    //   var headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.post('http://localhost:8080/api/wholeSales', JSON.stringify(userInfo), {headers: headers})
    //   .map(res => res.json());
    // }
    openCheckout(token: string): any{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/wholeSales', JSON.stringify(token), {headers: headers})
        .map(res => res.json());
    }
}