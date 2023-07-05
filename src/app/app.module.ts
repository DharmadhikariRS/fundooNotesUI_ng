import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { TakeNote2Component } from './components/take-note2/take-note2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetNotesComponent } from './components/get-notes/get-notes.component';
import { DisplayComponent } from './components/display/display.component';
import { IconsComponent } from './components/icons/icons.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import { UpdateDialogBoxComponent } from './components/update-dialog-box/update-dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [   
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    CreateNoteComponent,
    TakeNote2Component,
    DashboardComponent,
    GetNotesComponent,
    DisplayComponent,
    IconsComponent,
    SidenavComponent,
    UpdateDialogBoxComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [CreateNoteComponent,GetNotesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
