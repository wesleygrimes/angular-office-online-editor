import { HttpParams } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OfficeProduct } from '../_models';

@Component({
  selector: 'app-office-editor',
  templateUrl: './office-editor.component.html',
  styleUrls: ['./office-editor.component.css']
})
export class OfficeEditorComponent implements AfterViewInit, OnChanges {
  @ViewChild('officeFrameholder') officeFrameholder: ElementRef;
  @ViewChild('officeForm') officeForm: ElementRef;

  @Input() document: {
    officeProduct: OfficeProduct;
    documentSourceUrl: string;
    accessToken: string;
  };

  actionUrl: string;

  accessTokenTTL = '';

  constructor(public sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.loadDocument();
  }

  ngOnChanges() {
    this.loadDocument();
  }

  loadDocument() {
    const existingOfficeframe = document.getElementById('officeFrame');

    if (existingOfficeframe) {
      existingOfficeframe.parentNode.removeChild(existingOfficeframe);
    }

    if (this.document) {
      this.actionUrl = this.getActionUrlForDocument(this.document);

      const officeFrame = document.createElement('iframe');
      officeFrame.name = 'officeFrame';
      officeFrame.id = 'officeFrame';
      officeFrame.title = 'Office Online Frame';
      officeFrame.setAttribute('allowfullscreen', 'true');
      officeFrame.setAttribute(
        'sandbox',
        'allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox'
      );
      this.officeFrameholder.nativeElement.appendChild(officeFrame);
      this.officeForm.nativeElement.action = this.actionUrl;
      this.officeForm.nativeElement.submit();
    }
  }

  getActionUrlForDocument(document) {
    switch (document.officeProduct) {
      case OfficeProduct.Word:
        return this.getWordEditorActionUrlForWOPISrc(
          document.documentSourceUrl
        );
      case OfficeProduct.Excel:
        return this.getExcelEditorActionUrlForWOPISrc(
          document.documentSourceUrl
        );
    }
  }

  getWordEditorActionUrlForWOPISrc(WOPISrc: string) {
    const baseUrl =
      'https://word-edit.officeapps.live.com/we/wordeditorframe.aspx';

    const httpParams = new HttpParams({
      fromObject: {
        ui: 'en-US',
        rs: 'en-US',
        hid: 'vTpeDoBDxU+J0HQbEq12cg.0',
        WOPISrc,
        wdo: '1',
        wde: 'docx',
        sc: 'host%3D%26qt%3DFolders',
        mscc: '1',
        wdp: '0'
      }
    });

    return `${baseUrl}?${httpParams.toString()}`;
  }

  getExcelEditorActionUrlForWOPISrc(WOPISrc: string) {
    const baseUrl =
      'https://excel.officeapps.live.com/x/_layouts/xlviewerinternal.aspx';

    const httpParams = new HttpParams({
      fromObject: {
        edit: '1',
        ui: 'en-US',
        rs: 'en-US',
        hid: 'YRLAN1zVkkyJyykFIy/2NQ.0',
        WOPISrc,
        wdnd: '1',
        wdPreviousCorrelation: '350a032f-54e8-429d-bf83-0e45bc318df0',
        wde: 'xlsx',
        sc: 'host%3D%26qt%3DFolders',
        mscc: '1',
        wdp: '0'
      }
    });

    return `${baseUrl}?${httpParams.toString()}`;
  }
}
