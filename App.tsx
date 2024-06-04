/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

// import Demo1 from './src/Demo1';

/* Basic Components */
// import ViewDemo from './src/components/basic/ViewDemo';
// import TextDemo from './src/components/basic/TextDemo';
// import ImageDemo from './src/components/basic/ImageDemo';
// import {TextInputDemo} from './src/components/basic/TextInputDemo';
// import ScrollViewDemo from './src/components/basic/ScrollViewDemo';
// import StyleSheetDemo from './src/components/basic/StyleSheetDemo';

/* User Interfaces */
// import ButtonDemo from './src/components/userInterface/ButtonDemo';
// import SwitchDemo from './src/components/userInterface/SwitchDemo';

import APIDemo from './src/APIDemo';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Demo1 /> */}
      {/* <ViewDemo /> */}
      {/* <TextDemo /> */}
      {/* <ImageDemo /> */}
      {/* <TextInputDemo /> */}
      {/* <ScrollViewDemo /> */}
      {/* <StyleSheetDemo /> */}

      {/* <ButtonDemo /> */}
      {/* <SwitchDemo /> */}

      <APIDemo />
    </SafeAreaView>
  );
}

export default App;
