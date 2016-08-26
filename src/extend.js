function extend(...targets) {
    let source = {};

    for (let i = 0, length = targets.length; i < length; ++i) {
        const target = targets[i];

        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                source[key] = target[key];
            }
        }
    }

    return source;
}

export default extend;
