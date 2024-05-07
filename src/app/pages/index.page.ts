import {Component} from '@angular/core';
import * as contentful from 'contentful';

console.log(contentful);

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Analog with Contentful</h1>
    @if (hasCreateClient){
      <p>Contentful.createClient is available \\o/</p>
    } @else {
      <p>Contentful.createClient is not available :(</p>
    }
  `,
})
export default class HomeComponent {
  hasCreateClient = !!contentful.createClient;
}
