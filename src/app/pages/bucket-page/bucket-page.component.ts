import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketsService } from 'src/app/services/buckets.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bucket } from 'src/app/Bucket';
import { FileInfo } from 'src/app/FileInfo';

@Component({
  selector: 'app-bucket-page',
  templateUrl: './bucket-page.component.html',
  styleUrls: ['./bucket-page.component.css'],
})
export class BucketPageComponent {
  bucket: Bucket;
  tabShown: string = 'Files';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bucketsService: BucketsService,
    private modalService: NgbModal
  ) {
    this.bucket = {
      name: '',
      location: '',
      files: [],
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.bucketsService
        .getBucket(id)
        .subscribe((bucket) => (this.bucket = bucket));
    });
  }

  deleteBucket() {
    this.bucketsService.deleteBucket(this.bucket).subscribe();
    this.router.navigate(['']);
  }

  openDeleteBucketModal(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.deleteBucket();
        },
        (reason) => {}
      );
  }

  deleteFile(file: FileInfo) {
    this.bucketsService.deleteFile(file).subscribe(() => {
      this.bucket.files = this.bucket.files.filter(
        (curr) => curr.id !== file.id
      );
    });
  }

  openDeleteFileModal(content: any, file: FileInfo) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.deleteFile(file);
        },
        (reason) => {}
      );
  }

  switchTab(newTab: string) {
    this.tabShown = newTab;
  }

  uploadFile(file: FileInfo) {
    this.bucketsService
      .uploadFile(this.bucket, file)
      .subscribe((file) => (this.bucket.files = [...this.bucket.files, file]));
  }
}
