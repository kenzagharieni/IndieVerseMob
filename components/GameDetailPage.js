import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { s } from '../styles';
import { getStatusColor } from '../data';

export default function GameDetailPage({ game, onBack, onDevClick }) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(game.commentsList);

  function handlePostComment() {
    if (!newComment.trim()) return;
    setComments([{ user: 'You', text: newComment, time: 'Just now' }, ...comments]);
    setNewComment('');
  }

  return (
    <View>
      <TouchableOpacity style={s.backBtn} onPress={onBack}>
        <Text style={s.backBtnText}>← Back</Text>
      </TouchableOpacity>

      {/* Hero */}
      <View style={s.detailHero}>
        <View style={s.detailThumb}><Text style={s.detailThumbText}>{game.thumbnail}</Text></View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => onDevClick(game.developer)}>
            <Text style={s.cardDev}>by {game.developer}</Text>
          </TouchableOpacity>
          <View style={[s.cardStatus, { backgroundColor: getStatusColor(game.status), marginVertical: 4, alignSelf: 'flex-start' }]}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: '#000' }}>{game.status}</Text>
          </View>
          <Text style={s.detailTitle}>{game.title}</Text>
          <View style={[s.tagsRow, { marginTop: 6 }]}>
            {game.tags.map((tag, i) => <View key={i} style={s.tag}><Text style={s.tagText}>{tag}</Text></View>)}
          </View>
          <View style={[s.row, { gap: 8, marginTop: 10 }]}>
            <TouchableOpacity style={[s.authBtn, { flex: 1 }]}><Text style={s.authBtnText}>🎮 Test</Text></TouchableOpacity>
            <TouchableOpacity style={[s.modalSecBtn, { flex: 1, marginTop: 0 }]}><Text style={s.modalSecBtnText}>🔖 Save</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      {/* About */}
      <View style={s.detailSection}>
        <Text style={s.sectionTitle}>📖 About</Text>
        <Text style={s.detailBody}>{game.longDescription}</Text>
      </View>

      {/* Dev Updates */}
      <View style={s.detailSection}>
        <Text style={s.sectionTitle}>📡 Dev Updates</Text>
        {game.devUpdates.map((u, i) => (
          <View key={i} style={s.updateCard}>
            <View style={s.updateTop}>
              <Text style={s.updateTitle}>{u.title}</Text>
              <Text style={s.updateDate}>{u.date}</Text>
            </View>
            <Text style={s.updateBody}>{u.body}</Text>
          </View>
        ))}
      </View>

      {/* Game Stats */}
      <View style={s.sideCard}>
        <Text style={s.sideTitle}>📊 Game Stats</Text>
        {[['⬆️ Upvotes', game.upvotes], ['💬 Comments', game.comments], ['🎮 Status', game.status]].map(([label, val]) => (
          <View key={label} style={s.statRow}>
            <Text style={s.statLabel}>{label}</Text>
            <Text style={s.statVal}>{val}</Text>
          </View>
        ))}
      </View>

      {/* Developer */}
      <View style={s.sideCard}>
        <Text style={s.sideTitle}>👨‍💻 Developer</Text>
        <TouchableOpacity onPress={() => onDevClick(game.developer)}>
          <Text style={[s.statLabel, { color: '#ccc', marginBottom: 10 }]}>{game.developer}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.modalSecBtn} onPress={() => onDevClick(game.developer)}>
          <Text style={s.modalSecBtnText}>View Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Comments */}
      <View style={s.detailSection}>
        <Text style={s.sectionTitle}>💬 Comments</Text>
        <TextInput style={s.commentInput} placeholder="Share your thoughts..." placeholderTextColor="#444"
          value={newComment} onChangeText={setNewComment} multiline />
        <TouchableOpacity style={[s.authBtn, { alignSelf: 'flex-start', paddingHorizontal: 20 }]} onPress={handlePostComment}>
          <Text style={s.authBtnText}>Post</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 12 }}>
          {comments.map((c, i) => (
            <View key={i} style={s.commentCard}>
              <View style={s.commentTop}>
                <Text style={s.commentUser}>👤 {c.user}</Text>
                <Text style={s.commentTime}>{c.time}</Text>
              </View>
              <Text style={s.commentText}>{c.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}