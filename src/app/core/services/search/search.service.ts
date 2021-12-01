import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, filter, debounceTime, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  /**
   * Filters data array
   * @param searchTerm - what user inputs
   * @param property - what property we are searching
   * @param data - data array
   * @returns - filtered array
   */
  search(searchTerm: FormControl, property: string, data: Observable<any[]>): Observable<any[]> {
    return data.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(data => data.filter(item => item[property].toLowerCase().includes(searchTerm.value.toLowerCase())))
    );
  }
}
