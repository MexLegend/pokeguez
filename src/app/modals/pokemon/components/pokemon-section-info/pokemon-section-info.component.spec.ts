import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSectionInfoComponent } from './pokemon-section-info.component';

describe('PokemonSectionInfoComponent', () => {
  let component: PokemonSectionInfoComponent;
  let fixture: ComponentFixture<PokemonSectionInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonSectionInfoComponent]
    });
    fixture = TestBed.createComponent(PokemonSectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
