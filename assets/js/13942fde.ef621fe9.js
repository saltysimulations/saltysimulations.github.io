"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[601],{5769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(4848),i=t(8453);const a={sidebar_position:2,description:"Fuel Management"},r="Fuel Management",l={id:"guides/fuel_management",title:"Fuel Management",description:"Fuel Management",source:"@site/docs/guides/fuel_management.md",sourceDirName:"guides",slug:"/guides/fuel_management",permalink:"/docs/guides/fuel_management",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Ninjo",lastUpdatedAt:1661250107e3,sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Fuel Management"},sidebar:"tutorialSidebar",previous:{title:"Weight And Balance",permalink:"/docs/guides/w&b"},next:{title:"SimBrief",permalink:"/docs/guides/simbrief"}},o={},d=[{value:"Stages of Flight",id:"stages-of-flight",level:2},{value:"Start of Flight",id:"start-of-flight",level:3},{value:"STAB Tank Transfer to CWT",id:"stab-tank-transfer-to-cwt",level:3},{value:"When CWT is Empty",id:"when-cwt-is-empty",level:3},{value:"FUEL TANK/ENG EICAS Message",id:"fuel-tank-eng",level:3},{value:"Final Configuration",id:"final-configuration",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"fuel-management",children:"Fuel Management"})}),"\n",(0,s.jsx)(n.p,{children:"Unlike many other airliners, the 747 fuel system can be quite complex and requires a number of manual interventions throughout the flight. This is simulated in the 74S, and you may run into issues if you don't follow these steps."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This guide assumes all tanks are full. In the likely case that your fuel configuration is different, simply skip to the applicable step. For example, if you have no fuel in the Center Wing Tank or Stab Tank, go to ",(0,s.jsx)(n.a,{href:"#fuel-tank-eng",children:"FUEL TANK/ENG EICAS message"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"stages-of-flight",children:"Stages of Flight"}),"\n",(0,s.jsx)(n.p,{children:"This guide will go through the different stages of flight at which manual interventions are required."}),"\n",(0,s.jsx)(n.h3,{id:"start-of-flight",children:"Start of Flight"}),"\n",(0,s.jsx)(n.p,{children:"The aircraft burns fuel only from the Center Wing Tank (CWT)."}),"\n",(0,s.jsx)(n.h3,{id:"stab-tank-transfer-to-cwt",children:"STAB Tank Transfer to CWT"}),"\n",(0,s.jsxs)(n.p,{children:["Once the CWT reaches 80,000 lbs (36,300 kg), the fuel in the horizontal STAB tank will transfer forward to the CWT. When this is finished, ",(0,s.jsx)(n.strong,{children:"turn off the STAB pumps"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"when-cwt-is-empty",children:"When CWT is Empty"}),"\n",(0,s.jsxs)(n.p,{children:["Once the CWT is empty, the EICAS ",(0,s.jsx)(n.code,{children:"FUEL LOW CTR R/L"})," messages will display."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"FUEL LOW CTR R/L",src:t(5147).A+"",width:"500",height:"500"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"You must now switch off the CTR pumps"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Overhead Fuel Panel",src:t(1495).A+"",width:"400",height:"157"})}),"\n",(0,s.jsx)(n.p,{children:"The aircraft should now be feeding all four engines from the inner Main Tanks 2 & 3."}),"\n",(0,s.jsx)(n.h3,{id:"fuel-tank-eng",children:"FUEL TANK/ENG EICAS Message"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"FUEL TANK/ENG"})," EICAS message means that the outboard (+ reserve) and inboard tanks are now balanced."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"FUEL TANK/ENG",src:t(7294).A+"",width:"500",height:"500"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"You must now switch off OVRD/JETTISON pumps 2 & 3 and close crossfeed valves 1 & 4"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Overhead Fuel Panel",src:t(8316).A+"",width:"400",height:"158"})}),"\n",(0,s.jsx)(n.h3,{id:"final-configuration",children:"Final Configuration"}),"\n",(0,s.jsx)(n.p,{children:"If done correctly, each tank should now be feeding its respective engine (as in the image). The reserve tank 1 & 4 fuel will automatically transfer when the mains reach 13,500 lbs (6100 kg). No further action is required."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Final Configuration",src:t(3739).A+"",width:"500",height:"500"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5147:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/center_empty-30cae1b56630da56ec0f87b97e9bd68d.png"},1495:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/center_empty_ovhd-c19214d6f08242e02e2065e88d80fee4.png"},3739:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/final_configuration-d673cc34524c82b693917ec72b2a0a6d.png"},7294:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/fuel_tank_eng-c4a6a57817164d8457ce2f6228181c88.png"},8316:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/fuel_tank_eng_ovhd-73687331bbcdefde9f029c920a53c724.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);