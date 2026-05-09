import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { s } from '../styles';

const notifs = [
  { icon: "⬆️", text: "Your post got 12 new upvotes", time: "2m ago" },
  { icon: "💬", text: "CosmicDreamer commented on Stellar Drift", time: "1h ago" },
  { icon: "🎮", text: "New demo available: Neon Blades v0.3", time: "3h ago" },
];

export default function NotifDropdown({ onClose }) {
  return (
    <Modal transparent animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity style={s.dropdownOverlay} activeOpacity={1} onPress={onClose}>
        <View style={[s.dropdownBox, { right: 70 }]}>
          <View style={s.dropdownHeader}>
            <Text style={s.dropdownHeaderText}>Notifications</Text>
            <TouchableOpacity onPress={onClose}><Text style={s.dropdownCloseText}>✕</Text></TouchableOpacity>
          </View>
          {notifs.map((n, i) => (
            <View key={i} style={s.notifItem}>
              <Text style={{ fontSize: 20 }}>{n.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={s.notifText}>{n.text}</Text>
                <Text style={s.notifTime}>{n.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}