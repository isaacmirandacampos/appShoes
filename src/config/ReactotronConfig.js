import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure({ host: '192.168.35' })
  .useReactNative()
  .connect();

console.tron = tron;
tron.clear();
