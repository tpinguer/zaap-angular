import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentFormComponent,
    DocumentListComponent,
    DocumentUpdateComponent,
    DocumentDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
