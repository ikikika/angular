import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class MediaItemService {
  
      constructor(private http: HttpClient) {}

      get() {
        return this.http.get<MediaItemsResponse>('mediaitems')
          .pipe(
            map((response: MediaItemsResponse) => {
              return response.mediaItems;
            })
          );
      }
    

      add(mediaItem){
        return this.http.post('mediaItems', mediaItem);
      }

      delete(mediaItem){
        return this.http.delete(`mediaItems/${mediaItem.id}`);
      }
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}
