import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],  // Importa el componente standalone
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios para que se renderice
  });

  it('should have the "Hello, rufus" title', () => {
    expect(component.title).toEqual('Hello, rufus'); // Verifica el valor de la propiedad
  });

  it('should render title', () => {
    fixture.detectChanges(); // Asegura que la vista esté actualizada
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, rufus'); // Verifica que el título se muestre correctamente
  });
});
