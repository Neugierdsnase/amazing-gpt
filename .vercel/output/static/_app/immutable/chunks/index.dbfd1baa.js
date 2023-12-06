import{n as z,j as V,r as it,k as lt,s as X,h as at,c as rt}from"./scheduler.ddf07609.js";import{H as ot,I as ct,J as ut,K as ft,d as Y,t as Z,S as $,i as tt,g as T,s as N,h as S,j as x,c as R,f as b,k as p,a as A,y,p as ht,b as dt,m as B,n as q,C as O,z as et,o as F,G as U,B as j,e as H}from"./index.e55c1a00.js";import{_ as gt}from"./lodash.fb661e38.js";import{w as _t}from"./index.24ec2bc8.js";function pt(n,t,e,a){if(!t)return z;const i=n.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return z;const{delay:s=0,duration:l=300,easing:u=V,start:r=ot()+s,end:o=r+l,tick:c=z,css:f}=e(n,{from:t,to:i},a);let _=!0,h=!1,d;function k(){f&&(d=ut(n,0,1,l,s,u,f)),s||(h=!0)}function w(){f&&ft(n,d),_=!1}return ct(g=>{if(!h&&g>=r&&(h=!0),h&&g>=o&&(c(1,0),w()),!_)return!1;if(h){const v=g-r,I=0+1*u(v/l);c(I,1-I)}return!0}),k(),c(0,1),w}function mt(n){const t=getComputedStyle(n);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:e,height:a}=t,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=e,n.style.height=a,nt(n,i)}}function nt(n,t){const e=n.getBoundingClientRect();if(t.left!==e.left||t.top!==e.top){const a=getComputedStyle(n),i=a.transform==="none"?"":a.transform;n.style.transform=`${i} translate(${t.left-e.left}px, ${t.top-e.top}px)`}}function D(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function bt(n,t){Z(n,1,1,()=>{t.delete(n.key)})}function yt(n,t){n.f(),bt(n,t)}function kt(n,t,e,a,i,s,l,u,r,o,c,f){let _=n.length,h=s.length,d=_;const k={};for(;d--;)k[n[d].key]=d;const w=[],g=new Map,v=new Map,I=[];for(d=h;d--;){const m=f(i,s,d),C=e(m);let E=l.get(C);E?a&&I.push(()=>E.p(m,t)):(E=o(C,m),E.c()),g.set(C,w[d]=E),C in k&&v.set(C,Math.abs(d-k[C]))}const G=new Set,L=new Set;function M(m){Y(m,1),m.m(u,c),l.set(m.key,m),c=m.first,h--}for(;_&&h;){const m=w[h-1],C=n[_-1],E=m.key,P=C.key;m===C?(c=m.first,_--,h--):g.has(P)?!l.has(E)||G.has(E)?M(m):L.has(P)?_--:v.get(E)>v.get(P)?(L.add(E),M(m)):(G.add(P),_--):(r(C,l),_--)}for(;_--;){const m=n[_];g.has(m.key)||r(m,l)}for(;h;)M(w[h-1]);return it(I),w}const st=_t({author:"",query:"",tags:[],sort:"added",desc:!0}),wt=n=>{st.update(t=>(t.tags.includes(n)?t.tags=t.tags.filter(e=>e!==n):t.tags.push(n),t))},Tt={...st,handleTagClick:wt};function St(n){const t=n-1;return t*t*t+1}function Ct(n,{from:t,to:e},a={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[l,u]=i.transformOrigin.split(" ").map(parseFloat),r=t.left+t.width*l/e.width-(e.left+l),o=t.top+t.height*u/e.height-(e.top+u),{delay:c=0,duration:f=h=>Math.sqrt(h)*120,easing:_=St}=a;return{delay:c,duration:lt(f)?f(Math.sqrt(r*r+o*o)):f,easing:_,css:(h,d)=>{const k=d*r,w=d*o,g=h+d*t.width/e.width,v=h+d*t.height/e.height;return`transform: ${s} translate(${k}px, ${w}px) scale(${g}, ${v});`}}}function J(n,{delay:t=0,duration:e=400,easing:a=V}={}){const i=+getComputedStyle(n).opacity;return{delay:t,duration:e,easing:a,css:s=>`opacity: ${s*i}`}}function K(n,t,e){const a=n.slice();return a[14]=t[e],a}function W(n,t){let e,a,i=t[14]+"",s,l,u,r=z,o,c,f;function _(){return t[11](t[14])}return{key:n,first:null,c(){e=T("li"),a=T("button"),s=B(i),this.h()},l(h){e=S(h,"LI",{});var d=x(e);a=S(d,"BUTTON",{class:!0});var k=x(a);s=q(k,i),k.forEach(b),d.forEach(b),this.h()},h(){p(a,"class","badge badge-primary "+t[5]),O(a,"badge-secondary",t[3].includes(t[14])),this.first=e},m(h,d){A(h,e,d),y(e,a),y(a,s),o=!0,c||(f=et(a,"click",_),c=!0)},p(h,d){t=h,(!o||d&16)&&i!==(i=t[14]+"")&&F(s,i),(!o||d&24)&&O(a,"badge-secondary",t[3].includes(t[14]))},r(){u=e.getBoundingClientRect()},f(){mt(e),r(),nt(e,u)},a(){r(),r=pt(e,u,Ct,{duration:350})},i(h){o||(h&&rt(()=>{o&&(l||(l=U(e,J,{},!0)),l.run(1))}),o=!0)},o(h){h&&(l||(l=U(e,J,{},!1)),l.run(0)),o=!1},d(h){h&&b(e),h&&l&&l.end(),c=!1,f()}}}function Q(n){let t,e,a,i;return{c(){t=T("li"),e=T("input"),this.h()},l(s){t=S(s,"LI",{});var l=x(t);e=S(l,"INPUT",{type:!0,placeholder:!0,class:!0}),l.forEach(b),this.h()},h(){p(e,"type","text"),p(e,"placeholder","filter tags"),p(e,"class","input input-primary input-xs rounded-xl text-center max-w-[8rem]")},m(s,l){A(s,t,l),y(t,e),j(e,n[2]),a||(i=et(e,"input",n[12]),a=!0)},p(s,l){l&4&&e.value!==s[2]&&j(e,s[2])},d(s){s&&b(t),a=!1,i()}}}function Et(n){let t,e=[],a=new Map,i,s,l=D(n[4]);const u=o=>o[14];for(let o=0;o<l.length;o+=1){let c=K(n,l,o),f=u(c);a.set(f,e[o]=W(f,c))}let r=n[1]&&Q(n);return{c(){t=T("ul");for(let o=0;o<e.length;o+=1)e[o].c();i=N(),r&&r.c(),this.h()},l(o){t=S(o,"UL",{class:!0});var c=x(t);for(let f=0;f<e.length;f+=1)e[f].l(c);i=R(c),r&&r.l(c),c.forEach(b),this.h()},h(){p(t,"class","flex gap-1 flex-wrap justify-center")},m(o,c){A(o,t,c);for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(t,null);y(t,i),r&&r.m(t,null),s=!0},p(o,[c]){if(c&57){l=D(o[4]),ht();for(let f=0;f<e.length;f+=1)e[f].r();e=kt(e,c,u,1,o,l,a,t,yt,W,i,K);for(let f=0;f<e.length;f+=1)e[f].a();dt()}o[1]?r?r.p(o,c):(r=Q(o),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},i(o){if(!s){for(let c=0;c<l.length;c+=1)Y(e[c]);s=!0}},o(o){for(let c=0;c<e.length;c+=1)Z(e[c]);s=!1},d(o){o&&b(t);for(let c=0;c<e.length;c+=1)e[c].d();r&&r.d()}}}function xt(n,t,e){let a,i,s,l;at(n,Tt,g=>e(10,l=g));let{maxTags:u=void 0}=t,{tags:r=[]}=t,{handleTagClick:o=()=>{}}=t,{size:c="md"}=t,{includeTagsFilter:f=!1}=t,_="",d={xs:"badge-xs",sm:"badge-sm",md:"badge-md",lg:"badge-lg"}[c];const k=g=>o(g);function w(){_=this.value,e(2,_)}return n.$$set=g=>{"maxTags"in g&&e(6,u=g.maxTags),"tags"in g&&e(7,r=g.tags),"handleTagClick"in g&&e(0,o=g.handleTagClick),"size"in g&&e(8,c=g.size),"includeTagsFilter"in g&&e(1,f=g.includeTagsFilter)},n.$$.update=()=>{n.$$.dirty&1024&&e(3,a=l.tags),n.$$.dirty&140&&e(9,i=gt.uniq([...a,...r.filter(g=>_?g.includes(_):!0)])),n.$$.dirty&576&&e(4,s=u?i.slice(0,u):i)},[o,f,_,a,s,d,u,r,c,i,l,k,w]}class Rt extends ${constructor(t){super(),tt(this,t,xt,Et,X,{maxTags:6,tags:7,handleTagClick:0,size:8,includeTagsFilter:1})}}function At(n){let t,e,a,i,s;return{c(){t=T("a"),e=B("- by "),a=B(n[0]),i=N(),s=T("i"),this.h()},l(l){t=S(l,"A",{class:!0,href:!0,rel:!0,target:!0});var u=x(t);e=q(u,"- by "),a=q(u,n[0]),i=R(u),s=S(u,"I",{class:!0}),x(s).forEach(b),u.forEach(b),this.h()},h(){p(s,"class","ph-bold ph-arrow-square-out"),p(t,"class","text-xs italic underline"),p(t,"href",n[1]),p(t,"rel","noopener"),p(t,"target","_blank")},m(l,u){A(l,t,u),y(t,e),y(t,a),y(t,i),y(t,s)},p(l,u){u&1&&F(a,l[0]),u&2&&p(t,"href",l[1])},d(l){l&&b(t)}}}function vt(n){let t,e,a;return{c(){t=T("span"),e=B("- by "),a=B(n[0]),this.h()},l(i){t=S(i,"SPAN",{class:!0});var s=x(t);e=q(s,"- by "),a=q(s,n[0]),s.forEach(b),this.h()},h(){p(t,"class","text-xs italic")},m(i,s){A(i,t,s),y(t,e),y(t,a)},p(i,s){s&1&&F(a,i[0])},d(i){i&&b(t)}}}function zt(n){let t,e,a=n[2](n[1])+"",i,s,l;return{c(){t=T("a"),e=B("- by "),i=B(a),s=N(),l=T("i"),this.h()},l(u){t=S(u,"A",{class:!0,href:!0,rel:!0,target:!0});var r=x(t);e=q(r,"- by "),i=q(r,a),s=R(r),l=S(r,"I",{class:!0}),x(l).forEach(b),r.forEach(b),this.h()},h(){p(l,"class","ph-bold ph-arrow-square-out"),p(t,"class","text-xs italic underline"),p(t,"href",n[1]),p(t,"rel","noopener"),p(t,"target","_blank")},m(u,r){A(u,t,r),y(t,e),y(t,i),y(t,s),y(t,l)},p(u,r){r&2&&a!==(a=u[2](u[1])+"")&&F(i,a),r&2&&p(t,"href",u[1])},d(u){u&&b(t)}}}function Bt(n){let t;return{c(){t=T("span"),this.h()},l(e){t=S(e,"SPAN",{class:!0}),x(t).forEach(b),this.h()},h(){p(t,"class","text-xs")},m(e,a){A(e,t,a)},p:z,d(e){e&&b(t)}}}function qt(n){let t;function e(s,l){return!s[0]&&!s[1]?Bt:s[0]?s[1]?At:vt:zt}let a=e(n),i=a(n);return{c(){i.c(),t=H()},l(s){i.l(s),t=H()},m(s,l){i.m(s,l),A(s,t,l)},p(s,[l]){a===(a=e(s))&&i?i.p(s,l):(i.d(1),i=a(s),i&&(i.c(),i.m(t.parentNode,t)))},i:z,o:z,d(s){s&&b(t),i.d(s)}}}function It(n,t,e){let{authorname:a=""}=t,{authorurl:i=""}=t;const s=l=>{const u=/^(https?:\/\/)/;return l.replace(u,"")};return n.$$set=l=>{"authorname"in l&&e(0,a=l.authorname),"authorurl"in l&&e(1,i=l.authorurl)},[a,i,s]}class Gt extends ${constructor(t){super(),tt(this,t,It,qt,X,{authorname:0,authorurl:1})}}const Lt="https://chat.openai.com/g/",Ot="gpt";export{Gt as A,Lt as B,Ot as G,Rt as T,mt as a,nt as b,pt as c,yt as d,D as e,Tt as f,Ct as g,J as h,kt as u};