import { Component } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  componentToShow: string = 'welcome';

  constructor(private service: AxiosService) {}

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    this.service
      .request('POST', '/login', {
        login: input.login,
        password: input.password,
      })
      .then((response) => {
        this.service.setAuthToken(response.data.token);
        this.componentToShow = 'messages';
      });
  }

  onRegister(input: any): void {
    this.service
      .request('POST', '/register', {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password,
      })
      .then((response) => {
        this.service.setAuthToken(response.data.token);
        this.componentToShow = 'messages';
      });
  }
}
