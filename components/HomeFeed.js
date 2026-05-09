import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { s } from '../styles';
import { gamesData, allTags, allStatuses, getStatusColor } from '../data';
import GameCard from './GameCard';

export default function HomeFeed({ onCardClick, onDevClick, search }) {
  const [activeTag, setActiveTag] = useState('');
  const [activeStatus, setActiveStatus] = useState('');
  const [sort, setSort] = useState('🔥 Hot');

  const filtered = gamesData.filter(game => {
    const matchSearch = game.title.toLowerCase().includes(search.toLowerCase()) ||
      game.developer.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === '' || game.tags.includes(activeTag);
    const matchStatus = activeStatus === '' || game.status === activeStatus;
    return matchSearch && matchTag && matchStatus;
  });

  return (
    <View>
      {/* Filters */}
      <View style={s.filterWrap}>
        <View style={s.filterRow}>
          <Text style={s.filterLabel}>Tag:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={s.chipsRow}>
              {['', ...allTags].map((tag, i) => (
                <TouchableOpacity key={i} style={[s.chip, activeTag === tag && s.chipActive]}
                  onPress={() => setActiveTag(activeTag === tag ? '' : tag)}>
                  <Text style={[s.chipText, activeTag === tag && s.chipTextActive]}>
                    {tag === '' ? 'All' : tag}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={s.filterRow}>
          <Text style={s.filterLabel}>Status:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={s.chipsRow}>
              {['', ...allStatuses].map((st, i) => {
                const isActive = activeStatus === st;
                return (
                  <TouchableOpacity key={i}
                    style={[s.chip, isActive && (st === '' ? s.chipActive : { backgroundColor: getStatusColor(st), borderColor: getStatusColor(st) })]}
                    onPress={() => setActiveStatus(activeStatus === st ? '' : st)}>
                    <Text style={[s.chipText, isActive && (st === '' ? s.chipTextActive : { color: '#000', fontWeight: '700' })]}>
                      {st === '' ? 'All' : st}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Sort */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8 }}>
        <View style={s.sortBar}>
          {['🔥 Hot', '✨ New', '⭐ Top', '🎮 Demo Ready'].map((sv, i) => (
            <TouchableOpacity key={i} style={[s.sortBtn, sort === sv && s.sortBtnActive]} onPress={() => setSort(sv)}>
              <Text style={[s.sortBtnText, sort === sv && s.sortBtnTextActive]}>{sv}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Text style={s.resultsCount}>{filtered.length} game{filtered.length !== 1 ? 's' : ''} found</Text>

      {filtered.length > 0
        ? filtered.map(game => <GameCard key={game.id} game={game} onCardClick={onCardClick} onDevClick={onDevClick} />)
        : (
          <View style={s.empty}>
            <Text style={s.emptyIcon}>🕹️</Text>
            <Text style={s.emptyTitle}>No games found</Text>
            <Text style={s.emptyText}>Try adjusting your search or filters</Text>
          </View>
        )}
    </View>
  );
}