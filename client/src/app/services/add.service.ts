import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddService{
    constructor(private http: Http ){
        console.log('post service Initialized....')
    }
    getCustomerData(){
        return this.http.get('http://localhost:8000/api/wholeSales/customers')
        .map(res => res.json());
    }
    addCustomerData(newData: string): any{
        console.log(newData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales/customers', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }
    getDealerData(){
        return this.http.get('http://localhost:8000/api/wholeSales/dealers')
        .map(res => res.json());
    }
    addDealerData(newData: string): any{
        console.log(newData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales/dealers', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    }
    getStockData(){
        return this.http.get('http://localhost:8000/api/wholeSales/stocks')
        .map(res => res.json());
    }
    addStockData(newData: string): any{
        console.log(newData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/wholeSales/stocks', JSON.stringify(newData), {headers: headers})
        .map(res => res.json());
    } 
    getSalesData(){
        return this.http.get('http://localhost:8000/api/wholeSales/sales')
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