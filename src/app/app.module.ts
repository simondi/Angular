import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { appReducers } from './userStore/reducers/app.reducer';
import { UserEffects } from './userStore/effects/user.effects';

import { UserService } from './services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Directives
import { HighlightDirective } from './directives/highlight.directive';

// Tutorials Components
import { reducer } from './tutorialStore/reducers/tutorial.reducer';
import { CreditsComponent } from './components/credit/credits/credits.component';
import { TutorialsComponent } from './components/tutorials/tutorials/tutorials.component';
import { CreateComponent } from './tutorialStore/create/create.component';
//import { reducers, metaReducers } from './tutorialStore/reducers';

// User credit componets
import { ReadComponent } from './tutorialStore/read/read.component';
import { UserComponent } from './userStore/user/user.component';
import { UsersComponent } from './Components/credit/users/users.component';
import { UserDetailsComponent } from './Components/credit/user-details/user-details.component';
import { UserContainerComponent }  from './Containers/users/user-container/user-container.component';
import { UsersContainerComponent } from './Containers/users/users-container/users-container.component';


@NgModule({
  declarations: [
    AppComponent,
    // Directives
    HighlightDirective,

    // Tutorials Components
    TutorialsComponent,
    ReadComponent,
    CreateComponent,

    // User Credit components
    CreditsComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    UsersContainerComponent,
    UserContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
