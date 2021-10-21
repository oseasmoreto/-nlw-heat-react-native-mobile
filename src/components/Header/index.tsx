import React from 'react';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import LogoSVG from '../../assets/logo.svg';

export function Header(){
  return (
    <View style={styles.container}>
      <LogoSVG />

      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}