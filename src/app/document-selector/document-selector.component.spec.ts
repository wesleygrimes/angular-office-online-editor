import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentSelectorComponent } from './document-selector.component';

describe('DocumentSelectorComponent', () => {
  let component: DocumentSelectorComponent;
  let fixture: ComponentFixture<DocumentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentSelectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
