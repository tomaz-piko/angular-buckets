import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Bucket } from 'src/app/Bucket';

@Component({
  selector: 'app-buckets-list',
  templateUrl: './buckets-list.component.html',
  styleUrls: ['./buckets-list.component.css'],
})
export class BucketsListComponent {
  @Input() buckets: Bucket[];
  showCreateBucketButton: Boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showCreateBucketButton = !value;
    });
  }

  toggleCreateBucket() {
    this.uiService.toggleCreateBucket();
  }
}
