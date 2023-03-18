import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileInfo } from 'src/app/FileInfo';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css'],
})
export class FilesListComponent {
  @Input() files: FileInfo[];
  @Output() onDeleteObject: EventEmitter<FileInfo> = new EventEmitter();
  @Output() onUploadObject: EventEmitter<FileInfo> = new EventEmitter();
  selectedIndex: number = -1;
  alertMessage: string = '';

  constructor() {}

  fileUploadChanged(e: any) {
    const file: File = e.target.files[0];
    if (file) {
      //console.log(file);
      const newObject = {
        name: file.name,
        last_modified: file.lastModified,
        size: file.size,
      };
      this.uploadObject(newObject);
    }
  }

  objectSelectionChanged(idx: number) {
    if (idx === this.selectedIndex) {
      // Double click on selected -> deselect
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = idx;
    }
  }

  deleteObject() {
    if (this.selectedIndex === -1) {
      this.alertMessage = 'No object selected.';
      return;
    }
    const selectedObject = this.files[this.selectedIndex];
    this.onDeleteObject.emit(selectedObject);
  }

  uploadObject(object: FileInfo) {
    this.onUploadObject.emit(object);
  }
}
