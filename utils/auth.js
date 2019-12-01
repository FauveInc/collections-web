import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';

const getQueryParams = () => {
    const params = {};
    window.location.href.replace(
        /([^(?|#)=&]+)(=([^&]*))?/g,
        ($0, $1, $2, $3) => {
            params[$1] = $3;
        }
    );
    return params;
};

export const extractInfoFromHash = () => {
    if (process.SERVER_BUILD) return;
    // eslint-disable-next-line camelcase
    const { id_token, state, access_token } = getQueryParams();
    return {
        token: id_token,
        secret: state,
        apiToken: access_token
    };
};

export const setTokens = (token, apiToken) => {
    if (process.SERVER_BUILD) return;
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('apiToken', apiToken);
    window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)));
    Cookie.set('jwt', token);
};

export const unsetTokens = () => {
    if (process.SERVER_BUILD) return;
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('apiToken');
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('secret');
    Cookie.remove('jwt');
    window.localStorage.setItem('logout', Date.now());
};

export const getUserFromCookie = (req) => {
    if (!req.headers.cookie) return;
    const jwtCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('jwt='));
    if (!jwtCookie) return;
    const jwt = jwtCookie.split('=')[1];
    return jwtDecode(jwt);
};

export const getUserFromLocalStorage = () => {
    const json = window.localStorage.user;
    return json ? JSON.parse(json) : undefined;
};

export const setSecret = (secret) =>
    window.localStorage.setItem('secret', secret);

export const checkSecret = (secret) => window.localStorage.secret === secret;
