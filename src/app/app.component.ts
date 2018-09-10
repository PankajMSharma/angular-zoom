import { Component } from "@angular/core";
import { I18NService } from "./i18N/i18NService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Zoom App";

  constructor(private i18nService: I18NService) {
    const availableLanguages = ["en"];
    const defaultLanguage = "en";
    let preferredLanguage = i18nService.getPreferredLanguage();
    if (preferredLanguage === null) {
      preferredLanguage = defaultLanguage;
    }

    this.i18nService.configure({
      availableLanguages: availableLanguages,
      defaultLanguage: defaultLanguage,
      preferredLanguage: preferredLanguage
  });
  }
}
