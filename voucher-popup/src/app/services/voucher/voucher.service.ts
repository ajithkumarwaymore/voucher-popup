import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor(private http: HttpClient) { }

  getVoucher():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1005')
  }
  postVoucher(params:any):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts',params)
  }
}
