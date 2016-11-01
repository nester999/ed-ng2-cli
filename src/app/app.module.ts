import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { firebaseConfig } from '../environments/firebase.config';
// import { AngularFireModule } from "angularfire2/index";
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


import { AppComponent } from './app.component';
import { SupComponent } from './sup/sup.component';
import { MyDirectiveDirective } from './shared/my-directive.directive';
import { MyPipePipe } from './shared/my-pipe.pipe';
import { SublimePipePipe } from './sublime-pipe.pipe';
import { HomeComponent } from './home/home.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { DerpComponent } from './derp/derp.component';
import { BlargComponent } from './blarg/blarg.component';
import { NavComponent } from './nav/nav.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    SupComponent,
    MyDirectiveDirective,
    MyPipePipe,
    SublimePipePipe,
    HomeComponent,
    LessonsListComponent,
    DerpComponent,
    BlargComponent,
    NavComponent,
    HeroSliderComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot([
          { path: 'sup/:id', component: SupComponent },
          { path: 'home', component: HomeComponent },
          { path: 'login', component: LoginComponent },
          {
            path: 'derp',
            component: HeroSliderComponent,
            data: {
              title: 'Derp List'
            }
          },
          { path: '', component: HomeComponent },
          { path: '**', component: BlargComponent }
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
