import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { setWork } from 'src/app/store/actions/work.actions';
import { AppState } from 'src/app/store/models/app.state';
import { Occupation } from 'src/app/store/models/occupation.model';



@Component({
  selector: 'app-arbete',
  templateUrl: './arbete.component.html',
  styleUrls: ['./arbete.component.css']
})
export class ArbeteComponent implements OnInit {

  public work: Observable<Occupation[]> | undefined

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(setWork());
    this.work = this.store.select(state => state.work.workList)
  }

}
