import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficeEditorComponent } from './office-editor.component';

describe('OfficeEditorComponent', () => {
  let component: OfficeEditorComponent;
  let fixture: ComponentFixture<OfficeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
