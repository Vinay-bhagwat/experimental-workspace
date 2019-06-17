import { searchConstants } from "../constants/search-constant";

export interface ISearch {
  searchResult: any;
}
let initialState: ISearch = {
  searchResult: []
};

const SearchInfoReducer = (state = initialState, action: any) => {
  const { type, searchResult } = action;
  switch (type) {
    case searchConstants.SEARCH_ACTION:
      return searchResult;
    default:
      return state;
  }
};

export default SearchInfoReducer;
