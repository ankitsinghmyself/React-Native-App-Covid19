import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {PaperProvider} from 'react-native-paper';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {persister, store} from './src/services/redux';
import {PersistGate} from 'redux-persist/integration/react';

const MainApp = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return <RootNavigator />;
};
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persister}>
        <PaperProvider>
          <MainApp />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
