import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
