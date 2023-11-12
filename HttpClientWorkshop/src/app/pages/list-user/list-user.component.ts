import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/core/User';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUsers: User[] = [];
  constructor(private _userService: UserServiceService) { }

  ngOnInit(): void {
    this._userService.fetchUsers().subscribe({
      next: (data) => (this.listUsers = data as User[]),
      error: (err) => console.log('erreur')
    });

  }
  deleteUser(id: number) {
    this._userService.removeUser(id).subscribe(
      {
      next: () => this.listUsers = this.listUsers.filter(user => user.id !== id) // uestion pourquoi on a creer cette methode , il ne suffit pas d'appler la methode fetchUsers apres avoir appelé remove user?
    });
  }
  addUser(user : User){
    this._userService.addUser(user).subscribe();
  }

}
