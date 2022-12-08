import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';

const routes: Routes = [
  {path: 'measurement', component: OverviewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  OverviewPageComponent,
]