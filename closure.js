let add = (() => {
    let counter = 0;
    return () => {counter += 1; return counter};
})();

add();
add();
console.log(add());