import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { BucketsService } from 'src/app/services/buckets.service';
import { Bucket } from 'src/app/Bucket';

@Component({
  selector: 'app-buckets-page',
  templateUrl: './buckets-page.component.html',
  styleUrls: ['./buckets-page.component.css'],
})
export class BucketsPageComponent {
  buckets: Bucket[] = [];
  showCreateBucket: Boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private bucketsService: BucketsService
  ) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showCreateBucket = value;
    });
  }

  ngOnInit() {
    this.bucketsService
      .getBuckets()
      .subscribe((buckets) => (this.buckets = buckets));
  }

  addBucket(bucket: Bucket) {
    this.bucketsService
      .addBucket(bucket)
      .subscribe((bucket) => (this.buckets = [...this.buckets, bucket]));
  }
}
