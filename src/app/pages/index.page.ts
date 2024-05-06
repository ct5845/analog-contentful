import {Component} from '@angular/core';
import * as contentful from 'contentful';

console.log(contentful);

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Analog with Contentful</h1>`,
})
export default class HomeComponent {
}
