import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SavedPage from "./saved.component";
import { store } from '../../redux/store';
import { saveAlbum, saveArtist } from "../../redux/saved/saved.actions";

afterEach(cleanup);

const testAlbum = {
  collectionId: "124124",
  artistName: "Little B",
  collectionName: "Dreams"
}

const testArtist = {
  primaryGenreName: "pop",
  artistName: "Big B",
  artistId: "121341",
  artistLinkUrl: "http://null.com"
}

function renderWithRedux(component, store) {
  return {
    ...render(
    <Provider store={store}>
      {component}
    </Provider>)
  }
}

function addNewAlbum(album){
  store.dispatch(saveAlbum(album));
}

function addNewArtist(artist){
  store.dispatch(saveArtist(artist));
}

it("renders with redux", () => {
  const { getByText } = renderWithRedux(<SavedPage/>,store);
  getByText("Your saved content");
});

it("renders saved albums", () => {
  const { getByText } = renderWithRedux(<SavedPage/>,store);
  addNewAlbum(testAlbum);
  getByText(testAlbum.artistName);
});

it("can unsave albums", () => {
  const { container, getByText } = renderWithRedux(<SavedPage/>,store);
  
  addNewAlbum(testAlbum);
  fireEvent(
    container.querySelector(".album-favourite"),
    new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    })
  );
  expect(container.querySelector('.album')).toBeNull();
});

it("renders saved artists", () => {
  const { getByText } = renderWithRedux(<SavedPage/>,store);
  addNewArtist(testArtist);
  getByText(testArtist.artistName);
});

it("can unsave artists", () => {
  const { container, getByText } = renderWithRedux(<SavedPage/>,store);
  addNewArtist(testArtist);
  fireEvent(
    container.querySelector(".artist-favourite"),
    new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    })
  );
  expect(container.querySelector('.artist')).toBeNull();
})



