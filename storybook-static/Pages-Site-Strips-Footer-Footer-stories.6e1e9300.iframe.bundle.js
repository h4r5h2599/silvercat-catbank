"use strict";(self.webpackChunksilvercat_react=self.webpackChunksilvercat_react||[]).push([[745],{"./src/Pages/Site/Strips/Footer/Footer.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Full_Screen:()=>Full_Screen,Mobile:()=>Mobile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MyContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/MyContext.jsx"),_Footer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Pages/Site/Strips/Footer/Footer.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Website/Strips/Footer",component:_Footer__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{theme:{type:"select",options:["dark","light"],defaultValue:"dark"},accentColor:{control:"color"},isMobile:{control:"boolean"}},tags:["autodocs"]},Template=_ref=>{let{theme,accentColor,isMobile,...args}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MyContext__WEBPACK_IMPORTED_MODULE_0__.D,{defaultTheme:theme,defaultRoute:"Home",forceMobile:isMobile,defaultLoggedIn:!1,accent:accentColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_1__.A,{...args})})},Full_Screen=Template.bind({});Full_Screen.args={theme:"dark",isMobile:!1};const Mobile=Template.bind({});Mobile.args={theme:"dark",isMobile:!0};const __namedExportsOrder=["Full_Screen","Mobile"];Full_Screen.parameters={...Full_Screen.parameters,docs:{...Full_Screen.parameters?.docs,source:{originalSource:'({\n  theme,\n  accentColor,\n  isMobile,\n  ...args\n}) => <ContextProvider defaultTheme={theme} defaultRoute={"Home"} forceMobile={isMobile} defaultLoggedIn={false} accent={accentColor}>\n    <FooterStory {...args} />\n  </ContextProvider>',...Full_Screen.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:'({\n  theme,\n  accentColor,\n  isMobile,\n  ...args\n}) => <ContextProvider defaultTheme={theme} defaultRoute={"Home"} forceMobile={isMobile} defaultLoggedIn={false} accent={accentColor}>\n    <FooterStory {...args} />\n  </ContextProvider>',...Mobile.parameters?.docs?.source}}}}}]);