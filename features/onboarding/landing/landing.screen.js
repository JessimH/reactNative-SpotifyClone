import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import styles from './landing.styles'
import LandingButton from './components/landing-button'
import LandingButton1 from './components/landing-button1'
import LandingButton2 from './components/landing-button2'
import LandingSocialButton from './components/landing-social-button'

/*
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
*/

class Landing extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../../assets/background.png')}
        style={styles.main}
      >
        <Image
          source={require('../../../assets/spotify.png')}
          style={styles.logo}
        />
        <Text style={styles.titre}>
          Des millions de titres.{'\n'}Gratuits sur Spotify.
        </Text>
        <LandingButton />
        <LandingSocialButton type='google' />
        <LandingSocialButton />
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.textButton2}>Se connecter</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default Landing;
