import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.css'],
})
export class DocumentUpdateComponent implements OnInit {
  document: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const documentId = this.route.snapshot.paramMap.get('id');

    this.http.get(`http://0.0.0.0:8000/api/documents/${documentId}`).subscribe(
      (response: any) => {
        this.document = response;
      },
      (error) => {
        console.error('Erro ao carregar o documento:', error);
      }
    );
  }

  onSubmit(): void {
    const documentId = this.route.snapshot.paramMap.get('id');

    this.http
      .put(`http://0.0.0.0:8000/api/documents/${documentId}`, this.document)
      .subscribe(
        (response) => {
          console.log('Documento atualizado com sucesso:', response);
          this.router.navigate(['/documents']);
        },
        (error) => {
          console.error('Erro ao atualizar o documento:', error);
        }
      );
  }
}
