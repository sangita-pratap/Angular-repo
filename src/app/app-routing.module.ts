import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {path:'ye', component: AppComponent},
  {path:'users',component:UserComponent},
  {path:'addUser', component:AddUserComponent},
  {path:'edit/:id',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
