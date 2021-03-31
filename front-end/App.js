/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ToastAndroid,
  Vibration,
  PermissionsAndroid,
  Platform
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Separator = () => {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const testepress = () => {
    console.log('oioioi');
  };

  const showToast = () => {
    ToastAndroid.show("Vaaai Bulbasauroo!!!", ToastAndroid.LONG, ToastAndroid.CENTER);
    Vibration.vibrate();
  };



  const ONE_SECOND_IN_MS = 1000;

  // const PATTERN = [
  //   1 * ONE_SECOND_IN_MS,
  //   2 * ONE_SECOND_IN_MS,
  //   3 * ONE_SECOND_IN_MS
  // ];

  // const PATTERN_DESC =
  //   Platform.OS === "android"
  //     ? "wait 1s, vibrate 2s, wait 3s"
  //     : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

  return (


    <ScrollView >
      <View style={styles.container}>
        {/* <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Editar o <Text style={styles.highlight}>App.js</Text> para editar a pagina principal. let's bora!
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */}
        <View style={styles.postContainer}>
          <Text onPress={() => Vibration.vibrate()}>  Amet enim in incididunt sit anim consectetur fugiat sit Lorem magna nostrud sit.</Text>
          <Button onPress={() => showToast()} style={{ marginVertical: 10, backgroundColor: Colors.black, borderRadius: 3 }} title="Entrar" />
          
        </View>
      </View>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333',

  },
  postContainer: {
    flex: 1,
    margin: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'

  }
});

export default App;
