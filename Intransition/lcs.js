function lcs(arr) {
    if(!arr.length) {
        return "";
    }

    let shortLen = arr.reduce((a, b) => {
        if(a.length <= b.length) {
            return a;
        } else {
            return b;
        }
    }),
        minLen = shortLen.length;

    for(let len = minLen; len > 0; len--) {
        for(let start = 0; start <= minLen - len; start++) {
            let subElems = shortLen.slice(start, len);
            
            if(arr.every(elem => elem.includes(subElems))) {
                return subElems;
            }
        }
    }

    return "";
}

console.log(lcs(process.arvg.slice(2)));