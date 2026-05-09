import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { s } from '../styles';
import { developersData, gamesData, getStatusColor } from '../data';

export default function DevProfilePage({ devName, onBack, onCardClick }) {
  const dev = developersData[devName];
  const devGames = gamesData.filter(g => g.developer === devName);
  const [followed, setFollowed] = useState(false);
  const [followerCount, setFollowerCount] = useState(dev.followers);

  function handleFollow() {
    if (followed) { setFollowerCount(c => c - 1); setFollowed(false); }
    else { setFollowerCount(c => c + 1); setFollowed(true); }
  }

  return (
    <View>
      <TouchableOpacity style={s.backBtn} onPress={onBack}>
        <Text style={s.backBtnText}>← Back</Text>
      </TouchableOpacity>

      {/* Hero */}
      <View style={s.devHero}>
        <View style={s.devAvatar}><Text style={s.devAvatarText}>{dev.avatar}</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={s.devName}>{dev.name}</Text>
          <Text style={s.devBio}>{dev.bio}</Text>
          <View style={s.devStats}>
            {[
              [followerCount.toLocaleString(), 'Followers'],
              [devGames.length, 'Games'],
              [devGames.reduce((a, g) => a + g.upvotes, 0), 'Upvotes'],
            ].map(([num, label]) => (
              <View key={label}>
                <Text style={s.devStatNum}>{num}</Text>
                <Text style={s.devStatLabel}>{label}</Text>
              </View>
            ))}
          </View>
          <View style={[s.devActions, { marginTop: 8 }]}>
            <TouchableOpacity style={[s.followBtn, followed && s.followBtnFollowed]} onPress={handleFollow}>
              <Text style={[s.followBtnText, followed && s.followBtnTextFollowed]}>
                {followed ? '✓ Following' : '+ Follow'}
              </Text>
            </TouchableOpacity>
            {dev.twitter && (
              <TouchableOpacity style={s.socialLink} onPress={() => Linking.openURL(dev.twitter)}>
                <Text style={[s.socialLinkText, { color: '#fff' }]}>𝕏</Text>
              </TouchableOpacity>
            )}
            {dev.itchio && (
              <TouchableOpacity style={s.socialLink} onPress={() => Linking.openURL(dev.itchio)}>
                <Text style={[s.socialLinkText, { color: '#fa5c5c' }]}>itch.io</Text>
              </TouchableOpacity>
            )}
            {dev.discord && (
              <TouchableOpacity style={s.socialLink} onPress={() => Linking.openURL(dev.discord)}>
                <Text style={[s.socialLinkText, { color: '#7289da' }]}>Discord</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* Quick Info */}
      <View style={s.sideCard}>
        <Text style={s.sideTitle}>👾 Quick Info</Text>
        {[
          ['🎮 Games', devGames.length],
          ['👥 Followers', followerCount.toLocaleString()],
          ['⬆️ Upvotes', devGames.reduce((a, g) => a + g.upvotes, 0)],
          ['💬 Comments', devGames.reduce((a, g) => a + g.comments, 0)],
        ].map(([label, val]) => (
          <View key={label} style={s.statRow}>
            <Text style={s.statLabel}>{label}</Text>
            <Text style={s.statVal}>{val}</Text>
          </View>
        ))}
      </View>

      {/* Games list */}
      <View style={s.detailSection}>
        <Text style={s.sectionTitle}>🎮 Games by {dev.name}</Text>
        {devGames.map(game => (
          <TouchableOpacity key={game.id} style={s.devGameCard} onPress={() => onCardClick(game)}>
            <View style={s.devGameThumb}><Text style={s.devGameThumbText}>{game.thumbnail}</Text></View>
            <View style={{ flex: 1 }}>
              <View style={[s.cardStatus, { backgroundColor: getStatusColor(game.status), alignSelf: 'flex-start', marginBottom: 4 }]}>
                <Text style={{ fontSize: 10, fontWeight: '700', color: '#000' }}>{game.status}</Text>
              </View>
              <Text style={s.devGameTitle}>{game.title}</Text>
              <Text style={s.devGameDesc} numberOfLines={2}>{game.description}</Text>
              <View style={[s.tagsRow, { marginTop: 4 }]}>
                {game.tags.map((tag, i) => <View key={i} style={s.tag}><Text style={s.tagText}>{tag}</Text></View>)}
              </View>
              <View style={s.devGameMeta}>
                <Text style={s.devGameMetaText}>⬆️ {game.upvotes}</Text>
                <Text style={s.devGameMetaText}>💬 {game.comments}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}