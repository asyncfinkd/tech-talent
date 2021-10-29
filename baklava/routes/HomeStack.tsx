import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/index/IndexScreen";
import EducationScreen from "../screens/education/EducationScreen";

const screens = {
  Home: {
    screen: Home,
  },
  Education: {
    screen: EducationScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
