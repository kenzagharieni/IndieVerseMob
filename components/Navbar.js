import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { s } from '../styles';

export default function Navbar({ user, onSearch, searchValue, onNotifClick, onAvatarClick, onLogoClick, onCreatePost }) {
  return (
    <View style={s.navbar}>
      <TouchableOpacity onPress={onLogoClick}>
        <Text style={s.navLogo}>🎮 IndieVerse</Text>
      </TouchableOpacity>
      <View style={s.navSearchBox}>
        <Text style={{ fontSize: 13, marginRight: 4 }}>🔍</Text>
        <TextInput
          style={s.navSearchInput}
          placeholder="Search games, devs..."
          placeholderTextColor="#555"
          value={searchValue}
          onChangeText={onSearch}
        />
      </View>
      <View style={s.navActions}>
        <TouchableOpacity style={s.createBtn} onPress={onCreatePost}>
          <Text style={s.createBtnText}>✏️ Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.notifBtn} onPress={onNotifClick}>
          <Text style={{ fontSize: 16 }}>🔔</Text>
          <View style={s.notifBadge}>
            <Text style={s.notifBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={s.avatar} onPress={onAvatarClick}>
          <Text style={s.avatarText}>{user.charAt(0).toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}