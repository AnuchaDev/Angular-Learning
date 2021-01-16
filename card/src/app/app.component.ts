import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl:
        'https://images.unsplash.com/photo-1437964706703-40b90bdf563b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Moutain',
      imageUrl:
        'https://images.unsplash.com/3/GoWildImages_MtEverest_NEP0555.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Neat tree',
      imageUrl:
        'https://images.unsplash.com/photo-1508789454646-bef72439f197?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
      username: 'biking',
      content: 'I did some biking today',
    },
  ];
}
