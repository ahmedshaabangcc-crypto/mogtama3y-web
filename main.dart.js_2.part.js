((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aXf(){var x=$.cdG
return x==null?$.cdG=new B.aXg().$0():x},
cD9(d){var x,w,v,u,t,s,r,q,p,o,n,m=J.ka(114,y.B)
for(x=y.w,w=0;w<114;++w)m[w]=A.ch(D.cY[w].a[1],"",!1,x)
v=new A.dN("")
for(x=d.split("\n"),u=x.length,t=0;t<u;++t){s=x[t]
r=C.c.hm(s,"\r")?C.c.a7(s,0,s.length-1):s
if(r.length===0)continue
if(C.c.bz(r,"#")){v.a+=r+"\n"
continue}q=C.c.fG(r,"|")
p=q<0?-1:C.c.jW(r,"|",q+1)
if(p<0)continue
o=A.dX(C.c.a7(r,0,q),null)
n=A.dX(C.c.a7(r,q+1,p),null)
if(o==null||n==null||o<1||o>114||n<1||n>m[o-1].length)continue
m[o-1][n-1]=C.c.cc(r,p+1)}x=v.a
return new B.oT(m,C.c.LW(x.charCodeAt(0)==0?x:x))},
Nx(d,e,f){var x,w,v
if(d===1||d===9||e!==1)return new A.Mn(null,f)
x=A.a(f.split(" "),y.x)
if(x.length>4){w=y.w
v=A.fi(x,0,A.ip(4,"count",y.C),w).aq(0," ")
if(B.c95(v)===$.cv_())return new A.Mn(v,A.fi(x,4,null,w).aq(0," "))}return new A.Mn(null,f)},
c95(d){var x,w,v,u=new A.dN("")
for(x=new A.Jn(d);x.v();){w=x.d
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
csl(d){var x,w,v,u,t,s,r={},q=B.c95(B.cLP(d))
r.a=q
r.a=C.c.K(C.c.fM(q,A.aB("^\u0633\u0648\u0631\u0647\\s*",!0,!1,!1),""))
x=y.r
w=A.a([],x)
for(v=1;v<=114;++v)w.push(v)
u=r.a
if(u.length===0)return w
t=A.dX(u,null)
if(t!=null)return t>=1&&t<=114?A.a([t],x):C.rT
x=r.a
u=A.aB("[\\s'\\-]",!0,!1,!1)
s=y.a
x=A.a9(new A.ah(w,new B.cad(r,A.bD(x,u,"")),s),s.i("X.E"))
return x},
cLP(d){return A.v8(d,A.aB("[\u0660-\u0669]",!0,!1,!1),new B.c6R(),null)},
oT:function oT(d,e){this.a=d
this.b=e},
aXg:function aXg(){},
cad:function cad(d,e){this.a=d
this.b=e},
c6R:function c6R(){},
cdF(){var x=$.clT
return x==null?$.clT=new B.aXc().$0():x},
kw(d){return"\u0633\u0648\u0631\u0629 "+D.cY[d-1].a[0]},
aXc:function aXc(){}},E,F,D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
E=c[35]
F=c[14]
D=c[27]
B.oT.prototype={
yh(d,e){return this.a[d-1][e-1]}}
var z=a.updateTypes(["al<oT>()"])
B.aXg.prototype={
$0(){var x=0,w=A.j(y.u),v,u=2,t=[],s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c($.vf().l7("assets/quran/quran-uthmani.txt.gz"),$async$$0)
case 7:s=e
x=8
return A.c(F.aBs(J.fD(J.cbD(s),s.byteOffset,s.byteLength)),$async$$0)
case 8:r=e
q=B.cD9(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
$.cdG=null
throw o
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:z+0}
B.cad.prototype={
$1(d){var x=d-1,w=B.c95(D.cY[x].a[0]),v=this.a
if(C.c.n(w,v.a)||C.c.n(C.c.fM(w,A.aB("^\u0627\u0644",!0,!1,!1),""),v.a))return!0
x=D.cY[x].a[3]
v=A.aB("[\\s'\\-]",!0,!1,!1)
return C.c.n(A.bD(x.toLowerCase(),v,""),this.b)},
$S:82}
B.c6R.prototype={
$1(d){var x=d.h(0,0)
x.toString
return""+(x.charCodeAt(0)-1632)},
$S:57}
B.aXc.prototype={
$0(){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=new A.abm("AmiriQuranMT",A.a([],y.p))
r.apf($.vf().l7("assets/quran/AmiriQuran-Regular.ttf"))
s=r
x=7
return A.c(s.vU(),$async$$0)
case 7:$.clU=!0
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
$S:169};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.oT,A.a7)
w(A.lh,[B.aXg,B.aXc])
w(A.iN,[B.cad,B.c6R])})()
var y={p:A.af("H<al<l_>>"),x:A.af("H<o>"),r:A.af("H<x>"),B:A.af("a6<o>"),u:A.af("oT"),w:A.af("o"),a:A.af("ah<x>"),e:A.af("M"),C:A.af("x")};(function constants(){E.BW=new A.eT(" ",null,null,C.bw,null,null,null,null,null,null,null)})();(function staticFields(){$.cdG=null
$.clT=null
$.clU=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cUU","cv_",()=>B.c95("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"))})()};
(a=>{a["waGcL10vidQeHFtF34a/ICD85LQ="]=a.current})($__dart_deferred_initializers__);