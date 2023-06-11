import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
