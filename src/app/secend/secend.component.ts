import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secend',
  templateUrl: './secend.component.html',
  styleUrls: ['./secend.component.css']
})
export class SecendComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }
  sendMeHome() {
    this.router.navigate(['']);
  }

}
