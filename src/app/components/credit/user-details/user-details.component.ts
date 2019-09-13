import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../../../models/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  title = "User Credit listing"; 
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
