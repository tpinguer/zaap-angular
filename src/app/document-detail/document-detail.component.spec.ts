import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentDetailComponent } from './document-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('DocumentDetailComponent', () => {
  let component: DocumentDetailComponent;
  let fixture: ComponentFixture<DocumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentDetailComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load document details on init', () => {
    spyOn(component['http'], 'get').and.returnValue(
      of({
        id: 1,
        name: 'Contrato de Aluguel',
        status: 'pending',
        created_at: '2024-09-22T22:00:00',
      })
    );

    component.ngOnInit();

    expect(component.document).toEqual({
      id: 1,
      name: 'Contrato de Aluguel',
      status: 'pending',
      created_at: '2024-09-22T22:00:00',
    });
  });

  it('should set status to success when the name changes', () => {
    component.document = {
      id: 1,
      name: 'Contrato Antigo',
      status: 'pending',
      created_at: '2024-09-22T22:00:00',
    };
    component.originalName = 'Contrato Antigo';

    component.document.name = 'Novo Nome do Contrato';
    component.onNameChange();

    expect(component.document.status).toBe('success');
  });

  it('should not change status if name remains the same', () => {
    component.document = {
      id: 1,
      name: 'Contrato de Aluguel',
      status: 'pending',
      created_at: '2024-09-22T22:00:00',
    };
    component.originalName = 'Contrato de Aluguel';

    component.document.name = 'Contrato de Aluguel';
    component.onNameChange();

    expect(component.document.status).toBe('pending');
  });
});
