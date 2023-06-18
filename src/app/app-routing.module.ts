import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';


// TODO: Add routes for the following components:
const routes: Routes = [
  { path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
  { path: 'cms', loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
