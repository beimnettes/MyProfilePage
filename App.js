import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim() && comment.trim()) {
      setSubmitted(true);
      Keyboard.dismiss();
    } else {
      alert("Please fill in both fields 💡");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>✨ My Profile ✨</Text>
        </View>

        {/* Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('./assets/myPhoto.jpg')}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        {/* Scrollable Info */}
        <ScrollView
          style={styles.infoSection}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.infoText}>👩🏽‍💻 Hi! I'm Beimnet Tesfaye, a creative and passionate app developer.</Text>
          <Text style={styles.infoText}>💖 I love combining functionality and beautiful design.</Text>
          <Text style={styles.infoText}>📚 Learning React Native, Expo, full-stack dev, and design tools like Photoshop.</Text>
          <Text style={styles.infoText}>🌸 Dreaming of creating apps that make people feel good and inspired.</Text>
          <Text style={styles.infoText}>✨ I also enjoy art, colors, and cozy aesthetics in everything I do.</Text>
        </ScrollView>

        {/* Input Form */}
        <View style={styles.formSection}>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="#a87ca0"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Say something nice ✨"
            placeholderTextColor="#a87ca0"
            value={comment}
            onChangeText={setComment}
            multiline
          />

          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.submitButton}>💌 Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Submission Display */}
        {submitted && (
          <View style={styles.submittedBox}>
            <Text style={styles.submittedText}>Thank you, {name} 💕</Text>
            <Text style={styles.submittedText}>"{comment}"</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff0f5',
  },
  header: {
    backgroundColor: '#f4c2c2',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    color: '#8a2be2',
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  imageWrapper: {
    alignItems: 'center',
    marginVertical: 15,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#dda0dd',
  },
  infoSection: {
    paddingHorizontal: 20,
    height: 180,
  },
  infoText: {
    fontSize: 16,
    color: '#6a5acd',
    marginBottom: 10,
    fontWeight: '500',
  },
  formSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderColor: '#d8bfd8',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#e6add8',
    color: '#4b0082',
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    fontWeight: 'bold',
    elevation: 3,
  },
  submittedBox: {
    backgroundColor: '#ffe6f2',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#e6add8',
    borderWidth: 1.2,
  },
  submittedText: {
    fontSize: 16,
    color: '#8a2be2',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 4,
  },
});