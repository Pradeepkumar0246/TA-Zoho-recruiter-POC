import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, map, of, switchMap, tap } from 'rxjs';

import { SaveFilterRequest, SavedFilterItem } from '../models/saved-filter.models';

@Injectable({
  providedIn: 'root',
})
export class SavedFilterService {
  private readonly apiBaseUrl = 'http://localhost:8000/api/v1';

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly errorSubject = new BehaviorSubject<string | null>(null);
  private readonly savedFiltersSubject = new BehaviorSubject<SavedFilterItem[]>([]);

  readonly loading$ = this.loadingSubject.asObservable();
  readonly error$ = this.errorSubject.asObservable();
  readonly savedFilters$ = this.savedFiltersSubject.asObservable();

  constructor(private readonly httpClient: HttpClient) {}

  listSavedFilters(): Observable<SavedFilterItem[]> {
    this.loadingSubject.next(true);

    return this.httpClient.get<SavedFilterItem[]>(`${this.apiBaseUrl}/saved-filters`).pipe(
      tap((items) => {
        this.savedFiltersSubject.next(items);
        this.errorSubject.next(null);
      }),
      catchError(() => {
        this.errorSubject.next('Unable to load saved filters');
        return of([]);
      }),
      finalize(() => this.loadingSubject.next(false))
    );
  }

  createSavedFilter(request: SaveFilterRequest): Observable<SavedFilterItem | null> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    return this.httpClient.post<SavedFilterItem>(`${this.apiBaseUrl}/saved-filters`, request).pipe(
      switchMap((created) =>
        this.httpClient.get<SavedFilterItem[]>(`${this.apiBaseUrl}/saved-filters`).pipe(
          tap((items) => {
            this.savedFiltersSubject.next(items);
            this.errorSubject.next(null);
          }),
          map(() => created)
        )
      ),
      catchError((error) => {
        this.errorSubject.next(error?.error?.message || 'Unable to save filter template');
        return of(null);
      }),
      finalize(() => this.loadingSubject.next(false))
    );
  }
}
