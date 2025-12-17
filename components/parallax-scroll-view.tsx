import type { PropsWithChildren, ReactNode } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

const HEADER_HEIGHT = 100;

type Props = PropsWithChildren<{
  headerBackgroundColor: { dark: string; light: string };
  overskrift?: string;
  headerRight?: ReactNode;
}>;

export default function ParallaxScrollView({
  children,
  headerBackgroundColor,
  overskrift,
  headerRight,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <View className="flex-1">
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            { height: HEADER_HEIGHT, backgroundColor: headerBackgroundColor.light },
            headerAnimatedStyle,
          ]}
        >
          <View className="flex-1 flex-row justify-between items-center px-5 pt-12 pb-4">
            <Text className="text-3xl font-bold text-white">{overskrift}</Text>
            {headerRight && <View>{headerRight}</View>}
          </View>
        </Animated.View>
        <View className="flex-1 bg-gray-100 overflow-hidden">
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
}