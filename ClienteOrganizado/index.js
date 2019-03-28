/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import createAppContainer from './src/Naivigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer);
