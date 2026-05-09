import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { s } from '../styles';

export default function ProfileDropdown({ user, onLogout, onClose }) {
  return (
    <Modal transparent animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity style={s.dropdownOverlay} activeOpacity={1} onPress={onClose}>
        <View style={[s.dropdownBox, { right: 14, minWidth: 200 }]}>
          <View style={s.dropdownHeader}>
            <Text style={s.dropdownHeaderText}>👤 {user}</Text>
            <TouchableOpacity onPress={onClose}><Text style={s.dropdownCloseText}>✕</Text></TouchableOpacity>
          </View>
          {[['🎮 My Games', null], ['🔖 Saved', null], ['⚙️ Settings', null]].map(([label], i) => (
            <TouchableOpacity key={i} style={s.menuItem}>
              <Text style={s.menuItemText}>{label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={[s.menuItem, s.menuItemLogout]} onPress={onLogout}>
            <Text style={s.menuItemLogoutText}>🚪 Log Out</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}