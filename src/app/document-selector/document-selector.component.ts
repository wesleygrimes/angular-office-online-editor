import { Component, EventEmitter, Output } from '@angular/core';
import { OfficeProduct } from '../_models';

@Component({
  selector: 'app-document-selector',
  templateUrl: './document-selector.component.html',
  styleUrls: ['./document-selector.component.css']
})
export class DocumentSelectorComponent {
  @Output() documentSelected = new EventEmitter<{
    officeProduct: OfficeProduct;
    documentSourceUrl: string;
    accessToken: string;
  }>();

  selectedDocumentSourceUrl =
    'https://wopi.onedrive.com/wopi/files/4FECA7F0B7E2C607!27887';
  selectedOfficeProduct: OfficeProduct = OfficeProduct.Word;

  enteredAccessToken = '';

  officeProducts = Object.keys(OfficeProduct);

  constructor() {}

  selectDocument() {
    this.documentSelected.emit({
      officeProduct: this.selectedOfficeProduct,
      documentSourceUrl: this.selectedDocumentSourceUrl,
      accessToken: this.enteredAccessToken
    });
  }
}
