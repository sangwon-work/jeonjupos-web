import {authInstance} from '../axios';

export const getFoodCategoryList = async () => {
    return authInstance.get(`/food/category/list`);
};

export const getFoodList = async (foodcategorypkey: number) => {
    return authInstance.get(`/food/list?foodcategorypkey=${foodcategorypkey}`);
};