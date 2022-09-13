import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { enableRipple  } from '@syncfusion/ej2-base';
import { FieldSettingsModel } from '@syncfusion/ej2-angular-navigations';
import { HeaderComponent } from './header/header.component';

enableRipple(true);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'User Portal';
  sidebarExpanded = true;

  private data: { [key: string]: Object }[] = [
    { id: 'parent1', text: 'Events' },
    { id: 'parent2', text: 'Movies' },
    { id: 'parent3', text: 'Directory' }
];

private menuFields: FieldSettingsModel = {
  itemId: 'id',
  text: 'text',
  parentId: 'pId'
};
}
