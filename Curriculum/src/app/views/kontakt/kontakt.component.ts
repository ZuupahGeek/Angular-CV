import { Component, OnInit } from '@angular/core';
import { EmailModel } from 'src/app/store/models/email-model';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  public emailMessage = new EmailModel()
  

  onSubmit(messageForm: any) {
    console.log(this.emailMessage)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
