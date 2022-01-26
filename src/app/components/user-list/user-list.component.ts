import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  providers : [UserService],
  selector: 'app-users-list',
  styleUrls: ['./user-list.component.css'],
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  public users = [];
  public page : number;

  constructor(
    private activatedRoute : ActivatedRoute,
    private userService : UserService
  ) {
    this.page = 1;
  }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.params["page"] !== undefined)
      this.page = parseInt(
        this.activatedRoute.snapshot.params["page"]
      );

    this.userService.getUserList(this.page).subscribe({
      next : (res : any) => {
        this.users = this.users.concat(res.data);
        console.log(this.users);
      },
      error : (err) => {
        console.log(err);
      },
      complete : () =>  {
        console.log("Request completed!")
      },
    });

    window.addEventListener("load", () => {
      if (this.users.length > 0) {
        this.showUser(0);
      }
    });
  }

  onClick(index : number) {
    this.showUser(index);
  }

  showUser(index : number) {
    document.getElementById("avatar")?.setAttribute(
      "src", this.users[index]["avatar"]);
    (<HTMLElement>document.getElementById("name")).innerHTML = 
      this.users[index]["first_name"] + " " + this.users[index]["last_name"];
    (<HTMLElement>document.getElementById("email")).innerHTML = this.users[index]["email"];
    (<HTMLElement>document.getElementById("user_id")).innerHTML = 
      "User ID: " + this.users[index]["id"];
  }

}
