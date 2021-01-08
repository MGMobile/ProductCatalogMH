import { Camera } from 'expo-camera';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class Favorites extends React.Component<{}, {type:string}> {
    
    state = {
        type:Camera.Constants.Type.back
    }
    camera:Camera|null = null

    snap = async () => {
        if (this.camera) {
            try {
                let photo = await this.camera.takePictureAsync();      
                console.log(photo)
            } catch (error) {
                console.log(error)
            }
          
        }
    };

    render() {
        return (
            <Camera ref={(camera) => {this.camera=camera}} style={{flex:1}} type={this.state.type}>
                <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row',}}>
                    <TouchableOpacity style={{flex: 0.1,alignSelf: 'flex-end',alignItems: 'center',}} onPress={() => {
                        this.setState({
                            type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
                        });
                    }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 0.1,alignSelf: 'flex-end',alignItems: 'center',}} onPress={this.snap}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Capturer </Text>
                    </TouchableOpacity>

                </View>                

            </Camera>
        )
    }
}
const styles = StyleSheet.create({});
export default Favorites