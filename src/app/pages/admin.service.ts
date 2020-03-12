import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Layout {
  id: number;
  layout_name: string;
  layout_config: string;
}

export interface Widget {
  id: number;
  widget_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  listOfWidgets: Widget[];
  listOfLayouts: Layout[];

  getWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(
      'https://api-dell-dui.azurewebsites.net/api/widgets/get'
    );
  }

  getLayouts(): Observable<any> {
    return this.http.get<Layout[]>(
      'https://api-dell-dui.azurewebsites.net/api/layout/active/get'
    );
  }

}
