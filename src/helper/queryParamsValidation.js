const queryParamsValidation = (sort, query) => {
    let result = '';
    switch (sort) {
        case '< 0':
            result =
                query !== ''
                    ? `&return_gte=${-5}&return_lte=${0}`
                    : `?return_gte=${-5}&return_lte=${0}`;
            break;
        case '> = 0':
            result =
                query !== ''
                    ? `&return_gte=${0}&return_lte=${5}`
                    : `?return_gte=${0}&return_lte=${5}`;
            break;
        case 'SBR':
            result = query !== '' ? `&type=${sort}` : `?type=${sort}`;
            break;
        case 'ST':
            result = query !== '' ? `&type=${sort}` : `?type=${sort}`;
            break;
        case 'A':
            result = query !== '' ? `&grade=${sort}` : `?grade=${sort}`;
            break;
        case 'B+':
            result = query !== '' ? `&grade=${sort}` : `?grade=${sort}`;
            break;
        case 'B':
            result = query !== '' ? `&grade=${sort}` : `?grade=${sort}`;
            break;
        default:
            result = '';
    }
    return result;
};

export default queryParamsValidation;
