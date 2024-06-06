/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlexStyle,
} from 'react-native';

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  showFlexDirection?: boolean;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
  showFlexDirection,
}: PreviewLayoutProps) => {
  const [flexDirection, setFlexDirection] = useState<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >('column');

  return (
    <View style={{padding: 10, flex: 1}}>
      <Text style={styles.label}>{label}</Text>

      {showFlexDirection ? (
        <View
          style={[
            styles.row,
            {paddingBottom: 12, justifyContent: 'center', gap: 16},
          ]}>
          <TouchableOpacity
            onPress={() => setFlexDirection('column')}
            style={[
              {backgroundColor: 'aliceblue', flex: 1},
              flexDirection === 'column' && styles.selectedFlex,
              {padding: 12},
            ]}>
            <Text
              style={[
                styles.buttonLabelFlex,
                flexDirection === 'column' && styles.selectedLabel,
              ]}>
              column
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFlexDirection('row')}
            style={[
              {backgroundColor: 'aliceblue', flex: 1},
              flexDirection === 'row' && styles.selectedFlex,
              {padding: 12},
            ]}>
            <Text
              style={[
                styles.buttonLabelFlex,
                flexDirection === 'row' && styles.selectedLabel,
              ]}>
              row
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.container,
            showFlexDirection ? {flexDirection} : {},
            {[label]: selectedValue},
          ]}>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  buttonLabelFlex: {
    fontSize: 18,
    fontWeight: '500',
    color: 'grey',
  },
  selectedLabel: {
    color: 'white',
  },
  selectedFlex: {
    backgroundColor: 'royalblue',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
export default PreviewLayout;
