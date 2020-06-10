async function fetchUser(id: string) {
    function findUserId(id: string) {
        return id;
    }
    try {
        return await findUserId(id);
    } catch (e) {
        console.log(e);
    }
}

let promise = fetchUser("24").then(function (data) {
    console.log(data);
}).then(function (error) {
    console.log(error);
})
