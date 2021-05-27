import { Action, createReducer, on} from '@ngrx/store';
import { EducationState } from '../models/education.state';
import * as educationActions from "../actions/education.actions";



const initState: EducationState = {
  educationList: []
}

const _educationReducer = createReducer(
  initState,

  on(educationActions.setEducation, state => {
    return {
      ...state,
      educationList: [
        {
          title: 'Frontend-utvecklare',
          place: 'EC Utbildning',
          desc: '',
          date: 'Aug 2020 - Maj 2022'
        },
        {
          title: 'Vård och omsorg',
          place: 'Storumans Lärcentrum',
          desc: '',
          date: 'Jan 2016 - Jun 2018'
        },
        {
          title: 'Naturventeskap',
          place: 'IT-gymnasiet',
          desc: 'Specialutformat Teknik/IT-program med inriktning på Naturvetenskap',
          date: 'Jan 2016 - Jun 2018'
        },
      ]
    }
  })

)

export function EducationReducer(state: EducationState | undefined, Action: Action) {
  return _educationReducer(state, Action)
}