import { searchConstants } from "../constants/search-constant";
import { searchService } from "../services/search-service";
import { helperConstants } from "../constants/helper-constant";

export const searchActions = { getSearchList };

function getSearchList(search: string) {
  return (dispatch: any) => {
    dispatch(
      loading({
        isErrorOccured: false,
        isLoading: true
      })
    );

    searchService.getSearchQueryList(search).then(response => {
      console.log(response.results);

      if (response.results) {
        return dispatch(success({searchList:response.results}));
      }
      return dispatch(
        failure({
          isErrorOccured: true,
          isLoading: false
        })
      );
    });
  };

  function success(searchList: any) {
    return { type: searchConstants.SEARCH_ACTION, searchResult: searchList };
  }

  function failure(error: any) {
    return { type: helperConstants.ERROR_ACTION, helperInfo: error };
  }

  function loading(helperInfo: any) {
    return {
      type: helperConstants.PAGE_LOADING_ACTION,
      helperInfo: helperInfo
    };
  }
}
