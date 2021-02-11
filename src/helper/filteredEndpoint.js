const filteredEndpoint = (data, subData) => {
    let query = '';
    if (subData.sub !== undefined) {
        if (subData.sub.slice(0, 7) === 'invoice') {
            query = subData.sub.slice(8, subData.sub.length); // remove "invoice/"
            query = query.slice(0, query.length - 5); // remove ".json"
        } else {
            query = subData.sub.slice(4, subData.sub.length); // remove "osf/"
            query = query.slice(0, query.length - 5); // remove ".json"
        }
    } else if (subData.sub === undefined) {
        if (data.sub.slice(0, 7) === 'invoice') {
            query = data.sub.slice(8, data.sub.length);
            query = query.slice(0, query.length - 5);
        } else {
            query = data.sub.slice(4, data.sub.length);
            query = query.slice(0, query.length - 5);
        }
    }
    return query;
};

export default filteredEndpoint;
