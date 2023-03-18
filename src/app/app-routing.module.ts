import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketPageComponent } from './pages/bucket-page/bucket-page.component';
import { BucketsPageComponent } from './pages/buckets-page/buckets-page.component';

const routes: Routes = [
  { path: '', component: BucketsPageComponent },
  { path: 'bucket/:id', component: BucketPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
