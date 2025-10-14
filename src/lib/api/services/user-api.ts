import {authInstance} from '../axios';

export const postLogin = async (mid: string, mpassword: string) => {
    return authInstance.post('/manager/login', { mid, mpassword });
};

export const postAccessTokenValidation = async () => {
    return authInstance.post('/manager/access-token');
};

// export const postRefreshToken = async () => {
//     return refreshAuthInstance.post('/auth/refresh-token');
// };