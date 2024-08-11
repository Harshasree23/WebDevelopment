const userToId = new Map();

const setUser = ( id,user ) =>{
    userToId.set(id,user);
}

const getUser = (id) => {
    return userToId.get(id);
}

module.exports = {
    setUser,
    getUser,
}