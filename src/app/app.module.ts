import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { ExploreComponent } from './components/page/explore/explore.component';
import { ConfigurationComponent } from './components/page/configuration/configuration.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FeedComponent } from './components/layout/main/feed/feed.component';
import { StoriesComponent } from './components/layout/main/stories/stories.component';
import { SidebarComponent } from './components/layout/main/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    ConfigurationComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    FeedComponent,
    StoriesComponent,
    SidebarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Validators

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
