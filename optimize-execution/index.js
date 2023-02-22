async function exec(t1, t2, t3) {
    const startTimeInMs = Date.now();
    const timeArray = [t1, t2, t3];
    const promises = timeArray.map(time => doSomethingNSeconds(time));
    const results = await Promise.all(promises);
    results.forEach(result => console.log(result));
    const endTimeInMs = Date.now();
    const spentTime = (endTimeInMs - startTimeInMs) / 1000;
    console.log(`Time spent: ${spentTime} sec`);
    return spentTime;
}

async function doSomethingNSeconds(n) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(`Jobs done after ${n} seconds`)
            }, n * 1000)
        } catch(err) {
            reject(err);
        }
    })
}

exec(2, 3, 5)