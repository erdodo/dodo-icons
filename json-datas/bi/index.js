import bi from "./Bi.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("Bi", bi);
}


bi.install = install;

export default bi
