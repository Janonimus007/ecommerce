// import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import {MainNavigation} from './src/routes/MainNavigation';
import { store } from './src/store/store';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
    <Provider store={store}>
      <MainNavigation />
        
    </Provider>  
 <Toast/>     
    </>

  );
}


