import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  checkWindowIndex(index:number){
    return Math.abs(this.currentPage - index)<5;
  }

  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      title:'At the Forest',
      url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the city',
      url:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the Snow',
      url:'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      title:'At the Forest',
      url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the city',
      url:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the Snow',
      url:'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      title:'At the Forest',
      url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the city',
      url:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the Snow',
      url:'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      title:'At the Forest',
      url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the city',
      url:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the Snow',
      url:'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      title:'At the Forest',
      url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the city',
      url:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title:'At the Snow',
      url:'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    }
  ];
}
