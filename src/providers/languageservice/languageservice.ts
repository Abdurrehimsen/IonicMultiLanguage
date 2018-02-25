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
