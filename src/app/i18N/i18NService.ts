import { Injectable } from "@angular/core";

@Injectable()
export class I18NService {
    private static singleton: I18NService = null;
    private preferredLanguage: string = null;
    private availableLanguages: Array<string> = [];
    private defaultLanguage: string = "en";

    public static getInstance(): I18NService {
        if (I18NService.singleton === null) {
            I18NService.singleton = new I18NService();
        }

        return I18NService.singleton;
    }

    constructor() {
        this.updatePreferredLanguage();
    }

    public configure(configuration: I18NConfiguration): void {
        if (configuration.availableLanguages.indexOf(configuration.defaultLanguage) === -1) {
            throw new Error("[TRANSLATION ERROR]: Default language does not exist on the list of available languages!");
        }

        if (configuration.availableLanguages.indexOf(configuration.preferredLanguage) === -1) {
            throw new Error("[TRANSLATION ERROR]: Preferred language does not exist on the list of available languages!");
        }

        this.availableLanguages = configuration.availableLanguages;
        this.defaultLanguage = configuration.defaultLanguage;
        this.preferredLanguage = configuration.preferredLanguage;

        this.setPreferredLanguage(this.preferredLanguage);
    }

    public getPreferredLanguage(): string {
        return this.preferredLanguage;
    }

    public setPreferredLanguage(preferredLanguage: string): void {
        if (this.availableLanguages.indexOf(preferredLanguage) === -1) {
            console.error("[TRANSLATION WARNING]: Preferred language: '" + preferredLanguage +
            "' does not exist on the list ofavailable languages!");
            preferredLanguage = this.defaultLanguage;
        }

        if (this.preferredLanguage !== preferredLanguage) {
            this.preferredLanguage = preferredLanguage;
        }

        this.setLangAttr(this.preferredLanguage);
    }

    protected updatePreferredLanguage(): void {
        this.setLangAttr(this.preferredLanguage);
    }

    private setLangAttr(lang: string): void {
        if (!lang) {
            return;
        }
        const html = document.getElementsByTagName("html")[0];
        const htmlLang = html.getAttribute("lang");
        if (htmlLang && htmlLang !== lang) {
            html.setAttribute("lang", lang);
        }
    }

}

export interface I18N<T> {[langCode: string]: T; }

export interface I18NConfiguration {
    availableLanguages: Array<string>;
    defaultLanguage: string;
    preferredLanguage: string;
}
