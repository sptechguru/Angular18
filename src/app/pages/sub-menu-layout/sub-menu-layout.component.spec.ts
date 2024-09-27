import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuLayoutComponent } from './sub-menu-layout.component';

describe('SubMenuLayoutComponent', () => {
  let component: SubMenuLayoutComponent;
  let fixture: ComponentFixture<SubMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubMenuLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
