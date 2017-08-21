import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  onSubmit = function (user) {
    console.log(user);
  };
  constructor() { }

  ngOnInit() {
  }

}
