import api from "../http";
import QS from "qs";

const userApi = {
    login(params) {
        return api.post('user/login', QS.stringify(params));
    }
}
export default userApi;
