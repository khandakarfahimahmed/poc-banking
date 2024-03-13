import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}
  fetchFile(id: string) {
    console.log('fetching file');
    const res = this.http.get('http://localhost:3000/file/' + id, {
      responseType: 'blob',
    });
    console.log(res);
    return res;
  }

  uploadFile(file: File): Observable<any> {
    // const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
    const formData: FormData = new FormData();

    console.log(file);

    console.log(formData);
    formData.append('fileName', file.name);
    formData.append('file', file);
    return this.http.post<any>('http://localhost:3000/file', formData).pipe(
      catchError((err) => {
        return err;
      })
    );
  }

  sendData(data: any) {
    this.dataSubject.next(data);
  }
}
