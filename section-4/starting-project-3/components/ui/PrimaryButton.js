import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
  function handlePress() {
    console.log('Pressed');
    onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: colors.primary500,
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
