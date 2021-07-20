import{r as a,o as e,c as n,a as s,w as r,F as o,b as i,d as l}from"./app.9c75e1c0.js";const t={},c=s("h1",{id:"vmware-workstation-player",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vmware-workstation-player","aria-hidden":"true"},"#"),i(" VMware Workstation (Player)")],-1),p=s("h2",{id:"requirements",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),i(" Requirements")],-1),u=s("li",null,"VMware Workstation o VMware Workstation Player (solo Linux e Windows)",-1),d=i("qemu-img (Incluso nella installazione di "),m={href:"https://qemu.org",target:"_blank",rel:"noopener noreferrer"},h=i("qemu"),b=i(") utilizzabile anche "),g=i("vboxmanage"),f=s("h2",{id:"scaricare-il-file-di-installazione",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#scaricare-il-file-di-installazione","aria-hidden":"true"},"#"),i(" Scaricare il File di installazione")],-1),k=i("Puoi usare "),v={href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Utilities/macrecovery",target:"_blank",rel:"noopener noreferrer"},q=i("macrecovery"),x=i(": ecco la "),w=i("guida"),M=i(") per ottenere il file .dmg (il file .chunklist non ci servirà)."),S=l('<h2 id="convertire-il-file-di-installazione" tabindex="-1"><a class="header-anchor" href="#convertire-il-file-di-installazione" aria-hidden="true">#</a> Convertire il File di Installazione</h2><p>VMware non può leggere una immagine disco dmg, perciò dovremo convertirla come vmdk. Con una conversione, creiamo una nuova immagine disco:</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### Muoviti alla directory contenente qemu-img</span>\n<span class="token builtin class-name">cd</span> <span class="token string">&#39;C:\\Program Files\\qemu&#39;</span>\n<span class="token comment">### Cambia &quot;BaseSystem&quot; se il nome del .dmg differisce</span>\n.<span class="token punctuation">\\</span>qemu-img.exe convert PERCORSO<span class="token punctuation">\\</span>DEL<span class="token punctuation">\\</span>BaseSystem.dmg -O vmdk PERCORSO<span class="token punctuation">\\</span>DEL<span class="token punctuation">\\</span>BaseSystem.vmdk\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### Cambia &quot;BaseSystem&quot; se il nome del .dmg differisce</span>\nqemu-img convert <span class="token environment constant">PATH</span>/TO/BaseSystem.dmg -O vmdk PERCORSO/DEL/BaseSystem.vmdk\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="sbloccare-vmware" tabindex="-1"><a class="header-anchor" href="#sbloccare-vmware" aria-hidden="true">#</a> Sbloccare VMware</h2>',7),z=i("Per usare macOS su questa macchina virtuale, dobbiamo eseguire alcune patch. Per farlo in maniera automatizzata, consiglio "),P={href:"https://github.com/paolo-projects/auto-unlocker/releases",target:"_blank",rel:"noopener noreferrer"},C=i("questo tool"),y=i(". Eseguilo chiudendo prima VMware."),O=l('<h2 id="creare-la-macchina-virtuale" tabindex="-1"><a class="header-anchor" href="#creare-la-macchina-virtuale" aria-hidden="true">#</a> Creare la Macchina Virtuale</h2><p>Puoi usare le impostazioni che VMware offre, <strong>ricorda che macOS non supporta i dischi IDE nè l&#39;accelerazione grafica (per ora)</strong>.</p><h2 id="modificare-il-file-vmx" tabindex="-1"><a class="header-anchor" href="#modificare-il-file-vmx" aria-hidden="true">#</a> Modificare il file vmx</h2><p>Per avviare macOS, dobbiamo aggiungere alcune stringhe al file .vmx che contiene appunto tutte le impostazioni della nostra macchina virtuale.</p><h3 id="vmx-patch-for-intel-processors" tabindex="-1"><a class="header-anchor" href="#vmx-patch-for-intel-processors" aria-hidden="true">#</a> VMX patch for Intel Processors</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hw.model <span class="token operator">=</span> <span class="token string">&quot;iMac20,2&quot;</span> <span class="token comment"># Solo per iCloud</span>\nboard-id <span class="token operator">=</span> <span class="token string">&quot;Mac-AF89B6D9451A490B&quot;</span> <span class="token comment"># Solo per iCloud</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="patch-per-processori-amd" tabindex="-1"><a class="header-anchor" href="#patch-per-processori-amd" aria-hidden="true">#</a> Patch per processori AMD</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hw.model <span class="token operator">=</span> <span class="token string">&quot;iMac20,2&quot;</span> <span class="token comment"># Solo per iCloud</span>\nboard-id <span class="token operator">=</span> <span class="token string">&quot;Mac-AF89B6D9451A490B&quot;</span> <span class="token comment"># Solo per iCloud</span>\ncpuid.0.eax <span class="token operator">=</span> <span class="token string">&quot;0000:0000:0000:0000:0000:0000:0000:1011&quot;</span>\ncpuid.0.ebx <span class="token operator">=</span> <span class="token string">&quot;0111:0101:0110:1110:0110:0101:0100:0111&quot;</span>\ncpuid.0.ecx <span class="token operator">=</span> <span class="token string">&quot;0110:1100:0110:0101:0111:0100:0110:1110&quot;</span>\ncpuid.0.edx <span class="token operator">=</span> <span class="token string">&quot;0100:1001:0110:0101:0110:1110:0110:1001&quot;</span>\ncpuid.1.eax <span class="token operator">=</span> <span class="token string">&quot;0000:0000:0000:0001:0000:0110:0111:0001&quot;</span>\ncpuid.1.ebx <span class="token operator">=</span> <span class="token string">&quot;0000:0010:0000:0001:0000:1000:0000:0000&quot;</span>\ncpuid.1.ecx <span class="token operator">=</span> <span class="token string">&quot;1000:0010:1001:1000:0010:0010:0000:0011&quot;</span>\ncpuid.1.edx <span class="token operator">=</span> <span class="token string">&quot;0000:1111:1010:1011:1111:1011:1111:1111&quot;</span>\nfeatureCompat.enable <span class="token operator">=</span> <span class="token string">&quot;FALSE&quot;</span> <span class="token comment"># (non sicuro serva)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="installare-vmware-tools" tabindex="-1"><a class="header-anchor" href="#installare-vmware-tools" aria-hidden="true">#</a> Installare VMware tools</h2>',9),V=i("Montare il file "),B=s("code",null,"darwin.iso",-1),E=i(" incluso con VMware (lo puoi trovare anche "),L={href:"https://www.insanelymac.com/forum/files/file/987-vmware-tools-for-os-x-macos-darwiniso-and-darwinpre15iso/",target:"_blank",rel:"noopener noreferrer"},R=i("qui"),A=i(")"),D=s("h2",{id:"posso-avere-l-accelerazione-grafica",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#posso-avere-l-accelerazione-grafica","aria-hidden":"true"},"#"),i(" Posso avere l'accelerazione grafica?")],-1),F=i("Mi dispiace, ma al momento non è possibile. Se hai idee su come farlo, contattaci su "),_={href:"https://www.macos86.it/",target:"_blank",rel:"noopener noreferrer"},I=i("macos86.it");t.render=function(i,l){const t=a("OutboundLink"),W=a("RouterLink");return e(),n(o,null,[c,p,s("ul",null,[u,s("li",null,[d,s("a",m,[h,s(t)]),b,s(W,{to:"/extras/virtualbox.html#convertire-il-file-di-installazione"},{default:r((()=>[g])),_:1})])]),f,s("p",null,[k,s("a",v,[q,s(t)]),x,s(W,{to:"/installer-guide/winblows-install.html#scaricare-macos"},{default:r((()=>[w])),_:1}),M]),S,s("p",null,[z,s("a",P,[C,s(t)]),y]),O,s("p",null,[V,B,E,s("a",L,[R,s(t)]),A]),D,s("p",null,[F,s("a",_,[I,s(t)])])],64)};export default t;
