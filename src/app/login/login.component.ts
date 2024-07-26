import { Component } from '@angular/core';
import {
  AmplifyAuthenticatorModule,
  AuthenticatorService,
} from '@aws-amplify/ui-angular';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formFields = {
    signUp: {
      name: {
        order: 1,
      },
      email: {
        order: 2,
      },
      password: {
        order: 3,
      },
      confirm_password: {
        order: 4,
      },
    },
  };
  constructor(public authService: AuthenticatorService) {
    Amplify.configure(awsExports);
  }
  async ngOnInit(): Promise<void> {
    try {
      console.log('username:', this.authService.username);
      console.log('User:', this.authService.user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }

  signOut() {
    this.authService.signOut();
  }
}
