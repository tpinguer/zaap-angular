import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  documents: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.http.get<any[]>('http://localhost:8000/api/get-documents/').subscribe(
      (response) => {
        this.documents = response;
      },
      (error) => {
        console.error('Erro ao carregar a lista de documentos:', error);
      }
    );
  }

  viewDetails(documentId: string): void {
    this.router.navigate([`/document/${documentId}`]);
  }

  deleteDocument(documentId: string): void {
    if (confirm('Tem certeza que deseja excluir este documento?')) {
      this.http
        .delete(`http://localhost:8000/api/delete-doc/${documentId}/`)
        .subscribe(
          () => {
            this.documents = this.documents.filter(
              (doc) => doc.id !== documentId
            );
            alert('Documento excluído com sucesso!');
          },
          (error) => {
            console.error('Erro ao excluir o documento:', error);
            alert('Erro ao excluir o documento.');
          }
        );
    }
  }
}
