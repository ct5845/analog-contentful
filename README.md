# [Analog](https://analogjs.org/) and [Contentful](https://www.contentful.com/)

Simple repo using Analog and Contentful.

Steps taken

```
npm create analog@latest
npm i --save contentful
```

* Update ``src/app/pages/index.page.ts`` to just a title.
At this point build runs fine, and ng start does too.

* Update ``src/app/pages/index.page.ts`` to use Contentful.
```
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
```
