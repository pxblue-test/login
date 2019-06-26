import { 
    createSwitchNavigator, 
    createStackNavigator, 
    createAppContainer 
} from 'react-navigation';

// Import the different pages for the application

// Main Pages
import HomeScreen from '../screens/Home';
import OtherScreen from '../screens/Other';

// Authorization workflow pages
import AuthLoadingScreen from '../screens/AuthLoading';
import SignInScreen from '../screens/SignIn';
import RegisterScreen from '../screens/Register';
import ForgotScreen from '../screens/Forgot';

// Application Navigator
const AppStack = createStackNavigator({ 
    Home: HomeScreen, 
    Other: OtherScreen 
},{initialRouteName: 'Home', headerMode: 'none'});

// Authorization Navigator
const AuthStack = createStackNavigator({ 
    SignIn: SignInScreen, 
    Register: RegisterScreen, 
    Forgot: ForgotScreen 
},{initialRouteName: 'SignIn', headerMode: 'none'});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));