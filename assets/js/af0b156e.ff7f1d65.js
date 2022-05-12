"use strict";(self.webpackChunktesting_the_docs=self.webpackChunktesting_the_docs||[]).push([[4010],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"Prerequisites",sidebar_position:2},l=void 0,p={unversionedId:"Prerequisites",id:"Prerequisites",title:"Prerequisites",description:"It turns out that many of the test tools we'll be  using have a set of common dependencies. So let's install the obvious suspects just the once. I am using Windows - if you are using MacOS or Linux, you will probably be aware of the nuances of working in your own environment and the slight differences that apply when, say, using the command line.",source:"@site/docs/prerequisites.md",sourceDirName:".",slug:"/Prerequisites",permalink:"/docs/Prerequisites",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/prerequisites.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Prerequisites",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Automated doc testing",permalink:"/docs/intro"},next:{title:"Tools and tests",permalink:"/docs/show-me-the-tools/tools-and-tests"}},d={},u=[{value:"Git",id:"git",level:2},{value:"Node.js",id:"nodejs",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Launching VSCode and setting up a project",id:"launching-vscode-and-setting-up-a-project",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It turns out that many of the test tools we'll be  using have a set of common dependencies. So let's install the obvious suspects just the once. I am using Windows - if you are using MacOS or Linux, you will probably be aware of the nuances of working in your own environment and the slight differences that apply when, say, using the command line. "),(0,i.kt)("p",null,"If possible, install the software packages in the order in which they appear in this section - it makes some parts of this setup process a little easier."),(0,i.kt)("p",null,"If you are unfamiliar with these software packages, and generally noodling around with your computer, you may find these early steps frustrating. The truth is, all computers are different and no set of installation instructions can be guaranteed to work in all cases. So please don't get despondent if it takes a little time to get this right - know that thousands of people before you have probably encountered the same issues and that help is often just a couple of internet searches away."),(0,i.kt)("h2",{id:"git"},"Git"),(0,i.kt)("p",null,"Wikipedia describes Git as ",(0,i.kt)("em",{parentName:"p"},"Software for tracking changes in any set of files"),". It's a good idea to install it now, as it will be ready for us later on when we need it. As a bonus on Windows, during the installation process, you are offered (and should accept) the option of running Git inside of ",(0,i.kt)("em",{parentName:"p"},"Git Bash")," - a Linux-like command window that's often more straightforward that the native Windows command line (and a lot lighter than PowerShell)."),(0,i.kt)("p",null,"Get Git from ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads"),", invoke the installation utility and follow the prompts through, remembering to select the options that relate to using Git via Git Bash if you are using Windows."),(0,i.kt)("p",null,"Even if you have never used Git before, you are likely to have heard of it and GitHub. We'll cover just a few essential Git commands here, as there is a vast amount of information already available on the web."),(0,i.kt)("h2",{id:"nodejs"},"Node.js"),(0,i.kt)("p",null,"When JavaScript was originated, it could only run inside a browser. Node.js is a JavaScript runtime that liberates JavaScript from the browser, allowing it to become a first-class citizen in the world of programming languages, able to run outside of a browser. We will use several Node.js packages as we build up our example test suites."),(0,i.kt)("p",null,"You can download and install it from ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," by choosing your operating system and architecture. Follow the installation instructions and the best advice is to use Google if you hit problems or need more explicit help. If you have already installed one or more of these packages, just skip the relevant section."),(0,i.kt)("p",null,"When Node.js (often called simply ",(0,i.kt)("em",{parentName:"p"},"Node"),") you'll have access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," executable in a command line or terminal."),(0,i.kt)("p",null,"After installing Node, you can type ",(0,i.kt)("inlineCode",{parentName:"p"},"node --version")," in a command line or terminal - if it's been installed correctly, you'll get a reply like ",(0,i.kt)("inlineCode",{parentName:"p"},"v14.16.1"),". Of course the precise version doesn't matter as long as you install from an obviously current download. When you install Node, you also install ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," which stands for ",(0,i.kt)("em",{parentName:"p"},"Node Package Manager")," - Node's default package manager, which gives you the ability to install Node's massive ecosystem of add-ons. You will probably need to close down and reopen any command windows or terminals before you can issue commands like ",(0,i.kt)("inlineCode",{parentName:"p"},"node --version")," - the installation modifies your path and this process refreshes your environment."),(0,i.kt)("p",null,"Once you've installed Node, we can use npm to install every other package we need - and we can do this from within VSCode's integrated terminal!"),(0,i.kt)("p",null,"Also installed is a program called ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," (Node Package Execute) which allows us to run any Node package that exists in the global external npm registry without even installing it. It's great for one-off initialisation of projects when we don't want the overhead of permanently installing little-used libraries."),(0,i.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,"Visual Studio Code is a powerful and popular source code editor available for all major platforms. Originally developed by Microsoft, most of its source code has now been released as open source under the MIT license. It's fast and extensible - you can add new functionality to it by downloading ",(0,i.kt)("em",{parentName:"p"},"extensions")," that offer support for various programming and content creation languages - such as JavaScript and Markdown and many more."),(0,i.kt)("p",null,"If you already use it, that's great. If not, do yourself a favour and check it out! Which is not to say that you can't use another editor to work your way through the examples if you really want to. But it ",(0,i.kt)("em",{parentName:"p"},"is")," the editor that I'll be using to write them, so it might be worth switching (even temporarily) just for consistency."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")," to get hold of Visual Studio Code. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At some stage, the installer offers you the following options, all of which you should select (... unless you have very good and specific reasons for not doing so):"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},'Add "Open with Code" action to Windows Explorer file context menu'),(0,i.kt)("li",{parentName:"ul"},'Add "Open with Code" action to Windows Explorer directory context menu'),(0,i.kt)("li",{parentName:"ul"},"Register Code as an editor for supported file types"),(0,i.kt)("li",{parentName:"ul"},"Add to PATH (available after restart)")),(0,i.kt)("p",{parentName:"div"},"I've configured my Windows installation to use Git Bash as the default integrated terminal - if you'd like to do the same, you can follow the instructions here: ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal"},"https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal"),"."),(0,i.kt)("p",{parentName:"div"},"(... this is why I recommended installing Git before VSCode, so that Git Bash would be available as an option). The other most popular options are either PowerShell or CMD - just choose the option with which you are most familiar. I hardly ever use PowerShell, so am not the right person to answer any of your PowerShell questions!"))),(0,i.kt)("h3",{id:"launching-vscode-and-setting-up-a-project"},"Launching VSCode and setting up a project"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using your preferred method, create a directory in which to manage your suite of content tests - I'm going to use ",(0,i.kt)("inlineCode",{parentName:"p"},"D:\\content-testing-resources"),". My ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," drive keeps filling up behind my back so I tend to use ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," whenever I know I have a choice!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch VSCode - you'll see a window that looks substantially like:"),(0,i.kt)("img",{src:"/img/02-new-vscode-window.png",alt:"Initial VSCode window",width:"600"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("em",{parentName:"p"},"File > Open Folder")," and navigate to and select the folder you created in the first step above. You can click ",(0,i.kt)("em",{parentName:"p"},"Yes, I trust the authors")," to give VSCode full access. This is how VSCode looks when you've done this:"),(0,i.kt)("img",{src:"/img/02-vscode-in-new-folder.png",alt:"Opening a directory in VSCode",width:"600"}),(0,i.kt)("p",{parentName:"li"},"If it doesn't look like this, choose ",(0,i.kt)("em",{parentName:"p"},"View > Explorer")," from the main menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open up a command window by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"'")," - that is, ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL")," (or the equivalent key for your own Operating System) and then ",(0,i.kt)("inlineCode",{parentName:"p"},"'")," (apostrophe). "),(0,i.kt)("img",{src:"/img/02-new-command-terminal.png",alt:"Opening a command terminal in VSCode",width:"600"}),(0,i.kt)("p",{parentName:"li"},"A command terminal has opened up at the bottom, below the ",(0,i.kt)("em",{parentName:"p"},"Welcome")," pane - you can see that mine is based on bash. This little key sequence - ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL '")," - is going to become part of your muscle memory, because we'll be using the command terminal a lot!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Type:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"npm init --yes\n")),(0,i.kt)("p",{parentName:"li"},"This creates some small scaffolding for a Node project, ending up by generating a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," that will ultimately contain a list of all the dependencies your project needs to run. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--yes")," parameter means that it does it all automatically, rather than bothering you with some tiresome questions about the project, which, for where we're at on our Node and Taiko journey, is just fine!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("em",{parentName:"p"},"Extensions")," icon in the leftmost menu: ",(0,i.kt)("img",{src:"/img/02-extensions-icon.png",alt:"The VSCode extensions icon",width:"32"})),(0,i.kt)("p",{parentName:"li"},"Your project explorer pane is swapped for the ",(0,i.kt)("em",{parentName:"p"},"Extensions Marketplace")," pane. In the field where it says ",(0,i.kt)("em",{parentName:"p"},"Search Extensions in the Marketplace"),", type ",(0,i.kt)("inlineCode",{parentName:"p"},"project manager")," - this filters out all the unrelated extensions and displays a list of project manager type extensions for VSCode. The one we want usually appears at the top of the list and is called simply ",(0,i.kt)("em",{parentName:"p"},"Project Manager")," - you can confirm it's the right one by verifying that the author is ",(0,i.kt)("em",{parentName:"p"},"Alessandro Fragnani"),". Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Install")," to install the extension into your VSCode setup."),(0,i.kt)("p",{parentName:"li"},"This is the general procedure for installing ",(0,i.kt)("em",{parentName:"p"},"any")," available extension. Note that you may have to restart VSCode for the installation of ",(0,i.kt)("em",{parentName:"p"},"some")," extensions to take effect.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"SHIFT")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," - that is ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"SHIFT")," (without releasing ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL"),") and then ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," (without releasing ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SHIFT"),") and you'll see a menu popping up offering you a list of facilities relating to your installed extension(s) - which if this is a new installation, will only involve project manager."),(0,i.kt)("p",{parentName:"li"},"Search for and select the command ",(0,i.kt)("inlineCode",{parentName:"p"},"Project Manager: Save Project"),", then give it a name (say ",(0,i.kt)("inlineCode",{parentName:"p"},"content-testing-project"),") and press ",(0,i.kt)("inlineCode",{parentName:"p"},"ENTER"),". This saves your project in the project manager, so you can quickly return to it at any time in the future by relaunching VSCode and clicking the project manager icon in the left menu: ",(0,i.kt)("img",{src:"/img/02-project-manager-icon.png",alt:"The VSCode project manager icon",width:"32"}),". It will present you with a selectable list of already saved projects."))))}m.isMDXComponent=!0}}]);