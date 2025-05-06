import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClient si lo usas
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // Creación del mock de HttpClient
    httpClientMock = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: HttpClient, useValue: httpClientMock }, // Proporcionamos el mock de HttpClient
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
