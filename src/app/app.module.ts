import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EfiComponent } from './efi/efi.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {UserService} from "./services/user.service";
import { DolarPipe } from './pipes/dolar.pipe';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EfiComponent,
    UserListComponent,
    UserInfoComponent,
    DolarPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
