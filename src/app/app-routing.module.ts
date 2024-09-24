import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentListComponent },
  { path: 'create-document', component: DocumentFormComponent },
  { path: 'update-document/:id', component: DocumentUpdateComponent },
  { path: 'document/:id', component: DocumentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
