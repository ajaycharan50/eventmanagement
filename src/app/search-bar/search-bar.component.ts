import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchQuery: string = '';
  @Output() search = new EventEmitter<string>(); // Declare an EventEmitter

  onSearch(query: string) {
    this.searchQuery = query;
    this.search.emit(this.searchQuery); // Emit the search query
  }
}
