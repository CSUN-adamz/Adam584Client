import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFightsComponent } from './player-fights.component';

describe('PlayerFightsComponent', () => {
  let component: PlayerFightsComponent;
  let fixture: ComponentFixture<PlayerFightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerFightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerFightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
