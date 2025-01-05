"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71021],{23875:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>l,data:()=>d});var o=a(6254);const i={},l=(0,a(89596).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"plugwise-106-03",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#plugwise-106-03"},[(0,o.Lk)("span",null,"Plugwise 106-03")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"106-03")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Plugwise"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Plugwise")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Tom thermostatic radiator valve")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, pi_heating_demand, local_temperature, valve_position, force, radio_strength, calibrate_valve, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/106-03.png",alt:"Plugwise 106-03"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pi-heating-demand-numeric" tabindex="-1"><a class="header-anchor" href="#pi-heating-demand-numeric"><span>Pi heating demand (numeric)</span></a></h3><p>Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. Value can be found in the published state on the <code>pi_heating_demand</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="local-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#local-temperature-numeric"><span>Local temperature (numeric)</span></a></h3><p>Current temperature measured on the device. Value can be found in the published state on the <code>local_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="valve-position-numeric" tabindex="-1"><a class="header-anchor" href="#valve-position-numeric"><span>Valve position (numeric)</span></a></h3><p>Directly control the radiator valve. The values range from 0 (valve closed) to 100 (valve fully open). Value can be found in the published state on the <code>valve_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="force-enum" tabindex="-1"><a class="header-anchor" href="#force-enum"><span>Force (enum)</span></a></h3><p>How hard the motor pushes the valve. The closer to the boiler, the higher the force needed. Value can be found in the published state on the <code>force</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;force&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force&quot;: NEW_VALUE}</code>. The possible values are: <code>standard</code>, <code>high</code>, <code>very_high</code>.</p><h3 id="radio-strength-enum" tabindex="-1"><a class="header-anchor" href="#radio-strength-enum"><span>Radio strength (enum)</span></a></h3><p>Transmits with higher power when range is not sufficient. Value can be found in the published state on the <code>radio_strength</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;radio_strength&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radio_strength&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>high</code>.</p><h3 id="calibrate-valve-binary" tabindex="-1"><a class="header-anchor" href="#calibrate-valve-binary"><span>Calibrate valve (binary)</span></a></h3><p>Calibrates valve on next wakeup. Value can be found in the published state on the <code>calibrate_valve</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate_valve&quot;: NEW_VALUE}</code>. If value equals <code>calibrate</code> calibrate valve is ON, if <code>idle</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),d=JSON.parse('{"path":"/devices/106-03.html","title":"Plugwise 106-03 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Plugwise 106-03 control via MQTT","description":"Integrate your Plugwise 106-03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-05-24T20:14:06.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Pi heating demand (numeric)","slug":"pi-heating-demand-numeric","link":"#pi-heating-demand-numeric","children":[]},{"level":3,"title":"Local temperature (numeric)","slug":"local-temperature-numeric","link":"#local-temperature-numeric","children":[]},{"level":3,"title":"Valve position (numeric)","slug":"valve-position-numeric","link":"#valve-position-numeric","children":[]},{"level":3,"title":"Force (enum)","slug":"force-enum","link":"#force-enum","children":[]},{"level":3,"title":"Radio strength (enum)","slug":"radio-strength-enum","link":"#radio-strength-enum","children":[]},{"level":3,"title":"Calibrate valve (binary)","slug":"calibrate-valve-binary","link":"#calibrate-valve-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1736111847000},"filePathRelative":"devices/106-03.md"}')}}]);