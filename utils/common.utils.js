exports.multipleColumnSet = (object) => {
    if (typeof object !== 'object') {
        throw new Error('Invalid input');
    }

    const keys = Object.keys(object);
    const values = Object.values(object);

    // columnSet = keys.map(key => `${key} = ?`).join(', ');
    columnSet = keys.map(key => `${key} = ?`).join(' and ');
    return {
        columnSet,
        values
    }
}
