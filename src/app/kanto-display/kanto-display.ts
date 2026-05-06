import { Component, inject } from '@angular/core';
import { KantoService } from '../services/kanto';

@Component({
  selector: 'app-kanto-display',
  imports: [],
  templateUrl: './kanto-display.html',
  styleUrl: './kanto-display.css',
})
export class KantoDisplay {
  kantoService = inject(KantoService)
}
