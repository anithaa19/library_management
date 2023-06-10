import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { APP_CONFIG_SERVICE } from '../AppConfig/appconfig.service';
import { BooksService } from '../services/books.service';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      providers: [
        BooksService,
        {
            provide: APP_CONFIG_SERVICE,
            useValue: { apiEndPoint: 'http://localhost:3000/' }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
