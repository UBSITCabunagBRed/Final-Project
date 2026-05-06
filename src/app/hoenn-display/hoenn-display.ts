import { Component, inject } from '@angular/core';
import { HoennService } from '../services/hoenn';

@Component({
  selector: 'app-hoenn-display',
  imports: [],
  templateUrl: './hoenn-display.html',
  styleUrl: './hoenn-display.css',
})
export class HoennDisplay {
  hoennService = inject(HoennService)
}
