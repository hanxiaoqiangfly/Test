import api from "../http";
import QS from "qs";

const manorApi = {
    recommendFriend(params) {
        return api.post('manor/recommendFriend', QS.stringify(params));
    },
    friendList(params) {
        return api.post('manor/friendList', QS.stringify(params));
    }
}
export default manorApi;
