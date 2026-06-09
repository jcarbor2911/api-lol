import { TestBed } from '@angular/core/testing';
import { CharacterTank } from './character-tank';

describe('CharacterTank', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTank]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CharacterTank);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});