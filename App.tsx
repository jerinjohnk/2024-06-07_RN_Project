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
import FlexDemo from './src/components/flexbox/FlexDemo';
import JustifyContentBasics from './src/components/flexbox/JustifyContentBasics';
import FlexDirectionBasics from './src/components/flexbox/FlexDirectionBasics';
import AlignItems from './src/components/flexbox/AlignItems';
import AlignSelf from './src/components/flexbox/AlignSelf';
import FlexWrap from './src/components/flexbox/FlexWrap';
import FlexShrinkBasisAndGrow from './src/components/flexbox/FlexShrinkBasisAndGrow';
import PositionLayout from './src/components/flexbox/PostionLayout';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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

      {/* ======================Flexbox====================== */}
      {/* <FlexDemo /> */}

      {/* <FlexDirectionBasics /> */}

      {/* <JustifyContentBasics /> */}

      {/* <AlignItems /> */}

      {/* <AlignSelf /> */}

      {/* <FlexWrap /> */}

      {/* <FlexShrinkBasisAndGrow /> */}

      {/* <PositionLayout /> */}
    </SafeAreaView>
  );
}

export default App;
