import React from 'react';
import { View, Image, Text, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album }) => {
    //props.album.thumbnail_image
    //album.thumbnail_image
    const { title, artist, image, url } = album;
    const { imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: image }} />
                </View>
                <View style={styles.headerContainerStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button title="Satın Al" onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around' //25.01
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
