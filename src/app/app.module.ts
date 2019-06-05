import { ArchivesComponent } from './archives/archives.component';
import { FormsModule } from '@angular/forms';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { GitAssgnmentComponent } from './git-assgnment/git-assgnment.component';
import { GitAssignmetService } from './services/git-assignmet.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GitAssgnmentComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubProfileComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '' , 
        component : HomeComponent
      },
      {
        path: 'followers/:id/:username' , 
        component : GitHubProfileComponent
      },
      {
        path: 'archives/:year/:month' , 
        component : ArchivesComponent
      },
      {
        path: 'followers' , 
        component : GitAssgnmentComponent
      },
      {
        path: 'posts' , component : PostsComponent
      },
      {
        path: '**' , component : NotFoundComponent
      },
      
    ])
  ],
  providers: [
    PostService,
    GitAssignmetService,
    {provide: ErrorHandler , useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
