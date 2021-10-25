import env from "application/environment/env.json";
import { readCookie } from "lib/readCookie";
import { Result } from "types/features/profile/security";

export const ProfileSecurityRequest = async (loginData: {currentPassword: string, newPassword: string}): Promise<Result> => {
    const { currentPassword, newPassword } = loginData;
    const response = await fetch(`${env.host}/api/update/profile/security`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${readCookie("cookie")}`
        },
        body: JSON.stringify({ currentPassword, newPassword })
    })
    if(response.ok) {
        return response.json();
    } else {
        const error = await response.json();
        if(error) {
            alert(1);
        }
        
        return Promise.reject({
            ...error,
        })
    }
}