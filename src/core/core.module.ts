import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: [
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule ya ha sido cargado. Importa este módulo solo en AppModule.');
    }
  }
}
