import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name:any;
  sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.sub =  this.route.params.subscribe(params => {
       this.name = params['name'];
    });
  }
  ngOnDistroy(){
    this.sub.unsubscribe();
  }

}
