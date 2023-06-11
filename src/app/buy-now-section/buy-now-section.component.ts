import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-now-section',
  templateUrl: './buy-now-section.component.html',
  styleUrls: ['./buy-now-section.component.css']
})
export class BuyNowSectionComponent {
  totalPrice: number = 0;

  calculatePrice() {
    // Pobierz wartości pól formularza i wykonaj obliczenia
    // ...

    // Przypisz wynik do zmiennej totalPrice
    // this.totalPrice = ...

    // Przykładowa logika obliczania ceny na podstawie wprowadzonych danych:
    this.totalPrice = 100; // Cena podstawowa

    const duration = +(document.getElementById('duration') as HTMLInputElement).value;
    const adults = +(document.getElementById('adults') as HTMLInputElement).value;
    const children = +(document.getElementById('children') as HTMLInputElement).value;
    const pets = +(document.getElementById('pets') as HTMLInputElement).value;

    this.totalPrice += duration * 10; // Cena za każdy dzień
    this.totalPrice += adults * 50; // Cena za każdego dorosłego
    this.totalPrice += children * 30; // Cena za każde dziecko
    this.totalPrice += pets * 20; // Cena za każde zwierzę
  }
}
