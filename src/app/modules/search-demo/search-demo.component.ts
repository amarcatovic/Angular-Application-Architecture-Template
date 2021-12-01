import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { SearchService } from 'src/app/core/services/search/search.service';
import { User } from './interfaces/User';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-search-demo',
  templateUrl: './search-demo.component.html',
  styleUrls: ['./search-demo.component.scss']
})
export class SearchDemoComponent implements OnInit {

  users: Observable<User[]>;
  search: FormControl;

  constructor(
    private _users: UsersService,
    private _search: SearchService ) { }

  ngOnInit(): void {
    this.search = new FormControl('');
    this.users = this._users.getUsersAsync();

    this.search.valueChanges.subscribe(value => {
      this.users = this._search.search(this.search, 'name', this.users)
    });
  }
}
