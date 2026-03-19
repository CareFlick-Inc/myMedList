// useOrientation.tsx
import { useIsFocused } from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
export function UseOrientation(){
  // State to hold the connection status
  const [orientation, setOrientation] = useState('PORTRAIT')
  const isFocused = useIsFocused();

  useEffect(() => {
    
    const callback = () => isFocused ? setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE') : null;

    const subscription = isFocused ? Dimensions.addEventListener('change', callback) : null;

    return () => {
        subscription?.remove();
      };
    }, []);
    return isPortrait() ? 'PORTRAIT' : 'LANDSCAPE';
  }