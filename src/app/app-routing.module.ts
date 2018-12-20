import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameInputComponent } from './frame-input/frame-input.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: FrameInputComponent },
  { path: ':lang', component: FrameInputComponent },
  { path: 'frame/not-found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
