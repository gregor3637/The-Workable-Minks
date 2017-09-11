import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './../services/auth.service';
import { WebService } from './../services/web.service';

@NgModule({
  providers: [
    AuthService,
    WebService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if(parent) {
      throw new Error('Core module is already provided elsewhere!');
    }
  }
}
