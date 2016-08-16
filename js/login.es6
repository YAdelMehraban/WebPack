let login = (username, password) => {
    if(username !== 'admin' || password !== 'alpha'){
        console.log('incorrect password');
    }
};

login('admin', 'test');