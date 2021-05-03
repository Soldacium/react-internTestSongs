import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import AlbumsPage from "./albums.component";
import { store } from '../../redux/store';
import { setAlbums, setArtists } from "../../redux/search/search.actions";

afterEach(cleanup);

const testAlbum = {
  primaryGenreName: "pop",
  artistName: "Big B",
  artistId: "121341",
  artistLinkUrl: "http://null.com"
}
const testAlbums = [testAlbum];

function setStoreAlbums(albums){
    store.dispatch(setAlbums(albums))
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
})

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

it("can open album details", () => {
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
    console.log(container.querySelector(".album-view-details"))
    
    expect(container.querySelector(".album-desc")).not.toBeNull();
})
