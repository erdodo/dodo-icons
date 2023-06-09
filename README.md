


# 🦤 Dodo İkonlar
[git-image]: https://img.shields.io/github/followers/erdodo?style=social
[git-url]: https://github.com/erdodo
[repo-image]: https://img.shields.io/github/stars/erdodo/dodo-icons?style=social
[repo-url]: https://github.com/erdodo/dodo-icons
[![git][git-image]][git-url]  [![repo][repo-image]][repo-url]

[npm-image]: https://img.shields.io/npm/v/dodo-icons
[npm-url]: https://www.npmjs.com/package/dodo-icons
[npm-image2]: https://img.shields.io/npm/dt/dodo-icons
[npm-image3]: https://img.shields.io/github/issues/erdodo/dodo-icons
[npm-image4]: https://img.shields.io/github/forks/erdodo/dodo-icons
[npm-image5]: https://img.shields.io/github/stars/erdodo/dodo-icons
[npm-image6]: https://img.shields.io/npm/l/dodo-icons
[![npm][npm-image]][npm-url]
[![npm][npm-image2]][npm-url]
[![npm][npm-image3]][npm-url]
[![npm][npm-image4]][npm-url]
[![npm][npm-image5]][npm-url]
[![npm][npm-image6]][npm-url]


dodo-icons, React ve Vue.js gibi web teknolojilerinde kullanılmak üzere geliştirilmiş bir ikon paketidir. 
Paket içinde birçok popüler ikon paketi yer almakta ve kullanıcılar istedikleri ikonu kolayca kullanabilmektedirler. 
Bu dokümantasyonda, dodo-icons paketinin nasıl kurulacağı, kullanılacağı ve özelleştirilebileceği hakkında bilgi verilecektir.

## Detaylı Döküman
[Buradan Ulaşabilirsiniz.](https://dodo-style.vercel.app/?path=/docs/icons-d%C3%B6k%C3%BCman--docs)

## Kurulum
dodo-icons, NPM üzerinden tüm paketi yüklenerek projeye dahil edilebilir.

```bash
npm install dodo-icons
```
- Eğer sadece React için kullanmak istiyorsanız
```bash
  npm install dodo-icons@0.2.0-react
```
- Eğer sadece Vue için kullanmak istiyorsanız
```bash
  npm install dodo-icons@0.2.0-vue
```

## Örnek Kullanım (React)
dodo-icons, kullanılacak ikon paketi için özel olarak oluşturulmuş modüller içermektedir. 
İstenilen modül, projede kullanılacak dosyaya import edilerek kullanılabilir. 
Örneğin, Font Awesome 5 ikon paketinden bir ikon kullanmak isteniyorsa, şu şekilde bir import işlemi gerçekleştirilebilir:


```jsx
import { FaBeer } from "dodo-icons/react/fa";

function Ikonlar() {
  return (
    <h3>
        <FaBeer />
    </h3>
  );
}
```
```jsx
import { FaBeer } from "dodo-icons/all";

function Ikonlar() {
  return (
    <h3>
        <FaBeer />
    </h3>
  );
}
```
## Örnek Kullanım (Vue)

```vue
<template>
    <Icons icon="WiAlien" color="" style="" class=""/>
</template>
<script>
    import Icons from 'dodo-icons/vue/wi/'
    export default {
        components: {
            Icons
        }
    }
</script>

```

## Ayarlar (React)


_Zorunluluk: **React 16.3** yada üstü._

```jsx
import { IconContext } from "dodo-icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>;
```

## İkonlar

<div style="display:flex;flex-flow:column">
     <a href="/?path=/docs/icons-i%CC%87konlar-ant-design-icons--docs">Ant Design Icons</a>
    <a href="/?path=/docs/icons-i̇konlar-boxicons--docs">BoxIcons</a>
    <a href="/?path=/docs/icons-i̇konlar-bootstrap-icons--docs">Bootstrap Icons</a>
    <a href="/?path=/docs/icons-i̇konlar-css-gg--docs">css.gg
    </a>
    <a href="/?path=/docs/icons-i̇konlar-circum-icons--docs">Circum Icons</a>
    <a href="/?path=/docs/icons-i%CC%87konlar-devicons--docs">Devicons</a>
    <a href="/?path=/docs/icons-i%CC%87konlar-font-awesome-5--docs">Font Awesome 5</a>
    <a href="/?path=/docs/icons-i%CC%87konlar-flat-color-icons--docs">Flat Color Icons</a>
    <a href="/?path=/docs/icons-i̇konlar-feather--docs">Feather</a>
    <a href="/?path=/docs/icons-i̇konlar-game-icons--docs">Game Icons</a>
    <a href="/?path=/docs/icons-i̇konlar-github-octicons-icons--docs">Github Octicons icons
    </a>
    <a href="/?path=/docs/icons-i̇konlar-grommet-icons--docs">Grommet-Icons</a>
    <a href="/?path=/docs/icons-i̇konlar-heroicons--docs">Heroicons</a>
    <a href="/?path=/docs/icons-i̇konlar-heroicons-2--docs"> Heroicons 2</a>
    <a href="/?path=/docs/icons-i̇konlar-icomoon-free--docs">IcoMoon Free</a>
    <a href="/?path=/docs/icons-i̇konlar-ionicons-4--docs">Ionicons 4
    </a>
    <a href="/?path=/docs/icons-i̇konlar-ionicons-5--docs">Ionicons 5</a>
    <a href="/?path=/docs/icons-i̇konlar-material-design-icons--docs">Material Design icons</a>
    <a href="/?path=/docs/icons-i̇konlar-remix-icon--docs">Remix Icon</a>
    <a href="/?path=/docs/icons-i̇konlar-radix-icons--docs">Radix Icons
    </a>
    <a href="/?dpath=/docs/icons-i̇konlar-simple-icons--docs">Simple Icons
    </a>
    <a href="/?path=/docs/icons-i̇konlar-simple-line-icons--docs">Simple Line Icons</a>
    <a href="/?path=/docs/icons-i̇konlar-tabler-icons--docs">Tabler Icons
    </a>
    <a href="/?path=/docs/icons-i̇konlar-themify-icons--docs">Themify Icons
    </a>
    <a href="/?path=/docs/icons-i̇konlar-typicons--docs">Typicons
    </a>
    <a href="/?path=/docs/icons-i̇konlar-vs-code-icons--docs">VS Code Icons
    </a>
    <a href="/?path=/docs/icons-i̇konlar-weather-icons--docs">Weather Icons
    </a>
</div>


