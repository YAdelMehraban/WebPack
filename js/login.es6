let login = (username, password) => {
  if (username !== 'admin' || password !== 'alpha') {
    console.log('incorrect password');
  }
};

export { login };
