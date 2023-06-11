import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent {

  searchText: string = '';
  departureCity: string = '';
  destinationCity: string = '';
  departureDate: string = '';
  returnDate: string = '';
  hotelStandard: string = '';
  tripDuration: number | null = null;

  constructor() { }

  // Metoda wywoływana po kliknięciu przycisku wyszukiwania
  onSearch() {
    // Generowanie przykładowych danych
    this.searchText = faker.lorem.words(2);
    this.departureCity = faker.address.city();
    this.destinationCity = faker.address.city();
    this.departureDate = faker.date.future().toISOString().split('T')[0];
    this.returnDate = faker.date.future().toISOString().split('T')[0];
    this.hotelStandard = faker.random.arrayElement(['1', '2', '3', '4', '5']);
    this.tripDuration = faker.random.number({ min: 3, max: 14 });

    // Tutaj możesz dodać logikę wyszukiwania
  }
}
