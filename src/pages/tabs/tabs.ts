import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';
import { LanguageserviceProvider } from '../../providers/languageservice/languageservice';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  languages = ["tr", "en"];
  selectedlang:string = "tr";

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(translate: TranslateService, public langserv : LanguageserviceProvider) {
    langserv.getdefaultlang();
    console.log(langserv.defaultlang);
  	translate.setDefaultLang(langserv.defaultlang);    
  }

  changelang(){
    this.langserv.changelang(this.selectedlang);
  }

}
