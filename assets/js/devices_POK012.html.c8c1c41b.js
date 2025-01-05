"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10761],{95171:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>d});var o=a(6254);const i={},s=(0,a(89596).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[10]||(t[10]=(0,o.Lk)("h1",{id:"pushok-hardware-pok012",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#pushok-hardware-pok012"},[(0,o.Lk)("span",null,"PushOk Hardware POK012")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"POK012")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=PushOk%20Hardware"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("PushOk Hardware")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"20 dBm Zigbee router with battery backup for indoor/outdoor use")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery_state, ac_status, battery_defect, battery, voltage, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/POK012.png",alt:"PushOk Hardware POK012"})])],-1))])]),t[11]||(t[11]=(0,o.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,o.Lk)("span",null,"OTA updates")])],-1)),(0,o.Lk)("p",null,[t[8]||(t[8]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,o.eW)("."))]),t[12]||(t[12]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum"><span>Battery state (enum)</span></a></h3><p>Battery state. Value can be found in the published state on the <code>battery_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>missing</code>, <code>charging</code>, <code>full</code>, <code>discharging</code>.</p><h3 id="ac-status-binary" tabindex="-1"><a class="header-anchor" href="#ac-status-binary"><span>Ac status (binary)</span></a></h3><p>Indicates whether the device mains voltage supply is at fault. Value can be found in the published state on the <code>ac_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> ac status is ON, if <code>false</code> OFF.</p><h3 id="battery-defect-binary" tabindex="-1"><a class="header-anchor" href="#battery-defect-binary"><span>Battery defect (binary)</span></a></h3><p>Indicates whether the device battery is defective. Value can be found in the published state on the <code>battery_defect</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery defect is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13))])}]]),d=JSON.parse('{"path":"/devices/POK012.html","title":"PushOk Hardware POK012 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"PushOk Hardware POK012 control via MQTT","description":"Integrate your PushOk Hardware POK012 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-31T20:34:53.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery state (enum)","slug":"battery-state-enum","link":"#battery-state-enum","children":[]},{"level":3,"title":"Ac status (binary)","slug":"ac-status-binary","link":"#ac-status-binary","children":[]},{"level":3,"title":"Battery defect (binary)","slug":"battery-defect-binary","link":"#battery-defect-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1736111847000},"filePathRelative":"devices/POK012.md"}')}}]);