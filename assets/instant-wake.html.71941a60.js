import{r as e,o as t,c as a,a as l,F as n,d as r,b as o}from"./app.9c75e1c0.js";const s={},i=r('<h1 id="gprw-uprw-lanc-instant-wake-patch" tabindex="-1"><a class="header-anchor" href="#gprw-uprw-lanc-instant-wake-patch" aria-hidden="true">#</a> GPRW/UPRW/LANC Instant Wake Patch</h1><p>Similar idea to the &quot;Fixing Shutdown/Restart&quot; section, macOS will instant wake if either USB or power states change while sleeping. To fix this we need to reroute the GPRW/UPRW/LANC calls to a new SSDT, verify you have instant wake issues before trying the below.</p><p>Best way to check:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pmset -g log <span class="token operator">|</span> <span class="token function">grep</span> -e <span class="token string">&quot;Sleep.*due to&quot;</span> -e <span class="token string">&quot;Wake.*due to&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And generally you&#39;ll get results like these:</p><ul><li><code>Wake [CDNVA] due to GLAN: Using AC</code><ul><li>Generally caused by WakeOnLAN enabled, try to disable this option first in the BIOS</li><li>If WOL wasn&#39;t the issue, you can try the below patches</li></ul></li><li><code>Wake [CDNVA] due to HDEF: Using AC</code><ul><li>Similar to the GLAN issue</li></ul></li><li><code>Wake [CDNVA] due to XHC: Using AC</code><ul><li>Generally caused by WakeOnUSB enabled, try to disable this option first in the BIOS</li><li>GPRW patch is likely needed</li></ul></li><li><code>DarkWake from Normal Sleep [CDNPB] : due to RTC/Maintenance Using AC</code><ul><li>Generally caused by PowerNap</li></ul></li><li><code>Wake reason: RTC (Alarm)</code><ul><li>Generally caused by an app waking the system, quitting said app before you sleep should fix it</li></ul></li></ul><p><strong>Do not use all these patches at once</strong>, look through your DSDT and see what you have:</p>',7),h=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"left"}},"SSDT"),l("th",{style:{"text-align":"left"}},"ACPI Patch"),l("th",{style:{"text-align":"left"}},"Comments")])],-1),u={style:{"text-align":"left"}},p={href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-GPRW.aml",target:"_blank",rel:"noopener noreferrer"},d=o("SSDT-GPRW"),c={style:{"text-align":"left"}},g={href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/GPRW-Patch.plist",target:"_blank",rel:"noopener noreferrer"},f=o("GPRW to XPRW Patch"),b=l("td",{style:{"text-align":"left"}},[o("Use this if you have "),l("code",null,"Method (GPRW, 2"),o(" in your ACPI")],-1),y={style:{"text-align":"left"}},P={href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-UPRW.aml",target:"_blank",rel:"noopener noreferrer"},m=o("SSDT-UPRW"),k={style:{"text-align":"left"}},C={href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/UPRW-Patch.plist",target:"_blank",rel:"noopener noreferrer"},S=o("UPRW to XPRW Patch"),W=l("td",{style:{"text-align":"left"}},[o("Use this if you have "),l("code",null,"Method (UPRW, 2"),o(" in your ACPI")],-1),w={style:{"text-align":"left"}},x={href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-LANC.aml",target:"_blank",rel:"noopener noreferrer"},A=o("SSDT-LANC"),R={style:{"text-align":"left"}},D={href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/LANC-Patch.plist",target:"_blank",rel:"noopener noreferrer"},N=o("LANC to XPRW Patch"),U=l("td",{style:{"text-align":"left"}},[o("Use this if you have "),l("code",null,"Device (LANC)"),o(" in your ACPI")],-1),I=o("ACPI Patches and SSDTs courtesy of "),v={href:"https://www.tonymacx86.com/threads/guide-using-clover-to-hotpatch-acpi.200137/",target:"_blank",rel:"noopener noreferrer"},G=o("Rehabman"),O=o(", "),T={href:"https://github.com/1Revenger1",target:"_blank",rel:"noopener noreferrer"},L=o("1Revenger1"),_=o(" and "),q={href:"https://github.com/dortania/laptop-guide",target:"_blank",rel:"noopener noreferrer"},B=o("Fewtarius");s.render=function(r,o){const s=e("OutboundLink");return t(),a(n,null,[i,l("table",null,[h,l("tbody",null,[l("tr",null,[l("td",u,[l("a",p,[d,l(s)])]),l("td",c,[l("a",g,[f,l(s)])]),b]),l("tr",null,[l("td",y,[l("a",P,[m,l(s)])]),l("td",k,[l("a",C,[S,l(s)])]),W]),l("tr",null,[l("td",w,[l("a",x,[A,l(s)])]),l("td",R,[l("a",D,[N,l(s)])]),U])])]),l("p",null,[I,l("a",v,[G,l(s)]),O,l("a",T,[L,l(s)]),_,l("a",q,[B,l(s)])])],64)};export default s;
