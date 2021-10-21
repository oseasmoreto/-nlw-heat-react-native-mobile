import React from 'react';

import {
  ScrollView,
  View
} from 'react-native';

import { styles } from './styles';

import { Message } from '../Message';

export function MessageList(){
  const message = {
    id: '1',
    text: 'Pewpewpew',
    user: {
      name: 'Oseas Moreto',
      avatar_url: 'https://github.com/oseasmoreto.png',
    }
  };
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}