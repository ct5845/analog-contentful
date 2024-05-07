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
```typescript
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
```

- Update vite.config.ts (add SSR and optimizeDeps) and comment resolve?
```typescript
  ssr: {
    noExternal: ['contentful' ],
    optimizeDeps: {
      include: ['contentful']
    },
  },
  resolve: {
    // mainFields: ['module'],
  },
```
