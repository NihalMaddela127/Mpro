import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './common/pipes/search.pipe';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LoginService } from './services/login.service';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { ClothingComponent } from './clothing/clothing.component';
import { AutomobilesService } from './automobiles/automobiles.service';
import { ElectronicsService } from './electronics/electronics.service';
import { ClothingService } from './clothing/clothing.service';
import { CartComponent } from './cart/cart.component';
import { RentnowComponent } from './rentnow/rentnow.component';
import { MyrentalsComponent } from './myrentals/myrentals.component';
import { FooterComponent } from './common/footer/footer.component';
import { CartService } from './cart/cart.service';
import { RentnowService } from './rentnow/rentnow.service';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SearchPipe,
    ElectronicsComponent,
    AutomobilesComponent,
    ClothingComponent,
    CartComponent,
    RentnowComponent,
    MyrentalsComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'cart', component: CartComponent},
      {path: 'rentnow', component: RentnowComponent},
      {path: 'myrentals', component: MyrentalsComponent},
      {path: 'electronics', component: ElectronicsComponent},
      {path: 'automobiles', component: AutomobilesComponent},
      {path: 'clothing', component: ClothingComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo:'home', pathMatch: 'full'}
    ]),
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoginService, AutomobilesService, ElectronicsService, ClothingService, CartService, RentnowService],
  bootstrap: [AppComponent]
})
export class AppModule { }


