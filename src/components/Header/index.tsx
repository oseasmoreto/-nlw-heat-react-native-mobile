import React from 'react';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

import LogoSVG from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

export function Header(){
  const {user, signOut} = useAuth();
  return (
    <View style={styles.container}>
      <LogoSVG />

      <View style={styles.logoutButton}>
        <TouchableOpacity
        onPress={signOut}
        >
          {user && <Text style={styles.logoutText}>Sair</Text>}
        </TouchableOpacity>

        <UserPhoto
        imageUri={user?.avatar_url}
        />
      </View>
    </View>
  );
}