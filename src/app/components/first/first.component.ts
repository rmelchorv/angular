import { Component } from "@angular/core";

@Component({
    selector : "app-first",
    templateUrl : "./first.component.html"
})
export class FirstComponent {
    public tittle : string;

    constructor() {
        this.tittle = "First Component";
    }
}
