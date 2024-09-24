import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css'],
})
export class DocumentFormComponent {
  document = {
    name: '',
    signers: [{ name: '', email: '' }],
    url: '',
  };

  successMessage: string | null = null;

  constructor(private http: HttpClient) {}

  addSigner() {
    this.document.signers.push({ name: '', email: '' });
  }

  onSubmit() {
    const documentData = {
      name: this.document.name,
      url_pdf: this.document.url,
      signers: this.document.signers,
    };

    this.http
      .post('http://localhost:8000/api/documents/', documentData)
      .subscribe(
        (response) => {
          this.successMessage = 'Documento criado com sucesso!';

          this.document = {
            name: '',
            signers: [{ name: '', email: '' }],
            url: '',
          };

          setTimeout(() => {
            this.successMessage = null;
          }, 5000);
        },
        (error) => {
          console.error('Erro ao criar o documento', error);
        }
      );
  }
}
