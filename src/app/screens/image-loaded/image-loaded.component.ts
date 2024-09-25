import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-loaded',
  templateUrl: './image-loaded.component.html',
  // styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
})
export class ImageLoadedComponent {
  imageUrl: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtém a URL da imagem dos parâmetros da rota
    this.route.queryParams.subscribe(params => {
      this.imageUrl = params['url'];
    });
  }

  downloadImage() {
    if (this.imageUrl) {
      const link = document.createElement('a');
      link.href = this.imageUrl;
      link.setAttribute('download', this.imageUrl.split('/').pop() || 'download'); // Define o nome do arquivo
      document.body.appendChild(link); // Necessário para Firefox
      link.click(); // Simula o clique no link
      document.body.removeChild(link); // Remove o link do DOM
    } else {
      console.error('URL da imagem não disponível para download.');
    }
  }
}
