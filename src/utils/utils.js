export default {
    /**
     *获取url后面的参数
     * @param name
     * @returns {string | null}
     */
    getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    }

}
