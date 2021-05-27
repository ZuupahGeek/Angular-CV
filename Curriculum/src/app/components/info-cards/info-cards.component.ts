import { Component, Input, OnInit } from '@angular/core';
import { Occupation } from 'src/app/store/models/occupation.model';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  @Input() occupation?: Occupation;

  constructor() { }

  ngOnInit(): void {
  }

}
