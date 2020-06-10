/**
 *  并行控制流
 * */

function fethUserInfo(userId: string): Promise<{}> {
    return new Promise(resolve => {
        setTimeout(() => resolve({userId}), 100);
    });

}

function fethCardInfo(userId: string): Promise<{}> {
    return new Promise(resolve => {
        setTimeout(() => resolve({userId}), 200);
    });

}


function fethGoodInfo(userId: string): Promise<{}> {
    return new Promise(resolve => {
        setTimeout(() => resolve({userId}), 300);
    });
}

Promise.all([fethGoodInfo("123"), fethCardInfo("3232"), fethUserInfo("323434")]).then(res => {
    console.log(res);
});


