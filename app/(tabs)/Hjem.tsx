import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';

// Sample data for recommended dishes
const anbefaledaRetter = [
  { id: '1', name: 'Lasagne', ingredients: ['Pasta', 'Kødsauce', 'Ost'] },
  { id: '2', name: 'Spaghetti Carbonara', ingredients: ['Pasta', 'Bacon', 'Æg'] },
  { id: '3', name: 'Kylling i karry', ingredients: ['Kylling', 'Karry', 'Ris'] },
  { id: '4', name: 'Frikadeller', ingredients: ['Hakket svinekød', 'Løg', 'Æg'] },
  { id: '5', name: 'Tacos', ingredients: ['Tortilla', 'Hakket oksekød', 'Salat'] },
];

// Store options
const stores = ['Rema', 'Føtex', 'Netto'];

export default function HomeScreen() {
  const [selectedStore, setSelectedStore] = useState('Rema');

  const renderRetItem = ({ item }: { item: typeof anbefaledaRetter[0] }) => (
    <TouchableOpacity className="bg-white p-4 rounded-xl mb-3 shadow-sm">
      <Text className="text-base font-semibold text-gray-800 mb-1">{item.name}</Text>
      <Text className="text-sm text-gray-500">{item.ingredients.join(', ')}</Text>
    </TouchableOpacity>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1f6479', dark: '#1D3D47' }}
      overskrift="Hjem"
      headerRight={
        <TouchableOpacity className="w-11 h-11 rounded-full bg-white/20 justify-center items-center">
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      }
    >

      <View className="p-4">
        <Text className="text-xl font-bold text-gray-800 mb-4">Anbefalede retter</Text>
        <FlatList
          data={anbefaledaRetter}
          renderItem={renderRetItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ParallaxScrollView>
  );
}
