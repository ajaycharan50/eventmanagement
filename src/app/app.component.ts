import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [
    {
      title: 'FIND PEACE IN KASOL PARTY',
      date: 'October 15, 2024',
      location: 'kasol',
      image: 'assets/images/event1.jpg',
    },
    {
      title: 'SPREAD LOVE IN NEWYORK ',
      date: 'October 20, 2024',
      location: 'NewYork',
      image: 'assets/images/event2.jpg',
    },
    {
      title: 'RISHIKESH EVENTS ON FIRE',
      date: 'November 11, 2024',
      location: 'Rishikesh',
      image: 'assets/images/event3.jpg',
    },
    {
      title: 'NEW YEAR EVENT ',
      date: 'December 31, 2024',
      location: 'Hyderabad',
      image: 'assets/images/event5.jpg',
    },
    // Add more events as needed
  ];

  filteredEvents = [...this.events];

  onSearch(query: string) {
    this.filteredEvents = this.events.filter(event => 
      event.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
