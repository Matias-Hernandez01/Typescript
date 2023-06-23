import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

// const cld = new Cloudinary({
//   cloud: {
//     cloudName: 'dtw0xzty5',
//   },
// });

const apiKey = 141258927571659;
const apiSecret = 'pgB_7FU76nMCQ3ttZ2ejhPAXhfg';
const cloudName = 'dtw0xzty5';
const uploadPreset = 'hjuft8mh';

const CloudinaryComponent = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    launchImageLibrary(
      {mediaType: 'photo', includeBase64: true, maxHeight: 400, maxWidth: 400},
      async response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          console.log(response);
          const base64Image = await response.assets![0].uri;
          const base64Img = `data:image/jpg;base64,${base64Image}`;

          const uploadedImageData = new FormData();
          uploadedImageData.append('upload_preset', uploadPreset);
          uploadedImageData.append('file', base64Image);
          // uploadedImageData.console.log('', uploadedImageData.getParts());

          try {
            const uploadedImage = await axios.post(
              `https://api.cloudinary.com/v1_1/dtw0xzty5/image/upload/`,
              uploadedImageData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'X-Requested-With': 'XMLHttpRequest',
                  'X-API-Key': apiKey,
                },
              },
            );

            setSelectedImage(uploadedImage.data.secure_url);
          } catch (error) {
            console.log('Error uploading image: ', error);
          }
        }
      },
    );
  };

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title="Pick Image" onPress={pickImage} />
      <View>
        {selectedImage && (
          <Image
            source={{uri: selectedImage}}
            style={{width: 300, height: 300}}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CloudinaryComponent;
