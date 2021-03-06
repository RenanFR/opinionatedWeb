import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth/login',
  },
  {
    path: 'auth/login',
    loadChildren: './login/login.module#LoginModule'
  },
  { 
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule'
  },
  { 
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule'
  }
];
@NgModule({
  imports: [
      RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
