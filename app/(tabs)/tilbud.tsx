import { Text, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';

// Sample data for store offers
const storeOffers = [
  {
    id: '1',
    store: 'Netto',
    offers: [
      { id: '1', name: 'Æg', price: '20 kr.' },
      { id: '2', name: 'Løg', price: '15 kr.' },
      { id: '3', name: 'Ris', price: '10 kr.' },
    ],
  },
  {
    id: '2',
    store: 'Rema',
    offers: [
      { id: '1', name: 'Æg', price: '12 kr.' },
      { id: '2', name: 'Pasta', price: '12 kr.' },
      { id: '3', name: 'Ost', price: '25 kr.' },
    ],
  },
  {
    id: '3',
    store: 'Føtex',
    offers: [
      { id: '1', name: 'Kylling', price: '45 kr.' },
      { id: '2', name: 'Ris', price: '10 kr.' },
      { id: '3', name: 'Mælk', price: '8 kr.' },
    ],
  },
];

export default function Tilbud() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1f6479', dark: '#1D3D47' }}
      overskrift="Tilbud"
    >
      <View className="p-4">
        {storeOffers.map(store => (
          <View key={store.id} className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <Text className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
              {store.store}
            </Text>
            {store.offers.map(offer => (
              <View key={offer.id} className="flex-row justify-between items-center py-2">
                <Text className="text-base text-gray-700">- {offer.name}</Text>
                <Text className="text-base text-gray-600">{offer.price}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ParallaxScrollView>
  );
}