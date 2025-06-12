import { instance } from "./api";

type GetCaptchaUrlSecurityType = {
    url: string;
};
export const SecurityAPI = {
    getCaptchaUrl: async () => {
        return await instance
            .get<GetCaptchaUrlSecurityType>("security/get-captcha-url")
            .then((response) => response.data);
    },
};
