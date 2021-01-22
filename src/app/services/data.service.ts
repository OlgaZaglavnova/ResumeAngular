import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'
import * as myData  from '../../assets/myData.json';

@Injectable()
export class DataService{
    // data = {
    // };
    // constructor(private http: HttpClient){}

    // getData():any{
    //     // return myData.default
    //     this.http.get('../../assets/myData.json').subscribe(data => {
    //         this.data = data;
    //         console.log('DataService data=', this.data)
    //         return this.data;
    //     })
    // }

    getData():any{
        console.log('MyData=', myData);
        let tmpData:any = myData;
        return tmpData.default;
    }  
}