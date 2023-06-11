import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  searchText!: string;
  departureCity!: string;
  destinationCity!: string;
  departureDate!: string;
  returnDate!: string;
  hotelStandard!: string;
  tripDuration!: number;

  constructor() { }

  ngOnInit(): void {
    this.searchText = faker.lorem.words(2);
    this.departureCity = faker.address.city();
    this.destinationCity = faker.address.city();
    this.departureDate = faker.date.future().toISOString().split('T')[0];
    this.returnDate = faker.date.future().toISOString().split('T')[0];
    this.hotelStandard = faker.random.arrayElement(['2-gwiazdkowy', '3-gwiazdkowy', '4-gwiazdkowy', '5-gwiazdkowy']);
    this.tripDuration = faker.random.number({ min: 3, max: 14 });
  }

}
