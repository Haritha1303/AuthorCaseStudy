import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BloggerComponent } from './blogger/blogger.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'blogger',component:BloggerComponent},
  //{path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
