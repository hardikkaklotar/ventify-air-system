import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isSidebar: boolean = false;

  openSidebar() {
    this.isSidebar = !this.isSidebar;
  }
  
  closeSidebar() {
    this.isSidebar = false;
  }
}
