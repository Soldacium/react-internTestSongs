import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SearchBox from "./search-box.component";
import { store } from '../../redux/store';
import { setAlbums } from "../../redux/search/search.actions";
import { BrowserRouter } from "react-router-dom";
import ReactTestUtils from 'react-dom/test-utils';

afterEach(cleanup);

const testAlbum = {
  primaryGenreName: "pop",
  artistName: "Big B",
  artistId: "121341",
  artistLinkUrl: "http://null.com"
}

const testArtist = {
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
        <BrowserRouter>
            {component}
        </BrowserRouter> 
    </Provider>)
  }
}

it("renders with redux", () => {
    const { container } = renderWithRedux(<SearchBox/>,store);
    expect(container.querySelector('.search-box')).not.toBeNull();
});

it("is able to handle input", () => {
    const { container } = renderWithRedux(<SearchBox/>,store);
    let input = container.querySelector('.input-field');
    fireEvent.input(input, {target: {value: 'a'}})
    expect(input.value).toEqual('a');
});
