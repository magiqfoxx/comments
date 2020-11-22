import reducer, {
  initialState,
  commentsAdded,
  commentsError,
  commentsLoading,
  commentAdded,
  selectComments,
  selectCommentsError,
  selectCommentsLoading
} from "./comments";

const mockComment = {
  name: 'Kat',
  email: 'kat@aol.com',
  body: "The name of Kat's cat is Stella"
};
const mockComments = [
  {
    postId: 96,
    id: 480,
    name: 'accusantium quo error repudiandae',
    email: 'Michel@keira.us',
    body: 'tenetur qui ut\narchitecto officiis voluptatem velit eos molestias incidunt eum dolorum\ndistinctio quam et\nsequi consequatur nihil voluptates animi'
  },
  {
    postId: 97,
    id: 481,
    name: 'recusandae dolor similique autem saepe voluptate aut vel sit',
    email: 'Domenick@russell.ca',
    body: 'dignissimos nobis vitae corporis delectus eligendi et ut ut\namet laudantium neque\net quia cupiditate debitis aliquid\ndolorem aspernatur libero aut autem quo et'
  },
  {
    postId: 97,
    id: 482,
    name: 'placeat eveniet sunt ut quis',
    email: 'Chanelle@samson.me',
    body: 'aliquid natus voluptas doloremque fugiat ratione adipisci\nunde eum facilis enim omnis ipsum nobis nihil praesentium\nut blanditiis voluptatem veniam\ntenetur fugit et distinctio aspernatur'
  },
  {
    postId: 97,
    id: 483,
    name: 'a ipsa nihil sed impedit',
    email: 'Hermann.Kunde@rosina.us',
    body: 'quos aut rerum nihil est et\ndolores commodi voluptas voluptatem excepturi et\net expedita dignissimos atque aut reprehenderit\nquis quo soluta'
  },
  {
    postId: 97,
    id: 484,
    name: 'hic inventore sint aut',
    email: 'Olen@bryce.net',
    body: 'vel libero quo sit vitae\nid nesciunt ipsam non a aut enim itaque totam\nillum est cupiditate sit\nnam exercitationem magnam veniam'
  },
  {
    postId: 97,
    id: 485,
    name: 'enim asperiores illum',
    email: 'Lorenza.Carter@consuelo.ca',
    body: 'soluta quia porro mollitia eos accusamus\nvoluptatem illo perferendis earum quia\nquo sed ipsam in omnis cum earum tempore eos\nvoluptatem illum doloremque corporis ipsam facere'
  }];

describe("Comments reducers", () => {
  it("should return the initial state", () => {
    const nextState = initialState;
    const result = reducer(undefined, { payload: {}, type: 'none' });
    expect(result).toEqual(nextState);
  });
  it("should set comments", () => {
    const nextState = reducer(initialState, commentsAdded(mockComments));

    const rootState = { comments: nextState };
    expect(selectComments(rootState)).toEqual(mockComments);
  });
  it("should add error", () => {
    const nextState = reducer(initialState, commentsError('There was an error when fetching comments'));

    const rootState = { comments: nextState };
    expect(selectCommentsError(rootState)).toEqual('There was an error when fetching comments');
  });
  it("should set loading", () => {
    const nextState = reducer(initialState, commentsLoading(true));

    const rootState = { comments: nextState };
    expect(selectCommentsLoading(rootState)).toEqual(true);
  });
  it("should add a comment", () => {
    const nextState = reducer(initialState, commentAdded(mockComment));

    const rootState = { comments: nextState };
    expect(selectComments(rootState)).toEqual([{ ...mockComment, id: 1 }]);
  });
});