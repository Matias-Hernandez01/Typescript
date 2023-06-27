import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  View,
  Button,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

interface Images {
  link: any;
  name: string | null;
}

const CloudinaryComponent: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  // const [title, setTitle] = useState<string>('');

  let arrayImages = [];

  const cloudinaryUpload = (photo: object) => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'hjuft8mh');
    data.append('cloud_name', 'dtw0xzty5');
    fetch('https://api.cloudinary.com/v1_1/dtw0xzty5/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(resData => {
        const uploadedImageUrl = resData.secure_url;
        setPhotos([...photos, uploadedImageUrl]);
      })
      .catch(err => {
        console.log('err.response.data', err);
        Alert.alert('An Error Occured While Uploading', err);
      });
  };

  console.log(photos);

  const handleUploadImage = () => {
    launchImageLibrary({mediaType: 'photo', selectionLimit: 1}, response => {
      // console.log('response', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response?.assets?.[0].uri;
        const type = response?.assets?.[0].type;
        const name = response?.assets?.[0].fileName;
        const source = {
          uri,
          type,
          name,
        };
        cloudinaryUpload(source);
      }
    });
  };

  console.log(photos);
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: 400,
        height: 500,
      }}>
      <ScrollView bounces={true}>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {photos.length > 0 &&
            photos.map((image, index) => {
              return (
                <View key={index}>
                  {/* <TextInput onChange={onChangeTitle} value={title} /> */}
                  <Image source={{uri: image}} style={styles.openGalaryStyle} />
                </View>
              );
            })}
        </View>
      </ScrollView>
      <Button title="Upload Images" onPress={handleUploadImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  openGalaryStyle: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});

export default CloudinaryComponent;
