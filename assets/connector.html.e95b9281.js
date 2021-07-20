import{r as e,o as n,c as l,a as t,F as a,b as s}from"./app.9c75e1c0.js";const r={},o=t("h1",{id:"patching-connector-types",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#patching-connector-types","aria-hidden":"true"},"#"),s(" Patching Connector Types")],-1),i=s("Images and info based off "),c={href:"https://hackintosh.gitbook.io/-r-hackintosh-vanilla-desktop-guide/config.plist-per-hardware/coffee-lake#pink-purple-tint",target:"_blank",rel:"noopener noreferrer"},p=s("CorpNewt's Vanilla Guide"),h=t("p",null,"This section is mainly relevant for users who either get black screen or incorrect color output on their displays(usually HDMI ports). This is due to Apple forcing display types onto your hardware,. To work around it, we'll patch Apple's connector types to properly respect our hardware.",-1),u=t("p",null,"For this example, let's take a UHD 630 system with an HDMI display attached. The machine has already been correctly setup however there's a Pink/Purple tint on the HDMI display.",-1),d=s("Grab a copy of "),b={href:"https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-302.zip",target:"_blank",rel:"noopener noreferrer"},f=s("IOReg"),y=s(" and search for the "),m=t("code",null,"iGPU",-1),g=s(" entry:"),w=t("p",null,[t("img",{src:"/assets/igpu-entry.ccfe9418.png",alt:""})],-1),k=t("p",null,"Next, clear out the entry so we can see the children of the iGPU device:",-1),D=t("p",null,[t("img",{src:"/assets/igpu-children.abd340b1.png",alt:""})],-1),v=t("p",null,"As we can see in the above screenshot, we have a few framebuffer entries listed. These are all display personalities present in the framebuffer personality, and all have their own settings.",-1),P=t("p",null,[s("For us, we care about the entries that have a "),t("code",null,"display0"),s(" child, as this is what's driving a physical display. In this example, we can see it's "),t("code",null,"AppleIntelFramebuffer@1"),s(". When we select it, you'll see in the left pane it has the property "),t("code",null,"connector-type"),s(" with the value "),t("code",null,"<00 04 00 00>"),s(". And when we look to the below list:")],-1),I=t("div",{class:"language-text ext-text line-numbers-mode"},[t("pre",{class:"language-text"},[t("code",null,"<02 00 00 00>        LVDS and eDP      - Laptop displays\n<10 00 00 00>        VGA               - Unsupported in 10.8 and newer\n<00 04 00 00>        DisplayPort       - USB-C display-out are DP internally\n<01 00 00 00>        DUMMY             - Used when there is no physical port\n<00 08 00 00>        HDMI\n<80 00 00 00>        S-Video\n<04 00 00 00>        DVI (Dual Link)\n<00 02 00 00>        DVI (Single Link)\n")]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br")])],-1),x=t("ul",null,[t("li",null,"Note: VGA on Skylake and newer are DisplayPorts internally and so are supported by macOS. Please use the DisplayPort connector for these systems.")],-1),G=t("p",null,"Looking closer, we see that the HDMI port was actually listed as a DisplayPort. This is where WhateverGreen's patching mechanisms come into play.",-1),A=t("p",null,[s("Since the incorrect port was located at AppleIntelFramebuffer@1, this is port 1. Next we'll to enable WhateverGreen's patching mechanism for con1, and then set the connector type to HDMI. To do this, we set the following Properties under "),t("code",null,"DeviceProperties -> Add -> PciRoot(0x0)/Pci(0x2,0x0)"),s(":")],-1),M=t("ul",null,[t("li",null,[t("code",null,"framebuffer-patch-enable = 01000000"),t("ul",null,[t("li",null,"Enables WhateverGreen's patching mechanism")])]),t("li",null,[t("code",null,"framebuffer-conX-enable = 01000000"),t("ul",null,[t("li",null,"Enables WhateverGreen's patching on conX")])]),t("li",null,[t("code",null,"framebuffer-conX-type = 00080000"),t("ul",null,[t("li",null,[s("Sets the port to HDMI("),t("code",null,"<00 08 00 00>"),s(")")])])])],-1),H=t("p",null,[s("Note: Remember to replace the "),t("code",null,"conX"),s(" in both patches with "),t("code",null,"con1"),s(" to reflect the port that we want fixed, then set the values as listed above.")],-1),S=t("p",null,[t("img",{src:"/assets/connector-type-patch.a4e75804.png",alt:""})],-1);r.render=function(s,r){const T=e("OutboundLink");return n(),l(a,null,[o,t("ul",null,[t("li",null,[i,t("a",c,[p,t(T)])])]),h,u,t("p",null,[d,t("a",b,[f,t(T)]),y,m,g]),w,k,D,v,P,I,x,G,A,M,H,S],64)};export default r;
