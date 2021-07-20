import{r as e,o as t,c as l,a as n,w as a,F as s,b as o}from"./app.9c75e1c0.js";const i={},r=n("h1",{id:"optimizing-power-management",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#optimizing-power-management","aria-hidden":"true"},"#"),o(" Optimizing Power Management")],-1),u=n("h2",{id:"enabling-x86platformplugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#enabling-x86platformplugin","aria-hidden":"true"},"#"),o(" Enabling X86PlatformPlugin")],-1),d=n("p",null,[o("So before we can fine tune power management to our liking, we need to first make sure Apple's XCPM core is loaded. Note that this is supported "),n("strong",null,"only on Haswell and newer"),o(", consumer Sandy, Ivy Bridge and AMD CPUs should refer to the bottom of the guides:")],-1),c=o("Sandy and Ivy Bridge Power Management"),p=o("AMD CPU Power Management"),g=o("Ivy Bridge and Ivy Bridge-E note: Apple dropped support for XCPM back in macOS Sierra, so XCPM is only supported between 10.8.5 and 10.11.6. Newer OSes will require the "),h=o("ssdtPRgen method"),m=n("ul",null,[n("li",null,[o("To enabled XCPM in older OSes(ie. 10.11 and older), simply add "),n("code",null,"-xcpm"),o(" to your Argomenti di avvio")])],-1),f=o("To start, grab "),y={href:"https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-302.zip",target:"_blank",rel:"noopener noreferrer"},b=o("IORegistryExplorer"),x=o(" and look for "),P=n("code",null,"AppleACPICPU",-1),k=o("(note if you use search, it won't show the children so clear your search once you've found the entry):"),w=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"XCPM Present"),n("th",{style:{"text-align":"center"}},"Missing XCPM")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},[n("img",{src:"/assets/pm-working.180376ab.png",alt:""})]),n("td",{style:{"text-align":"center"}},[n("img",{src:"/assets/pm-not-working.04ef904d.png",alt:""})])])])],-1),C=n("p",null,"As you can see from the left image, we have the X86PlatformPlugin attached meaning Apple's CPU Power Management Drivers are doing their thing(Note the CPU's name does not matter, CPU names come in many variations such as CP00, CPU0, PR00, etc. What matters is that AppleACPICPU attaches to it). If you get something like to the right image, then there's likely an issue. Make sure to check the following:",-1),S=o("SSDT-PLUG."),v=n("strong",null,"aml",-1),M=o(" is both present and enabled in your config.plist and EFI/OC/ACPI "),I=o("If you're missing this, head to "),D={href:"https://dortania.github.io/Getting-Started-With-ACPI",target:"_blank",rel:"noopener noreferrer"},F=o("Getting Started With ACPI"),T=o(" on how to make this"),E=n("li",null,[o("SSDT-PLUG is set to the first thread of your CPU, you can check by selecting the first CPU listed("),n("code",null,"CP00"),o(" for our example) and make sure you have this in the properties:")],-1),U=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,"plugin-type | Number | 0x1\n")]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),A=n("p",null,[n("strong",null,"X99 Note"),o(":")],-1),O=n("p",null,"XCPM does not natively support Haswell-E and Broadwell-E, this means we need to spoof the CPU ID into a model that does supports XCPM:",-1),B=n("ul",null,[n("li",null,[n("p",null,[n("strong",null,"Haswell-E"),o(":")]),n("ul",null,[n("li",null,[n("code",null,"Kernel -> Emulate"),o(": "),n("ul",null,[n("li",null,[o("Cpuid1Data: "),n("code",null,"C3060300 00000000 00000000 00000000")]),n("li",null,[o("Cpuid1Mask: "),n("code",null,"FFFFFFFF 00000000 00000000 00000000")])])])])]),n("li",null,[n("p",null,[n("strong",null,"Broadwell-E"),o(":")]),n("ul",null,[n("li",null,[n("code",null,"Kernel -> Emulate"),o(": "),n("ul",null,[n("li",null,[o("Cpuid1Data: "),n("code",null,"D4060300 00000000 00000000 00000000")]),n("li",null,[o("Cpuid1Mask: "),n("code",null,"FFFFFFFF 00000000 00000000 00000000")])])])])])],-1),N=n("h2",{id:"using-cpu-friend",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#using-cpu-friend","aria-hidden":"true"},"#"),o(" Using CPU Friend")],-1),L=n("p",null,"To start, we're gonna need a couple things:",-1),_=n("li",null,[o("X86PlatformPlugin loaded "),n("ul",null,[n("li",null,"This means Sandy, Ivy Bridge and AMD CPUs are not supported")])],-1),R={href:"https://github.com/acidanthera/CPUFriend/releases",target:"_blank",rel:"noopener noreferrer"},G=o("CPUFriend"),X={href:"https://github.com/corpnewt/CPUFriendFriend",target:"_blank",rel:"noopener noreferrer"},W=o("CPUFriendFriend"),z=n("h3",{id:"lfm-low-frequency-mode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lfm-low-frequency-mode","aria-hidden":"true"},"#"),o(" LFM: Low Frequency Mode")],-1),q=n("p",null,"Now lets run CPUFriendFriend.command:",-1),H=n("p",null,[n("img",{src:"/assets/lpm.1e851c74.png",alt:""})],-1),K=n("p",null,"When you first open up CPUFriendFriend, you'll be greeted with a prompt for choosing your LFM value. This can be seen as the floor of your CPU, or the lowest value it'll idle at. This value can greatly help with sleep functioning correctly as macOS needs to be able to transition from S3(sleep) to S0(wake) easily.",-1),Y=n("p",null,"To determine your LPM value, you can either:",-1),j=o("Look for the "),V=n("code",null,"TDP-down Frequency",-1),Z=o(" on Intel's "),J={href:"https://ark.Intel.com/",target:"_blank",rel:"noopener noreferrer"},Q=o("ARK site"),$=n("ul",null,[n("li",null,"Note most CPUs do not have a listed value, so you'll need to determine yourself")],-1),ee=n("li",null,"Or choose recommended values:",-1),te=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Generation"),n("th",{style:{"text-align":"left"}},"LFM Value"),n("th",{style:{"text-align":"left"}},"Comment")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"Broadwell+ Laptops"),n("td",{style:{"text-align":"left"}},"08"),n("td",{style:{"text-align":"left"}},"Equivalent of 800Mhz")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Broadwell+ Desktops"),n("td",{style:{"text-align":"left"}},"0A"),n("td",{style:{"text-align":"left"}},"Equivalent of 1000Mhz")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Haswell/Broadwell HEDT/Server(ie. X99)"),n("td",{style:{"text-align":"left"}},"0D"),n("td",{style:{"text-align":"left"}},"Equivalent of 1300Mhz")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Skylake+ HEDT/Server(ie. X299)"),n("td",{style:{"text-align":"left"}},"0C"),n("td",{style:{"text-align":"left"}},"Equivalent of 1200Mhz")])])],-1),le=n("ul",null,[n("li",null,[n("strong",null,"Note"),o(": LFM value is only available on Broadwell and newer SMBIOS")]),n("li",null,[n("strong",null,"Note 2"),o(": these values are not set in stone, each machine will have unique characteristics and so you'll need to experiment what works best for your hardware")])],-1),ne=o("For this example we'll be using the "),ae={href:"https://ark.Intel.com/content/www/us/en/ark/products/126240/Intel-core-i9-7920x-x-series-processor-16-5m-cache-up-to-4-30-ghz.html",target:"_blank",rel:"noopener noreferrer"},se=o("i9 7920x"),oe=o(" which has a base clock of 2.9 GHz but no LFM, so we'll choose 1.3 GHz(ie. 1300Mhz) and work our way up/down until we find stability."),ie=n("ul",null,[n("li",null,[o("Note that the LFM value is simply the CPU's multiplier, so you'll need to trim your value appropriately "),n("ul",null,[n("li",null,"ie. Divide by 100, then convert to hexadecimal")])])],-1),re=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"echo"),o(),n("span",{class:"token string"},'"obase=16; 13"'),o(),n("span",{class:"token operator"},"|"),o(),n("span",{class:"token function"},"bc"),o("\n")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),ue=n("ul",null,[n("li",null,"Pay close attention we used 13 for 1.3Ghz and not 1.3")],-1),de=n("h3",{id:"epp-energy-performance-preference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#epp-energy-performance-preference","aria-hidden":"true"},"#"),o(" EPP: Energy Performance Preference")],-1),ce=n("p",null,[n("img",{src:"/assets/epp.8dd72b06.png",alt:""})],-1),pe=n("p",null,[o("Next up is the Energy Performance Preference, EPP. This tells macOS how fast to turbo up the CPU to its full clock. "),n("code",null,"00"),o(" will tell macOS to let the CPU go as fast as it can as quickly as it can while "),n("code",null,"FF"),o(" will tell macOS to take things slowly and let the CPU ramp up over a much longer period of time. Depending on what you're doing and the cooling on your machine, you may want to set something in the middle. Below chart can help out a bit:")],-1),ge=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"EPP"),n("th",{style:{"text-align":"left"}},"Speed")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"0x00-0x3F"),n("td",{style:{"text-align":"left"}},"Max Performance")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"0x40-0x7F"),n("td",{style:{"text-align":"left"}},"Balance performance")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"0x80-0xBF"),n("td",{style:{"text-align":"left"}},"Balance power")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"0xC0-0xFF"),n("td",{style:{"text-align":"left"}},"Max Power Saving")])])],-1),he=n("p",null,[n("strong",null,"Note"),o(": Only Skylake and newer SMBIOS officially support EPP")],-1),me=n("h3",{id:"performance-bias",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#performance-bias","aria-hidden":"true"},"#"),o(" Performance Bias")],-1),fe=n("p",null,[n("img",{src:"/assets/pm-bias.df2ec2da.png",alt:""})],-1),ye=n("p",null,"This final entry is to help macOS out what kind of overall performance you'd like from your CPU. The general recommendation depends on your exact setup, and experimenting does help figure out what's best for you.",-1),be=n("h3",{id:"cleaning-up",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cleaning-up","aria-hidden":"true"},"#"),o(" Cleaning up")],-1),xe=n("p",null,[n("img",{src:"/assets/done.e97d8dc0.png",alt:""}),n("img",{src:"/assets/files.5483c289.png",alt:""})],-1),Pe=n("p",null,"Once you're finished, you'll be provided with a CPUFriendDataProvider.kext and ssdt_data.aml. Which you choose is your preference but I recommend the kext variant to avoid any headaches with data injection into Windows and Linux.",-1),ke=n("ul",null,[n("li",null,[n("strong",null,"Note"),o(": Load order does not matter with the CPUFriendDataProvider as it's just a plist-only kext")]),n("li",null,[n("strong",null,"Note 2"),o(": Wake issues resulting from CPUFriend is likely due to incorrect frequency vectors, every system is unique so you'll need to play around until you get a stable config. Kernel panics will have "),n("code",null,"Sleep Wake failure in efi"),o(".")]),n("li",null,[n("strong",null,"Note 3"),o(": If you do choose to use ssdt_data.aml, note that SSDT-PLUG is no longer needed. However the setup for this SSDT is broken on HEDT platforms like X99 and X299, so we highly recommend SSDT-PLUG with CPUFriendDataProvider.kext instead.")])],-1),we=n("h2",{id:"sandy-and-ivy-bridge-power-management",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sandy-and-ivy-bridge-power-management","aria-hidden":"true"},"#"),o(" Sandy and Ivy Bridge Power Management")],-1),Ce=n("p",null,"With Sandy and Ivy Bridge, consumer PCs have issues connecting to Apple's XCPM. So to get around this we need to create our own Power Management Table.",-1),Se=n("p",null,"What we'll need:",-1),ve=n("li",null,[o("Ensure CpuPm and Cpu0Ist tables are "),n("strong",null,"NOT"),o(" dropped")],-1),Me={href:"https://github.com/Piker-Alpha/ssdtPRGen.sh",target:"_blank",rel:"noopener noreferrer"},Ie=o("ssdtPRGen"),De=n("p",null,"Initialing with OpenCore's setup in the Ivy Bridge section, we recommended users drop their CpuPm and Cpu0Ist to avoid any issues with AppleIntelCPUPowerManagement.kext. But dropping these tables have the adverse affect of breaking turbo boost in Windows. So to resolve this, we'll want to keep our OEM's table but we'll want to add a new table to supplement data only for macOS. So once we're done creating our CPU-PM table, we'll re-add our OEM's CPU SSDTs.",-1),Fe=n("p",null,[o("To start, grab your config.plist then head to ACPI -> Delete and ensure both of these sections have "),n("code",null,"Enabled"),o(" set to YES:")],-1),Te=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Key"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Value")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"All"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"YES")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Comment"),n("td",{style:{"text-align":"left"}},"String"),n("td",{style:{"text-align":"left"}},"Drop CpuPm")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Enabled"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"YES")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"OemTableId"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"437075506d000000")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableLength"),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},"0")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableSignature"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"53534454")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"Key"),n("td",{style:{"text-align":"left"}},"Type"),n("td",{style:{"text-align":"left"}},"Value")]),n("tr",null,[n("td",{style:{"text-align":"left"}},":---"),n("td",{style:{"text-align":"left"}},":---"),n("td",{style:{"text-align":"left"}},":---")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"All"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"YES")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Comment"),n("td",{style:{"text-align":"left"}},"String"),n("td",{style:{"text-align":"left"}},"Drop Cpu0Ist")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Enabled"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"YES")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"OemTableId"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"4370753049737400")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableLength"),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},"0")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableSignature"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"53534454")])])],-1),Ee=n("p",null,"Once this is done, we can now grab ssdtPRGen and run it:",-1),Ue=n("p",null,[n("img",{src:"/assets/prgen-run.b60bde9a.png",alt:""})],-1),Ae=n("p",null,[o("Once you're done, you'll be provided with an SSDT.aml under "),n("code",null,"/Users/your-name>/Library/ssdtPRGen/ssdt.dsl"),o(", you can easily find it with the Cmd+Shift+G shortcut and pasting "),n("code",null,"~/Library/ssdtPRGen/")],-1),Oe=n("p",null,[n("img",{src:"/assets/prgen-done.3ad05a55.png",alt:""})],-1),Be=n("p",null,"Remember to now add this to both EFI/OC/ACPI and your config.plist, I recommend renaming it to SSDT-PM to find it more easily.",-1),Ne=n("p",null,[o("Finally, we can disable our previous ACPI -> Delete entries("),n("code",null,"Enabled"),o(" set to NO):")],-1),Le=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Key"),n("th",{style:{"text-align":"left"}},"Type"),n("th",{style:{"text-align":"left"}},"Value")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"All"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"YES")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Comment"),n("td",{style:{"text-align":"left"}},"String"),n("td",{style:{"text-align":"left"}},"Drop CpuPm")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Enabled"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"NO")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"OemTableId"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"437075506d000000")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableLength"),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},"0")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableSignature"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"53534454")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"Key"),n("td",{style:{"text-align":"left"}},"Type"),n("td",{style:{"text-align":"left"}},"Value")]),n("tr",null,[n("td",{style:{"text-align":"left"}},":---"),n("td",{style:{"text-align":"left"}},":---"),n("td",{style:{"text-align":"left"}},":---")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"All"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"YES")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Comment"),n("td",{style:{"text-align":"left"}},"String"),n("td",{style:{"text-align":"left"}},"Drop Cpu0Ist")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Enabled"),n("td",{style:{"text-align":"left"}},"Boolean"),n("td",{style:{"text-align":"left"}},"NO")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"OemTableId"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"4370753049737400")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableLength"),n("td",{style:{"text-align":"left"}},"Number"),n("td",{style:{"text-align":"left"}},"0")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"TableSignature"),n("td",{style:{"text-align":"left"}},"Data"),n("td",{style:{"text-align":"left"}},"53534454")])])],-1),_e=n("h3",{id:"ssdtprgen-troubleshooting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ssdtprgen-troubleshooting","aria-hidden":"true"},"#"),o(" ssdtPRgen Troubleshooting")],-1),Re=n("p",null,[o("While ssdtPRgen tries to handle any incompatibility issues with your OEM's SSDT, you may find it still clashes on boot as your OEM has already declared certain devices or methods in sections like "),n("code",null,"_INI"),o(" or "),n("code",null,"_DSM"),o(".")],-1),Ge=n("p",null,"If you find during boot up you get errors such as this one from SSDT-PM:",-1),Xe=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,"ACPI Error: Method parse/execution failed [\\_SB._INI] , AE_ALREADY_EXIST\n")]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),We=n("p",null,"This means there's some conflict, to resolve this, we recommend moving ssdtPRgen's info into a format like this:",-1),ze=n("div",{class:"language-c ext-c line-numbers-mode"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token function"},"DefinitionBlock"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ssdt.aml"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"SSDT"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"APPLE "'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"CpuPm"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"0x00021500"),n("span",{class:"token punctuation"},")"),o("\n"),n("span",{class:"token punctuation"},"{"),o("\n    "),n("span",{class:"token function"},"External"),o(),n("span",{class:"token punctuation"},"("),o("\\_PR_"),n("span",{class:"token punctuation"},"."),o("CPU0"),n("span",{class:"token punctuation"},","),o(" DeviceObj"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// External Processor definition"),o("\n    "),n("span",{class:"token function"},"External"),o(),n("span",{class:"token punctuation"},"("),o("\\_PR_"),n("span",{class:"token punctuation"},"."),o("CPU1"),n("span",{class:"token punctuation"},","),o(" DeviceObj"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// External Processor definition"),o("\n\n    "),n("span",{class:"token function"},"Scope"),o(),n("span",{class:"token punctuation"},"("),o("\\_PR_"),n("span",{class:"token punctuation"},"."),o("CPU0"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// Processor's scope"),o("\n    "),n("span",{class:"token punctuation"},"{"),o("\n        "),n("span",{class:"token function"},"Name"),o(),n("span",{class:"token punctuation"},"("),o("APLF"),n("span",{class:"token punctuation"},","),o(" Zero"),n("span",{class:"token punctuation"},")"),o("\n        "),n("span",{class:"token function"},"Name"),o(),n("span",{class:"token punctuation"},"("),o("APSN"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"0x04"),n("span",{class:"token punctuation"},")"),o("\n        "),n("span",{class:"token function"},"Name"),o(),n("span",{class:"token punctuation"},"("),o("APSS"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token function"},"Package"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0x20"),n("span",{class:"token punctuation"},")"),o("\n        "),n("span",{class:"token punctuation"},"{"),o("\n            "),n("span",{class:"token comment"},"/*  … */"),o("\n        "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),o("\n\n        "),n("span",{class:"token function"},"Method"),o(),n("span",{class:"token punctuation"},"("),o("ACST"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),o(" NotSerialized"),n("span",{class:"token punctuation"},")"),o("\n        "),n("span",{class:"token punctuation"},"{"),o("\n            "),n("span",{class:"token comment"},"/*  … */"),o("\n        "),n("span",{class:"token punctuation"},"}"),o("\n\n        "),n("span",{class:"token comment"},"/*  … */"),o("\n    "),n("span",{class:"token punctuation"},"}"),o("\n")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),qe=n("p",null,"Pay close attention to what we've done:",-1),He=n("ul",null,[n("li",null,"Made sure the Processor object is moved to external"),n("li",null,"Move all your methods into the Processor's scope")],-1),Ke=o("For editing and re-compiling the SSDT-PM, see here: "),Ye={href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"},je=o("Getting Started With ACPI"),Ve=n("h3",{id:"bios-troubleshooting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bios-troubleshooting","aria-hidden":"true"},"#"),o(" BIOS Troubleshooting")],-1),Ze=n("p",null,"For some boards, you may need to ensure the following BIOS options are set for CPU Power Management:",-1),Je=n("ul",null,[n("li",null,[o("C States: "),n("code",null,"True")]),n("li",null,[o("P States Coordination: "),n("code",null,"SW_ALL")])],-1),Qe=n("h2",{id:"amd-cpu-power-management",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#amd-cpu-power-management","aria-hidden":"true"},"#"),o(" AMD CPU Power Management")],-1),$e=o("While macOS might not officially support AMD CPU Power management, there are community efforts to add it. Specifically being "),et={href:"https://github.com/trulyspinach/SMCAMDProcessor",target:"_blank",rel:"noopener noreferrer"},tt=o("SMCAMDProcessor"),lt=o(". Note that when adding this kext, it should be after VirtualSMC in your config.plist as it's a plugin."),nt=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"This kext is known to create stability issues as well, if you're receiving random kernel panics or issues booting do keep in mind this kext may be the culprit.")],-1);i.render=function(o,i){const at=e("RouterLink"),st=e("OutboundLink");return t(),l(s,null,[r,u,d,n("ul",null,[n("li",null,[n(at,{to:"/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management"},{default:a((()=>[c])),_:1})]),n("li",null,[n(at,{to:"/OpenCore-Post-Install/universal/pm.html#amd-cpu-power-management"},{default:a((()=>[p])),_:1})])]),n("p",null,[g,n(at,{to:"/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management"},{default:a((()=>[h])),_:1})]),m,n("p",null,[f,n("a",y,[b,n(st)]),x,P,k]),w,C,n("ul",null,[n("li",null,[S,v,M,n("ul",null,[n("li",null,[I,n("a",D,[F,n(st)]),T])])]),E]),U,A,O,B,N,L,n("ul",null,[_,n("li",null,[n("a",R,[G,n(st)])]),n("li",null,[n("a",X,[W,n(st)])])]),z,q,H,K,Y,n("ul",null,[n("li",null,[j,V,Z,n("a",J,[Q,n(st)]),$]),ee]),te,le,n("p",null,[ne,n("a",ae,[se,n(st)]),oe]),ie,re,ue,de,ce,pe,ge,he,me,fe,ye,be,xe,Pe,ke,we,Ce,Se,n("ul",null,[ve,n("li",null,[n("a",Me,[Ie,n(st)])])]),De,Fe,Te,Ee,Ue,Ae,Oe,Be,Ne,Le,_e,Re,Ge,Xe,We,ze,qe,He,n("p",null,[Ke,n("a",Ye,[je,n(st)])]),Ve,Ze,Je,Qe,n("p",null,[$e,n("a",et,[tt,n(st)]),lt]),nt],64)};export default i;
