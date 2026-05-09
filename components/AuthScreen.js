import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { s } from '../styles';

export default function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (mode === 'login' && username.trim() && password.trim()) onLogin(username);
    else if (mode === 'signup' && username.trim() && email.trim() && password.trim()) onLogin(username);
  }

  return (
    <ScrollView style={s.screenBg} contentContainerStyle={[s.authWrap, { flexGrow: 1 }]}>
      <Text style={s.authLogo}>🎮</Text>
      <Text style={s.authTitle}>IndieVerse</Text>
      <Text style={s.authSub}>Discover. Test. Support.{'\n'}Indie games before they blow up.</Text>
      <View style={s.authStatsRow}>
        {[['128','Games'],['4.3K','Testers'],['23','Launched']].map(([num, label]) => (
          <View key={label}>
            <Text style={s.authStatNum}>{num}</Text>
            <Text style={s.authStatLabel}>{label}</Text>
          </View>
        ))}
      </View>
      <Text style={[s.authTitle, { fontSize: 22, marginBottom: 16 }]}>
        {mode === 'login' ? 'Log in to IndieVerse' : 'Join IndieVerse'}
      </Text>
      <TouchableOpacity style={s.authGoogleBtn}>
        <Text style={[s.authGoogleText, { fontWeight: '900' }]}>G</Text>
        <Text style={s.authGoogleText}>Continue with Google</Text>
      </TouchableOpacity>
      <View style={s.authDividerRow}>
        <View style={s.authDividerLine} />
        <Text style={s.authDividerText}>or</Text>
        <View style={s.authDividerLine} />
      </View>
      {mode === 'signup' && (
        <TextInput style={s.authInput} placeholder="Email" placeholderTextColor="#555" value={email}
          onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      )}
      <TextInput style={s.authInput} placeholder="Username" placeholderTextColor="#555" value={username}
        onChangeText={setUsername} autoCapitalize="none" />
      <TextInput style={s.authInput} placeholder="Password" placeholderTextColor="#555" value={password}
        onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={s.authBtn} onPress={handleSubmit}>
        <Text style={s.authBtnText}>{mode === 'login' ? 'Log In' : 'Create Account'}</Text>
      </TouchableOpacity>
      {mode === 'login' && <Text style={s.authForgot}>Forgot password?</Text>}
      <Text style={s.authSwitch}>
        {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
        <Text style={s.authSwitchLink} onPress={() => setMode(mode === 'login' ? 'signup' : 'login')}>
          {mode === 'login' ? 'Sign up' : 'Log in'}
        </Text>
      </Text>
    </ScrollView>
  );
}