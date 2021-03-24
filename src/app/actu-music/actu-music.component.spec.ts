import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuMusicComponent } from './actu-music.component';

describe('ActuMusicComponent', () => {
  let component: ActuMusicComponent;
  let fixture: ComponentFixture<ActuMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
