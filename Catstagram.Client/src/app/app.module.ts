import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxGridModule,
  IgxActionStripModule,
  IgxComboModule,
  IgxCardModule,
  IgxAvatarModule,
  IgxNavbarModule,
  IgxToggleModule,
  IgxNavigationDrawerModule,
  IgxDialogModule,
  IgxInputGroupModule,
} from 'igniteui-angular';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { CatService } from './services/cat.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, CreatePostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxGridModule,
    IgxActionStripModule,
    FormsModule,
    IgxComboModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    IgxDialogModule,
    IgxInputGroupModule,
    HttpClientModule,
  ],
  providers: [AuthService, CatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
