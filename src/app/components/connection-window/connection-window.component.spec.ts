import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { instance, reset } from 'ts-mockito';

import { ConnectionWindowComponent } from './connection-window.component';
import { ElectronService } from '../../services/electron.service';
import { MockedElectronService } from '../../test-utils/mocks';

describe('ConnectionWindowComponent', () => {
  let component: ConnectionWindowComponent;
  let fixture: ComponentFixture<ConnectionWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionWindowComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide : ElectronService, useValue: instance(MockedElectronService) },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
    reset(MockedElectronService);
  });
});
