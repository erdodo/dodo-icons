<template>
  <div v-html="local_icon" :class="classList" :style="[style,'fill:'+color]"></div>
</template>
<script>

import ai from './ai.json'
import bi from './bi.json'
import bs from './bs.json'
import cg from './cg.json'
import ci from './ci.json'
import di from './di.json'
import fa from './fa.json'
import fc from './fc.json'
import fi from './fi.json'
import gi from './gi.json'
import go from './go.json'
import gr from './gr.json'
import hi from './hi.json'
import hi2 from './hi2.json'
import im from './im.json'
import io from './io.json'
import io5 from './io5.json'
import md from './md.json'
import ri from './ri.json'
import rx from './rx.json'
import si from './si.json'
import sl from './sl.json'

export default {
    props: {
        icon: {
            type: String,
            default: "CiBandage"
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
        module: {
            type: String,
            default: "ci"
        }
    },
    data(){
        return {
            local_icon: "",
            iconList: { ai, bi, bs, cg, ci, di, fa, fc, fi,gi ,go, gr, hi, hi2, im, io, io5, md, ri, rx, si, sl}
        }
    },
    mounted() {
        this.local_icon = this.GenIcon(this.iconList[this.module][this.icon])
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
