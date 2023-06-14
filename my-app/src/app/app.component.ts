import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`h1 { font-family: Lato; }`]
})
export class AppComponent {
  title = 'FT Distinct Values Problem';
  inputArr: number[] = [];
  outputArr: number[] = [];

  arr$: Observable<number[]>;

  constructor(service: AppService) {
    this.arr$ = service.arr$;

    this.arr$.subscribe(
      response => (
        this.inputArr = response
      ),
      error => console.log(error)
    );

    this.outputArr = service.getDistinctSortedValues();
  }
}
