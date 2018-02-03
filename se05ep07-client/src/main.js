require("./main.css")

const Vue = require("vue")
const VueMaterial = require("vue-material")
const VueRouter = require("vue-router")

Vue.use(VueRouter)
Vue.use(VueMaterial)

new Vue({
    el: "#mountpoint",
    render: r => r(require("./spa.vue"))
  })