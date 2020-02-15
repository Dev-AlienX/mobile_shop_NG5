import { Injectable } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  constructor() { }

  getComponent(componentName: string) {
    if (componentName === 'Demo2Component') {
      return UserLoginComponent;
    } else {
      return '';
    }
  }
}
