import React from 'react';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import LogoSVG from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

export function Header(){
  return (
    <View style={styles.container}>
      <LogoSVG />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto
        imageUri='https://github.com/oseasmoreto.png'
        />
      </View>
    </View>
  );
}