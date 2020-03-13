import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Layout {
  id: number;
  layout_name: string;
  layout_config: string;
  layout_description: string;
  duration_start: string;
  duration_end: string;
}

export interface Widget {
  id: number;
  widget_name: string;
  url: string;
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
      'https://api-dell-dui.azurewebsites.net/api/layout/get'
    );
  }

  getActiveLayout(): Observable<any> {
    return this.http.get<Layout[]>(
      'https://api-dell-dui.azurewebsites.net/api/layout/active/get'
    );
  }

  addNewLayout(layout: Layout) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open('POST', 'https://api-dell-dui.azurewebsites.net/api/layout/upload?layout_name=' + layout.layout_name +
      '&layout_description=' + layout.layout_description +
      '&duration_start=2020-01-31%2018:56:00&duration_end=2020-04-10%2012:00:00&layout_config=' + JSON.stringify(layout.layout_config));

    xhr.send();
  }

  updateLayout(layout: Layout) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open('POST', 'https://api-dell-dui.azurewebsites.net/api/layout/upload?layout_name=' + layout.layout_name +
      '&layout_description=' + layout.layout_description +
      '&duration_start=2020-01-31%2018:56:00&duration_end=2020-04-10%2012:00:00&layout_config=' + JSON.stringify(layout.layout_config) +
      '&id=' + layout.id);

    xhr.send();
  }

}
