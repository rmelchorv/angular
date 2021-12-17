import { Component } from "@angular/core";

@Component({
    selector : "my-first",
    templateUrl : "./my-first.component.html"
})
export class MyFirst {
    public tittle : string;

    constructor() {
        this.tittle = "My First-Component";
    }
}
