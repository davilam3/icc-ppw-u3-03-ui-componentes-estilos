import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeSwitcher } from "../../../../share/components/theme-switcher/theme-switcher";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ThemeSwitcher],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { }
