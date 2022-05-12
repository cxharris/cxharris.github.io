"use strict";(self.webpackChunktesting_the_docs=self.webpackChunktesting_the_docs||[]).push([[1892],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(h,r(r({ref:t},u),{},{components:o})):n.createElement(h,r({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},175:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],s={},l="Taiko quickstart",c={unversionedId:"show-me-the-tools/taiko/taiko-quickstart",id:"show-me-the-tools/taiko/taiko-quickstart",title:"Taiko quickstart",description:"This section is a gentle introduction to Taiko and some of the tools we've chosen to use with it. As well as presenting basic Taiko commands, it demonstrates the kind of workflows we'll use when we ramp up the complexity as we develop our test suites.",source:"@site/docs/show-me-the-tools/taiko/taiko-quickstart.md",sourceDirName:"show-me-the-tools/taiko",slug:"/show-me-the-tools/taiko/taiko-quickstart",permalink:"/docs/show-me-the-tools/taiko/taiko-quickstart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/show-me-the-tools/taiko/taiko-quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"test",permalink:"/docs/show-me-the-tools/taiko/clive"},next:{title:"Create a Blog Post",permalink:"/docs/show-me-the-tools/create-a-blog-post"}},u={},p=[{value:"Quick start",id:"quick-start",level:2},{value:"Automating a browser",id:"automating-a-browser",level:3},{value:"Behind the scenes",id:"behind-the-scenes",level:3},{value:"Running a program outside the recorder",id:"running-a-program-outside-the-recorder",level:4},{value:"Installing Taiko properly",id:"installing-taiko-properly",level:3}],d={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"taiko-quickstart"},"Taiko quickstart"),(0,i.kt)("p",null,"This section is a gentle introduction to Taiko and some of the tools we've chosen to use with it. As well as presenting basic Taiko commands, it demonstrates the kind of workflows we'll use when we ramp up the complexity as we develop our test suites. "),(0,i.kt)("h2",{id:"quick-start"},"Quick start"),(0,i.kt)("p",null,"After installing all of the prerequisites, you can launch Taiko by simply typing the following at the VSCode command prompt (accessible via ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL '")," from within VSCode) at the root of your designated test folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx taiko\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"npx")),(0,i.kt)("div",null,(0,i.kt)("div",null," The command ",(0,i.kt)("code",null,"npx")," lets us run any Node package hosted at the central registry without installing it. Of course, there being no such thing as magic, when we use ",(0,i.kt)("code",null,"npx")," we usually have to wait for the package to download to our local system before it can run. Note that ",(0,i.kt)("code",null,"npx")," also checks to see if your package - in this case ",(0,i.kt)("code",null,"taiko")," - is the name of an executable on your system PATH or in your local project's binaries and will execute it if you have so happened to have already installed it, which you can you if you eventually get tired of waiting for it to download every time."),(0,i.kt)("br",null))),(0,i.kt)("p",null,"This command downloads everything we need (if you don't already have it cached), including Chromium - the browser environment used to automate our tests. Depending on your internet connection, all this might take a couple of minutes - that Chromium download is almost 200MB."),(0,i.kt)("p",null,"When it's done, you'll end up in the Taiko ",(0,i.kt)("em",{parentName:"p"},"recorder"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npx taiko\nDownloading Chromium r967620 - 177.1 Mb [====================] 100% 0.0s\n\nVersion: 1.3.2 (Chromium: 100.0.4874.0)\nType .api for help and .exit to quit\n\n>\n")),(0,i.kt)("p",null,"Taiko's ",(0,i.kt)("em",{parentName:"p"},"recorder")," is a special command line interface designed to execute Taiko commands."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Command line interfaces"),(0,i.kt)("div",null,"We'll frequently use two command line interfaces - the one within VSCode, and Taiko's *recorder*. It's important, particularly when starting out, to be aware of *which* command line interface you are using - you can usually tell which is which by examining the command line prompt.",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The VSCode command line prompt might be a ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," sign (for Git bash) or it might look like a file path followed by an angle bracket (e.g. C:\\my-taiko-tests >) if you've chosen to use CMD rather than Git bash. "),(0,i.kt)("li",{parentName:"ul"},"The Taiko command prompt is an isolated right angle bracket: ",(0,i.kt)("inlineCode",{parentName:"li"},">")," and you get to it by entering the command ",(0,i.kt)("inlineCode",{parentName:"li"},"npx Taiko")," at the VSCode command prompt. So the VSCode command prompt is on the road to Taiko.")),(0,i.kt)("p",null,"Don't worry too much about this - it's worth mentioning at this point, to try to avert confusion, but we'll get plenty of practice at using both."))),(0,i.kt)("h3",{id:"automating-a-browser"},"Automating a browser"),(0,i.kt)("p",null,"From within Taiko's recorder, type the following and hit ENTER:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openBrowser()\n")),(0,i.kt)("p",null,"You'll see an instance of the Chromium browser appear in its own new window. To be sure, if it ",(0,i.kt)("em",{parentName:"p"},"doesn't")," appear, we're in big trouble! "),(0,i.kt)("p",null,"Mine looks like this:"),(0,i.kt)("img",{src:"/img/initial-chromium-window.png",alt:"Chromium's initial window",width:"600"}),(0,i.kt)("p",null,"We just issued the ",(0,i.kt)("inlineCode",{parentName:"p"},"openBrowser()")," command to Taiko, and it duly opened a browser instance. Taiko also issued a ",(0,i.kt)("inlineCode",{parentName:"p"},"[PASS]")," message in its recorder output to indicate that it was successful in executing our command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> openBrowser()\n[PASS] Browser opened\n")),(0,i.kt)("p",null,"If you have more than one monitor, it's always useful to drag the Chromium browser window to some free screen real estate, so that we can see both the VSCode window where we issue commands to the recorder, and the corresponding actions it invokes on the browser instance itself. If you've just one monitor, then the best thing to do is to tile your windows as best you can."),(0,i.kt)("p",null,"There are other commands, try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'goto("google.com")\n')),(0,i.kt)("p",null,"Your browser instance goes to ",(0,i.kt)("inlineCode",{parentName:"p"},"google.com")," and displays Google's cookie warning dialog:"),(0,i.kt)("img",{src:"/img/google-cookie-warning.png",alt:"Google cookie warning dialog",width:"600"}),(0,i.kt)("p",null,"This appears because when a Taiko browser session starts, it creates an environment without any cookies - to ensure that every session begins in the same vanilla state. So we have to navigate our way through the dialog automatically as the session has no memory of when you, as an individual, last used your browser to visit Google - it's as if someone visited the site for the first time. That's why we get the boring cookie warnings."),(0,i.kt)("p",null,"Type the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'click("I agree")\n')),(0,i.kt)("p",null,"You might ",(0,i.kt)("em",{parentName:"p"},"just"),' notice a red rectangle surrounding the "I agree" button in the browser before it is automatically clicked and we get to the regular Google home page.'),(0,i.kt)("p",null,"See how the Taiko recorder keeps us up to date with the status of our work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> openBrowser()\n[PASS] Browser opened\n> goto("google.com")\n[PASS] Navigated to URL http://google.com\n> click("I agree")\n[PASS] Clicked element matching text "I agree"  1 times\n>\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's possible that due to your location or other factors, you may not get the Google cookie warning dialog. If this is the case, the ",(0,i.kt)("inlineCode",{parentName:"p"},'click("I agree")')," test will fail and you'll see a failure message in your Taiko output:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"[FAIL] Error: Element with text I agree not found, run `.trace` for more info.\n")))),(0,i.kt)("p",null,"Look how we just issued the command ",(0,i.kt)("inlineCode",{parentName:"p"},'click("I agree")')," to automatically click the button with the \"I agree\" text. This is what's meant by Taiko's ",(0,i.kt)("em",{parentName:"p"},"black box")," philosophy. There was no need for us to examine the underlying code of the web page - all we had to do was ",(0,i.kt)("em",{parentName:"p"},"look")," for an onscreen object with some designated text, and ask Taiko to click it. "),(0,i.kt)("h3",{id:"behind-the-scenes"},"Behind the scenes"),(0,i.kt)("p",null,"We've just run a few of Taiko's commands in its recorder."),(0,i.kt)("p",null,"Behind the scenes, Taiko is maintaining a list of commands for the session, and formatting them into a little JavaScript program that can run on its own - effectively giving you the power of repeating a sequence of commands many many times, whenever you want, without typing them in again."),(0,i.kt)("p",null,"To see Taiko's working copy of this code, you can just type the following from within Taiko's recorder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".code\n")),(0,i.kt)("p",null,"Don't forget the dot ",(0,i.kt)("inlineCode",{parentName:"p"},".")," at the beginning."),(0,i.kt)("p",null,"On my system, Taiko prints out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const { openBrowser, goto, click, closeBrowser } = require(\'taiko\');\n(async () => {\n    try {\n        await openBrowser();\n        await goto("google.com");\n        await click("I agree");\n    } catch (error) {\n        console.error(error);\n    } finally {\n        await closeBrowser();\n    }\n})();\n')),(0,i.kt)("p",null,"Even if you don't call yourself a programmer, you can see the commands you've just issued - ",(0,i.kt)("inlineCode",{parentName:"p"},"openBrowser()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'goto("google.com")')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'click("I agree")'),". They happen to be surrounded by bits of JavaScript that may look strange, but you can see the general shape of the program that's getting built in the background. And what's with this ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," that precedes our commands? And what's all that other stuff like ",(0,i.kt)("inlineCode",{parentName:"p"},"try"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"catch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"finally"),"? More of all this later, but for now, just understand that every command we type in the recorder is marshalled into this program that's accumulating in the background, and that the main ",(0,i.kt)("em",{parentName:"p"},"meat")," of the program - its main sequence of actions - lies in that piece of the program contained in that ",(0,i.kt)("em",{parentName:"p"},"try block"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'try {\n        await openBrowser();\n        await goto("google.com");\n        await click("I agree");\n    }\n')),(0,i.kt)("h4",{id:"running-a-program-outside-the-recorder"},"Running a program outside the recorder"),(0,i.kt)("p",null,"You can easily save a snapshot of the generated code to a file. To save it to a file called ",(0,i.kt)("em",{parentName:"p"},"googleTest.js")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".code googleTest.js\n")),(0,i.kt)("p",null,"This immediately creates the file in the very directory at which you invoked Taiko in the first place."),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},".exit")," to leave Taiko and return to the VSCode command line. When you do this, the Chromium browser closes automatically."),(0,i.kt)("p",null,"Observe that a file called ",(0,i.kt)("em",{parentName:"p"},"googleTest.js")," now exists in the filesystem (via ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," or an equivalent command). The ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," extension is standard for JavaScript files."),(0,i.kt)("p",null,"We know what's inside that file, because we reviewed its contents earlier when we issued the first ",(0,i.kt)("inlineCode",{parentName:"p"},".code")," command. But if you wanted to browse it again, just click on the file name in the VSCode Explorer, whereupon it will open in VSCode's text editor."),(0,i.kt)("p",null,"From the VSCode command line, execute ",(0,i.kt)("em",{parentName:"p"},"googleTest.js")," by typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx taiko googleTest.js\n")),(0,i.kt)("p",null,"On my machine, I get the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ npx taiko googleTest.js \nDownloading Chromium r967620 - 177.1 Mb [====================] 100% 0.0s\n[PASS] Browser opened\n[PASS] Navigated to URL http://google.com\n[PASS] Clicked element matching text "I agree"  1 times\n[PASS] Browser closed\n')),(0,i.kt)("p",null,"What happened here was that we reran the tests we manually created earlier. By default, running tests this way happens in ",(0,i.kt)("em",{parentName:"p"},"headless")," mode, where the browser operates in the background and doesn't open. But we can see that all tests passed because the key commands are tagged ",(0,i.kt)("inlineCode",{parentName:"p"},"[PASS]"),"."),(0,i.kt)("p",null,"If you'd prefer to see the browser going about its business, type the following instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx taiko googleTest.js --observe\n")),(0,i.kt)("h3",{id:"installing-taiko-properly"},"Installing Taiko properly"),(0,i.kt)("p",null,"The downside of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," command to invoke Taiko is that it can involve a lot of waiting around for stuff to download. For me, this gets old really quickly."),(0,i.kt)("p",null,"To avoid this, you can install Taiko properly - visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.taiko.dev/installing/"},"https://docs.taiko.dev/installing/")," to review the latest installation instructions, which are quite straightforward. ",(0,i.kt)("em",{parentName:"p"},"Global")," installation installs Taiko for use across your entire machine, while ",(0,i.kt)("em",{parentName:"p"},"Local")," installation installs it just in the current project, which can be useful if you need to experiment with different versions of Taiko in different projects. Do not install Taiko as a ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user. While developing this content, I opted to keep things simple and install Taiko globally. "),(0,i.kt)("p",null,"When you've installed Taiko this way, you can still invoke it using ",(0,i.kt)("inlineCode",{parentName:"p"},"npx taiko")," but your installed version will be resolved, recognised and executed and you won't have to wait for the download."))}m.isMDXComponent=!0}}]);