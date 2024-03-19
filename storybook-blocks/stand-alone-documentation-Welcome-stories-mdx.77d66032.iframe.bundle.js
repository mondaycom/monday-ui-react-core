"use strict";(globalThis.webpackChunkvibe_storybook_components=globalThis.webpackChunkvibe_storybook_components||[]).push([[5703],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./storybook/stand-alone-documentation/Welcome.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>Welcome_stories});var react=__webpack_require__("../../node_modules/react/index.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_name_decorator=__webpack_require__("./storybook/components/component-name/component-name-decorator.jsx"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),link_link=__webpack_require__("./src/components/link/link.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),contributors_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/github-contributors-list/contributors.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(contributors_module.A,options);const github_contributors_list_contributors_module=contributors_module.A&&contributors_module.A.locals?contributors_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const contributors_list=({contributorsData,showContributionAmount=!1})=>{const lastIndex=contributorsData.length-1;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:contributorsData.map((({name,href,key,contributions},index)=>(0,jsx_runtime.jsx)(link_link.A,{href,className:classnames_default()({[github_contributors_list_contributors_module.contributor]:index<lastIndex}),children:`${name}${showContributionAmount?` (${contributions})`:""}`},key||href)))})};try{contributorslist.displayName="contributorslist",contributorslist.__docgenInfo={description:"",displayName:"contributorslist",props:{contributorsData:{defaultValue:null,description:"",name:"contributorsData",required:!0,type:{name:"GithubContributor[]"}},showContributionAmount:{defaultValue:{value:"false"},description:"",name:"showContributionAmount",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/github-contributors-list/contributors-list.tsx#contributorslist"]={docgenInfo:contributorslist.__docgenInfo,name:"contributorslist",path:"src/components/github-contributors-list/contributors-list.tsx#contributorslist"})}catch(__react_docgen_typescript_loader_error){}var paragraph=__webpack_require__("./src/components/paragraph/paragraph.tsx");async function fetchContributors(organizationName,packageName,page){try{const request=await fetch(`https://api.github.com/repos/${organizationName}/${packageName}/contributors?per_page=100&page=${page}&order=desc`,{method:"GET",headers:{"Content-Type":"application/json"}}),contributors=await request.json();if(!contributors||!Array.isArray(contributors))throw new Error("Unexpected API response, contributors = ",contributors);return contributors}catch(e){return console.error("Error while loading Github contributors, page ",page," - ",e),[]}}const GithubContributorsList=({organizationName,packageName,excludedContributorsIds=new Set,staticContributors=[],text="Thanks to all of our contributors: ",showContributionAmount=!1})=>{const[contributorsJson,setContributorsJson]=(0,react.useState)([]);(0,react.useEffect)((()=>{(async function fetchAllContributors(organizationName,packageName){let list,contributors=[],page=1;do{list=await fetchContributors(organizationName,packageName,page++),contributors=contributors.concat(list)}while(list.length>0);return contributors})(organizationName,packageName).then((contributors=>setContributorsJson(contributors)))}),[organizationName,packageName]);const contributors=(0,react.useMemo)((()=>{const developerContributors=contributorsJson.filter((contributor=>!excludedContributorsIds.has(contributor.id))).sort(((a,b)=>(b?.contributions||0)-(a?.contributions||0))).map((contributor=>({id:contributor.id,name:contributor.login,href:contributor.html_url,key:contributor.id.toString(),contributions:contributor.contributions}))),contributorsData=staticContributors.concat(developerContributors);return(0,jsx_runtime.jsx)(contributors_list,{contributorsData,showContributionAmount})}),[contributorsJson,excludedContributorsIds,showContributionAmount,staticContributors]);return(0,jsx_runtime.jsx)(paragraph.A,{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[text,contributors]})})};GithubContributorsList.displayName="GithubContributorsList";const github_contributors_list=GithubContributorsList;try{githubcontributorslist.displayName="githubcontributorslist",githubcontributorslist.__docgenInfo={description:"",displayName:"githubcontributorslist",props:{organizationName:{defaultValue:null,description:"",name:"organizationName",required:!0,type:{name:"string"}},packageName:{defaultValue:null,description:"",name:"packageName",required:!0,type:{name:"string"}},text:{defaultValue:{value:"Thanks to all of our contributors:"},description:"",name:"text",required:!1,type:{name:"string"}},showContributionAmount:{defaultValue:{value:"false"},description:"",name:"showContributionAmount",required:!1,type:{name:"boolean"}},excludedContributorsIds:{defaultValue:{value:"new Set()"},description:"",name:"excludedContributorsIds",required:!1,type:{name:"Set<number>"}},staticContributors:{defaultValue:{value:"[]"},description:"",name:"staticContributors",required:!1,type:{name:"GithubContributor[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/github-contributors-list/github-contributors-list.tsx#githubcontributorslist"]={docgenInfo:githubcontributorslist.__docgenInfo,name:"githubcontributorslist",path:"src/components/github-contributors-list/github-contributors-list.tsx#githubcontributorslist"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){const _components=Object.assign({p:"p",img:"img",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Welcome"}),"\n",(0,jsx_runtime.jsx)(component_name_decorator.A,{withFoundationBackground:!0,children:"Welcome"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.img,{src:"https://img.shields.io/badge/status-WIP-orange.svg",alt:"Work in Progress"})}),"\n",(0,jsx_runtime.jsx)("p",{children:"Work on Storybook content is currently in progress..."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"contributors",children:"Contributors"}),"\n",(0,jsx_runtime.jsx)(github_contributors_list,{organizationName:"mondaycom",packageName:"vibe-storybook-components"})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Welcome",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Welcome_stories=componentMeta,__namedExportsOrder=["__page"]},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/github-contributors-list/contributors.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.GpMcysMEE3qrjs5SdnFO::after{color:var(--sb-primary-text-color);-webkit-font-smoothing:initial;font-size:var(--sb-small-text-font-size);font-weight:400;line-height:var(--sb-text-line-height);content:","}',"",{version:3,sources:["webpack://./src/components/github-contributors-list/contributors.module.scss","webpack://./src/styles/mixins/_typography.scss"],names:[],mappings:"AAEA,6BCDE,kCAAA,CACA,8BAAA,CAgBA,wCAAA,CACA,eAAA,CACA,sCAAA,CDhBA,WAAA",sourcesContent:["@import '../../../src/styles/mixins/typography';\n\n.contributor::after {\n  @include sb-small-text;\n  content: ',';\n}\n","@mixin sb-basic-text {\n  color: var(--sb-primary-text-color);\n  -webkit-font-smoothing: initial;\n}\n\n@mixin sb-content-text-without-color {\n  font-family: var(--sb-font-family);\n  font-size: var(--sb-text-font-size);\n  line-height: var(--sb-text-line-height);\n  font-weight: 400;\n}\n\n@mixin sb-content-text {\n  @include sb-content-text-without-color;\n  @include sb-basic-text;\n}\n\n@mixin sb-small-text-without-color {\n  font-size: var(--sb-small-text-font-size);\n  font-weight: 400;\n  line-height: var(--sb-text-line-height);\n}\n\n@mixin sb-small-text {\n  @include sb-basic-text;\n  @include sb-small-text-without-color;\n}\n\n@mixin sb-title-appearance {\n  margin-bottom: var(--sb-spacing-between-title-to-content);\n  font-family: var(--sb-title-font-family);\n  @include sb-basic-text;\n  font-size: var(--sb-h3-font-size);\n  line-height: 28px;\n  letter-spacing: -0.21px;\n  text-align: left;\n  font-weight: 300;\n}\n\n@mixin sb-font-link {\n  font: var(--sb-font-general-label);\n  text-decoration: none;\n  color: var(--sb-link-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={contributor:"GpMcysMEE3qrjs5SdnFO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);