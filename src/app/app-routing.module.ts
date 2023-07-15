import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/anonymous/anonymous.module').then(m => m.AnonymousModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/signed/signed.module').then(m => m.SignedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
