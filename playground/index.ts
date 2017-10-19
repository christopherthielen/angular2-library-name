/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouterModule }  from '@uirouter/angular';

import { SampleModule }  from 'angular-library-name';

@Component({
  selector: 'app',
  template: `<sample-component></sample-component>`
})
class AppComponent {}

@Component({
  selector: 'statea',
  template: `StateA active!`
})
class StateAComponent {}

@Component({
  selector: 'stateb',
  template: `StateB active!`
})
class StateBComponent {}

export const states = [
  { name: 'statea', url: '/statea', component: StateAComponent },
  { name: 'stateb', url: '/stateb', component: StateBComponent },
]

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, StateAComponent, StateBComponent ],
  imports: [ BrowserModule, SampleModule, UIRouterModule.forRoot({ states }) ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
