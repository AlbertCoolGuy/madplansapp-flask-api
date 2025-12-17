import { BlurView } from 'expo-blur';
import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';



const HEADER_HEIGHT = 100; // Increased from 50 to 250 to show the image

type Props = PropsWithChildren<{
  overskrift: string;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  overskrift,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View style={styles.container}>
      <BlurView intensity={80} tint="light" style={styles.header}>
          <Text className='text-3xl shadow-xs font-bold text-blue-500'>
              {overskrift}
          </Text>
      </BlurView>
      <ScrollView contentContainerStyle={{paddingTop: HEADER_HEIGHT}}>
        <View style={styles.content}>
          {children}  
        </View>  
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT + 50,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  content: {
    flex: 1,

    overflow: 'hidden',
  },
});