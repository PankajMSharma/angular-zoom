import {I18N} from "./I18NService";

export const applicationI18NEn = {
    tooltip: {
        selectZoom : "Select Zoom Level"
    }
};

export type ApplicationI18N = typeof applicationI18NEn;

export const applicationI18N: I18N<ApplicationI18N> = {
    en: applicationI18NEn
};
