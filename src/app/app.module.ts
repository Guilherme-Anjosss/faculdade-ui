import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { DisciplinaModule } from './pages/disciplina/disciplina.module';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


@NgModule({
  declarations: [	
    AppComponent, 
    MainLayoutComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimengModule,
    AppRoutingModule,
    DisciplinaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
