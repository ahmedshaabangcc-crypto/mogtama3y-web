((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aXl(){var x=$.cdZ
return x==null?$.cdZ=new B.aXm().$0():x},
cDu(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.ka(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.ci(D.cY[w].a[1],"",!1,x)
v=new A.dN("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.hm(s,"\r")?C.c.a7(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bz(r,"#")){v.a+=r+"\n"
continue}q=C.c.fH(r,"|")
p=q<0?-1:C.c.jV(r,"|",q+1)
if(p<0)continue
o=A.dX(C.c.a7(r,0,q),null)
n=A.dX(C.c.a7(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.cc(r,p+1)}x=v.a
return new B.oV(m,C.c.LX(x.charCodeAt(0)==0?x:x))},
NB(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Mr(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.fa(x,0,A.i3(4,"count",y.C),w).ap(0," ")
if(B.c9o(v)===$.cvk())return new A.Mr(v,A.fa(x,4,null,w).ap(0," "))}return new A.Mr(null,f)},
c9o(d){var x,w,v,u=new A.dN("")
for(x=new A.Jr(d);x.v();){w=x.d
v=!0
if(!(w>=1611&&w<=1631))if(w!==1648)v=w>=1750&&w<=1773||w===1600
if(v)continue
A:{if(1570===w||1571===w||1573===w||1649===w){v=A.eJ(1575)
u.a+=v
break A}if(1577===w){v=A.eJ(1607)
u.a+=v
break A}if(1609===w){v=A.eJ(1610)
u.a+=v
break A}v=A.eJ(w)
u.a+=v}}x=u.a
return C.c.K(x.charCodeAt(0)==0?x:x).toLowerCase()},
csE(d){var x,w,v,u,t,s,r={},q=B.c9o(B.cM9(d))
r.a=q
r.a=C.c.K(C.c.fN(q,A.ay("^\u0633\u0648\u0631\u0647\\s*",!0,!1,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.dX(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.t0
x=r.a
u=A.ay("[\\s'\\-]",!0,!1,!1)
s=y.a
x=A.a9(new A.ah(w,new B.caw(r,A.bC(x,u,"")),s),s.i("W.E"))
return x},
cM9(d){return A.vb(d,A.ay("[\u0660-\u0669]",!0,!1,!1),new B.c79(),null)},
oV:function oV(d,e){this.a=d
this.b=e},
aXm:function aXm(){},
caw:function caw(d,e){this.a=d
this.b=e},
c79:function c79(){},
cdY(){var x=$.cmb
return x==null?$.cmb=new B.aXi().$0():x},
kw(d){return"\u0633\u0648\u0631\u0629 "+D.cY[d-1].a[0]},
aXi:function aXi(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[33]
F=c[14]
D=c[25]
B.oV.prototype={
yj(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["al<oV>()"])
B.aXm.prototype={
$0(){var x=0,w=A.j(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c($.vi().l7("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.c(F.aBy(J.fD(J.cbW(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.cDu(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.cdZ=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:z+0}
B.caw.prototype={
$1(d){var x=d-1,w=B.c9o(D.cY[x].a[0]),v=this.a
if(C.c.n(w,v.a)||C.c.n(C.c.fN(w,A.ay("^\u0627\u0644",!0,!1,!1),""),v.a))return!0
x=D.cY[x].a[3]
v=A.ay("[\\s'\\-]",!0,!1,!1)
return C.c.n(A.bC(x.toLowerCase(),v,""),this.b)},
$S:78}
B.c79.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:56}
B.aXi.prototype={
$0(){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.abs("AmiriQuranMT",A.a([],y.p))
r.aph($.vi().l7("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.c(s.vV(),$async$$0)
case 7:$.cmc=!0
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:197};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.oV,A.a7)
w(A.lh,[B.aXm,B.aXi])
w(A.iN,[B.caw,B.c79])})()
var y={p:A.ag("H<al<l_>>"),x:A.ag("H<o>"),r:A.ag("H<x>"),B:A.ag("a6<o>"),u:A.ag("oV"),w:A.ag("o"),a:A.ag("ah<x>"),e:A.ag("M"),C:A.ag("x")};(function constants(){E.C_=new A.eT(" ",null,null,C.bz,null,null,null,null,null,null,null)})();(function staticFields(){$.cdZ=null
$.cmb=null
$.cmc=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cVh","cvk",()=>B.c9o("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["FVV4d3rNxWcriTIwC/GZWBgVj1I="]=a.current})($__dart_deferred_initializers__);