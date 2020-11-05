import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';

// User interface
export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  UserProfile: User;
  UserList: any;
  constructor(
    public authService: AuthService
  ) {
    // this.authService.profileUser().subscribe((data: any) => {
    //   this.UserProfile = data;
    // })
  }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.authService.userlist().subscribe((data: any) => {
      this.UserList = data;
      console.log(this.UserList);
    },
    error => {
      console.log(error);
  });
}

  edit(id) {
    this.authService.userEdit(id).subscribe((data: any) => {
      console.log(data);
      this.getUser();
    })
  }

  delete(id) {
    this.authService.userDelete(id).subscribe((data: any) => {
      console.log(data);
      this.getUser();
    })
  }

}
