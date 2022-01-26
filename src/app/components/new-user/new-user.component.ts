import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  providers: [UserService],
  selector: 'app-new-user',
  styleUrls: ['./new-user.component.css'],
  templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {
  public newUser : User;

  constructor(
    private userService : UserService
  ) { 
    this.newUser = new User();
  }

  ngOnInit(): void {
  }

  onSubmit(form : any) {
    let newUser = {
      name: this.newUser.name,
      job: this.newUser.job
    }

    this.userService.create(newUser).subscribe({
      next : (res : any) => {
        console.log(res.data);
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log("Request completed!");
        form.reset();
      }
    });
  }

}
