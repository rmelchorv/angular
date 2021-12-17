import { Component } from "@angular/core";

@Component({
    selector : "my-first",
    templateUrl : "./my-first.component.html"
})
export class MyFirstComponent {
    public tittle : string;

    constructor() {
        this.tittle = "My First-Component";
    }
}
