import React, {useState} from 'react';
import {View, Image} from 'react-native';
import CloudinaryComponent from '../cloudinary/CloudinaryComponent';
const Metas: React.FC = () => {
  const [images, setImages] = useState<string[]>();

  return (
    <View>
      {images?.map(photo => {
        return (
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/2760065.jpg',
            }}
          />
        );
      })}
    </View>
  );
};

export default Metas;
