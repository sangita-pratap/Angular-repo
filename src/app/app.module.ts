import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { EdituserComponent } from './edituser/edituser.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { DeleteUserComponent } from './delete-user/delete-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    HeaderComponent,
    FooterComponent,
    EdituserComponent,
    SidebarComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
