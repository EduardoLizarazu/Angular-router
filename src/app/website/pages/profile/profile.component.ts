import { Component } from '@angular/core';

import { AuthService } from "./../../../services/auth.service";
import { User } from "./../../../models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user : User | null = null;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user$
      .subscribe(data => {
        this.user = data;
      });
  }

}
