// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxFilesizeModule } from 'ngx-filesize';

// Components
import { AppComponent } from './app.component';
import { CreateBucketComponent } from './components/create-bucket/create-bucket.component';
import { BucketsListComponent } from './components/buckets-list/buckets-list.component';
import { BucketDetailsComponent } from './components/bucket-details/bucket-details.component';
import { FilesListComponent } from './components/files-list/files-list.component';

// Pages
import { BucketsPageComponent } from './pages/buckets-page/buckets-page.component';
import { BucketPageComponent } from './pages/bucket-page/bucket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBucketComponent,
    BucketsPageComponent,
    BucketPageComponent,
    BucketsListComponent,
    FilesListComponent,
    BucketDetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxFilesizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
