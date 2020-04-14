import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./request/api/index"
import "./assets/css/base.css"
import utils from "./assets/js/utils";

Vue.prototype.$utils = utils;

Vue.prototype.$api = api;
Vue.config.productionTip = false;
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', // 横屏是否支持，不支持则为浏览器大小改变
        // 计算页面字体大小
        recalc = function () {
            // 获取页面宽度
            var clientWidth = docEl.clientWidth;
            // 获取不到页面宽度，直接返回
            if (!clientWidth) return;
            // 设置html字体大小(浏览器默认字体大小为16px,这里为了换算简单设置默认大小10px，10/16=0.625)
            docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';//其中“20”根据你设置的html的font-size属性值做适当的变化
        };
    // 不支持addEventListener,返回
    if (!doc.addEventListener) return;
    // 监听事件，获取当前html标签的字体大小
    win.addEventListener(resizeEvt, recalc, false);
    // dom内容加在完成事件
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
