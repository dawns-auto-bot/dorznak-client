import httpService from "./http.service";
import configFile from "../../config.json";
const signsEndpoint = "signs/";
const limit = configFile.limit;
const signsService = {
    get: async (currentPage, sort, direction, filter) => {
        const { data } = await httpService.get(
            `${signsEndpoint}?page=${currentPage}&limit=${limit}&sort=${sort}&direction=${direction}&filter=${filter}`
        );
        return data;
    },
    search: async text => {
        const { data } = await httpService.post(`${signsEndpoint}search/`, {
            payload: text,
        });
        return data;
    },
    getCurrent: async id => {
        const { data } = await httpService.get(`${signsEndpoint}${id}`);
        return data;
    },
    delele: async id => {
        const { data } = await httpService.delete(`${signsEndpoint}${id}`);
        return data;
    },
    patch: async (id, update) => {
        const { data } = await httpService.patch(`${signsEndpoint}${id}`, {
            payload: update,
        });
        return data;
    },
    put: async addDate => {
        const { data } = await httpService.put(signsEndpoint, {
            payload: addDate,
        });
        return data;
    },
};
export default signsService;
