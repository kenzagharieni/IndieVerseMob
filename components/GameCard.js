import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s } from '../styles';
import { getStatusColor } from '../data';

export default function GameCard({ game, onCardClick, onDevClick }) {
  const [upvotes, setUpvotes] = useState(game.upvotes);
  const [voted, setVoted] = useState(false);

  function handleUpvote() {
    if (voted) { setUpvotes(u => u - 1); setVoted(false); }
    else { setUpvotes(u => u + 1); setVoted(true); }
  }

  return (
    <TouchableOpacity style={s.card} onPress={() => onCardClick(game)} activeOpacity={0.8}>
      <View style={s.cardVote}>
        <TouchableOpacity style={[s.voteBtn, voted && s.voteBtnActive]} onPress={handleUpvote}>
          <Text style={[s.voteBtnText, voted && s.voteBtnTextActive]}>▲</Text>
        </TouchableOpacity>
        <Text style={s.voteCount}>{upvotes}</Text>
      </View>
      <View style={s.cardThumb}>
        <Text style={s.cardThumbText}>{game.thumbnail}</Text>
      </View>
      <View style={s.cardInfo}>
        <View style={s.cardTop}>
          <TouchableOpacity onPress={() => onDevClick(game.developer)}>
            <Text style={s.cardDev}>by {game.developer}</Text>
          </TouchableOpacity>
          <View style={[s.cardStatus, { backgroundColor: getStatusColor(game.status) }]}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: '#000' }}>{game.status}</Text>
          </View>
        </View>
        <Text style={s.cardTitle}>{game.title}</Text>
        <Text style={s.cardDesc} numberOfLines={2}>{game.description}</Text>
        <View style={s.tagsRow}>
          {game.tags.map((tag, i) => (
            <View key={i} style={s.tag}><Text style={s.tagText}>{tag}</Text></View>
          ))}
        </View>
        <View style={s.cardFooter}>
          <TouchableOpacity style={s.cardAction}><Text style={s.cardActionText}>💬 {game.comments}</Text></TouchableOpacity>
          <TouchableOpacity style={s.cardAction}><Text style={s.cardActionText}>🔖 Save</Text></TouchableOpacity>
          <TouchableOpacity style={s.cardAction}><Text style={s.cardActionText}>🎮 Test</Text></TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}