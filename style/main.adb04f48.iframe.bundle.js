(self.webpackChunkmonday_ui_style=self.webpackChunkmonday_ui_style||[]).push([[590],{"../../node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook/components/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>ComponentNameDecorator,w:()=>RelatedComponentsDecorator});var classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component_name=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/component-name/component-name.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),component_name_decorator=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./storybook/components/component-name/component-name-decorator.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(component_name_decorator.c,options);component_name_decorator.c&&component_name_decorator.c.locals&&component_name_decorator.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ComponentNameDecorator=({children,className,withFoundationBackground=!1})=>(0,jsx_runtime.jsx)(component_name.c,{className:classnames_default()("monday-ui-style-storybook-component-name",className,{"monday-ui-style-storybook-component-name--foundation":withFoundationBackground}),children});ComponentNameDecorator.displayName="ComponentNameDecorator";ComponentNameDecorator.__docgenInfo={description:"",methods:[],displayName:"ComponentNameDecorator",props:{withFoundationBackground:{defaultValue:{value:"false",computed:!1},required:!1}}};var prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("../../node_modules/react/index.js"),related_component=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/related-component/related-component.js"),colors_description=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./storybook/components/related-components/descriptions/colors-description/colors-description.scss"),colors_description_options={};colors_description_options.styleTagTransform=styleTagTransform_default(),colors_description_options.setAttributes=setAttributesWithoutAttributes_default(),colors_description_options.insert=insertBySelector_default().bind(null,"head"),colors_description_options.domAPI=styleDomAPI_default(),colors_description_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(colors_description.c,colors_description_options);colors_description.c&&colors_description.c.locals&&colors_description.c.locals;const ColorsDescription=()=>{const component=(0,react.useMemo)((()=>(0,jsx_runtime.jsxs)("div",{className:"monday-ui-style-storybook-colors-description",children:[(0,jsx_runtime.jsx)("div",{className:"monday-ui-style-storybook-colors-description_color-block"}),(0,jsx_runtime.jsx)("div",{className:"monday-ui-style-storybook-colors-description_color-block"}),(0,jsx_runtime.jsx)("div",{className:"monday-ui-style-storybook-colors-description_color-block"})]})),[]);return(0,jsx_runtime.jsx)(related_component.c,{component,title:"Colors",description:"Ensure accessible text, and distinguish UI elements and surfaces from one another."})};ColorsDescription.displayName="ColorsDescription",ColorsDescription.__docgenInfo={description:"",methods:[],displayName:"ColorsDescription"};var spacing_description_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./storybook/components/related-components/descriptions/spacing-description/spacing-description.module.scss"),spacing_description_module_options={};spacing_description_module_options.styleTagTransform=styleTagTransform_default(),spacing_description_module_options.setAttributes=setAttributesWithoutAttributes_default(),spacing_description_module_options.insert=insertBySelector_default().bind(null,"head"),spacing_description_module_options.domAPI=styleDomAPI_default(),spacing_description_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spacing_description_module.c,spacing_description_module_options);const spacing_description_spacing_description_module=spacing_description_module.c&&spacing_description_module.c.locals?spacing_description_module.c.locals:void 0,SpacingDescription=()=>{const component=(0,react.useMemo)((()=>(0,jsx_runtime.jsxs)("div",{className:spacing_description_spacing_description_module["spacing-description-visual-element"],children:[(0,jsx_runtime.jsx)("div",{className:spacing_description_spacing_description_module["small-spacing-visual-element"]}),(0,jsx_runtime.jsx)("div",{className:spacing_description_spacing_description_module["medium-spacing-visual-element"]}),(0,jsx_runtime.jsx)("div",{className:spacing_description_spacing_description_module["large-spacing-visual-element"]})]})),[]);return(0,jsx_runtime.jsx)(related_component.c,{component,title:"Spacing",description:"Spacing creates relationships and hierarchy withing the visual controls."})};SpacingDescription.displayName="SpacingDescription",SpacingDescription.__docgenInfo={description:"",methods:[],displayName:"SpacingDescription"};const descriptionComponentsMap=new Map;descriptionComponentsMap.set("colors",(0,jsx_runtime.jsx)(ColorsDescription,{})),descriptionComponentsMap.set("spacing",(0,jsx_runtime.jsx)(SpacingDescription,{}));var related_components=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/related-components/related-components.js");const RelatedComponentsDecorator=({componentsNames})=>(0,jsx_runtime.jsx)(related_components.c,{componentsNames,descriptionComponentsMap});RelatedComponentsDecorator.displayName="RelatedComponentsDecorator",RelatedComponentsDecorator.propTypes={componentsNames:prop_types_default().arrayOf(prop_types_default().string)},RelatedComponentsDecorator.defaultProps={componentsNames:[]};RelatedComponentsDecorator.__docgenInfo={description:"",methods:[],displayName:"RelatedComponentsDecorator",props:{componentsNames:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}},ComponentNameDecorator.__docgenInfo={description:"",methods:[],displayName:"ComponentNameDecorator",props:{withFoundationBackground:{defaultValue:{value:"false",computed:!1},required:!1}}},RelatedComponentsDecorator.__docgenInfo={description:"",methods:[],displayName:"RelatedComponentsDecorator",props:{componentsNames:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}}},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/doc-footer/doc-footer.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/section-name/section-name.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/title/title.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/anchor-list-item/anchor-list-item.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/link-component/link-component.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/paragraph/paragraph.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/component-rules/component-rules.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/usage-guidelines/usage-guidelines.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/function-arguments/function-arguments.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/function-arguments/function-argument.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/related-component/related-component.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/frame/frame.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/unstyled-list/unstyled-list.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/vibe-storybook-components/dist/components/unstyled-list-item/unstyled-list-item.js"),_storybook_addon_themes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-themes/dist/index.mjs"),_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./storybook/components/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/vibe-storybook-components/dist/index.css"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const __WEBPACK_DEFAULT_EXPORT__={parameters:{docs:{inlineStories:!0,container:({children,context})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ek,{context,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.C,{children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.c,{feedbackFormLink:""})]})}),page:_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UV,components:{h1:_storybook_components__WEBPACK_IMPORTED_MODULE_1__.E,ComponentName:_storybook_components__WEBPACK_IMPORTED_MODULE_1__.E,h2:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,h3:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_7__.c,li:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.c,a:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_9__.c,p:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_10__.c,SectionName:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,ComponentRules:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_11__.c,UsageGuidelines:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_12__.c,FunctionArguments:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_13__.c,FunctionArgument:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_14__.c,RelatedComponent:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_15__.c,RelatedComponents:_storybook_components__WEBPACK_IMPORTED_MODULE_1__.w,Frame:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_16__.c,UnstyledList:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_17__.c,UnstyledListItem:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_18__.c}},options:{storySort:{order:["Welcome","*"]}}},decorators:[(0,_storybook_addon_themes__WEBPACK_IMPORTED_MODULE_0__.wB)({themes:{Light:"light-app-theme",Dark:"dark-app-theme",Black:"black-app-theme",Hacker:"hacker_theme-app-theme"},defaultTheme:"Light"})]}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:storybook(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.mdx)$/.exec(path))return;const pathRemainder=path.substring(12);return __webpack_require__("./storybook lazy recursive ^\\.\\/.*$ include: (?:\\/storybook(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("../../node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("../../node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("../../node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-themes/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./storybook/components/component-name/component-name-decorator.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./storybook/components/component-name/assets/component-background.png"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./storybook/components/component-name/assets/foundation-background.png"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);___CSS_LOADER_EXPORT___.push([module.id,`.monday-ui-style-storybook-component-name{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___})}.monday-ui-style-storybook-component-name--foundation{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_1___})}`,"",{version:3,sources:["webpack://./storybook/components/component-name/component-name-decorator.scss"],names:[],mappings:"AAAA,0CACE,wDAAA,CAEA,sDACE,wDAAA",sourcesContent:['.monday-ui-style-storybook-component-name {\n  background-image: url("./assets/component-background.png");\n\n  &--foundation {\n    background-image: url("./assets/foundation-background.png");\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./storybook/components/related-components/descriptions/colors-description/colors-description.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-ui-style-storybook-colors-description{display:flex;justify-content:center;align-items:center}.monday-ui-style-storybook-colors-description_color-block{height:48px;width:48px}.monday-ui-style-storybook-colors-description_color-block:first-child{background-color:var(--sb-primary-color)}.monday-ui-style-storybook-colors-description_color-block:nth-child(2){background-color:var(--sb-primary-hover-color)}.monday-ui-style-storybook-colors-description_color-block:last-child{background-color:var(--sb-primary-selected-color)}","",{version:3,sources:["webpack://./storybook/components/related-components/descriptions/colors-description/colors-description.scss"],names:[],mappings:"AAAA,8CACE,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,0DACE,WAAA,CACA,UAAA,CAEA,sEACE,wCAAA,CAGF,uEACE,8CAAA,CAGF,qEACE,iDAAA",sourcesContent:[".monday-ui-style-storybook-colors-description {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &_color-block {\n    height: 48px;\n    width: 48px;\n\n    &:first-child {\n      background-color: var(--sb-primary-color);\n    }\n\n    &:nth-child(2) {\n      background-color: var(--sb-primary-hover-color);\n    }\n\n    &:last-child {\n      background-color: var(--sb-primary-selected-color);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./storybook/components/related-components/descriptions/spacing-description/spacing-description.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".juRSH4eXIWyS2HmeBY31{display:flex;justify-content:center;align-items:flex-end}.juRSH4eXIWyS2HmeBY31>*{margin:var(--sb-spacing-medium);width:40px;background-color:var(--sb-negative-color-selected)}.juRSH4eXIWyS2HmeBY31 .DGMiMwImT3pDn0H0OpTg{height:var(--sb-spacing-small)}.juRSH4eXIWyS2HmeBY31 .kg7NQscEb42aHc8Hys2o{height:var(--sb-spacing-medium)}.juRSH4eXIWyS2HmeBY31 .z5Qs_AjG8HmiPfujc0PJ{height:var(--sb-spacing-large)}","",{version:3,sources:["webpack://./storybook/components/related-components/descriptions/spacing-description/spacing-description.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,sBAAA,CACA,oBAAA,CAEA,wBACE,+BAAA,CACA,UAAA,CACA,kDAAA,CAGF,4CACE,8BAAA,CAGF,4CACE,+BAAA,CAGF,4CACE,8BAAA",sourcesContent:[".spacing-description-visual-element {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n\n  & > * {\n    margin: var(--sb-spacing-medium);\n    width: 40px;\n    background-color: var(--sb-negative-color-selected);\n  }\n\n  .small-spacing-visual-element {\n    height: var(--sb-spacing-small);\n  }\n\n  .medium-spacing-visual-element {\n    height: var(--sb-spacing-medium);\n  }\n\n  .large-spacing-visual-element {\n    height: var(--sb-spacing-large);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"spacing-description-visual-element":"juRSH4eXIWyS2HmeBY31","small-spacing-visual-element":"DGMiMwImT3pDn0H0OpTg","medium-spacing-visual-element":"kg7NQscEb42aHc8Hys2o","large-spacing-visual-element":"z5Qs_AjG8HmiPfujc0PJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./storybook lazy recursive ^\\.\\/.*$ include: (?:\\/storybook(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stand-alone-documentation/changelog/Changelog.stories.mdx":["./storybook/stand-alone-documentation/changelog/Changelog.stories.mdx",348],"./stand-alone-documentation/colors/colors.stories.mdx":["./storybook/stand-alone-documentation/colors/colors.stories.mdx",904],"./stand-alone-documentation/spacing/spacing.stories.mdx":["./storybook/stand-alone-documentation/spacing/spacing.stories.mdx",620],"./stand-alone-documentation/welcome/welcome.stories.mdx":["./storybook/stand-alone-documentation/welcome/welcome.stories.mdx",512]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./storybook lazy recursive ^\\.\\/.*$ include: (?:\\/storybook(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackAsyncContext},"./storybook/components/component-name/assets/component-background.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/component-background.20d2b897.png"},"./storybook/components/component-name/assets/foundation-background.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/foundation-background.faf6098e.png"},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[328],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);