(function () {

    let arr = [[4, 5], [6, 7], [9]];
    console.log(arr);
    console.log(
        arr.reduce((acc, val) => {
            acc.push(...val);
            return acc;
        }, [])
    );

})();
