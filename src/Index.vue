<template>
    <div v-html="local_icon" :class="classList" :style="[style,'fill:'+color]"></div>
</template>
<script>

import * as Icons from "./index.json";

export default {
    props: {
        icon: {
            type: String,
            default: "AiFillAccountBook"
        },
        classList: {
            type: String,
            default: " text-black"
        },
        style: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: ""
        },
    },
    data(){
        return {
            local_icon: "",

        }
    },
    mounted() {
            this.local_icon = this.GenIcon(Icons.default[this.icon])

        //this.GenIcon(Icons[this.icon])
    },
    methods:{

        GenIcon (tag) {
            return `<${tag.tag} viewBox="${tag.attr.viewBox}">${tag.child.map((item) => {return this.getAttr(item)})}</${tag.tag}>`;
        },
        getAttr(item){
            let tagAttr = ``
            for (const [key,val] of Object.entries(item.attr)) {
                tagAttr += ` ${key}="${val}"`
            }
            return `<${item.tag} ${tagAttr}> ${item.child ? item.child.map(child=>{return this.getAttr(child)}):""} </${item.tag}>`
        }
    }

}
</script>
