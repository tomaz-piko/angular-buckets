import { FileInfo } from './FileInfo';

export interface Bucket {
  id?: number;
  name: string;
  location: string;
  files: Array<FileInfo>;
}
