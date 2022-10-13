import httpService from "./http.service";
const pricelistEndpoint = "pricelist/";

const pricelistService = {
    get: async () => {
        const { data } = await httpService.get(pricelistEndpoint);
        return data;
    },
};
export default pricelistService;
