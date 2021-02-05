import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  user?:User;

  title = "user q"
  constructor() { }

  ngOnInit(): void {
  }

}
