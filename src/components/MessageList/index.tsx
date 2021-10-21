import React, { useState, useEffect } from 'react';
import {api} from '../../services/api'

import {
  ScrollView,
  View
} from 'react-native';

import { styles } from './styles';

import { Message, MessageProps } from '../Message';

export function MessageList(){
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages(){
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
      setCurrentMessages(messagesResponse.data);
    };

    fetchMessages();
  }, []);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => <Message key={message.id} data={message} />)}
    </ScrollView>
  );
}