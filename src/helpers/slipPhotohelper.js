import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { moveFile } from '../hooks/FsManager';
 //open camera to take photo
  export async function openCamera(){
    
    let source = await launchCamera({mediaType:'photo', cameraType:'back', saveToPhotos: false});

    
    if(source.assets){
          let responseUri = await moveFile(source.assets[0].uri,source.assets[0].fileName)
          source.assets[0].uri = responseUri
    }

    return source
  }
  //open Gallery
  export async function openGalery(){
    let source = await launchImageLibrary({mediaType:'photo'});
    return source;
}