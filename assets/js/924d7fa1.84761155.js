"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[821],{6489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var d=t(5893),s=t(1151);const r={},c=void 0,l={id:"Components/Select",title:"Select",description:"Select",source:"@site/docs/02-Components/Select.md",sourceDirName:"02-Components",slug:"/Components/Select",permalink:"/navrary-util-components/docs/Components/Select",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-Components/Select.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dialog",permalink:"/navrary-util-components/docs/Components/Dialog"},next:{title:"Switch",permalink:"/navrary-util-components/docs/Components/Switch"}},i={},h=[{value:"Select",id:"select",level:3},{value:"Basic Usage",id:"basic-usage",level:3},{value:"API",id:"api",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h3,{id:"select",children:"Select"}),"\n",(0,d.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790\uac00 \uc5ec\ub7ec \uc635\uc158 \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8 \uc785\ub2c8\ub2e4."}),"\n",(0,d.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'<Select>\n  <Select.Trigger />\n  <Select.Value>apple</Select.Value>\n  <Select.OptionGroup>\n    <Select.Option id="orange">Orange</Select.Option>\n    <Select.Option id="apple">Apple</Select.Option>\n    <Select.Option id="grape">Grape</Select.Option>\n  </Select.OptionGroup>\n</Select>\n'})}),"\n",(0,d.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Select"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"externalSelectedOption?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"T = any"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"external select state"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"defalutSelected?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"T = any"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"default select state"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onSelectChange?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(option : T) => void"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"external select setState. should be accompanied by externalSelectedOption."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"externalOpen?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"external open state"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"defaultOpen?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"default open state"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onOpenChange?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"() => void"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"external open setState. should be accompanied by externalOpen."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Trigger"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"asChild?"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"Change the default rendered element for the one passed as a child, merging their props and functions."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"className?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"styling props for target component"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onTriggerClick"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(e: MouseEvent) => void"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"external function to control trigger component."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"OptionGroup"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"asChild?"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"Change the default rendered element for the one passed as a child, merging their props and functions."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"className?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"styling props for target component"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Option"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"asChild?"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"Change the default rendered element for the one passed as a child, merging their props and functions."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"className?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"styling props for target component"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onOptionClick"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(e: MouseEvent) => void"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"external function to control option component."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"id"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"T = any"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"props used to identify an option."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Value"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Prop"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"asChild?"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"Change the default rendered element for the one passed as a child, merging their props and functions."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"className?"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"styling props for target component"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"options"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Record<number, T = any>"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"external object to match option with specific value."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"defaultValue"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"T = any"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"default value."})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var d=t(7294);const s={},r=d.createContext(s);function c(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);