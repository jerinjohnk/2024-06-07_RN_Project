/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView} from 'react-native';

import Demo1 from './src/Demo1';

/* Basic Components */
import ViewDemo from './src/components/basic/ViewDemo';
import TextDemo from './src/components/basic/TextDemo';
import ImageDemo from './src/components/basic/ImageDemo';
import {TextInputDemo} from './src/components/basic/TextInputDemo';
import ScrollViewDemo from './src/components/basic/ScrollViewDemo';
import StyleSheetDemo from './src/components/basic/StyleSheetDemo';

/* User Interfaces */
import ButtonDemo from './src/components/userInterface/ButtonDemo';
import SwitchDemo from './src/components/userInterface/SwitchDemo';

/* FlexBox */
import FlexDemo from './src/components/flexbox/FlexDemo';
import FlexDirectionBasics from './src/components/flexbox/FlexDirectionBasics';
import JustifyContentBasics from './src/components/flexbox/JustifyContentBasics';
import AlignItems from './src/components/flexbox/AlignItems';
import AlignSelf from './src/components/flexbox/AlignSelf';
import FlexWrap from './src/components/flexbox/FlexWrap';
import FlexShrinkBasisAndGrow from './src/components/flexbox/FlexShrinkBasisAndGrow';
import PositionLayout from './src/components/flexbox/PositionLayout';

import StatesDemo from './src/states/StatesDemo';

import APIDemo from './src/APIDemo';

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

      {/* ======================Flexbox====================== */}
      {/* <FlexDemo /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <JustifyContentBasics /> */}
      {/* <AlignItems /> */}
      {/* <AlignSelf /> */}
      {/* <FlexWrap /> */}
      {/* <FlexShrinkBasisAndGrow /> */}
      {/* <PositionLayout /> */}

      {/* <StatesDemo /> */}

      {/* <APIDemo /> */}
    </SafeAreaView>
  );
}

export default App;
