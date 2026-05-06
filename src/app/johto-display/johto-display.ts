import { Component, inject } from '@angular/core';
import { JohtoService } from '../services/johto';

@Component({
  selector: 'app-johto-display',
  imports: [],
  templateUrl: './johto-display.html',
  styleUrl: './johto-display.css',
})
export class JohtoDisplay {
  johtoService = inject(JohtoService)
}
