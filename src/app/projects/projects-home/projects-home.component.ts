import { Component, OnInit } from '@angular/core';

type CardForm = {
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
  cardForm: CardForm = {
    firstName: 'William',
    lastName: 'Forbes',
    phone: '(201) 748-6000',
    company: 'Recursive Code',
    title: 'Software Engineer',
    address: {
      street: '1234 Fake St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90210'
    }
  };

  constructor() { }
  ngOnInit(): void { }
  getEventValue(event: any) {
    return event.target.value;
  }
  isNumeric(x: string | number) {
    if (typeof x === 'undefined') return false;
    return /^\d+$/.test(x.toString());
  }
}
