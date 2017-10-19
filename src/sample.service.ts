import { Injectable } from '@angular/core';
import { UIRouter } from '@uirouter/angular';

@Injectable()
export class SampleService {

  constructor(router: UIRouter) {
    router.transitionService.onSuccess({}, trans => {
      console.log(`Transitioned to ${trans.to()}`)
    })
  }
}
