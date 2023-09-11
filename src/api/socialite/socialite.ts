import { ApiRequest } from './../ApiRequest';


export const getSocialLiteUrl = async (provider : string) => {

    const url = `/socialite/${provider}`;

    return await ApiRequest({
        method: 'get',
        url,
    }) 
}