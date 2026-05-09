import React from 'react';
import { View, Text } from 'react-native';
import { s } from '../styles';
import { gamesData } from '../data';

export default function RightSidebar() {
  return (
    <View style={{ marginTop: 8 }}>
      <View style={s.sideCard}>
        <Text style={s.sideTitle}>🔥 Trending</Text>
        {gamesData.map((game, i) => (
          <View key={i} style={s.trendItem}>
            <Text style={s.trendRank}>#{i + 1}</Text>
            <View>
              <Text style={s.trendTitle}>{game.title}</Text>
              <Text style={s.trendSub}>{game.upvotes} upvotes</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={s.sideCard}>
        <Text style={s.sideTitle}>📊 Platform Stats</Text>
        {[['🎮 Games Listed','128'],['👾 Testers','4,320'],['💬 Feedbacks','9,841'],['🚀 Launched','23']].map(([label, val]) => (
          <View key={label} style={s.statRow}>
            <Text style={s.statLabel}>{label}</Text>
            <Text style={s.statVal}>{val}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}