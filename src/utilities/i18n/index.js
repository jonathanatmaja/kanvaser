import I18n from 'react-native-redux-i18n';
import translations from './translations';

I18n.fallbacks = true;
I18n.locale = 'id';
I18n.defaultLocale = 'id';
I18n.translations = translations;

export default I18n;
