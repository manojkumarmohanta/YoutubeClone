import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtHomeComponent } from './yt-home.component';

describe('YtHomeComponent', () => {
  let component: YtHomeComponent;
  let fixture: ComponentFixture<YtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
