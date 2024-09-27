import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEmployessComponent } from './projects-employess.component';

describe('ProjectsEmployessComponent', () => {
  let component: ProjectsEmployessComponent;
  let fixture: ComponentFixture<ProjectsEmployessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsEmployessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEmployessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
