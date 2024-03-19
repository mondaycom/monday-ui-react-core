"use strict";(globalThis.webpackChunkvibe_storybook_components=globalThis.webpackChunkvibe_storybook_components||[]).push([[245,5679],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/color-description/__stories__/color-description.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>color_description_stories});var classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),visual_description=__webpack_require__("./src/components/visual-description/visual-description.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),color_description_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/color-description/color-description.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(color_description_module.A,options);const color_description_color_description_module=color_description_module.A&&color_description_module.A.locals?color_description_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ColorDescription=({colorName,description,withBorder})=>{const color=(0,jsx_runtime.jsx)("div",{className:classnames_default()(color_description_color_description_module.colorDescription,{[color_description_color_description_module.withBorder]:withBorder}),style:{backgroundColor:`var(--${colorName})`}});return(0,jsx_runtime.jsx)(visual_description.A,{title:colorName,description,ariaLabel:description,children:color})};ColorDescription.displayName="ColorDescription";const color_description=ColorDescription;try{colordescription.displayName="colordescription",colordescription.__docgenInfo={description:"",displayName:"colordescription",props:{colorName:{defaultValue:null,description:"",name:"colorName",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},withBorder:{defaultValue:null,description:"",name:"withBorder",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/color-description/color-description.tsx#colordescription"]={docgenInfo:colordescription.__docgenInfo,name:"colordescription",path:"src/components/color-description/color-description.tsx#colordescription"})}catch(__react_docgen_typescript_loader_error){}const color_description_stories={component:color_description,title:"Components/ColorDescription"},Overview={args:{colorName:"sb-positive-color",description:"This is a description",withBorder:!1}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"{\n  args: {\n    colorName: 'sb-positive-color',\n    description: 'This is a description',\n    withBorder: false\n  }\n}",...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"./src/components/color-description/__stories__/color-description.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_color_description_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/color-description/__stories__/color-description.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{Link}=_components;return Link||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_color_description_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"colordescription",children:"ColorDescription"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["ColorDescription component is used to display a color description.\nIt combines the",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Link,{href:"/?path=/docs/components-visualdescription--docs",children:"VisualDescription"}),"component with a colored square to visually represent a specific color."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_color_description_stories__WEBPACK_IMPORTED_MODULE_4__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.H2,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/visual-description/visual-description.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>visual_description});__webpack_require__("../../node_modules/react/index.js");var classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),visual_description_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/visual-description/visual-description.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(visual_description_module.A,options);const visual_description_visual_description_module=visual_description_module.A&&visual_description_module.A.locals?visual_description_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const VisualDescription=({title,ariaLabel,children,description,code,className,visualDescriptionClassName})=>(0,jsx_runtime.jsxs)("div",{className:classnames_default()(visual_description_visual_description_module.visualDescription,className),"aria-label":ariaLabel,children:[(0,jsx_runtime.jsx)("figure",{className:classnames_default()(visual_description_visual_description_module.visualDescriptionVisual,visualDescriptionClassName),"aria-hidden":!0,children}),(0,jsx_runtime.jsxs)("section",{className:visual_description_visual_description_module.visualDescriptionText,children:[(0,jsx_runtime.jsx)("h5",{className:visual_description_visual_description_module.visualDescriptionTitle,children:title}),description,code&&(0,jsx_runtime.jsx)("code",{children:code})]})]});VisualDescription.displayName="VisualDescription";const visual_description=VisualDescription;try{visualdescription.displayName="visualdescription",visualdescription.__docgenInfo={description:"",displayName:"visualdescription",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},code:{defaultValue:null,description:"",name:"code",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},visualDescriptionClassName:{defaultValue:null,description:"",name:"visualDescriptionClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/visual-description/visual-description.tsx#visualdescription"]={docgenInfo:visualdescription.__docgenInfo,name:"visualdescription",path:"src/components/visual-description/visual-description.tsx#visualdescription"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/color-description/color-description.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".fKRuT4JCi7BT2TvUC4U5{border-radius:var(--sb-border-radius-extra-small)}.fKRuT4JCi7BT2TvUC4U5.B0WrtfmFEFCknSQn989N{border:1px solid;border-color:var(--sb-ui-border-color)}","",{version:3,sources:["webpack://./src/components/color-description/color-description.module.scss"],names:[],mappings:"AAAA,sBACE,iDAAA,CACA,2CACE,gBAAA,CACA,sCAAA",sourcesContent:[".colorDescription {\n  border-radius: var(--sb-border-radius-extra-small);\n  &.withBorder {\n    border: 1px solid;\n    border-color: var(--sb-ui-border-color);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={colorDescription:"fKRuT4JCi7BT2TvUC4U5",withBorder:"B0WrtfmFEFCknSQn989N"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/visual-description/visual-description.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".uew_mjktB3wcK3Wi2DOa{display:flex}.uew_mjktB3wcK3Wi2DOa:not(:last-child){margin-bottom:24px}.HaCFlwsVksWgCcSPHDuw{height:40px;width:40px;margin:0 var(--sb-spacing-medium) 0 0}.HaCFlwsVksWgCcSPHDuw>*{width:100%;height:100%}.hiCg1DzVFL2WI0tRjVxT{display:flex;flex-direction:column;font-family:var(--sb-font-family);font-size:var(--sb-text-font-size);line-height:var(--sb-text-line-height);font-weight:400;color:var(--sb-primary-text-color);-webkit-font-smoothing:initial;color:var(--sb-secondary-text-color)}.hiCg1DzVFL2WI0tRjVxT:not(:last-child){margin-bottom:24px}.GkFvkDfBvLCAwc_b5mNQ{font-family:var(--sb-font-family);font-size:var(--sb-text-font-size);line-height:var(--sb-text-line-height);font-weight:400;color:var(--sb-primary-text-color);-webkit-font-smoothing:initial;font-weight:500;margin:0;color:var(--sb-primary-text-color)}","",{version:3,sources:["webpack://./src/components/visual-description/visual-description.module.scss","webpack://./src/styles/mixins/_typography.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CAEA,uCACE,kBAAA,CAGF,sBACE,WAAA,CACA,UAAA,CACA,qCAAA,CACA,wBACE,UAAA,CACA,WAAA,CAIJ,sBACE,YAAA,CACA,qBAAA,CCfF,iCAAA,CACA,kCAAA,CACA,sCAAA,CACA,eAAA,CARA,kCAAA,CACA,8BAAA,CDqBE,oCAAA,CACA,uCACE,kBAAA,CAIJ,sBCvBA,iCAAA,CACA,kCAAA,CACA,sCAAA,CACA,eAAA,CARA,kCAAA,CACA,8BAAA,CD6BE,eAAA,CACA,QAAA,CACA,kCAAA",sourcesContent:['@import "../../styles/mixins/typography";\n\n.visualDescription {\n  display: flex;\n\n  &:not(:last-child) {\n    margin-bottom: 24px;\n  }\n\n  &Visual {\n    height: 40px;\n    width: 40px;\n    margin: 0 var(--sb-spacing-medium) 0 0;\n    & > * {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  &Text {\n    display: flex;\n    flex-direction: column;\n    @include sb-content-text;\n    color: var(--sb-secondary-text-color);\n    &:not(:last-child) {\n      margin-bottom: 24px;\n    }\n  }\n\n  &Title {\n    @include sb-content-text;\n    font-weight: 500;\n    margin: 0;\n    color: var(--sb-primary-text-color);\n  }\n}\n',"@mixin sb-basic-text {\n  color: var(--sb-primary-text-color);\n  -webkit-font-smoothing: initial;\n}\n\n@mixin sb-content-text-without-color {\n  font-family: var(--sb-font-family);\n  font-size: var(--sb-text-font-size);\n  line-height: var(--sb-text-line-height);\n  font-weight: 400;\n}\n\n@mixin sb-content-text {\n  @include sb-content-text-without-color;\n  @include sb-basic-text;\n}\n\n@mixin sb-small-text-without-color {\n  font-size: var(--sb-small-text-font-size);\n  font-weight: 400;\n  line-height: var(--sb-text-line-height);\n}\n\n@mixin sb-small-text {\n  @include sb-basic-text;\n  @include sb-small-text-without-color;\n}\n\n@mixin sb-title-appearance {\n  margin-bottom: var(--sb-spacing-between-title-to-content);\n  font-family: var(--sb-title-font-family);\n  @include sb-basic-text;\n  font-size: var(--sb-h3-font-size);\n  line-height: 28px;\n  letter-spacing: -0.21px;\n  text-align: left;\n  font-weight: 300;\n}\n\n@mixin sb-font-link {\n  font: var(--sb-font-general-label);\n  text-decoration: none;\n  color: var(--sb-link-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={visualDescription:"uew_mjktB3wcK3Wi2DOa",visualDescriptionVisual:"HaCFlwsVksWgCcSPHDuw",visualDescriptionText:"hiCg1DzVFL2WI0tRjVxT",visualDescriptionTitle:"GkFvkDfBvLCAwc_b5mNQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);