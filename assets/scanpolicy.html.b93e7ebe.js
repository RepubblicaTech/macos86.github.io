import{d as e}from"./app.9c75e1c0.js";const i={},l=e('<h1 id="scanpolicy" tabindex="-1"><a class="header-anchor" href="#scanpolicy" aria-hidden="true">#</a> ScanPolicy</h1><p>What this quirk allows to prevent scanning and booting from untrusted sources. Setting to <code>0</code> will allow all sources present to be bootable but calculating a specific ScanPolicy value will allow you a greater range of flexibility and security.</p><p>To calculate the ScanPolicy value, you simply add up all the hexadecimal values(with a hexadecimal calculator, you can access this from the built-in macOS calculator app with <code>⌘+3</code>). Once it&#39;s all added up, you would add this hexadecimal value to ScanPolicy(you will need to convert it to a decimal value first, Xcode will automatically convert it when you paste it)</p><p><code>0x00000001 (bit 0)</code> — OC_SCAN_FILE_SYSTEM_LOCK</p><ul><li>restricts scanning to only known file systems defined as a part of this policy. File system drivers may not be aware of this policy, and to avoid mounting of undesired file systems it is best not to load its driver. This bit does not affect dmg mounting, which may have any file system. Known file systems are prefixed with OC_SCAN_ALLOW_FS_.</li></ul><p><code>0x00000002 (bit 1)</code> — OC_SCAN_DEVICE_LOCK</p><ul><li>restricts scanning to only known device types defined as a part of this policy. This is not always possible to detect protocol tunneling, so be aware that on some systems it may be possible for e.g. USB HDDs to be recognized as SATA. Cases like this must be reported. Known device types are prefixed with OC_SCAN_ALLOW_DEVICE_.</li></ul><p><code>0x00000100 (bit 8)</code> — OC_SCAN_ALLOW_FS_APFS</p><ul><li>allows scanning of APFS file system.</li></ul><p><code>0x00000200 (bit 9)</code> — OC_SCAN_ALLOW_FS_HFS</p><ul><li>allows scanning of HFS file system.</li></ul><p><code>0x00000400 (bit 10)</code> — OC_SCAN_ALLOW_FS_ESP</p><ul><li>allows scanning of EFI System Partition file system.</li></ul><p><code>0x00010000 (bit 16)</code> — OC_SCAN_ALLOW_DEVICE_SATA</p><ul><li>allow scanning SATA devices.</li></ul><p><code>0x00020000 (bit 17)</code> — OC_SCAN_ALLOW_DEVICE_SASEX</p><ul><li>allow scanning SAS and Mac NVMe devices.</li></ul><p><code>0x00040000 (bit 18)</code> — OC_SCAN_ALLOW_DEVICE_SCSI</p><ul><li>allow scanning SCSI devices.</li></ul><p><code>0x00080000 (bit 19)</code> — OC_SCAN_ALLOW_DEVICE_NVME</p><ul><li>allow scanning NVMe devices.</li></ul><p><code>0x00100000 (bit 20)</code> — OC_SCAN_ALLOW_DEVICE_ATAPI</p><ul><li>allow scanning CD/DVD devices.</li></ul><p><code>0x00200000 (bit 21)</code> — OC_SCAN_ALLOW_DEVICE_USB</p><ul><li>allow scanning USB devices.</li></ul><p><code>0x00400000 (bit 22)</code> - OC_SCAN_ALLOW_DEVICE_FIREWIRE</p><ul><li>allow scanning FireWire devices.</li></ul><p><code>0x00800000 (bit 23)</code> — OC_SCAN_ALLOW_DEVICE_SDCARD</p><ul><li>allow scanning card reader devices.</li></ul><p><code>0x01000000 (bit 24)</code> — OC_SCAN_ALLOW_DEVICE_PCI</p><ul><li>allow scanning devices directly connected to PCI bus (e.g. VIRTIO).</li></ul><p>By default, ScanPolicy is given a value of <code>0x10F0103</code>(17,760,515) which is the combination of the following:</p><ul><li>OC_SCAN_FILE_SYSTEM_LOCK</li><li>OC_SCAN_DEVICE_LOCK</li><li>OC_SCAN_ALLOW_FS_APFS</li><li>OC_SCAN_ALLOW_DEVICE_SATA</li><li>OC_SCAN_ALLOW_DEVICE_SASEX</li><li>OC_SCAN_ALLOW_DEVICE_SCSI</li><li>OC_SCAN_ALLOW_DEVICE_NVME</li><li>OC_SCAN_ALLOW_DEVICE_PCI</li></ul><p>And lets just say for this example that you want to add OC_SCAN_ALLOW_DEVICE_USB:</p><p><code>0x00200000</code> + <code>0x10F0103</code> = <code>0x12F0103</code></p><p>And converting this to decimal gives us <code>19,857,667</code></p>',36);i.render=function(e,i){return l};export default i;
