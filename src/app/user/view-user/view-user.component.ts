import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user!: User;

  constructor(private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['preload'];

  }

}
