import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectPopupComponent } from './components/project-popup/project-popup.component';
import { NgChartsModule } from 'ng2-charts';
import { SignupComponent } from './dashboard/signup/signup.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    FooterComponent,
    ProjectPopupComponent,
    SignupComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
