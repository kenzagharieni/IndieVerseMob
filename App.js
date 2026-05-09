import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from './styles';
import AuthScreen from './components/AuthScreen';
import Navbar from './components/Navbar';
import HomeFeed from './components/HomeFeed';
import GameDetailPage from './components/GameDetailPage';
import DevProfilePage from './components/DevProfilePage';
import RightSidebar from './components/RightSidebar';
import NotifDropdown from './components/NotifDropdown';
import ProfileDropdown from './components/ProfileDropdown';
import CreatePostModal from './components/CreatePostModal';

const tabs = [
  { icon: '🏠', label: 'Home' },
  { icon: '🔥', label: 'Popular' },
  { icon: '🎮', label: 'Demos' },
  { icon: '🔖', label: 'Saved' },
  { icon: '📡', label: 'Following' },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedDev, setSelectedDev] = useState(null);
  const [search, setSearch] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  function handleDevClick(devName) { setSelectedDev(devName); setSelectedGame(null); }
  function handleCardClick(game) { setSelectedGame(game); setSelectedDev(null); }
  function handleBack() {
    if (selectedDev) setSelectedDev(null);
    else if (selectedGame) setSelectedGame(null);
  }

  if (!user) return (
    <SafeAreaProvider>
      <SafeAreaView style={s.screenBg} edges={['top']}>
        <AuthScreen onLogin={u => setUser(u)} />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={s.screenBg} edges={['top']}>

        <Navbar
          user={user}
          searchValue={search}
          onSearch={setSearch}
          onNotifClick={() => { setShowNotif(true); setShowProfile(false); }}
          onAvatarClick={() => { setShowProfile(true); setShowNotif(false); }}
          onLogoClick={() => { setSelectedGame(null); setSelectedDev(null); setActivePage('Home'); }}
          onCreatePost={() => setShowCreatePost(true)}
        />

        {showNotif && <NotifDropdown onClose={() => setShowNotif(false)} />}
        {showProfile && <ProfileDropdown user={user} onLogout={() => setUser(null)} onClose={() => setShowProfile(false)} />}
        {showCreatePost && <CreatePostModal onClose={() => setShowCreatePost(false)} />}

        <ScrollView style={s.flex1} contentContainerStyle={{ padding: 14 }}>
          {selectedDev
            ? <DevProfilePage devName={selectedDev} onBack={handleBack} onCardClick={handleCardClick} />
            : selectedGame
            ? <GameDetailPage game={selectedGame} onBack={handleBack} onDevClick={handleDevClick} />
            : (
              <>
                <HomeFeed onCardClick={handleCardClick} onDevClick={handleDevClick} search={search} />
                <RightSidebar />
              </>
            )}
        </ScrollView>

        <View style={s.bottomTab}>
          {tabs.map(tab => (
            <TouchableOpacity key={tab.label} style={s.tabItem}
              onPress={() => { setActivePage(tab.label); setSelectedGame(null); setSelectedDev(null); }}>
              <Text style={s.tabIcon}>{tab.icon}</Text>
              <Text style={activePage === tab.label ? s.tabLabelActive : s.tabLabel}>{tab.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}