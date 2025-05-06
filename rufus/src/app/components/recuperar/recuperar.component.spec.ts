import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarComponent } from './recuperar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarComponent, HttpClientTestingModule], // Standalone component y el módulo necesario
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
