import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup, waitFor, wait } from "@testing-library/react";
import AlbumsPage from "./albums.component";
import { store } from '../../redux/store';
import { setAlbums, setArtists, setViewedAlbum } from "../../redux/search/search.actions";
import mount from "enzyme/build/mount";
import shallow from "enzyme/build/shallow";

afterEach(cleanup);

const testAlbum = {
  primaryGenreName: "pop",
  artistName: "Big B",
  artistId: "121341",
  artistLinkUrl: "http://null.com"
}

const testAlbumInfo = [
    {
        artworkUrl100: '',
        collectionName: '',
        artistName: ''
    },
    {
        trackTimeMillis: 1241245125,
        trackName: 'aaaaaa'
    },
    {
        trackTimeMillis: 21523654745,
        trackName: 'bbbbbb'
    },
]
const testAlbums = [testAlbum];

function setStoreAlbums(albums){
    store.dispatch(setAlbums(albums))
}

function setStoreViewedAlbum(albumSongs) {
    store.dispatch(setViewedAlbum(albumSongs));
}

function renderWithRedux(component, store) {
  return {
    ...render(
    <Provider store={store}>
      {component}
    </Provider>)
  }
}

it("renders with redux", () => {
    const { container } = renderWithRedux(<AlbumsPage/>,store);
    expect(container.querySelector('.albums-container')).not.toBeNull();
});

it("renders searched album", () => {
    const { container } = renderWithRedux(<AlbumsPage/>,store);
    setStoreAlbums(testAlbums)
    
    expect(container.querySelector('.album')).not.toBeNull();
});

it("can save and unsave albums", () => {
    const { container } = renderWithRedux(<AlbumsPage/>,store);
    setStoreAlbums(testAlbums)

    fireEvent(
        container.querySelector(".album-favourite"),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );
    expect(container.querySelector(".album-favourite.true")).not.toBeNull();

    fireEvent(
        container.querySelector(".album-favourite"),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );
    expect(container.querySelector(".album-favourite.false")).not.toBeNull();
});

it("can open album details", async () => {
    const { container } = renderWithRedux(<AlbumsPage/>,store);
    setStoreAlbums(testAlbums);


    fireEvent(
        container.querySelector(".album-view-details"),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );

    setStoreViewedAlbum(testAlbumInfo);
    expect(container.querySelector('.album-desc')).not.toBeNull()
    
});
