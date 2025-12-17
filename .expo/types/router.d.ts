/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Hjem` | `/Hjem`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/ingredienser` | `/ingredienser`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/tilbud` | `/tilbud`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/modal`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Hjem` | `/Hjem`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/ingredienser` | `/ingredienser`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/tilbud` | `/tilbud`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/modal${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Hjem${`?${string}` | `#${string}` | ''}` | `/Hjem${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/ingredienser${`?${string}` | `#${string}` | ''}` | `/ingredienser${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/tilbud${`?${string}` | `#${string}` | ''}` | `/tilbud${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Hjem` | `/Hjem`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/ingredienser` | `/ingredienser`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/tilbud` | `/tilbud`; params?: Router.UnknownInputParams; };
    }
  }
}
