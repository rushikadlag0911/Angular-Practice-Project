import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  names : string[]  ;
  ages : string[]  ;

  constructor() {
    this.names = ['Sanket', 'Shivani', 'Payal', 'Sohel', 'Ajit'];
    this.ages = ['22', '21', '20', '23', '24'];
  }

  ngOnInit(): void {
    
  }

}
