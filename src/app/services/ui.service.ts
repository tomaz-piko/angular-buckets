import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  showCreateBucket: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleCreateBucket() {
    this.showCreateBucket = !this.showCreateBucket;
    this.subject.next(this.showCreateBucket);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
