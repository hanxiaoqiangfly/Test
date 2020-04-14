import api from "../http";
import QS from "qs";

const userApi = {
    myInfo(params) {
        return api.post('user/myInfo', QS.stringify(params));
    }
}
export default userApi;
