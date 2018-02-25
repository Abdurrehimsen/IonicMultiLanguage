
```bash
$ npm install @ngx-translate/core @ngx-translate/http-loader --save
```

```typescript
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule.forRoot()
  ]
})
```

daha sonra app/app.module.ts içine
```typescript
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LanguageserviceProvider } from '../providers/languageservice/languageservice';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
```

ve 


```typescript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  
``` 
importlarını ekliyoruz. Ve import işlemini tamamlıyoruz. Bu servis çevirilere bakarken ilk olarak assets/i18n dizinine bakacağı için hemen bu dizini oluşturup içine iki dil çevirileri ekliyoruz. (tr, en)

#### Page içinde kullanımı

```typescript
import { TranslateService } from '@ngx-translate/core';
...

constructor(public http: HttpClient, public translate: TranslateService) {
    console.log('Hello LanguageserviceProvider Provider');
    this.translate.setDefaultLang("tr"); //default lang
    console.log(this.translate.defaultLang) // get default lang
  }
```

```html
...
<ion-label>{{ 'Age' | translate }}</ion-label>
...
```

## Uygulama dili ayarı için servis

Önce servisi oluşturulur

```bash
$ ionic g provider Languageservice
```

#### Bu servisin son hali

```typescript

import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

/*
  Generated class for the LanguageserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LanguageserviceProvider {

  defaultlang : string

  constructor(public http: HttpClient, public translate: TranslateService) {
    console.log('Hello LanguageserviceProvider Provider');
    this.defaultlang = "tr"
  }

  getdefaultlang(){
  	this.defaultlang = "tr";
  }

  changelang(lang : string){
  	this.translate.setDefaultLang(lang);
  	console.log("changelang func");
  	console.log(this.translate.defaultLang)
  }
}

```

Uygulamada anasayfa tabs olduğu için dil ayarı orada düşünüldü. Yapılan işlemlerin kodları : 
 
```typescript
...
import { LanguageserviceProvider } from '../../providers/languageservice/languageservice';
...

constructor(translate: TranslateService, public langserv : LanguageserviceProvider) {
    langserv.getdefaultlang();
    console.log(langserv.defaultlang);
  	translate.setDefaultLang(langserv.defaultlang);    
  }

  changelang(){
    this.langserv.changelang(this.selectedlang);
  }

```

## Ekran Fotoları

![alt text](http://res.cloudinary.com/diit0qzwp/image/upload/v1519588760/WhatsApp_Image_2018-02-25_at_22.46.26_gylmoy.jpg)


![alt text](http://res.cloudinary.com/diit0qzwp/image/upload/v1519588771/WhatsApp_Image_2018-02-25_at_22.46.47_wdwiwk.jpg)


![alt text](http://res.cloudinary.com/diit0qzwp/image/upload/v1519588779/WhatsApp_Image_2018-02-25_at_22.47.06_t6y120.jpg)
