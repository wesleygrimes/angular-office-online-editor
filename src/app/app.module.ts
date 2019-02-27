import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DocumentSelectorComponent } from './document-selector/document-selector.component';
import { OfficeEditorComponent } from './office-editor/office-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeEditorComponent,
    DocumentSelectorComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
