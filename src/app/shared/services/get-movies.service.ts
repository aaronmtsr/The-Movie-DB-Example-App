import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  constructor(private http: HttpClient) {}

  getPopular(): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/popular?api_key=b165f6099cee3c18aa44970ba5b7c4f9&language=en-US&page=1'
    );
  }

  getProviders(movie_id: any): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' +
        `${movie_id}` +
        '/watch/providers?api_key=b165f6099cee3c18aa44970ba5b7c4f9'
    );
  }

  getTrailers(movie_id: any): any {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' +
        `${movie_id}` +
        '/videos?api_key=b165f6099cee3c18aa44970ba5b7c4f9&language=en-US'
    );
  }
}
