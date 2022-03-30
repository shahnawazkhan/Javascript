// level {1/2/3}

// Level 2
async function getUsers() {
  await Promise.all(getUser(), getProfile(), getPosts()).then((data) => {
    return {
      user: data[0],
      profile: data[1],
      posts: data[2],
    };
  });
}
