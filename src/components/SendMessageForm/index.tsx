import React, { useState } from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {
  TextInput,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  //CORREÇAO PARA IOS 
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;

  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
      <View 
      style={styles.container}>
        <TextInput
          keyboardAppearance="dark"
          placeholder="Qual a sua expectativa para o evento"
          placeholderTextColor={COLORS.GRAY_PRIMARY}
          multiline
          maxLength={140}
          onChangeText={setMessage}
          value={message}
          style={styles.input}
          editable={!sendingMessage}
        >

        </TextInput>
        <Button
          title="ENVIAR MENSAGEM"
          backgroundColor={COLORS.PINK}
          color={COLORS.WHITE}
          />
      </View>
      </KeyboardAvoidingView>
  );
}