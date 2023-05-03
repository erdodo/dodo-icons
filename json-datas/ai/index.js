import ai from "./ai.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("Ai", ai);
}


ai.install = install;

export default ai
