
export const selectAdverts = state => state.adverts.data;
export const selectLoading = (state) => state.adverts.loading;
export const selectError = (state) => state.adverts.error;
export const selectFavorite = (state, camperId) =>
  state.adverts.item.find((fav) => fav._id === camperId);