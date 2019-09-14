import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersContainerComponent } from './Containers/users/users-container/users-container.component';
import { UserContainerComponent } from './Containers/users/user-container/user-container.component';
import { ReadComponent } from './tutorialStore/read/read.component';
import { UsersComponent } from './components/credit/users/users.component';
import { TutorialsComponent } from './components/tutorials/tutorials/tutorials.component';
import { CreditsComponent } from './components/credit/credits/credits.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'users', component: UsersContainerComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'user/:id', component: UserContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
