import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultpageinitComponent } from './defaultpageinit.component';

describe('DefaultpageinitComponent', () => {
  let component: DefaultpageinitComponent;
  let fixture: ComponentFixture<DefaultpageinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultpageinitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultpageinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should have as title 'bms-ui'`, () => {
    const fixture = TestBed.createComponent(DefaultpageinitComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bms-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DefaultpageinitComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('bms-ui app is running!');
  });
});
