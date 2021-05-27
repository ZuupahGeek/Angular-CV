import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { setEducation } from 'src/app/store/actions/education.actions';
import { AppState } from 'src/app/store/models/app.state';
import { Occupation } from 'src/app/store/models/occupation.model';



@Component({
  selector: 'app-utbildning',
  templateUrl: './utbildning.component.html',
  styleUrls: ['./utbildning.component.css']
})
export class UtbildningComponent implements OnInit {

  public education: Observable<Occupation[]> | undefined

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(setEducation());
    this.education = this.store.select(state => state.education.educationList)
  }

}
