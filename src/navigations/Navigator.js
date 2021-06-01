import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import MenuPrincipal from '../screens/MenuPrincipal'

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    MenuPrincipal:{screen:MenuPrincipal},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);