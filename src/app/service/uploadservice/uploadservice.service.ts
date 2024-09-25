import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadService {

  private baseUrl = 'http://localhost:3000/api/upload';

  constructor(private http: HttpClient) {}

  uploadImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.http.post<any>(this.baseUrl, formData, {
      reportProgress: true,
      observe: 'body'
    }).pipe(
      catchError(error => {
        console.error('Error uploading image:', error);
        throw error;
      })
    );
  }
}
