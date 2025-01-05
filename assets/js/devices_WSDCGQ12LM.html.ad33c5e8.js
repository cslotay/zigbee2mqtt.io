"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93771],{6631:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>o,data:()=>n});var a=i(6254),A=i(93220);const r={},o=(0,i(89596).A)(r,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[12]||(t[12]=(0,a.Lk)("h1",{id:"aqara-wsdcgq12lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-wsdcgq12lm"},[(0,a.Lk)("span",null,"Aqara WSDCGQ12LM")])],-1)),(0,a.Lk)("table",null,[t[7]||(t[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"WSDCGQ12LM")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Temperature and humidity sensor T1")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"temperature, humidity, pressure, device_temperature, battery, voltage, power_outage_count, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WSDCGQ12LM.png",alt:"Aqara WSDCGQ12LM"})])],-1)),t[6]||(t[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Aqara TH-S02D, Yandex YNDX-00523")],-1))])]),t[13]||(t[13]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware"><span>Adapter firmware</span></a></h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p><ul><li>CC2530/CC2531: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin" target="_blank" rel="noopener noreferrer"><code>20211115</code></a></li><li>CC1352/CC2652: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin" target="_blank" rel="noopener noreferrer"><code>20211114</code></a></li><li>CC2538: <a href="https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592" target="_blank" rel="noopener noreferrer"><code>20211222</code></a></li><li>Conbee II: <a href="http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF" target="_blank" rel="noopener noreferrer"><code>0x26720700</code></a></li></ul><p><em>Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.</em></p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn&#39;t work, try with a single short button press.</p><p><img src="'+A+'" alt="WSDCGQ12LM pairing"></p><p><em>Note: When you fail to pair a device, try replacing the battery, this could solve the problem.</em></p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network"><span>Troubleshooting: device stops sending messages/disconnects from network</span></a></h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul><p>More detailed information about this can be found <a href="https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',14)),(0,a.Lk)("p",null,[t[9]||(t[9]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("OTA updates")]))),_:1}),t[10]||(t[10]=(0,a.eW)("."))]),t[14]||(t[14]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[11]||(t[11]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[15]||(t[15]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric"><span>Pressure (numeric)</span></a></h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>hPa</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18))])}]]),n=JSON.parse('{"path":"/devices/WSDCGQ12LM.html","title":"Aqara WSDCGQ12LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara WSDCGQ12LM control via MQTT","description":"Integrate your Aqara WSDCGQ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: device stops sending messages/disconnects from network","slug":"troubleshooting-device-stops-sending-messages-disconnects-from-network","link":"#troubleshooting-device-stops-sending-messages-disconnects-from-network","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Pressure (numeric)","slug":"pressure-numeric","link":"#pressure-numeric","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1736111847000},"filePathRelative":"devices/WSDCGQ12LM.md"}')},93220:e=>{e.exports="data:image/jpeg;base64,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"}}]);