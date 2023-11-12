import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatsListComponent } from './pokemon-stats-list.component';

describe('PokemonStatsListComponent', () => {
  let component: PokemonStatsListComponent;
  let fixture: ComponentFixture<PokemonStatsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonStatsListComponent]
    });
    fixture = TestBed.createComponent(PokemonStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
