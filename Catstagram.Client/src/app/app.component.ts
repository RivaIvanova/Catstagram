import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'catstagram';

  constructor() {}

  public get user(): any {
    return { displayName: 'Test' };
  }

  public get isAuthenticated(): boolean {
    return false;
  }

  public login() {}

  public logout() {}
}
