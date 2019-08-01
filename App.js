import { createAppContainer,  createBottomTabNavigator } from 'react-navigation';

import PomodoroTimerScreen from './src/screens/PomodoroTimerScreen';
import ReportScreen from './src/screens/ReportScreen';

const TabMavigator = createBottomTabNavigator(
  {
    PomodoroTimerScreen: {screen: PomodoroTimerScreen},
    ReportScreen: {screen: ReportScreen}
  }
);

const App = createAppContainer(TabMavigator);

export default App;
