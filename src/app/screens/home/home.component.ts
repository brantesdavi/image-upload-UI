import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { UploadService } from '../../service/uploadservice/uploadservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
})
export class HomeComponent {
  selectedFile: File | null = null;

  // Referência ao input de arquivo
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private uploadService: UploadService, private router: Router) { }

  // Método para lidar com a seleção do arquivo
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }

  // Método para upload
  onUpload() {
    if (this.selectedFile) {
      this.uploadService.uploadImage(this.selectedFile).subscribe(
        response => {
          this.router.navigate(['/display'], { queryParams: { url: response.url } });
      },
        error => {
          console.error('Upload failed:', error);
        }
      );
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  
  onDragLeave() {
    // Lógica para mudar a aparência da área ao sair
  }
  
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.selectedFile = event.dataTransfer.files[0];
      this.onUpload();
    }
  }
}
