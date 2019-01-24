import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => { this.setState({ albums: response.data }); });
    }

    renderAlbums() {
        //Değiştiriyoruz
        //return this.state.albums.map(album => <Text>{album.title}</Text>);

        return this.state.albums.map(a => <AlbumDetail key={a.title} album={a} kimyazdi={'ben'} />);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
