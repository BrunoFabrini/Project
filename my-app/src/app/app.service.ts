import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // example array
  // Give an array of integers find the Distinct values, sort ascending order and write those values to the dom
  //private arrTimeout = 1000;
  private arrTimeout = 1;
  private arr: number[] = [5, 10, 9, 5, 7, 9, 3, 4, 5, 1, 1, 9, 9, 7, 8];
  public arr$: Observable<number[]> = interval(this.arrTimeout)
    .pipe(
      take(this.arr.length + 1),
      map(i => this.arr.slice(0, i))
    );

  constructor() {
  }

  private getDistinctValues(array: number[]) : number[] 
  {
    var distinctNumbers: number[] = array.filter((a, b) => array.indexOf(a) === b);
    return distinctNumbers;
  }

  private sortAscendingValues(array: number[]) : number[]
  {
    var sortedArray = array.sort((a, b) => (a > b ? -1 : 1));
    return sortedArray;
  }

  public getDistinctSortedValues(): number[]
  {
    return this.sortAscendingValues(this.getDistinctValues(this.arr));
  }

}