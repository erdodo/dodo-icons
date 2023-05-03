import Components from'./components'

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("Icon", Components);
}


Components.install = install;

export default Components
