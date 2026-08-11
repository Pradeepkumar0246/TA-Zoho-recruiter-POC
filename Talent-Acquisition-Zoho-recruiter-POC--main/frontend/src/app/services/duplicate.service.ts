import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, of, tap } from 'rxjs';

import { DuplicateGroupedResponse, DuplicatePairItem } from '../models/duplicate.models';

@Injectable({
  providedIn: 'root',
})
export class DuplicateService {
  private readonly apiBaseUrl = 'http://localhost:8000/api/v1';

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly errorSubject = new BehaviorSubject<string | null>(null);

  readonly loading$ = this.loadingSubject.asObservable();
  readonly error$ = this.errorSubject.asObservable();

  constructor(private readonly httpClient: HttpClient) {}

  listGroupedDuplicates(): Observable<DuplicateGroupedResponse | null> {
    this.loadingSubject.next(true);

    return this.httpClient.get<DuplicateGroupedResponse>(`${this.apiBaseUrl}/duplicates`).pipe(
      tap(() => this.errorSubject.next(null)),
      catchError(() => {
        this.errorSubject.next('Unable to load duplicate review data');
        return of(null);
      }),
      finalize(() => this.loadingSubject.next(false))
    );
  }

  markReviewed(duplicateId: string): Observable<DuplicatePairItem | null> {
    this.loadingSubject.next(true);

    return this.httpClient.patch<DuplicatePairItem>(`${this.apiBaseUrl}/duplicates/${duplicateId}/review`, {}).pipe(
      tap(() => this.errorSubject.next(null)),
      catchError((error) => {
        this.errorSubject.next(error?.error?.message || 'Unable to update duplicate review status');
        return of(null);
      }),
      finalize(() => this.loadingSubject.next(false))
    );
  }
}
