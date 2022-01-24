import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  providers : [UsersService],
  templateUrl: './user-list.component.html',
  selector: 'app-users-list',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    public usersService : UsersService
  ) { }

  ngOnInit(): void {
    
      this.usersService.getUserList().subscribe({
        next : (r : any) => {
          console.log(r.data);
        },
        error : (e) => {
          console.log(e);
        },
        complete : () =>  {
          console.log("Request completed!")
        },
      });
  }

  onSubmit() {

  }

}
