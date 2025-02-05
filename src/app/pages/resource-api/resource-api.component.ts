import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {

  apiBaseUrl: string = 'https://jsonplaceholder.typicode.com/users';

  http = inject(HttpClient);

  userList = rxResource({
    loader:() => {
      return this.http.get(this.apiBaseUrl);
    }
  })


  userListResource = resource({   // Need a feth Method because for using Promise
    loader:() => {
      return fetch(this.apiBaseUrl).then((res) => res.json() as Promise<any>)
    }
  })

}
