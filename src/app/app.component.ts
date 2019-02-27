import { Component } from '@angular/core';
import { OfficeProduct } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Office Online Editor POC';

  selectedDocument: {
    officeProduct: OfficeProduct;
    documentSourceUrl: string;
  };

  selectDocument(document: {
    officeProduct: OfficeProduct;
    documentSourceUrl: string;
  }) {
    this.selectedDocument = document;
  }
}
