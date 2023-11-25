import { setCookie } from 'cookies-next';

const TOKEN_COOKIE_NAME = 'token';
const BASE_URL = "http://localhost:8080"
const SELF_URL = "http://localhost:3000"
// TODO const BASE_URL = process.env.BASE_URL;
// TODO const SELF_URL = "https://watchlistfy.com";

export const login = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                "email_address": credentials.email,
                "password": credentials.password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': SELF_URL,
            },
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.access_token;

            setCookie(TOKEN_COOKIE_NAME, token,);

            const userInfo = await getUserInfo(token);
            return userInfo;
        } else {
            console.error('Parse failed:', response.status, response.statusText);
            throw error;
        }
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const logout = () => {
    // Remove token from cookies
    deleteCookie(TOKEN_COOKIE_NAME);

    // Optionally, you can redirect the user to the login page
    // router.push('/login');
};

export async function getUserInfo(token) {
    try {
        if (!token) {
            // Token is not available, user is not authenticated
            return null;
        }

        const response = await fetch(`${BASE_URL}/api/v1/user/basic`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': SELF_URL,
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const responseJson = await response.json();
            return responseJson.data;
        } else {
            console.error('User parse failed:', response.status, response.statusText);
            throw error;
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};

export async function refreshAccessToken(token) {
    try {
        if (!token) {
            // Token is not available, user is not authenticated
            return null;
        }

        const response = await fetch(`${BASE_URL}/api/v1/auth/refresh`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': SELF_URL,
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            const newToken = data.access_token;

            setCookie(TOKEN_COOKIE_NAME, newToken);

            return newToken;
        } else {
            console.error('Refresh token parse failed:', response.status, response.statusText);
            throw error;
        }
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
    }
};