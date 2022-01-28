import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Image source={require('./assets/Icons/menu_light.png')} style={styles.navItems}/>
        <Text style={styles.ensom}>
        ensom
        </Text>
        <Image source={require('./assets/Icons/sun.png')} style={styles.navItems}/>
      </View>
      <View style={styles.profileTop}>
        <ImageBackground source={require('./assets/Profiles/mtl.jpg')} style={styles.imageBackMTL} imageStyle={styles.MTLpic}>
          <Text style={styles.MTL}>
          MTL
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.profileBottom}>
        <Text style={styles.hotTake}>
        My hottest take...
        </Text>
        <Image source={require('./assets/Icons/player_light.png')} style={styles.player}/>
        <Image source={require('./assets/Icons/audio_waveform_light.png')} style={styles.audio}/>
      </View>
      <View style={styles.bottomActionItems}>
        <View style={styles.actionImages}>
          <Image source={require('./assets/Icons/discover_light.png')} style={styles.actionItems}/>
          <Image source={require('./assets/Icons/heart_light.png')} style={styles.actionItems}/>
          <Image source={require('./assets/Icons/messages_light.png')} style={styles.actionItems}/> 
        </View>
        <View style={styles.actionItems}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    justifyContent: 'flex-start', 
    flexDirection: 'column',
  },
  navBar: {
    display: 'flex',
    height: '10%',
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ensom: {
    fontSize: 32,
    fontFamily: 'Sydney-Bold',
    color: 'black',
  },
  profileTop: {
    display: 'flex',
    height: '50%',
    width: '90%',
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  MTLpic: {
    height: '100%',
    width: '100%',
    resizeMode:'contain',
  },
  imageBackMTL: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'red',
  },
  MTL: {
    fontSize: 20,
    fontFamily: 'Sydney',
    position: 'absolute',
  },
  profileBottom: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    height: '17%',
    width: '90%',
    borderRadius: 50,
    // takes up all the space it can in the main axis pushing the bottom items to the bottom
    marginBottom: 'auto',
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  hotTake: {
    fontSize: 32,
    fontFamily: 'Sydney',
    color: 'black',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  audio: {
    resizeMode: 'contain',
    height: '40%',
    width: '60%',
  },
  player: {
    resizeMode: 'contain',
    height: '40%',
    width: '40%',
  },
  bottomActionItems: {
    display: 'flex',
    height: '10%',
    flexDirection: "column",
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  actionImages: {
    display: 'flex',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  actionItems: {
    resizeMode: 'contain',
    height: 45,
    width: 40,
  },
  actionText: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  navItems: {
    resizeMode: 'contain',
    height: 40,
    width: 40,
  }
});
