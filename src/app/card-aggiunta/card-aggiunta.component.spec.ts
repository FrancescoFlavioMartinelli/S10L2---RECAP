import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAggiuntaComponent } from './card-aggiunta.component';

describe('CardAggiuntaComponent', () => {
  let component: CardAggiuntaComponent;
  let fixture: ComponentFixture<CardAggiuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAggiuntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAggiuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
