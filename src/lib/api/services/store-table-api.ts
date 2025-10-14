import {authInstance} from '../axios';

export const getStoreTable = async () => {
    return authInstance.get('/store-table/list');
};