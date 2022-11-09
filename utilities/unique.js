const uuid = (size) => {
    const abc = 'abcsfakewjgw8255325jlj35';
    let res = '';
    while (size--) {
        res += abc[Math.floor(Math.random() * abc.length)];
    }
    return res.toUpperCase();
}

export { uuid } 