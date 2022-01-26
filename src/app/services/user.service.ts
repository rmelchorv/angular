import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    public url : string;

    constructor(
        public httpClient : HttpClient
    ) {
        this.url = "https://reqres.in/api/users";
    }

    create(user : any) : Observable<any> {
        let params = JSON.stringify(user);
        let httpHeaders = new HttpHeaders().set("content-type", "application/json");

        return this.httpClient.post(this.url, params, { headers : httpHeaders});
    }

    getUserList(page : number) : Observable<any> {
        return this.httpClient.get(this.url + "?page=" + page);
    }
}
