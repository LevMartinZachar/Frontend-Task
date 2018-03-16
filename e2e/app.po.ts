import { browser, by, element } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver'; // tslint:disable-line

export class AppPage /* CLI generated class name */ {
  navigateTo(): wdpromise.Promise<any> {
    return browser.get('/');
  }

  getParagraphText(): wdpromise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
