import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';

// Sample data for ingredients in kitchen
const initialKøleskab = [
  { id: '1', name: 'Løg', amount: '5' },
  { id: '2', name: 'Fløde', amount: '½L' },
  { id: '3', name: 'Tomater', amount: '2' },
];

// Sample data for shopping list with prices and stores
const initialIndkøbsliste = [
  { id: '1', name: 'Ris', price: '10 kr.', store: 'Netto', checked: false },
  { id: '2', name: 'Pasta', price: '12 kr.', store: 'Rema', checked: false },
  { id: '3', name: 'Mælk', price: '8 kr.', store: 'Føtex', checked: true },
];

export default function Ingredienser() {
  const [køleskab] = useState(initialKøleskab);
  const [indkøbsliste, setIndkoebsliste] = useState(initialIndkøbsliste);

  const toggleChecked = (id: string) => {
    setIndkoebsliste(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1f6479', dark: '#1D3D47' }}
      overskrift="Ingredienser"
    >
      <View className="p-4">
        <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
            Dit køleskab:
          </Text>
          {køleskab.map(item => (
            <View key={item.id} className="flex-row items-center py-2">
              <Text className="text-base text-gray-700">
                • {item.amount} {item.name}
              </Text>
            </View>
          ))}
        </View>

        <View className="bg-white rounded-xl p-4 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
            Indkøbsliste:
          </Text>
          {indkøbsliste.map(item => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center justify-between py-2"
              onPress={() => toggleChecked(item.id)}
            >
              <View className="flex-row items-center flex-1">
                <Ionicons
                  name={item.checked ? 'checkbox' : 'square-outline'}
                  size={22}
                  color={item.checked ? '#1f6479' : '#9ca3af'}
                />
                <Text
                  className={`ml-2 text-base ${
                    item.checked ? 'text-gray-400 line-through' : 'text-gray-700'
                  }`}
                >
                  {item.name}: {item.price}
                </Text>
              </View>
              <Text className="text-sm text-gray-500">{item.store}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ParallaxScrollView>
  );
}