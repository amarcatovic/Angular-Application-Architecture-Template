/**
 * Http Methods for server calls
 */
 export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

/**
 * Token names for local or cookie storage
 */
export enum Tokens {
    ACCESS = '$access-token',
    REFRESH = '$refresh-token'
}

/**
 * Token save locations
 */
export enum TokenSaveLocation {
    COOKIE = 'cookie',
    LOCAL = 'localstorage'
}

/**
 * User key for saving to local storage or cookie
 */
export const USER_SAVE_KEY = 'user';

/**
 * Language settings
 */
export const LANGUAGE_SETTINGS = {
    LANGUAGE_FILES_LOCATION: '/assets/i18n/',
    LANGUAGE_FILES_TYPES: '.json',
    DEFAULT_LANUGAGE: 'en-US',
    LANGUAGE_COOKIE_SAVE_KEY: 'lang',
    SUPPORTED_LANGUAGES_ARRAY: ['en-US', 'nl', 'fr'],
    SUPPORTED_LANGUAGES: [
        {
            id: 1,
            name: "LANGUAGES.ENGLISH_LANGUAGE",
            abbreviation: "en-US",
            iconPath: "/assets/imgs/svg/flags/260-united-kingdom.svg"
        },
        {
            id: 2,
            name: "LANGUAGES.DUTCH_LANGUAGE",
            abbreviation: "nl",
            iconPath: "/assets/imgs/svg/flags/237-netherlands.svg"
        },
        {
            id: 3,
            name: "LANGUAGES.FRENCH_LANGUAGE",
            abbreviation: "fr",
            iconPath: "/assets/imgs/svg/flags/195-france.svg"
        }
    ]
}
