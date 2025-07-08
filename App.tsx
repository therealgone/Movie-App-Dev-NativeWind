import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, TouchableOpacity } from "react-native"
import './global.css';

export default function App() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-5xl font-bold text-blacker'>Welcome !</Text>

      <TouchableOpacity className="bg-blue-500 py-3 px-5 rounded-lg">
      <Text className="text-white text-center font-bold">Click Me</Text>
    </TouchableOpacity>
    </View>
  );
}
