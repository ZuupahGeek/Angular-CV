import { EducationState } from "./education.state";
import { WorkState } from "./work.state";



export interface AppState {
  readonly education: EducationState,
  readonly work: WorkState
}