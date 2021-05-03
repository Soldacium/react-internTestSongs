import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ArtistsPage from "./artists.component";
import { store } from '../../redux/store';
import { setArtists } from "../../redux/search/search.actions";

afterEach(cleanup);

const testArtist = {
  primaryGenreName: "pop",
  artistName: "Big B",
  artistId: "121341",
  artistLinkUrl: "http://null.com"
}
const testArtists = [testArtist];

function setStoreArtists(artists){
    store.dispatch(setArtists(artists))
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
    const { container } = renderWithRedux(<ArtistsPage/>,store);
    expect(container.querySelector('.artists-container')).not.toBeNull();
});

it("renders searched artists", () => {
    const { container } = renderWithRedux(<ArtistsPage/>,store);
    setStoreArtists(testArtists);
    
    expect(container.querySelector('.artist')).not.toBeNull();
})

it("can save and unsave artists", () => {
    const { container } = renderWithRedux(<ArtistsPage/>,store);
    setStoreArtists(testArtists);

    fireEvent(
        container.querySelector(".artist-favourite"),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );
    expect(container.querySelector(".artist-favourite.true")).not.toBeNull();

    fireEvent(
        container.querySelector(".artist-favourite"),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );
    expect(container.querySelector(".artist-favourite.false")).not.toBeNull();
});