import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css'],
})
export class DocumentDetailComponent implements OnInit {
  document: any = null;
  originalName: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const documentId = this.route.snapshot.paramMap.get('id');
    this.http
      .get<any>(`http://0.0.0.0:8000/api/get-documents-by-id/${documentId}/`)
      .subscribe(
        (response) => {
          this.document = response;
          this.originalName = response.name;
        },
        (error) => {
          console.error('Erro ao carregar o documento:', error);
        }
      );
  }

  onNameChange(): void {
    if (this.document.name !== this.originalName) {
      this.document.status = 'success';
    }
  }

  updateDocument(): void {
    const documentId = this.route.snapshot.paramMap.get('id');
    this.http
      .put(`http://0.0.0.0:8000/api/update-docs/${documentId}/`, {
        name: this.document.name,
        status: this.document.status,
      })
      .subscribe(
        (response) => {
          alert('Documento atualizado com sucesso!');
          this.router.navigate(['/documents']);
        },
        (error) => {
          console.error('Erro ao atualizar o documento:', error);
          alert('Erro ao atualizar o documento.');
        }
      );
  }
}
