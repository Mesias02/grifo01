import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { TrunkComponent } from './trunk/trunk.component';
import { LegsComponent } from './legs/legs.component';
import { FeetComponent } from './feet/feet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent,TrunkComponent, LegsComponent, FeetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grifo';
}
