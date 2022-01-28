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
          <Text style={styles.twoMiles}>
          2 miles away
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.profileBottom}>
        <View style={styles.profileBT}>
          <Text style={styles.hotTake}>
          My hottest take
          </Text>
        </View>
        <View style={styles.profileBB}>
          <Image source={require('./assets/Icons/player_light.png')} style={styles.player}/>
          <Image source={require('./assets/Icons/audio_waveform_light.png')} style={styles.audio}/>
        </View>
      </View>
      <View style={styles.bottomActionItems}>
        <View style={styles.actionImages}>
          <Image source={require('./assets/Icons/discover_light.png')} style={styles.actionItems}/>
          <Image source={require('./assets/Icons/heart_light.png')} style={styles.actionItems}/>
          <Image source={require('./assets/Icons/messages_light.png')} style={styles.actionItems}/> 
        </View>
        <View style={styles.actionText}>
          <Text style={styles.smallText}>
          Discover 
          </Text>
          <Text style={styles.smallText}>
          Matches 
          </Text>
          <Text style={styles.smallText}>
          DMs 
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    justifyContent: 'flex-start', 
    flexDirection: 'column',
  },
  navBar: {
    display: 'flex',
    height: '10%',
    backgroundColor: Themes.light.bg,
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
    height: '47%',
    width: '90%',
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    // back shadowing
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },
  MTLpic: {
    height: '100%',
    width: '100%',
    resizeMode:'cover',
    borderRadius: 10,
  },
  imageBackMTL: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  MTL: {
    fontSize: 32,
    fontFamily: 'Sydney',
    position: 'absolute',
    left: 10,
    top: 5,
    color: 'white',
  },
  twoMiles: {
    fontSize: 18,
    fontFamily: 'Sydney',
    position: 'absolute',
    left: 10,
    bottom: 5,
    color: 'white',
  },
  profileBottom: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    height: '20%',
    width: '90%',
    borderRadius: 30,
    // takes up all the space it can in the main axis pushing the bottom items to the bottom
    marginBottom: 'auto',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // back shadowing
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },
  profileBT: {
    display: 'flex',
    height: '30%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: Themes.light.bgSecondary,
  },
  profileBB: {
    display: 'flex',
    height: '55%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Themes.light.bgSecondary,
  },
  hotTake: {
    fontSize: 28,
    fontFamily: 'Sydney',
    color: Themes.light.text,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 30,
    top: 10,
  },
  audio: {
    resizeMode: 'contain',
    height: '50%',
    width: '70%',
  },
  player: {
    resizeMode: 'contain',
    height: '80%',
    width: '15%',
  },
  bottomActionItems: {
    display: 'flex',
    height: '10%',
    flexDirection: "column",
    backgroundColor: Themes.light.navigation,
  },
  actionImages: {
    display: 'flex',
    height: '70%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Themes.light.navigation,
  },
  actionItems: {
    resizeMode: 'contain',
    height: 45,
    width: 40,
  },
  actionText: {
    display: 'flex',
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    right: 9,
    bottom: 5,
    backgroundColor: Themes.light.text,
  },
  smallText: {
    fontSize: 20,
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
  },
  navItems: {
    resizeMode: 'contain',
    height: 40,
    width: 40,
  }
});
