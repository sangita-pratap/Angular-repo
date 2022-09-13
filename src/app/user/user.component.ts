import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList1: User[] = [];
  userList:any;
  first = 0;
  rows = 50;
  ImagePath: string;
  p: number = 1;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  active = 1;

  constructor(private userService: UserService) {
    this.ImagePath = 'http://localhost:7001/test/img/'
  }

  ngOnInit(): void {  
    this.fetchGetData();   
  }

  onTableDataChange(event:any): void {
    this.page = event;
    this.fetchGetData();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchGetData();
  }

  fetchGetData(): void {
    this.userService.getUsers()
    .subscribe(response => {    
      console.log(response)
     
      this.userList = response.users;
      console.log(this.userList[0].photo);
    },
    (error) => {                              //error() callback
      console.error('Request failed with error')
    },
    () => {                                   //complete() callback
      console.log('Request completed')      //This is actually not needed 
    });
  }

  deleteEmployee(i:any,id:any)
{
  console.log(id);
  this.userList.splice(i,1);
}


}
