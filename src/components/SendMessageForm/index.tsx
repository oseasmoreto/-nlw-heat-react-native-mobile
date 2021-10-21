import React, { useState } from 'react';
import {Alert, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';

import {
  TextInput,
  View
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){

  //CORREÇAO PARA IOS 
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;

  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit(){
    const messageFormatted = message.trim();

    if(messageFormatted.length == 0){
      Alert.alert('Escreva a mensagem para enviar.');
      return;
    }

    setSendingMessage(true);

    api.post('/messages', {message: messageFormatted});

    setMessage('');
    Keyboard.dismiss();
    setSendingMessage(false);
    Alert.alert('Mensagem enviada com sucesso.');
  }

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
          isLoading={sendingMessage}
          onPress={handleMessageSubmit}
          />
      </View>
      </KeyboardAvoidingView>
  );
}