import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
