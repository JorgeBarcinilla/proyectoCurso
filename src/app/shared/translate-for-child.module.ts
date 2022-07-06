import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Función que se encarga de cargar el archivo de traducciones en rutas.
 *
 * @param {HttpClient} http - Instancia de HttpClient. Ver mas en @see https://angular.io/api/common/http
 * @returns {TranslateLoader} - Instancia de TranslateLoader. Ver mas en @see https://github.com/ngx-translate/core
 */
export const HttpLoaderFactory = (http: HttpClient): TranslateLoader => new TranslateHttpLoader(http);

/**
 *
 */
@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class TranslateForChildModule {}
