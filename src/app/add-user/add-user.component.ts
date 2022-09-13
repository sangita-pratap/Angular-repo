import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from  '../user/user.component';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user_name:string = '';
  user_email:string='';
  photo:string='';
  files: any;
  imgSrc = '';
  id:any='';
  isAddMode:boolean=false;
  showEditPIc:boolean=false;
  isPreview:boolean=false;
  userDtl:any;
  ImagePath = 'http://localhost:7001/test/img/';  
  constructor(private http: HttpClient, private route:ActivatedRoute,private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.isAddMode=false; 
    this.showEditPIc=false;      
    this.isPreview=false;  
    
    this.route.params.subscribe((params: Params) => {
      this.id= params['id'];   
       
      if(this.id > 0){ 
        this.isAddMode=true;  
        this.showEditPIc=true;            
        this.getUserData(this.id);     
      } else {
        this.showEditPIc=false; 
      }
    });
   
  }

   onFileChange(event:any){
    if(this.id > 0){      
      this.showEditPIc=false;
      this.isPreview=true;     
    } 
    this.imgSrc=''; 
    this.files = event.target.files[0];   
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.isPreview=true;
      this.imgSrc = event.target.result;
    }
    reader.readAsDataURL(this.files);   
    
  }

  onClickSubmit(data:any) {   
   
    const formData = new FormData();   
    formData.append("user_name", data.user_name);
    formData.append("user_email", data.user_email);     
    formData.append('file', this.files); 

    if(this.id > 0){ 
      formData.append('id', this.id); 
      formData.append("method", 'updateUser');
      this.http.post('http://localhost:7001/test/api.php', formData).subscribe(
        (response) => {        
        this.router.navigate(['/users']);
        },        
        (error) => console.log(error)
      )  
    } else {
      formData.append("method", 'adduser');
      this.http.post('http://localhost:7001/test/api.php', formData).subscribe(
        (response) => { this.router.navigate(['/users']); },
        (error) => console.log(error)
      )

    }

   
 }

//  getUserData11(id:any){
//   const formData = new FormData();
//     // formData.append("method", 'getuser');
//     // formData.append("id", id);

//   this.http.get('http://localhost:7001/test/api.php?method=getuser&id='+id).subscribe(
//     (response) => 
  
//      console.log(response),
//     (error) => console.log(error)
//   )
//  }

 getUserData(id:any): void {
  this.userService.getUserDtl(id)
  .subscribe(response => {    
   
    this.userDtl = response.users;
    this.user_name = this.userDtl[0].user_name;
    this.user_email = this.userDtl[0].user_email;   
    this.photo=this.userDtl[0].photo;   
  },
  (error) => {                              
    console.error('Request failed with error')
  },
  () => {                                  
    console.log('Request completed')     
  });
}

}
