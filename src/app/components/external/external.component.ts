import { Component, OnInit } from '@angular/core';
import { ExternalService } from 'src/app/services/external.service';

@Component({
  providers : [ExternalService],
  templateUrl: './external.component.html',
  selector: 'app-external',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {

  constructor(
    public externalService : ExternalService
  ) { }

  ngOnInit(): void {
    
      this.externalService.getUserList().subscribe(
        (res : any) =>  {
          console.log(res.data)
        },
        (error) => {
          console.log(error)
        }
      );
  }

  onSubmit() {

  }

}
