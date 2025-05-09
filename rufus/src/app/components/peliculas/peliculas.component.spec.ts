import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculasComponent } from './peliculas.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasComponent], // Porque es standalone
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: { paramMap: { get: () => null } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
