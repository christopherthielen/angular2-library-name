import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `
    <h1>Sample component</h1>
    <a uiSrefActive="active" uiSref="statea">Activate 'StateA'</a>
    <a uiSrefActive="active" uiSref="stateb">Activate 'StateB'</a>

    <ui-view></ui-view>
  `
})
export class SampleComponent {

  constructor() {
  }

}
