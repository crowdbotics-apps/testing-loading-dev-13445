import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212593Navigator from '../features/BlankScreen212593/navigator';
import BlankScreen112592Navigator from '../features/BlankScreen112592/navigator';
import BlankScreen012591Navigator from '../features/BlankScreen012591/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212593: { screen: BlankScreen212593Navigator },
BlankScreen112592: { screen: BlankScreen112592Navigator },
BlankScreen012591: { screen: BlankScreen012591Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
