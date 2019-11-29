import React, { Component, useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi();

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = 'bc49f02eb2ed4712ae02fd6c17d41f5c';
const redirectUri = 'http://localhost:3000';
const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state'
]

let listItems;

function Images(props) {
    return (
        <ul>
            <img src={props.imgList[0].url} height="80" width="80" />
        </ul>
    )
}


const Index = () => {
    const [token, setToken] = useState(null)
    const [newReleases, setNewReleases] = useState(null)

    useEffect(() => {
        // Get the hash of the url
        const hash = window.location.hash
            .substring(1)
            .split("&")
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        window.location.hash = "";

        let _token = hash.access_token;
        if (_token) {
            //Set token
            setToken(_token)
        }
    })

    const getNowPlaying = () => {
        spotifyApi.setAccessToken(token);
        spotifyApi.getNewReleases(function (err, data) {
            if (err) console.error(err);
            const items = data.albums.items;
            setNewReleases(items);
            if (newReleases && newReleases.length > 0) {
                listItems = newReleases.map((nr, index) =>
                    <li key={index}>
                        <Images imgList={nr.images} />
                    </li>
                );
            }
        });
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Hello Spotify!</h1>
            <div>
                {!token &&
                    (<a
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                    >
                        Login to Spotify
                      </a>)}
                {token &&
                    <>
                        {newReleases ? (
                            newReleases.map(newRelease => {
                                return (<>

                                    <label>{newRelease.name}</label>
                                    <br />
                                    <label>Date - {newRelease.release_date}</label>
                                </>)
                            })
                        )
                            : null
                        }
                        {listItems}
                        <button onClick={() => getNowPlaying()}>Check Now Playing</button>
                    </>
                }
            </div>
        </div>
    );
}

export default Index;