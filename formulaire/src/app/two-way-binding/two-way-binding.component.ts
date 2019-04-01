import { Component, OnInit } from '@angular/core';
import { User } from "../model/User";
@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  user: User = new User('Nartawak', 'test');
  constructor() { }
  ngOnInit() {
  }
  handleSubmit() {
    console.log('SUBMIT', this.user);
  }
}