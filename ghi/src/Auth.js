import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";


let internalToken = null;

export function getToken() {
    return internalToken;
}

export async function getTokenInternal() {
    const url = `${process.env.REACT_APP_USERS}/accounts/tokens/mine/`;
    try {
        const response = await fetch(url, {
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            internalToken = data.token;
            return internalToken;
        }
    } catch (e) { }
    return false;
}

function handleErrorMessage(error) {
    if ("error" in error) {
        error = error.error;
        try {
            error = JSON.parse(error);
            if ("__all__" in error) {
                error = error.__all__;
            }
        } catch { }
    }
    if (Array.isArray(error)) {
        error = error.join("<br>");
    } else if (typeof error === "object") {
        error = Object.entries(error).reduce(
            (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
            ""
        );
    }
    return error;
}

export const AuthContext = createContext({
    token: null,
    decoded: null,
    setDecoded: () => null,
    setToken: () => null,
});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [decoded, setDecoded] = useState(null);


    return (
        <AuthContext.Provider value={{ token, setToken, decoded, setDecoded }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export function useToken() {
    const { token, setToken, setDecoded } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchToken() {
            const token = await getTokenInternal();
            setToken(token);
            
        }
        if (!token) {
            fetchToken();
        }
    }, [setToken, token]);

    useEffect(() => {
        if (token) {
            setDecoded(jwt(token));
        } else {
            setDecoded(null);
        }

    },[token, setDecoded])

    async function logout() {
        if (token) {
            const url = `${process.env.REACT_APP_USERS}/api/token/refresh/logout/`;
            await fetch(url, { method: "delete", credentials: "include" });
            internalToken = null;
            setToken(null);
            navigate("/");
        }
    }

    async function login(username, password) {
        const url = `${process.env.REACT_APP_USERS}/login/`;
        const form = new FormData();
        form.append("username", username);
        form.append("password", password);
        const response = await fetch(url, {
            method: "post",
            credentials: "include",
            body: form,
        });
        if (response.ok) {
            const token = await getTokenInternal();
            setToken(token);
            navigate("/parks");
            return;
        }
        let error = await response.json();
        return handleErrorMessage(error);
    }

    async function signup(username, password, email, firstName, lastName) {
        const url = `${process.env.REACT_APP_USERS}/accounts/`;
        const response = await fetch(url, {
            method: "post",
            body: JSON.stringify({
                username,
                password,
                email,
                first_name: firstName,
                last_name: lastName,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            await login(username, password);
        }
        return false;
    }

    async function update(username, password, email, firstName, lastName) {
        const url = `${process.env.REACT_APP_USERS}/accounts/`;
        const response = await fetch(url, {
            method: "post",
            body: JSON.stringify({
                username,
                password,
                email,
                first_name: firstName,
                last_name: lastName,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            await login(username, password);
        }
        return false;
    }

    return [token, login, logout, signup, update];
}
