import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {
    public url : string;

    constructor(
        public httpClient : HttpClient
    ) {
        this.url = "https://reqres.in/api/users?page=2";
    }

    getUserList() {
        return this.httpClient.get(this.url);
    }

}
