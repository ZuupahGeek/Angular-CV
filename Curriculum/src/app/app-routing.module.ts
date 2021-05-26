import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbeteComponent } from './views/arbete/arbete.component';
import { HobbyComponent } from './views/hobby/hobby.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';
import { UtbildningComponent } from './views/utbildning/utbildning.component';

const routes: Routes = [
  {path: 'arbete', component: ArbeteComponent},
  {path: 'utbildning', component: UtbildningComponent},
  {path: 'hobby', component: HobbyComponent},
  {path: 'kontakt', component: KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
