import { Component, Output, EventEmitter } from '@angular/core';
import { Bucket } from 'src/app/Bucket';
import { FileInfo } from 'src/app/FileInfo';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-create-bucket',
  templateUrl: './create-bucket.component.html',
  styleUrls: ['./create-bucket.component.css'],
})
export class CreateBucketComponent {
  @Output() onAddBucket: EventEmitter<Bucket> = new EventEmitter();
  name: string = '';
  location: string = '';
  alertMessage: string = '';

  constructor(private UiService: UiService) {}

  onSubmit(e: any) {
    e.preventDefault();
    if (!this.name || !this.location) {
      this.alertMessage = 'Please fill all required fields.';
      return;
    }
    const newBucket = {
      name: this.name,
      location: this.location,
      files: [],
    };

    this.onAddBucket.emit(newBucket);
    this.UiService.toggleCreateBucket();
    this.alertMessage = '';
  }
}
