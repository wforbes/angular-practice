import { Component, OnInit, DoCheck, SimpleChanges } from '@angular/core';

type ContactForm = {
  name: string | null;
  email: string | null;
  phone: string | null;
  message: string | null;
};

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent implements OnInit, DoCheck {
  isUnchanged = true;
  name= '';
  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };


  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.isUnchanged = (
      this.contactForm.name === '' &&
      this.contactForm.email === '' &&
      this.contactForm.phone === '' &&
      this.contactForm.message === ''
    )
  }

  getEventValue(event: KeyboardEvent) {
    return (event.target as HTMLInputElement).value;
  }
}
