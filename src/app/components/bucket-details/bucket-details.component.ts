import { Component, Input } from '@angular/core';
import { Bucket } from 'src/app/Bucket';

@Component({
  selector: 'app-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls: ['./bucket-details.component.css'],
})
export class BucketDetailsComponent {
  @Input() bucket: Bucket;

  getFilesizeSum() {
    let sum = 0;
    for (let file of this.bucket.files) {
      sum += file.size;
    }
    return sum;
  }
}
