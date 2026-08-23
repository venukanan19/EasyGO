import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  appName = 'EasyGO';
  currentYear = new Date().getFullYear(); 
  @Input() cartCount: number = 0;

  searchTerm: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange() {
    this.searchChange.emit(this.searchTerm);
  }

  clearSearch() {
  this.searchTerm = '';
  this.searchChange.emit('');
}
}
