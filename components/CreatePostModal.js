import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { s } from '../styles';
import { allTags, allStatuses } from '../data';

export default function CreatePostModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tag, setTag] = useState('Action');
  const [status, setStatus] = useState('Prototype');

  return (
    <Modal transparent animationType="slide" onRequestClose={onClose}>
      <View style={s.modalOverlay}>
        <View style={s.modal}>
          <TouchableOpacity style={s.modalClose} onPress={onClose}>
            <Text style={s.modalCloseText}>✕</Text>
          </TouchableOpacity>
          <Text style={s.modalTitle}>🎮 Submit Your Game</Text>
          <TextInput style={s.authInput} placeholder="Game Title" placeholderTextColor="#555" value={title} onChangeText={setTitle} />
          <TextInput style={[s.authInput, { minHeight: 90, textAlignVertical: 'top' }]}
            placeholder="Description..." placeholderTextColor="#555" value={desc}
            onChangeText={setDesc} multiline />
          <View style={s.createRow}>
            <View style={s.createField}>
              <Text style={s.createLabel}>Tag</Text>
              <View style={s.picker}>
                <Picker selectedValue={tag} onValueChange={setTag} dropdownIconColor="#fff" style={{ color: '#fff' }}>
                  {allTags.map((t, i) => <Picker.Item key={i} label={t} value={t} />)}
                </Picker>
              </View>
            </View>
            <View style={s.createField}>
              <Text style={s.createLabel}>Status</Text>
              <View style={s.picker}>
                <Picker selectedValue={status} onValueChange={setStatus} dropdownIconColor="#fff" style={{ color: '#fff' }}>
                  {allStatuses.map((st, i) => <Picker.Item key={i} label={st} value={st} />)}
                </Picker>
              </View>
            </View>
          </View>
          <TouchableOpacity style={s.authBtn} onPress={onClose}>
            <Text style={s.authBtnText}>Post Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}