import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourChannelComponent } from './your-channel.component';

describe('YourChannelComponent', () => {
  let component: YourChannelComponent;
  let fixture: ComponentFixture<YourChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourChannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
