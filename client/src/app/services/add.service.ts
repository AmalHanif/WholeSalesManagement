import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddService{
    constructor(private http: Http ){
        console.log('post service Initialized....')
    }
    addCustomerData(newData: string): any{
        console.log(newData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales/customers', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }

    addDealerData(newData: string): any{
        console.log(newData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales/dealers', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }
    addStockData(newData: string): any{
        console.log(newData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales/stocks', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }
    addSalesData(newData: string): any{
        console.log(newData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales/sales', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }
}