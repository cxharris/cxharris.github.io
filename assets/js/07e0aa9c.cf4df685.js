"use strict";(self.webpackChunktesting_the_docs=self.webpackChunktesting_the_docs||[]).push([[354],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l=void 0,c={unversionedId:"show-me-the-tools/taiko/taiko",id:"show-me-the-tools/taiko/taiko",title:"taiko",description:"Installing Taiko using npm",source:"@site/docs/show-me-the-tools/taiko/taiko.md",sourceDirName:"show-me-the-tools/taiko",slug:"/show-me-the-tools/taiko/",permalink:"/docs/show-me-the-tools/taiko/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/show-me-the-tools/taiko/taiko.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/docs/show-me-the-tools/create-a-page"},next:{title:"Create a Document",permalink:"/docs/show-me-the-tools/create-a-document"}},p={},u=[{value:"Installing Taiko using npm",id:"installing-taiko-using-npm",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"installing-taiko-using-npm"},"Installing Taiko using npm"),(0,r.kt)("p",null,"In the command window type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install taiko\n")),(0,r.kt)("p",null,"Be sure to be in a command window at the root of your project when you do this - your output will probably look a lot like mine, and you can ignore any ",(0,r.kt)("inlineCode",{parentName:"p"},"WARN")," messages at this stage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'clive@DESKTOP-AV6MK69 MINGW64 /d/content-testing-book\n$ npm install taiko\nnpm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated\nnpm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated\n\n> taiko@1.2.7 install D:\\content-testing-book\\node_modules\\taiko\n> node lib/install.js\n\nDownloading Chromium r823078 - 154.7 Mb [====================] 100% 0.0s\n\n> taiko@1.2.7 postinstall D:\\content-testing-book\\node_modules\\taiko\n> node lib/documentation.js\n\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules\\chokidar\\node_modules\\fsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})\nnpm WARN content-testing-book@1.0.0 No description\nnpm WARN content-testing-book@1.0.0 No repository field.\n\n+ taiko@1.2.7\n')),(0,r.kt)("p",null,"This command goes off, locates Taiko, and installs it as a Node package in your local project directory - it (i.e. Taiko) will only be available for this project, from a command line that's open inside a project directory, rather than globally. I'll be brutally honest here, the only reason we are choosing to do it ",(0,r.kt)("em",{parentName:"p"},"locally")," is that there's currently a bug affecting global installs! There's a workaround, but a local install is much less hassle."),(0,r.kt)("p",null,"Also downloaded is a version of Chromium - an open source codebase (and its binaries) for a web browser that forms the baseline for several industry-leading browsers, like Chrome and Edge (... but not, as it turns out, Firefox). Our tests are going to take shape when we automate this special installation of Chromium to visit web pages. Lots of information messages and a few warnings (which can be safely ignored) appear during this process."),(0,r.kt)("p",null,"To be fair, this can take some time, depending on your internet speed. When it's finished, you'll see in your project explorer that a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," has been created. If you're of a curious disposition, you can review ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and see that it's had a new dependency added by the installation process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Json"},'...\n  "dependencies": {\n    "taiko": "^1.2.7"\n  },\n...\n')),(0,r.kt)("p",null,"You might also notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," contains a shedful of files and directories! Again, no worries - that's how Node works."),(0,r.kt)("p",null,"To check it's worked, make sure your command line is open at the root of your project (in my case this is ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\content-testing-book")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"d/content-testing-book")," in bash) and type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"$ ./node_modules/.bin/taiko\n\nVersion: 1.2.7 (Chromium: 88.0.4314.0)\nType .api for help and .exit to quit\n\n>\n")),(0,r.kt)("p",null,"Notice how the command prompt has changed from the bash command prompt to Taiko's: ",(0,r.kt)("inlineCode",{parentName:"p"},">"),"."),(0,r.kt)("p",null,"Well done, we've come a long way and are nearly ready for some fun. If you've had trouble installing Taiko, check out the docs site: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://docs.taiko.dev/"),"."),(0,r.kt)("p",null,"One final but important word - to get out of Taiko and back to the command terminal proper, you need to type ",(0,r.kt)("inlineCode",{parentName:"p"},".exit")," (don't forget the dot) at the Taiko prompt."),(0,r.kt)("p",null,"In the next section, we'll learn a lot about Taiko and start to put it through its paces. All this setup can be a bit of a drag, especially if you hit problems along the way. It always makes me feel better when I realise that it's a one-off activity - you'll probably never have to do all of it again."))}m.isMDXComponent=!0}}]);