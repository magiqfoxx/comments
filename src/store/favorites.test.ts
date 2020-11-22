import reducer, {
    initialState,
    favoriteAdded,
    favoriteRemoved,
    favoritesLoading,
    selectFavorites,
    selectFavoritesLoading
} from "./favorites";

const mockComment = {
    id: 1,
    name: 'Kat',
    email: 'kat@aol.com',
    body: "The name of Kat's cat is Stella"
};

describe("Favorites reducers", () => {
    it("should return the initial state", () => {
        const nextState = initialState;
        const result = reducer(undefined, { payload: {}, type: 'none' });
        expect(result).toEqual(nextState);
    });
    it("should set favorites", () => {
        const nextState = reducer(initialState, favoriteAdded(mockComment));

        const rootState = { favorites: nextState };
        expect(selectFavorites(rootState)).toEqual([mockComment]);
    });
    it("should remove favorite", () => {
        const nextState = reducer({ ...initialState, list: [mockComment] }, favoriteRemoved(1));
        const rootState = { favorites: nextState };
        expect(selectFavorites(rootState)).toEqual([]);
    });
    it("should set loading", () => {
        const nextState = reducer(initialState, favoritesLoading(true));

        const rootState = { favorites: nextState };
        expect(selectFavoritesLoading(rootState)).toEqual(true);
    });
});