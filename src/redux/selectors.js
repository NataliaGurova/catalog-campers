
export const selectAdverts = state => state.adverts.data;
export const selectLoading = (state) => state.adverts.loading;
export const selectError = (state) => state.adverts.error;
export const selectFavorite = (state) =>
  state.favorites.find((fav) => fav._id === camper._id);