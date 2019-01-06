function extract (str) {
    let para = str;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(para);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(para);
    }
    return result.join('; ');

}

console.log(extract("Lorem ipsum dolor sit amet, (consectetur adipiscing elit), sed do eiusmod (tempor) incididunt ut labore (et dolore magna) aliqua."));