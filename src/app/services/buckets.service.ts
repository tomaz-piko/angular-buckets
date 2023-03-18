import { Injectable } from '@angular/core';
import { Bucket } from '../Bucket';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileInfo } from '../FileInfo';

@Injectable({
  providedIn: 'root',
})
export class BucketsService {
  apiUrl = 'http://localhost:3000';
  buckets: Bucket[] = [];

  constructor(private httpClient: HttpClient) {}

  getBuckets(): Observable<Bucket[]> {
    return this.httpClient.get<Bucket[]>(`${this.apiUrl}/buckets`);
  }

  getBucket(id: number): Observable<Bucket> {
    return this.httpClient.get<Bucket>(
      `${this.apiUrl}/buckets/${id}?_embed=files`
    );
  }

  addBucket(bucket: Bucket): Observable<Bucket> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.post<Bucket>(
      `${this.apiUrl}/buckets`,
      bucket,
      httpOptions
    );
  }

  deleteBucket(bucket: Bucket): Observable<Bucket> {
    return this.httpClient.delete<Bucket>(
      `${this.apiUrl}/buckets/${bucket.id}`
    );
  }

  uploadFile(bucket: Bucket, file: FileInfo): Observable<FileInfo> {
    file.bucketId = bucket.id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.post<FileInfo>(
      `${this.apiUrl}/files`,
      file,
      httpOptions
    );
  }

  deleteFile(file: FileInfo): Observable<FileInfo> {
    return this.httpClient.delete<FileInfo>(`${this.apiUrl}/files/${file.id}`);
  }
}
