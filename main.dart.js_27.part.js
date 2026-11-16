((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,F,G,N,P,K,B={
cFK(d){var x,w,v,u,t,s
if(d instanceof B.lI)return d
try{x=A.cW(d)
w=x.code
v=x.message
u=w==null?"failed":A.S(w)
t=v==null?"":A.S(v)
return new B.lI(u,t)}catch(s){u=A.n(d)
return new B.lI("failed",u)}},
akM:function akM(){this.b=this.a=null},
b7P:function b7P(d){this.a=d},
b7S:function b7S(){},
b7R:function b7R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7Q:function b7Q(d){this.a=d},
b7W:function b7W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b7U:function b7U(d){this.a=d},
b7V:function b7V(d){this.a=d},
b7X:function b7X(d){this.a=d},
b7Z:function b7Z(d,e,f){this.a=d
this.b=e
this.c=f},
b7Y:function b7Y(d,e,f){this.a=d
this.b=e
this.c=f},
b7T:function b7T(){},
cFL(d,e){return new B.lI(d,e)},
Wu:function Wu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
Kz:function Kz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
KB:function KB(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
KA:function KA(d,e){this.a=d
this.b=e},
lI:function lI(d,e){this.a=d
this.b=e},
crK(d){var x,w=$.cwv()
w=A.bD(d,w,"\u0627")
x=$.cww()
w=A.bD(w,x,"\u064a")
x=$.cwF()
w=A.bD(w,x,"\u0627")
x=$.cv_()
w=A.bD(w,x,"\u0627")
x=$.cwb()
w=A.bD(w,x,"\u0621")
x=$.cvO()
w=A.bD(w,x,"\u0621")
x=$.cv0()
w=A.bD(w,x,"\u0627")
x=$.cv6()
w=A.bD(w,x,"\u0621")
w=A.bD(w,"\u0649","\u064a")
w=A.bD(w,"\u0629","\u0647")
x=$.cvQ()
w=A.bD(w,x,"")
x=$.cwe()
w=A.bD(w,x," ")
x=$.cvX()
w=A.bD(w,x," ")
x=$.chp()
return C.c.K(A.bD(w,x," "))},
cKs(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.k9(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.ch(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
cb8(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.aB("[\u0627\u0621]",!0,!1,!1)
w=A.bD(d,x,"")
x=A.aB("[\u0627\u0621]",!0,!1,!1)
v=A.bD(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.cKs(d,e)/u
return s>=1?0.99:s},
FC(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.uc(d,$.chp()),w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
if(u.length===0)continue
t=B.crK(u)
s=A.bD(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.Tz(r.a+" "+u,r.b))}continue}q.push(new B.Tz(u,s))}return q},
cJ7(d,e){var x,w,v,u,t=new B.c4W(),s=A.a([],y.s)
for(x=A.fi(e,0,A.ip(5,"count",y.S),A.aj(e).c),w=x.$ti,x=new A.cg(x,x.gN(0),w.i("cg<aV.E>")),w=w.i("aV.E");x.v();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.KT)&&t.$2(d,D.KT)?C.b.jA(d,5):d
return!t.$2(s,D.PB)&&t.$2(u,D.PB)?C.b.jA(u,4):u},
cqG(d,e){var x=B.FC(d),w=B.crK(e),v=y.U
v=A.a9(new A.ah(A.a(w.split(" "),y.s),new B.c71(),v),v.i("X.E"))
return new B.Ja(x,B.cIi(x,B.cJ7(v,x)),w)},
cIi(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.L)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.ch(x,0,!1,s)
q=A.ch(x,0,!1,y.S)
p=A.ch(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.cb8(a4[o],a6[n])
for(o=1;o<=v;++o){x=o*t
r[x]=o
q[x]=1}for(n=1;n<=u;++n){r[n]=n
q[n]=2}for(o=1;o<=v;++o)for(x=o*t,s=o>=2,m=o-1,l=m*t,k=m*u,j=o-2,i=j*t,n=1;n<=u;++n){h=l+n
g=r[h-1]+(1-p[k+n-1])
f=r[h]+1
if(f<g){g=f
e=1}else e=0
d=x+n
a0=r[d-1]+1
if(a0<g){g=a0
e=2}if(n>=2&&r[h-2]<g&&B.cb8(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.cb8(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
e=4}r[d]=g
q[d]=e}a1=A.a([],y.k)
n=u
o=v
for(;;){x=o>0
if(!(x||n>0))break
if(x&&n>0)e=q[o*t+n]
else e=x?1:2
switch(e){case 0:--o
a2=p[o*u+n-1]
x=a4[o];--n
s=a6[n]
if(a2>=1)m=D.jd
else m=a2>=0.6?D.v6:D.v7
a1.push(new B.n6(o,x,s,m))
break
case 1:--o
a1.push(new B.n6(o,a4[o],null,D.v8))
break
case 2:--n
a1.push(new B.n6(null,null,a6[n],D.a4v))
break
case 3:--o
a3=n-2
a1.push(new B.n6(o,a4[o],a6[a3]+" "+a6[n-1],D.jd))
n=a3
break
default:x=o-1;--n
a1.push(new B.n6(x,a4[x],a6[n],D.jd))
o-=2
a1.push(new B.n6(o,a4[o],a6[n],D.jd))}}a4=y.e
a4=A.a9(new A.d8(a1,a4),a4.i("aV.E"))
return a4},
nO:function nO(d,e){this.a=d
this.b=e},
Tz:function Tz(d,e){this.a=d
this.b=e},
n6:function n6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ja:function Ja(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aYR:function aYR(d){this.a=d},
aYQ:function aYQ(){},
c4W:function c4W(){},
c71:function c71(){},
cxw(d,e,f){return new B.rG(d,e,f)},
cLn(d){var x
A:{if("memorized"===d){x=D.fh
break A}if("learning"===d){x=D.pH
break A}x=D.pG
break A}return x},
csK(d,e){return d>=1&&d<=114&&e>=1&&e<=H.cX[d-1].a[1]},
cFM(){var x=y.S
return new B.akN(A.D(x,y.u),A.aN(x))},
b81(d){var x=d.eP()
return C.c.du(C.j.k(A.br(x)),4,"0")+"-"+C.c.du(C.j.k(A.bv(x)),2,"0")+"-"+C.c.du(C.j.k(A.c_(x)),2,"0")},
cnB(d){var x=y.x,w=A.a9(new A.av(A.a(d.split("-"),y.s),A.cMO(),x),x.i("aV.E"))
return B.b81(A.dy(w[0],w[1],w[2]-1,12,0,0,0))},
cen(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.D(p,y.u),n=A.aN(p),m=new B.akN(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gcN(),x=x.ga0(x),w=y.j;x.v();){v=x.gG()
u=A.dX(A.n(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.aM(t)>=3){v=C.j.aJ(u,1000)
s=C.j.a3(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=H.cX[v-1].a[1])}if(v)continue
v=J.bb(t)
r=C.f.bB(A.cT(v.h(t,0)))
if(r<0||r>=3)continue
o.p(0,u,new B.rG(D.aN1[r],C.f.bB(A.cT(v.h(t,1))),new A.aP(A.kC(C.f.bB(A.cT(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.aCe(q,y.o)
p=A.my(x,new B.b80(),x.$ti.i("X.E"),p)
n.A(0,new A.ah(p,o.ga4O(),A.y(p).i("ah<X.E>")))}m.c=A.q(d.h(0,"last"))
p=A.as(d.h(0,"streak"))
p=p==null?null:C.f.bB(p)
p=m.d=p==null?0:p
o=A.as(d.h(0,"best"))
o=o==null?null:C.f.bB(o)
m.e=o==null?p:o
return m},
aBv(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.du(C.j.k(d),3,"0")+C.c.du(C.j.k(e),3,"0")+".mp3"},
FX:function FX(d,e){this.a=d
this.b=e},
rG:function rG(d,e,f){this.a=d
this.b=e
this.c=f},
akN:function akN(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
b82:function b82(){},
b83:function b83(){},
b80:function b80(){},
Ws:function Ws(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cDe(){return new B.xc(null)},
cPf(d,e){var x,w,v,u,t={},s=H.cX[e-1].a[1],r=$.NH().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.rw():v).a===D.fh}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.j.d1(u+4,1,s)
return A.e4(C.cu,new B.c9O(t,s,e),d,!0,null,null,!1,y.l)},
cgb(d){return A.du(0,0,0,0,0,C.j.d1(C.f.ak(6+d*1.2),25,90))},
cf5(d){return E.bp(C.j.aJ(d,60))+":"+C.c.du(E.bp(C.j.a3(d,60)),2,"\u0660")},
csw(d){return A.e4(C.cu,new B.caL($.NH()),d,!0,null,null,!1,y.H)},
NB(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gl9()
break A}return x},
cQA(d,e,f){var x,w=new B.cb1(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.a7(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.a7(x,0,1990):x},
csF(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.aq.f4(a4,null))
s=y.Y
r=s.a(J.at(x,"rec"))
w=r==null?C.cN:r
q=s.a(J.at(x,"last"))
v=q==null?C.cN:q
u=new B.cb0()
s=J.at(v,"recovered")
t=A.n(s==null?"":s)
s=A.n(u.$1(J.at(w,"wall")))
p=A.n(u.$1(J.at(w,"source")))
o=A.n(u.$1(J.at(w,"ctxRate")))
n=A.n(u.$1(J.at(w,"pcmPeak")))
m=A.n(u.$1(J.at(w,"ctxState")))
l=A.n(u.$1(J.at(w,"stopMs")))
k=A.n(u.$1(J.at(v,"prepMs")))
j=A.n(u.$1(J.at(v,"ms")))
i=A.n(u.$1(J.at(v,"featMs")))
h=A.n(u.$1(J.at(v,"encMs")))
g=A.n(u.$1(J.at(v,"decMs")))
f=A.n(u.$1(J.at(v,"wallMs")))
e=A.n(u.$1(J.at(v,"backend")))
d=A.n(u.$1(J.at(v,"threads")))
a0=J.aM(t)!==0?" \xb7 recovered from "+A.n(t):""
a1=J.k(J.at(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.k(J.at(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
Ia:function Ia(d,e){this.a=d
this.b=e},
Wt:function Wt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=!1
_.f=g
_.w=_.r=0
_.as=_.Q=_.z=_.y=_.x=null
_.at=!1
_.M$=0
_.q$=h
_.T$=_.R$=0},
b84:function b84(d){this.a=d},
b85:function b85(d){this.a=d},
b86:function b86(d){this.a=d},
xc:function xc(d){this.a=d},
a17:function a17(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bOs:function bOs(d){this.a=d},
bOr:function bOr(d,e){this.a=d
this.b=e},
bOt:function bOt(d){this.a=d},
bOq:function bOq(d,e){this.a=d
this.b=e},
bOu:function bOu(){},
bOe:function bOe(){},
bOk:function bOk(d,e,f){this.a=d
this.b=e
this.c=f},
bOl:function bOl(){},
bOo:function bOo(d){this.a=d},
bOn:function bOn(){},
bOp:function bOp(d){this.a=d},
bOh:function bOh(d,e){this.a=d
this.b=e},
bOi:function bOi(d){this.a=d},
bOg:function bOg(){},
bOj:function bOj(d){this.a=d},
bOf:function bOf(d){this.a=d},
bOm:function bOm(d,e){this.a=d
this.b=e},
Ib:function Ib(d,e,f){this.c=d
this.d=e
this.a=f},
YS:function YS(d,e){this.c=d
this.a=e},
c9O:function c9O(d,e,f){this.a=d
this.b=e
this.c=f},
c9L:function c9L(d,e,f){this.a=d
this.b=e
this.c=f},
c9N:function c9N(d,e){this.a=d
this.b=e},
c9K:function c9K(d,e){this.a=d
this.b=e},
c9J:function c9J(d,e){this.a=d
this.b=e},
c9M:function c9M(d,e){this.a=d
this.b=e},
c9F:function c9F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9E:function c9E(d,e,f){this.a=d
this.b=e
this.c=f},
c9G:function c9G(d){this.a=d},
c9H:function c9H(d){this.a=d},
c9I:function c9I(d,e){this.a=d
this.b=e},
ET:function ET(d,e){this.a=d
this.b=e},
DR:function DR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3G:function a3G(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
c1f:function c1f(){},
c1v:function c1v(d,e){this.a=d
this.b=e},
c1z:function c1z(d){this.a=d},
c1A:function c1A(d){this.a=d},
c1B:function c1B(d,e,f){this.a=d
this.b=e
this.c=f},
c1D:function c1D(d){this.a=d},
c1E:function c1E(d){this.a=d},
c1C:function c1C(){},
c1G:function c1G(d){this.a=d},
c1F:function c1F(d){this.a=d},
c1H:function c1H(d,e){this.a=d
this.b=e},
c1J:function c1J(d){this.a=d},
c1K:function c1K(d){this.a=d},
c1I:function c1I(){},
c1u:function c1u(d,e,f){this.a=d
this.b=e
this.c=f},
c1w:function c1w(d,e,f){this.a=d
this.b=e
this.c=f},
c1n:function c1n(d){this.a=d},
c1o:function c1o(d){this.a=d},
c1m:function c1m(){},
c1p:function c1p(){},
c1q:function c1q(d,e){this.a=d
this.b=e},
c1P:function c1P(d){this.a=d},
c1Q:function c1Q(d){this.a=d},
c1R:function c1R(d,e){this.a=d
this.b=e},
c1O:function c1O(d){this.a=d},
c1S:function c1S(d,e){this.a=d
this.b=e},
c1t:function c1t(){},
c1s:function c1s(d){this.a=d},
c1r:function c1r(d,e){this.a=d
this.b=e},
c1y:function c1y(d){this.a=d},
c1x:function c1x(d){this.a=d},
c1L:function c1L(){},
c1M:function c1M(){},
c1N:function c1N(){},
c1g:function c1g(d,e,f){this.a=d
this.b=e
this.c=f},
c1h:function c1h(d){this.a=d},
c1j:function c1j(){},
c1i:function c1i(){},
c1k:function c1k(d){this.a=d},
c1l:function c1l(d){this.a=d},
E8:function E8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
DQ:function DQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3F:function a3F(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
c0Z:function c0Z(){},
c17:function c17(d,e){this.a=d
this.b=e},
c18:function c18(d){this.a=d},
c16:function c16(){},
c1a:function c1a(d){this.a=d},
c19:function c19(d,e){this.a=d
this.b=e},
c1b:function c1b(d,e){this.a=d
this.b=e},
c12:function c12(d,e){this.a=d
this.b=e},
c13:function c13(d,e,f){this.a=d
this.b=e
this.c=f},
c14:function c14(d,e,f){this.a=d
this.b=e
this.c=f},
c1_:function c1_(d,e,f){this.a=d
this.b=e
this.c=f},
c10:function c10(d,e,f){this.a=d
this.b=e
this.c=f},
c11:function c11(d,e){this.a=d
this.b=e},
c15:function c15(d){this.a=d},
c1c:function c1c(){},
c1d:function c1d(d,e){this.a=d
this.b=e},
c1e:function c1e(d,e){this.a=d
this.b=e},
DP:function DP(d){this.a=d},
a3E:function a3E(d){this.d=d
this.c=this.a=null},
c0Q:function c0Q(){},
c0X:function c0X(d){this.a=d},
c0Y:function c0Y(){},
c0W:function c0W(d,e){this.a=d
this.b=e},
c0V:function c0V(d,e,f){this.a=d
this.b=e
this.c=f},
c0U:function c0U(d,e,f){this.a=d
this.b=e
this.c=f},
c0T:function c0T(d){this.a=d},
c0R:function c0R(d){this.a=d},
c0S:function c0S(d){this.a=d},
caL:function caL(d){this.a=d},
caK:function caK(d){this.a=d},
caF:function caF(d,e){this.a=d
this.b=e},
caH:function caH(){},
caG:function caG(){},
caI:function caI(d,e){this.a=d
this.b=e},
caJ:function caJ(d,e){this.a=d
this.b=e},
akL:function akL(d){this.a=d},
b7O:function b7O(d){this.a=d},
cb1:function cb1(){},
cb2:function cb2(){},
DS:function DS(d,e,f){this.c=d
this.d=e
this.a=f},
a3H:function a3H(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
c1T:function c1T(d){this.a=d},
c1U:function c1U(d){this.a=d},
c1V:function c1V(d,e){this.a=d
this.b=e},
c1W:function c1W(d){this.a=d},
c1Y:function c1Y(d){this.a=d},
c1X:function c1X(d){this.a=d},
cb0:function cb0(){}},D,Q,O,H,E,I
J=c[1]
A=c[0]
C=c[2]
L=c[15]
M=c[19]
F=c[30]
G=c[13]
N=c[29]
P=c[10]
K=c[35]
B=a.updateHolder(c[8],B)
D=c[36]
Q=c[27]
O=c[33]
H=c[25]
E=c[16]
I=c[18]
B.akM.prototype={
rj(){var x=this,w=x.a
if(w!=null)return A.es(w,y.m)
w=x.b
return w==null?x.b=new B.b7P(x).$0():w},
uD(d,e){return this.aPi(d,e,e)},
aPi(d,e,f){var x=0,w=A.j(f),v,u=2,t=[],s,r,q,p
var $async$uD=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(d.$0(),$async$uD)
case 7:r=h
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a8(p)
r=B.cFK(s)
throw A.r(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uD,w)},
ot(d,e){var x=A.ep(d[e])
if(x==null)x=null
return x===!0},
Nh(){var x=0,w=A.j(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Nh=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.c(s.rj(),$async$Nh)
case 7:r=h.cW(g.cR(e,"support",null,null,null,null))
q=s.ot(r,"worker")
p=s.ot(r,"wasm")
o=s.ot(r,"mic")
n=s.ot(r,"audio")
s.ot(r,"webgpu")
m=s.ot(r,"secure")
s.ot(r,"ios")
l=A.jX(r.memory)
if(l==null)l=null
if(l==null)l=0
s.ot(r,"isolated")
k=A.jX(r.cores)
if(k!=null)C.f.ak(k)
v=new B.Wu(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.a44
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nh,w)},
EN(){var x=0,w=A.j(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.c(s.rj(),$async$EN)
case 8:x=7
return A.c(m.eM(l.cW(k.cR(e,"storage",null,null,null,null)),y.A),$async$EN)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.f.ak(A.dV(r.quota))
p=C.f.ak(A.dV(r.usage))
v=new A.auW(q,p)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EN,w)},
bm6(){var x=y.K
A.Hg(this.rj().bK(new B.b7S(),x),x)},
ri(d,e){var x=A.jX(d[e])
x=x==null?null:C.f.ak(x)
return x==null?0:x},
bjs(d,e,f){return this.uD(new B.b7R(this,d,e,f),y.C)},
galW(){var x,w
try{x=A.ku(b.G.sessionStorage)
return x}catch(w){return null}},
gaty(){var x=A.ep(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
aa6(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.ep(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gaty())return!1
l=A.ep(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cW(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.S(x.userAgent)
l=A.jX(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.q(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.aB("iPad|iPhone|iPod",!0,!1,!1)
if(!l.b.test(w))i=J.k(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.aB("Chrome/|Chromium/|Firefox/|Edg/",!0,!1,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.jX(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.galW()
l=l==null?f:A.q(A.cR(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.dX(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.ku(m.localStorage)
m=o
m=m==null?f:A.q(A.cR(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.dX(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
as5(){var x,w,v,u,t,s,r=null
try{x=this.galW()
if(x!=null)A.cR(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cW(x.location)
u=A.S(v.hash)
t=A.S(v.search)
s=A.bs(A.S(A.cW(x.document).baseURI),0,r).a2("tutor/").k(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cR(v,"replace",s+t+x,r,r,r)},
bjb(){var x,w=null,v=b.G,u=A.cW(v.history),t=A.jX(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cR(u,"back",w,w,w,w)
else{x=A.S(A.cW(v.document).baseURI)
A.cR(A.cW(v.location),"replace",A.bs(x,0,w).a2("./").k(0)+"#/",w,w,w)}},
aai(d,e,f,g,h){return this.uD(new B.b7W(this,e,d,f,h,g),y.H)},
aam(){return this.uD(new B.b7X(this),y.D)},
a4r(){var x=null,w=this.a
if(w!=null)A.cR(w,"cancelRecording",x,x,x,x)},
anm(d){var x,w,v=this,u=A.q(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.ri(d,"ms")
w=A.jX(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.KB(u,x,w,v.ri(d,"frames"),v.ri(d,"tokens"),v.ot(d,"retried"),v.ri(d,"encMs"),v.ri(d,"decMs"),v.ri(d,"featMs"))},
ajF(d){var x={}
x.words=d
return x},
awE(d,e){return this.uD(new B.b7Z(this,d,e),y._)},
boi(d,e){return this.uD(new B.b7Y(this,d,e),y._)},
Lm(d,e){return this.bmc(d,e)},
bmc(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Lm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.c(s.rj(),$async$Lm)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.aj(d).i("av<1,o>")
o=A.a9(new A.av(d,new B.b7T(),o),o.i("aV.E"))
x=11
return A.c(A.eM(A.cW(A.cR(r,"play",o,e,null,null)),y.y),$async$Lm)
case 11:q=g
v=q
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Lm,w)},
MZ(){var x=null,w=this.a
if(w!=null)A.cR(w,"stopPlayback",x,x,x,x)},
JS(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.S(A.cR(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
bns(){var x,w,v=null
try{x=this.a
if(x!=null)A.cR(x,"resetDevice",v,v,v,v)}catch(w){}},
a7G(d){var x=this.a
if(x!=null)A.cR(x,"prefetch",d,null,null,null)}}
B.Wu.prototype={}
B.Kz.prototype={
gn7(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.n(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.KB.prototype={
gTD(){var x=this,w=C.f.aB(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.KA.prototype={}
B.lI.prototype={
gl9(){var x,w=this.a
A:{if("mic_denied"===w){x="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0645\u0634 \u0633\u0627\u0645\u062d \u0644\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643. \u0627\u0641\u062a\u062d \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639 (\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0642\u0641\u0644 \u062c\u0646\u0628 \u0627\u0644\u0639\u0646\u0648\u0627\u0646) \u0648\u0627\u0633\u0645\u062d \u0628\u0627\u0644\u0645\u064a\u0643\u0631\u0648\u0641\u0648\u0646\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("no_mic"===w){x="\u0645\u0634 \u0644\u0627\u0642\u064a\u064a\u0646 \u0645\u0627\u064a\u0643 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647."
break A}if("mic_busy"===w){x="\u0627\u0644\u0645\u0627\u064a\u0643 \u0645\u0634\u063a\u0648\u0644 \u0641\u064a \u062a\u0637\u0628\u064a\u0642 \u062a\u0627\u0646\u064a (\u0645\u0643\u0627\u0644\u0645\u0629 \u0623\u0648 \u062a\u0633\u062c\u064a\u0644) \u2014 \u0627\u0642\u0641\u0644\u0647 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("insecure"===w){x="\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https."
break A}if("unsupported"===w){x="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0623\u0648 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome \u0623\u0648 Safari."
break A}if("network"===w){x="\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("memory"===w){x="\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629 \u0644\u0644\u0645\u062d\u0641\u0651\u0638. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}if("decode"===w){x="\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0642\u0631\u0627 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u2014 \u062c\u0631\u0651\u0628 \u062a\u0633\u062c\u0651\u0644 \u062a\u0627\u0646\u064a."
break A}x="\u062d\u0635\u0644\u062a \u0645\u0634\u0643\u0644\u0629 \u0641\u064a \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
break A}return x},
k(d){return"TutorError("+this.a+": "+this.b+")"},
$ibN:1}
B.nO.prototype={
S(){return"WordStatus."+this.b}}
B.Tz.prototype={}
B.n6.prototype={
k(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Ja.prototype={
gMX(){var x,w=this,v=w.d
if(v===$){x=new B.aYR(w).$0()
w.d!==$&&A.ap()
w.d=x
v=x}return v},
gKb(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
if(u.d===D.a4v&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gbkk(){return J.h_(this.gMX(),new B.aYQ()).gN(0)},
gtF(){var x=this.a
return x.length!==0&&this.gbkk()===x.length&&this.gKb().length===0}}
B.FX.prototype={
S(){return"AyahStatus."+this.b}}
B.rG.prototype={}
B.akN.prototype={
a7h(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.rw():x},
b1j(d){var x=this,w=B.b81(d),v=x.c
if(v===w)return
v=v!=null&&v===B.cnB(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
arf(){var x=Date.now(),w=B.b81(new A.aP(x,0,!1))
x=this.c
return x===w||x===B.cnB(w)?this.d:0},
avF(d,e,f,g){var x=this,w=new A.aP(Date.now(),0,!1),v=x.a7h(d,e),u=g?C.j.d1(v.b+1,0,100):0,t=g&&u>=f?D.fh:D.pH,s=new B.rG(t,u,w.h5()),r=d*1000+e
x.a.p(0,r,s)
x.b.E(0,r)
x.b1j(w)
return s},
a79(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.cX[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.rw():s).a===D.fh)++u}return u},
bj9(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.cX[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.rw():s).a===D.pH)++u}return u},
gauF(){var x=this.a,w=A.y(x).i("c5<2>")
return new A.ah(new A.c5(x,w),new B.b82(),w.i("ah<X.E>")).gN(0)},
gaAi(){var x=this.a,w=A.y(x).i("bQ<1>")
w=A.my(new A.bQ(x,w),new B.b83(),w.i("X.E"),y.S)
w=A.eI(w,A.y(w).i("X.E"))
x=A.a9(w,A.y(w).c)
C.b.lf(x)
return x},
dq(){var x,w,v,u,t,s=this,r=y.N,q=A.D(r,y.L)
for(x=s.a,x=new A.eB(x,A.y(x).i("eB<1,2>")).ga0(0),w=y.t;x.v();){v=x.d
u=v.a
t=v.b
q.p(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a9(x,A.y(x).c)
return A.I(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
bf1(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.b6o(x,300,A.y(x).c),x=new A.Ke(J.ar(x.a),x.b,A.y(x).i("Ke<1>")),w=y.N,v=y.z,u=this.a;x.v();){t=x.gG()
s=C.j.aJ(t,1000)
t=C.j.a3(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.rw():q).a===D.fh?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.rw()
r=u.h(0,r)
o.push(A.I(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.rw():r).c.iE()],w,v))}return o},
bjK(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.L)(d),++u){t=d[u]
s=A.ez(t.h(0,"surah"))*1000+A.ez(t.h(0,"ayah"))
r=w.h(0,C.j.aJ(s,1000)*1000+C.j.a3(s,1000))
if((r==null?$.rw():r).c.iE()===t.h(0,"updated_at"))v.L(0,s)}},
bjS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.ar(d),w=this.b,v=this.a,u=y.f,t=!1;x.v();){s=x.gG()
if(!u.b(s))continue
r=A.as(s.h(0,"surah"))
q=r==null?null:C.f.bB(r)
r=A.as(s.h(0,"ayah"))
p=r==null?null:C.f.bB(r)
o=A.dF(A.n(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=H.cX[q-1].a[1])
if(r)continue
n=B.cLn(s.h(0,"status"))
if(n===D.pG)continue
r=q*1000+p
m=v.h(0,r)
if(m!=null){l=m.c
k=o.a
j=l.a
if(k<=j)l=k===j&&o.b>l.b
else l=!0
l=!l}else l=!1
if(l)continue
l=A.as(s.h(0,"perfect_count"))
l=l==null?null:C.f.bB(l)
v.p(0,r,new B.rG(n,C.j.d1(l==null?0:l,0,100),o.h5()))
w.L(0,r)
t=!0}return t}}
B.Ws.prototype={
JA(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Ws(w,v,u,t,f==null?x.e:f)},
bde(d){var x=null
return this.JA(x,x,d,x,x)},
aqK(d){var x=null
return this.JA(x,d,x,x,x)},
bdi(d){var x=null
return this.JA(x,x,x,x,d)},
bcC(d){var x=null
return this.JA(d,x,x,x,x)},
bdf(d){var x=null
return this.JA(x,x,x,d,x)},
dq(){var x=this
return A.I(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Ia.prototype={
S(){return"ModelState."+this.b}}
B.Wt.prototype={
vQ(){var x=this.Q
return x==null?this.Q=new B.b84(this).$0():x},
qS(d){return this.ayv(d)},
ayv(d){var x=0,w=A.j(y.H),v=this
var $async$qS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:v.b=d
v.a5()
x=2
return A.c(A.iq("mt.tutor.settings",C.aq.hl(d.dq(),null)),$async$qS)
case 2:return A.h(null,w)}})
return A.i($async$qS,w)},
A4(){var x=0,w=A.j(y.H),v=this,u
var $async$A4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.a5()
x=2
return A.c(A.iq("mt.tutor.progress",C.aq.hl(v.c.dq(),null)),$async$A4)
case 2:u=v.as
if(u!=null)u.av()
v.as=A.cS(C.w,v.gaFn())
return A.h(null,w)}})
return A.i($async$A4,w)},
MH(d,e,f){return this.azi(d,e,f)},
azi(d,e,f){var x=0,w=A.j(y.H),v=this
var $async$MH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v.z=new A.aY(d,e,f)
x=2
return A.c(A.iq("mt.tutor.last",C.aq.hl(A.I(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$MH)
case 2:return A.h(null,w)}})
return A.i($async$MH,w)},
Du(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Du=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.VV||n===D.k9){x=1
break}s.f=D.VV
s.y=null
s.a5()
u=4
n=A.lJ().geK().h(0,"tutor_device")
if(n==null)n="auto"
p=A.lJ().geK().h(0,"tutor_threads")
p=A.dX(p==null?"":p,null)
if(p==null)p=0
x=7
return A.c(s.a.bjs(new B.b85(s),n,p),$async$Du)
case 7:s.x=e
s.f=D.k9
n=A.lJ().geK().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.rr().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.a8(m)
if(n instanceof B.lI){q=n
s.f=D.aUR
s.y=q
n=A.lJ().geK().h(0,"debug")
if(n==="1")A.rr().$1("[tutor] model failed: "+A.n(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.a5()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Du,w)},
wO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$wO=A.e(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.C().b
k===$&&A.b()
k=k.ga4().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.C().b
k===$&&A.b()
p=k
x=7
return A.c(p.aQ("quran_tutor_progress").d9("surah, ayah, status, perfect_count, updated_at"),$async$wO)
case 7:o=a1
n=r.c.bjS(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.bf1()
if(J.aM(l)===0){x=10
break}h=p
g=A.I(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.A(0,A.ng(h.x,k,k))
x=11
return A.c(f.bnR("quran_tutor_save",!1,g,i),$async$wO)
case 11:r.c.bjK(l)
case 9:++m
x=8
break
case 10:x=12
return A.c(A.iq("mt.tutor.progress",C.aq.hl(r.c.dq(),null)),$async$wO)
case 12:if(n)r.a5()
s.push(6)
x=5
break
case 4:u=3
e=t.pop()
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
r.at=!1
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wO,w)},
LD(d){return this.bnu(d)},
bnu(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$LD=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.cen(t.c.dq()).dq()
y.f.a(p.h(0,"rows")).en(0,new B.b86(d))
t.c=B.cen(p)
x=2
return A.c(t.A4(),$async$LD)
case 2:v=4
s=$.C().b
s===$&&A.b()
r=s.ga4().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.c(s.ar("quran_tutor_reset",A.I(["p_surah",d],y.N,r),r),$async$LD)
case 9:case 8:v=1
x=6
break
case 4:v=3
o=u.pop()
x=6
break
case 3:x=1
break
case 6:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$LD,w)}}
B.xc.prototype={
O(){var x=$.NH()
return new B.a17(x,new A.ae(C.F,$.U()))}}
B.a17.prototype={
W(){var x,w,v=this
v.Z()
x=v.d
x.ab(v.goF())
w=y.a
x.vQ().bK(new B.bOs(v),w)
G.aXh().bK(new B.bOt(v),w).ff(new B.bOu())
A.Hg(G.cdJ(),y.y)},
y6(){if(this.c!=null)this.j(new B.bOe())},
m(){var x,w=this
w.d.U(w.goF())
x=w.e
x.q$=$.U()
x.M$=0
w.a1()},
Qu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.c(s.qS(s.b.bde(!0)),$async$Qu)
case 3:t=s.a
t.bm6()
if(t.aa6()){t.as5()
x=1
break}s.Du()
case 1:return A.h(v,w)}})
return A.i($async$Qu,w)},
y7(d,e,f){return this.aZX(d,e,f)},
b8g(d){return this.y7(d,null,null)},
aZX(d,e,f){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$y7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.H(y.q).f.Y(A.aC(null,null,null,null,null,C.m,null,A.d("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null,null),null,C.w,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.V(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.c(B.cPf(s,d),$async$y7)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.c(u.d.MH(d,t.a,t.b),$async$y7)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.c(A.O(s,!1).aD(A.aH(new B.bOk(u,d,t),null,r),r),$async$y7)
case 8:if(u.c!=null)u.j(new B.bOl())
case 1:return A.h(v,w)}})
return A.i($async$y7,w)},
t(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gaty()&&!A.O(d,!1).vm())u.push(A.bP(x,x,x,x,C.z8,x,x,t.gbja(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.bP(x,x,x,x,D.auU,x,x,new B.bOo(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.bP(x,x,x,x,C.iA,x,x,new B.bOp(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.aIf
else w=t?this.aUJ():this.aVi()
return L.xZ(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aVi(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.a44
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.b9e,C.V],x)
for(t=0;t<4;++t){s=D.aKx[t]
u.push(new A.A(C.by,A.z(A.a([A.aX(s.a,C.au,p,18),C.N,new A.bT(1,C.af,A.d(s.b,p,p,p,p,p,C.p1,p,p,p),p)],x),C.r,C.d,C.e,0,p,p),p))}u=A.J(u,C.r,C.d,C.e,0,C.l)
s=A.a([D.brX,C.I,A.d("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.bp(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,C.aP,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.bp(C.f.ak(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629"
C.b.A(s,A.a([C.I,A.d(q,p,p,p,p,p,A.bC(p,p,r?D.dT:C.bu,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.A(s,A.a([C.I,D.bAA],x))
x=A.a([new E.dG(u,C.a9,C.aO,p,!0,p),new E.dG(A.J(s,C.r,C.d,C.e,0,C.l),C.a9,C.aO,p,!1,p),D.bK_,C.I],x)
if(v!=null)x.push(new E.dG(A.d(v,p,p,p,p,p,D.bkS,p,p,p),C.a9,C.aO,p,!1,p))
else x.push(A.fm(D.arA,p,D.bCI,this.gb_f(),A.el(C.x,C.ah,D.bc5,p,p,p,p)))
x.push(C.a6)
x.push(D.a40)
return x},
aUJ(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.K(r.a.a),p=q.length===0,o=p?C.t_:G.csp(q),n=t.z,m=A.R(v.amD(C.dg,E.bp(s.gauF())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.bp(s.arf()),k=s.c,j=Date.now()
k=k===B.b81(new A.aP(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Ib(t,!1,u),A.z(A.a([m,C.N,A.R(v.amD(C.lt,l+" \u064a\u0648\u0645",k),1)],j),C.h,C.d,C.e,0,u,u),C.v],j)
if(n!=null){t=G.kw(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.bp(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.bp(m)+"\u2013"+E.bp(l)
k.push(new E.dG(A.z(A.a([D.atU,C.a0,A.R(A.J(A.a([D.bmR,A.d(t+" \u2014 "+m,u,u,u,u,u,I.bF,u,u,u)],j),C.r,C.d,C.e,0,C.l),1),M.nX],j),C.h,C.d,C.e,0,u,u),C.a9,C.aO,new B.bOh(v,n),!0,u))}t=C.i.ae(0.08)
k.push(A.ay(u,C.o,!1,u,!0,C.m,u,A.az(),r,u,u,u,u,u,2,A.cK(u,new A.cp(4,A.u(14),C.J),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pa,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.rk,u,u,u,u,u,u,u,u,u,u,u,u),C.q,!0,u,!0,u,!1,u,C.D,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bOi(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.d2,!0,C.u,u,C.E,u,u,u,u))
k.push(C.v)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.bwB)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.L)(o),++x)t.push(v.RU(o[x]))
C.b.A(k,t)}else{t=A.a([D.aXT,D.aZ0,v.RU(1)],j)
for(w=114;w>=78;--w)t.push(v.RU(w))
t.push(C.I)
r=v.f
p=A.aX(r?C.yL:C.lr,C.au,u,u)
t.push(A.eY(p,u,A.d(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.f9,u,u,u),new B.bOj(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.RU(w))
C.b.A(k,t)}k.push(C.V)
k.push(D.CK)
return k},
amD(d,e,f){var x=null,w=y.p
return new E.dG(A.z(A.a([A.aX(d,C.x,x,x),C.N,A.R(A.J(A.a([A.d(e,x,x,x,x,x,I.bF,x,x,x),A.d(f,x,1,C.O,x,x,C.hp,x,x,x)],w),C.r,C.d,C.e,0,C.l),1)],w),C.h,C.d,C.e,0,x,x),C.a9,C.G,x,!1,x)},
RU(d){var x,w=null,v=this.d.c,u=H.cX[d-1].a[1],t=v.a79(d),s=t/u,r=y.p,q=A.am(A.dA(C.P,A.a([A.cc2(C.et,F.cU,w,w,w,w,w,3,s,w),A.d(E.bp(d),w,w,w,w,w,C.mk,w,w,w)],r),C.m,C.bo,w),36,36),p=A.d(G.kw(d),w,w,w,w,w,C.a2j,w,w,w)
if(t===0)x=E.bp(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627":"\u062d\u0641\u0638\u062a "+E.bp(t)+" \u0645\u0646 "+E.bp(u)
r=A.a([q,C.cr,A.R(A.J(A.a([p,A.d(x,w,w,w,w,w,A.bC(w,w,t===u?F.cU:C.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.r,C.d,C.e,0,C.l),1)],r)
if(s>0&&s<1)r.push(A.d(E.bp(C.f.ak(s*100))+"\u066a",w,w,w,w,w,D.a2K,w,w,w))
r.push(D.arI)
return new E.dG(A.z(r,C.h,C.d,C.e,0,w,w),C.qC,C.d4,new B.bOm(this,d),!1,w)}}
B.Ib.prototype={
t(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.b2
return D.aZ_
case 3:x=q.y
x=A.a([A.d(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.NB(x),r,r,r,r,r,D.BZ,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.DS(w,"model load",r))
x.push(C.I)
x.push(A.cjx(C.mr,r,q.gbjr()))
return new E.dG(A.J(x,C.r,C.d,C.e,0,C.l),C.a9,C.aO,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.f.d1(u/v,0,1):r
s=q&&u<v
q=A.d(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.bp(C.f.ak(u/1e6))+" \u0645\u0646 "+E.bp(C.f.ak(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.ib,r,r,r)
x=A.u(8)
w=y.p
x=A.a([q,C.A,A.f5(x,A.qo(C.et,C.x,7,s?t:r,r),C.az)],w)
if(!this.d)C.b.A(x,A.a([C.I,D.brW],w))
return new E.dG(A.J(x,C.r,C.d,C.e,0,C.l),C.a9,C.aO,r,!1,r)}}}
B.YS.prototype={
t(d){var x=null,w=D.dT.ae(0.1),v=A.u(14),u=A.aJ(D.dT.ae(0.4),1)
return A.E(x,A.z(A.a([D.atw,C.N,A.R(A.d(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,C.p1,x,x,x),1)],y.p),C.r,C.d,C.e,0,x,x),C.k,x,x,new A.G(w,x,u,v,x,x,x,C.n),x,x,x,C.aO,C.ae,x,x,x)}}
B.ET.prototype={
S(){return"_Phase."+this.b}}
B.DR.prototype={
O(){return new B.a3G($.NH(),D.mJ)}}
B.a3G.prototype={
gjf(){var x=this.e
return x===$?this.e=this.a.d:x},
gC5(){var x,w=this.a,v=w.f
w=w.c
x=this.gjf()
return G.Nz(w,x,v.yi(w,x)).b},
W(){var x,w=this
w.Z()
x=w.d
x.ab(w.goF())
x.vQ()
x.a.a7G(B.aBv(w.a.c,w.gjf()))},
y6(){if(this.c!=null)this.j(new B.c1f())},
m(){var x,w=this,v=w.d
v.U(w.goF())
x=w.Q
if(x!=null)x.av()
v=v.a
v.MZ()
v.a4r()
w.a1()},
a_Y(d){var x,w,v=this
if(v.f===D.vn)v.d.a.a4r()
x=v.d.a
x.MZ()
w=v.Q
if(w!=null)w.av()
v.j(new B.c1v(v,d))
x.a7G(B.aBv(v.a.c,d))
w=v.a
if(d<w.e)x.a7G(B.aBv(w.c,d+1))},
Sa(d){return this.aWa(d)},
aWa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Sa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.f===D.vm){u.d.a.MZ()
u.j(new B.c1z(u))
x=1
break}t=u.r!=null?D.jk:D.mJ
u.j(new B.c1A(u))
s=u.d
r=A.a([B.aBv(u.a.c,u.gjf())],y.s)
q=d==null?s.b.b:d
x=3
return A.c(s.a.Lm(r,q),$async$Sa)
case 3:p=f
if(u.c==null||u.f!==D.vm){x=1
break}u.j(new B.c1B(u,t,p))
case 1:return A.h(v,w)}})
return A.i($async$Sa,w)},
QU(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$QU=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.k9){x=1
break}p=l.a
p.MZ()
r=B.FC(s.gC5()).length
s.j(new B.c1D(s))
o=s.Q
if(o!=null)o.av()
s.Q=A.hf(C.eU,new B.c1E(s))
u=4
o=B.cgb(r)
n=A.du(0,0,0,350*r,0,0)
x=7
return A.c(p.aai(l.b.c,o,n,new B.c1F(s),new B.c1G(s)),$async$QU)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.a8(k)
if(l instanceof B.lI){q=l
l=s.Q
if(l!=null)l.av()
if(s.c!=null)s.j(new B.c1H(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QU,w)},
C_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$C_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.vn){x=1
break}m=s.Q
if(m!=null)m.av()
s.j(new B.c1J(s))
s.Q=A.hf(C.iu,new B.c1K(s))
l=new A.Di()
$.FG()
l.oo()
r=l
u=4
m=s.d.a
x=7
return A.c(m.aam(),$async$C_)
case 7:q=e
if(q.b<0.8){s.b8f("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.c(m.awE(q,B.FC(s.gC5()).length),$async$C_)
case 8:p=e
s.ch=A.du(0,0,r.ga5I(),0,0,0)
k=A.lJ().geK().h(0,"debug")
if(k==="1"){o=B.csF(m.JS())
A.rr().$1("[tutor] "+s.a.c+":"+s.gjf()+" audio="+C.f.aB(q.b,1)+"s infer="+p.b+"ms total="+r.gCQ()+"ms "+p.gTD()+" text="+p.a)
A.rr().$1("[tutor] stages: "+A.n(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.f.aB(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.f.aB(p.b/1000,2)+" \u062b\n"+p.gTD()+"\n"+A.n(o)+"\n"+p.a}s.agE(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.a8(i)
if(m instanceof B.lI){n=m
m=A.lJ().geK().h(0,"debug")
if(m==="1")A.rr().$1("[tutor] check failed: "+A.n(n)+"\n"+s.d.a.JS())
s.a3f(B.NB(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$C_,w)},
a3f(d,e){var x=this,w=x.Q
if(w!=null)w.av()
if(x.c==null)return
x.j(new B.c1u(x,d,e))},
b8f(d){return this.a3f(d,null)},
agE(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.av()
if(s.c==null)return
x=B.cqG(s.gC5(),d)
r.a=null
if(C.c.K(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gjf()
t=x.gtF()
r.a=w.avF(v,u,q.b.a,t)
q.A4()}s.j(new B.c1w(r,s,x))},
Ou(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Ou=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.k9){x=1
break}s.j(new B.c1n(s))
l=s.Q
if(l!=null)l.av()
s.Q=A.hf(C.iu,new B.c1o(s))
k=new A.Di()
$.FG()
k.oo()
r=k
u=4
l=g.a
x=7
return A.c(l.boi(B.aBv(s.a.c,s.gjf()),B.FC(s.gC5()).length),$async$Ou)
case 7:q=e
p=B.csF(l.JS())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.f.aB(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.f.aB(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.f.aB(r.gCQ()/1000,2)+" \u062b)\n"+q.gTD()+"\n"+A.n(p)+"\n"+q.a
A.rr().$1("[tutor-debug] "+s.a.c+":"+s.gjf()+" audio="+C.f.aB(q.c,1)+"s infer="+q.b+"ms total="+r.gCQ()+"ms "+q.gTD()+" text="+q.a)
A.rr().$1("[tutor-debug] stages: "+A.n(p))
s.ch=A.du(0,0,r.ga5I(),0,0,0)
s.agE(q.a)
n=s.r
if(n!=null){l=n.gtF()
j=n.b
i=A.aj(j).i("ah<1>")
j=A.a9(new A.ah(j,new B.c1p(),i),i.i("X.E"))
A.rr().$1("[tutor-debug] perfect="+l+" ops="+A.n(j))}s.j(new B.c1q(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.a8(f)
if(l instanceof B.lI){m=l
A.rr().$1("[tutor-debug] failed: "+A.n(m)+"\n"+g.a.JS())
s.a3f(B.NB(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ou,w)},
ga1Y(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.rw():v).a!==D.fh)return!1}return!0},
t(d){var x,w=this,v=null,u=w.d,t=u.c.a7h(w.a.c,w.gjf()),s=u.b,r=s.d&&!w.x&&w.f!==D.jk,q=G.kw(w.a.c),p=y.p,o=A.a([A.bP(v,v,v,v,C.iA,v,v,new B.c1P(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.aMq(),m=A.d("\u0622\u064a\u0629 "+E.bp(w.gjf()),v,v,v,v,v,C.kw,v,v,v),l=E.bp(w.gjf()-w.a.d+1),k=w.a
s=A.a([A.z(A.a([m,C.aY,A.d("("+l+" \u0645\u0646 "+E.bp(k.e-k.d+1)+")",v,v,v,v,v,C.aP,v,v,v),C.bE,w.b03(t,s.a)],p),C.h,C.d,C.e,0,v,v),C.v],p)
if(r)s.push(w.aUE())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.vn&&l!==D.px}else l=!1
if(l)s.push(w.aK3(m))
else s.push(A.d(w.gC5()+" \ufd3f"+E.bp(w.gjf())+"\ufd3e",v,v,v,v,v,D.kx,C.X,C.bb,v))}s=A.a([new B.Ib(u,!0,v),n,C.A,new E.dG(A.J(s,C.aa,C.d,C.e,0,C.l),D.akp,C.aO,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.jk)s.push(w.b9K(n))
if(w.r!=null&&w.f===D.jk&&w.ch!=null){x=C.f.ak(C.j.aJ(w.ch.a,1000)/100)
s.push(new A.A(C.by,A.d("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.bp(C.j.aJ(x,10))+"\u066b"+E.bp(C.j.a3(x,10)))+" \u062b",v,v,v,v,v,C.aP,C.X,v,v),v))}n=w.as
if(n!=null)s.push(new A.A(C.aO,A.d(n,v,v,v,v,v,D.BZ,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.DS(n,"check "+w.a.c+":"+w.gjf(),v))}s.push(w.aKE())
s.push(C.V)
s.push(A.iA(C.x,C.G,v,new B.c1Q(w),D.boT,D.bwQ,u.b.d))
n=w.a
if(n.e>n.d){n=w.ga1Y()
s.push(new E.dG(A.z(A.a([D.aq9,C.a0,A.R(A.J(A.a([D.byN,A.d(w.ga1Y()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,C.aP,v,v,v)],p),C.r,C.d,C.e,0,C.l),1),M.nX],p),C.h,C.d,C.e,0,v,v),C.a9,C.aO,new B.c1R(w,d),n,v))}n=A.lJ().geK().h(0,"debug")
if(n==="1"){p=A.a([C.A,A.d7(D.arz,D.btM,u.f===D.k9&&w.f!==D.px?w.gaLn():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.A(C.fZ,A.p1(n,C.aP,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gn7()
u=u.x
p.push(A.d("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,C.aP,v,v,v))}p.push(A.b1(D.bqS,v,v,v,new B.c1S(w,d),v,v))
C.b.A(s,p)}s.push(C.A)
s.push(D.CK)
return L.xZ(o,s,q)},
aMq(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.b2
return A.am(A.fn(new B.c1s(this),w,null,C.ag,new B.c1t()),36,null)},
b03(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.fh)return D.b9h
x=d.b
w=E.bp(x)
v=E.bp(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.c2:C.ra
u.push(new A.A(D.ala,A.aX(r,s?F.cU:C.eu,q,16),q))}return A.Kt(A.z(u,C.h,C.d,C.H,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aUE(){var x=null
return A.bu(!1,A.u(12),!0,A.E(x,D.agb,C.k,x,x,new A.G(C.q6,x,x,A.u(12),x,x,x,C.n),x,x,x,x,D.ajX,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.c1y(this),x,x,x,x,x,x,x)},
aK3(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.at(d.gMX(),w)
A:{if(D.jd===v){u=D.kx.cv(F.cU)
break A}if(D.v6===v){u=D.kx.a53(D.dT,C.fG,D.dT)
break A}if(D.v7===v){u=D.kx.a53(D.eQ,C.fG,D.eQ)
break A}u=D.kx.a53(C.eu,C.j6,C.bu)
break A}t=x[w]
r.push(new A.eT(t.a,s,s,C.bz,s,s,s,s,s,s,u))
r.push(O.BW)}x=E.bp(this.gjf())
r.push(A.ex(s,s,s,s,s,s,s,s,s,D.kx.cv(C.au),"\ufd3f"+x+"\ufd3e"))
return A.Dv(A.ex(r,s,s,s,s,s,s,s,s,s,s),s,s,s,C.X,C.bb)},
b9K(d){var x,w,v,u,t,s,r=this.w
if(C.c.K(d.c).length===0)return D.bJn
if(d.gtF()){x=r==null
if((x?null:r.a)===D.fh&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.fh?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.bp(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.E8(F.cU,C.c2,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647",x,null)}x=d.gMX()
w=J.dJ(x)
v=w.io(x,new B.c1L()).gN(0)
u=w.io(x,new B.c1M()).gN(0)
t=w.io(x,new B.c1N()).gN(0)
x=A.a([],y.s)
if(u>0)x.push(E.bp(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.bp(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.bp(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gKb().length!==0)x.push(E.bp(d.gKb().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.eQ:D.dT
x=C.b.aq(x," \u2022 ")
s=d.gKb().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aq(d.gKb(),"\u060c "):""
return new B.E8(w,C.nL,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
aKE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.k9,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.j.aJ(new A.aP(f,0,!1).dB(w).a,1e6)}v=C.j.aJ(B.cgb(B.FC(j.gC5()).length).a,1e6)
f=j.gb6P()
w=96+26*j.y
u=D.eQ.ae(0.25)
w=A.hS(i,A.a6y(C.P,A.E(i,D.arM,C.k,i,i,D.a81,i,84,i,i,i,i,i,84),i,C.aX,new A.G(u,i,i,i,i,i,i,C.bY),C.FK,i,w,i,w),C.q,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i,!1,C.cx)
u=A.d("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.cf5(x)+" / "+B.cf5(v),i,i,i,i,i,K.p8,i,i,i)
return A.J(A.a([w,C.A,u,A.d(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,C.aP,i,i,i),A.b1(D.bvh,i,i,i,f,i,i)],y.p),C.h,C.d,C.e,0,C.l)
case 3:t=C.f.eE((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.bp(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.bp(t)+" \u062b)"
return new A.A(C.qx,A.J(A.a([C.wf,C.V,D.bzT,A.d(h,i,i,i,i,i,C.aP,C.X,i,i)],y.p),C.h,C.d,C.e,0,C.l),i)
default:s=f===D.vm
r=j.r
f=r==null
w=!f
q=w&&r.gtF()
u=A.aX(s?C.nM:K.Ij,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.d(p,i,i,i,i,i,i,i,i,i)
o=A.el(i,i,D.bc2,i,i,i,i)
u=A.R(new A.Ao(C.a4Q,!0,new B.c1g(j,r,q),i,i,i,o,C.k,i,!1,i,!0,i,new A.Zw(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.K5[n]
p.push(new A.eh(m,i,A.d("\xd7"+E.bp(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.z(A.a([u,C.N,A.nE(new B.c1h(j),p,A.dg([h.b.b],o),!1,A.kz(i,i,i,new A.bf(new B.c1i(),l),i,i,i,i,new A.bf(new B.c1j(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.cS),o)],k),C.h,C.d,C.e,0,i,i)
h=g&&!s?j.gb2a():i
u=A.aX(f?D.r5:C.nL,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.d(f,i,i,i,i,i,C.cj,i,i,i)
p=q?C.ir:C.x
h=A.a([o,C.v,A.fm(u,i,f,h,A.el(p,q?C.i:C.ah,D.un,i,i,i,i))],k)
if(w&&j.gjf()<j.a.e)C.b.A(h,A.a([C.A,q?A.fm(D.ave,i,D.bqT,new B.c1k(j),A.el(F.cU,C.ah,D.un,i,i,i,i)):A.b1(D.bps,i,i,i,new B.c1l(j),i,i)],k))
if(w){f=j.gjf()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.A(C.hN,A.d(j.ga1Y()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,C.p7,C.X,i,i),i))
return A.J(h,C.aa,C.d,C.e,0,C.l)}}}
B.E8.prototype={
t(d){var x=this,w=null,v=x.c,u=v.ae(0.12),t=A.u(14),s=A.aJ(v.ae(0.5),1),r=y.p
return A.E(w,A.z(A.a([A.aX(x.d,v,w,w),C.N,A.R(A.J(A.a([A.d(x.e,w,w,w,w,w,A.bC(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.bL,A.d(x.f,w,w,w,w,w,C.p1,w,w,w)],r),C.r,C.d,C.e,0,C.l),1)],r),C.r,C.d,C.e,0,w,w),C.k,w,w,new A.G(u,w,s,t,w,w,w,C.n),w,w,w,C.aO,C.ae,w,w,w)}}
B.DQ.prototype={
O(){var x=y.S
return new B.a3F($.NH(),A.D(x,y.B),A.aN(x),A.D(x,y.N),A.es(null,y.H))}}
B.a3F.prototype={
W(){this.Z()
this.d.ab(this.goF())},
y6(){if(this.c!=null)this.j(new B.c0Z())},
m(){var x,w=this,v=w.d
v.U(w.goF())
x=w.y
if(x!=null)x.av()
v.a.a4r()
w.a1()},
IG(d){return this.b6y(d)},
b6y(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$IG=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.j(new B.c17(t,d))
r=t.y
if(r!=null)r.av()
t.y=A.hf(C.eU,new B.c18(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.cgb(B.FC(G.Nz(q,d,p.yi(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.du(0,0,0,350*B.FC(G.Nz(p,d,o.yi(p,d)).b).length,0,0)
x=6
return A.c(r.a.aai(r.b.c,q,p,new B.c19(t,d),new B.c1a(t)),$async$IG)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.a8(m)
if(r instanceof B.lI){s=r
r=t.y
if(r!=null)r.av()
if(t.c!=null)t.j(new B.c1b(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$IG,w)},
G0(d,e){return this.aNG(d,e)},
aNG(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$G0=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.av()
s.j(new B.c12(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.aam()
if(e&&n!=null)s.IG(n)
q=null
u=4
x=7
return A.c(r,$async$G0)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a8(l)
if(o instanceof B.lI){p=o
s.j(new B.c13(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bK(new B.c14(s,o,d),y.H)}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$G0,w)},
gaYp(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aF(x)&&!v.n(0,x)&&!u.aF(x)&&x!==t.e)return x
return null},
b35(){this.j(new B.c15(this))},
t(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.k9,o=s.e,n=s.gaYp(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.y(m).i("c5<2>")
x=new A.ah(new A.c5(m,l),new B.c1c(),l.i("ah<X.E>")).gN(0)
l=G.kw(s.a.c)
m=y.p
q=A.a([new B.Ib(q,!0,r),A.d("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.bp(s.a.d)+" \u0644\u062d\u062f "+E.bp(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,C.aP,r,r,r),C.v],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.b8h(w))
q.push(C.A)
k=s.Q
if(k!=null)q.push(A.d(k,r,r,r,r,r,D.BZ,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.DS(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.bp(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.j.aJ(new A.aP(v,0,!1).dB(u).a,1e6)
v=u}v=A.d("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.cf5(v),r,r,r,r,r,K.p8,C.X,r,r)
j=A.f5(A.u(6),A.qo(C.et,D.eQ,6,s.x,r),C.az)
u=o<s.a.e
t=A.aX(u?Q.Id:C.nM,r,r,r)
C.b.A(q,A.a([v,C.I,j,C.v,A.fm(t,r,A.d(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cj,r,r,r),new B.c1d(s,o),A.el(C.x,C.ah,D.un,r,r,r,r))],m))}else if(n!=null){j=p?new B.c1e(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.bp(n)
q.push(A.fm(D.asZ,r,A.d(v,r,r,r,r,r,C.cj,r,r,r),j,A.el(C.x,C.ah,D.un,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aYw)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?F.cU:D.dT
v=k?C.nD:C.nL
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647\u060c \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.bp(x)
u=s.a
u=k+" \u0645\u0646 "+E.bp(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.A(q,A.a([new B.E8(j,v,k,u,r),A.d7(D.av3,D.bzZ,s.gb34(),r)],m))}q.push(C.v)
q.push(D.CK)
return L.xZ(r,q,"\u0633\u0645\u0651\u0639 "+l)},
b8h(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.asg
else if(l.r.n(0,d))x=N.uq
else if(i!=null)x=D.asy
else if(j!=null){w=j.gtF()?C.c2:D.aoH
x=A.aX(w,j.gtF()?F.cU:D.dT,k,k)}else x=D.aqT
w=y.p
v=A.a([A.z(A.a([A.d("\u0622\u064a\u0629 "+E.bp(d),k,k,k,k,k,C.a2a,k,k,k),C.bE,x],w),C.h,C.d,C.e,0,k,k)],w)
if(i!=null)v.push(A.d(i,k,k,k,k,k,D.a2v,k,k,k))
if(j!=null&&!j.gtF()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gMX()
o=J.bb(p)
n=o.h(p,r)
A:{if(D.jd===n){m=F.cU
break A}if(D.v6===n){m=D.dT
break A}if(D.v7===n){m=D.eQ
break A}m=C.eu
break A}m=D.kx.bdU(m,o.h(p,r)===D.v8?C.j6:k,22)
C.b.A(t,A.a([new A.eT(q.a,k,k,C.bz,k,k,k,k,k,k,m),O.BW],u))}w=A.a([C.ak,A.Dv(A.ex(t,k,k,k,k,k,k,k,k,k,k),k,k,k,C.X,C.bb)],w)
if(C.c.K(j.c).length===0)w.push(D.bvr)
C.b.A(v,w)}return new E.dG(A.J(v,C.aa,C.d,C.e,0,C.l),C.bQ,C.d4,k,!1,k)}}
B.DP.prototype={
O(){return new B.a3E($.NH())}}
B.a3E.prototype={
W(){this.Z()
var x=this.d
x.ab(this.goF())
x.vQ()},
y6(){if(this.c!=null)this.j(new B.c0Q())},
m(){this.d.U(this.goF())
this.a1()},
t(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gaAi(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.ie(o,0,new B.c0X(q))
v=C.b.ie(o,0,new B.c0Y())
o=y.p
o=A.a([A.z(A.a([A.R(s.YO(E.bp(q.gauF()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.N,A.R(s.YO(E.bp(q.arf()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.N,A.R(s.YO(E.bp(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.h,C.d,C.e,0,r,r),C.v,new E.dG(A.J(A.a([A.d("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.bp(C.f.ak(w*100/v))+"\u066a",r,r,r,r,r,I.bF,r,r,r),C.I,A.f5(A.u(6),A.qo(C.et,F.cU,8,w/v,r),C.az),C.ak,A.d(E.bp(w)+" \u0645\u0646 "+E.bp(v)+" \u0622\u064a\u0629",r,r,r,r,r,C.aP,r,r,r)],o),C.r,C.d,C.e,0,C.l),C.a9,C.aO,r,!1,r)],o)
if(p.length===0)o.push(D.aYH)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.L)(p),++t)o.push(s.b8j(p[t]))
o.push(C.A)
u=$.C().b
u===$&&A.b()
u=u.ga4().e.a
o.push(A.d((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,C.aP,r,r,r))
return L.xZ(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
YO(d,e){var x=null
return new E.dG(A.J(A.a([A.d(d,x,x,x,x,x,D.bkY,x,x,x),A.d(e,x,x,x,x,x,C.fL,C.X,x,x)],y.p),C.h,C.d,C.e,0,C.l),C.a9,C.G,x,!1,x)},
b8j(d){var x=null,w=this.d.c,v=H.cX[d-1].a[1],u=w.a79(d),t=w.bj9(d),s=y.p,r=A.z(A.a([A.R(A.d(G.kw(d),x,x,x,x,x,I.bF,x,x,x),1),A.d(E.bp(C.f.ak(u*100/v))+"\u066a",x,x,x,x,x,D.bj5,x,x,x)],s),C.h,C.d,C.e,0,x,x),q=A.f5(A.u(6),A.qo(C.et,F.cU,7,u/v,x),C.az),p=E.bp(u),o=E.bp(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.bp(t):""
return new E.dG(A.J(A.a([r,C.I,q,C.ak,A.d("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,C.aP,x,x,x)],s),C.r,C.d,C.e,0,C.l),C.a9,C.aO,new B.c0W(this,d),!1,x)},
Ox(d){return this.aLJ(d)},
aLJ(d){var x=0,w=A.j(y.H),v=this,u,t
var $async$Ox=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=H.cX[d-1].a[1]
t=v.c
t.toString
x=2
return A.c(A.e4(C.cu,new B.c0V(v,d,u),t,!0,null,null,!1,y.H),$async$Ox)
case 2:return A.h(null,w)}})
return A.i($async$Ox,w)}}
B.akL.prototype={
S9(d,e){var x=null,w=A.jO(x,x,x,x,x,x,x,x,x,x,x,D.bbC,C.G,x,x,x,x,C.k8,x,x)
return A.b1(A.d(d,x,x,x,x,x,C.i9,x,x,x),x,x,x,new B.b7O(e),x,w)},
t(d){var x=this,w=y.p
return new E.dG(A.J(A.a([D.boX,C.I,D.bAz,A.cE(C.ap,A.a([x.S9("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.S9("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aw,0,12),D.bon,x.S9("tanzil.net","https://tanzil.net"),D.bC3,x.S9("everyayah.com","https://everyayah.com")],w),C.r,C.d,C.e,0,C.l),C.a9,C.aO,null,!1,null)}}
B.DS.prototype={
O(){return new B.a3H()}}
B.a3H.prototype={
gans(){var x=this.a
return B.cQA(x.c,x.d,$.cgO().JS())},
Sb(){var x=0,w=A.j(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Sb=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.j(new B.c1T(s))
v=3
r=A.caa()
n=s.gans()
m=y.N
q=A.D(m,m)
J.e_(q,"app","mogtama3y")
J.e_(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.a7(r,0,160):r
J.e_(q,"ua",m)}x=6
return A.c(A.ab9(n,null,C.GQ,q),$async$Sb)
case 6:if(s.c!=null)s.j(new B.c1U(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.a8(k)
o=p instanceof A.c6?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.j(new B.c1V(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.j(new B.c1W(s))
x=t.pop()
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$Sb,w)},
t(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.bu(!1,t,!0,new A.A(C.lc,A.z(A.a([A.aX(u.d?C.yL:C.lr,C.bu,t,18),C.bK,D.byG],s),C.h,C.d,C.e,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.c1Y(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.u(8)
s.push(A.E(t,A.p1(u.gans(),D.bgZ,t,C.z),C.k,t,t,new A.G(C.q6,t,t,x,t,t,t,C.n),t,t,t,D.ak_,C.eb,t,t,1/0))}if(u.f)s.push(D.buW)
else{x=A.jO(t,t,t,t,t,t,t,t,t,t,t,C.a18,C.G,t,t,t,t,C.k8,t,t)
w=u.e
v=w?t:u.gb8i()
s.push(A.eY(w?C.a1m:D.aun,t,D.buo,v,x))}x=u.r
if(x!=null)s.push(A.d(x,t,t,t,t,t,D.a2v,t,t,t))
return new A.A(C.aO,A.J(s,C.r,C.d,C.e,0,C.l),t)}}
var z=a.updateTypes(["al<~>()","~()","M(nO)","al<KB>()","al<Kz>()","al<KA>()","a6<nO>()","M(rG)","bH(oT)","DR(t)","DP(t)","M(n6)","DQ(t)","M(Ja)"])
B.b7P.prototype={
$0(){var x=0,w=A.j(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.S(A.cW(b.G.document).baseURI)
q=A.bs(r,0,null).a2("quran_tutor/tutor.js?v=3").k(0)
x=7
return A.c(A.eM(import(q),y.m),$async$$0)
case 7:p=e
s.a.a=p
v=p
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a8(l)
s.a.b=null
m=B.cFL("network",A.n(o))
throw A.r(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:257}
B.b7S.prototype={
$1(d){var x=null
return A.c4u(A.cR(d,"persist",x,x,x,x))},
$S:1159}
B.b7R.prototype={
$0(){var x=0,w=A.j(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.c(q.rj(),$async$$0)
case 4:x=3
return A.c(n.eM(m.cW(l.cR(e,"loadModel",A.c5c(new B.b7Q(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.q(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.q(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.ri(p,"ms")
r=q.ot(p,"cached")
A.q(p.backend)
v=new B.Kz(o,t,s,r,q.ri(p,"threads"),q.ot(p,"isolated"),q.ri(p,"warmMs"))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+4}
B.b7Q.prototype={
$2(d,e){this.a.$2(C.f.ak(d),C.f.ak(e))},
$S:1160}
B.b7W.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
x=s==null?2:3
break
case 2:x=4
return A.c(t.rj(),$async$$0)
case 4:s=e
case 3:u={}
u.maxMs=C.j.aJ(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.j.aJ(v.d.a,1000)
u.onLevel=A.fX(new B.b7U(v.e))
u.onAutoStop=A.fX(new B.b7V(v.f))
x=5
return A.c(A.eM(A.cW(A.cR(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.b7U.prototype={
$1(d){return this.a.$1(d)},
$S:72}
B.b7V.prototype={
$1(d){return this.a.$1(d)},
$S:4}
B.b7X.prototype={
$0(){var x=0,w=A.j(y.D),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.a
q=A
p=A
o=A
x=s==null?4:6
break
case 4:x=7
return A.c(t.rj(),$async$$0)
case 7:x=5
break
case 6:e=s
case 5:x=3
return A.c(q.eM(p.cW(o.cR(e,"stopRecording",null,null,null,null)),y.m),$async$$0)
case 3:r=e
v=new B.KA(r,A.dV(r.seconds))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+5}
B.b7Z.prototype={
$0(){var x=0,w=A.j(y._),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.b.a
s=u.a
r=s
q=A
p=A
o=A
x=4
return A.c(s.rj(),$async$$0)
case 4:x=3
return A.c(q.eM(p.cW(o.cR(e,"transcribe",t.audio,t.rate,s.ajF(u.c),null)),y.m),$async$$0)
case 3:v=r.anm(e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+3}
B.b7Y.prototype={
$0(){var x=0,w=A.j(y._),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
s=t
r=A
q=A
p=A
x=4
return A.c(t.rj(),$async$$0)
case 4:x=3
return A.c(r.eM(q.cW(p.cR(e,"transcribeUrl",u.b,t.ajF(u.c),null,null)),y.m),$async$$0)
case 3:v=s.anm(e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+3}
B.b7T.prototype={
$1(d){return d},
$S:35}
B.aYR.prototype={
$0(){var x,w,v,u,t=this.a,s=A.ch(t.a.length,D.v8,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aYQ.prototype={
$1(d){return d===D.jd},
$S:z+2}
B.c4W.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.cb8(e[x],d[x])<0.75)return!1
return!0},
$S:1161}
B.c71.prototype={
$1(d){return d.length!==0},
$S:10}
B.b82.prototype={
$1(d){return d.a===D.fh},
$S:z+7}
B.b83.prototype={
$1(d){return C.j.aJ(d,1000)},
$S:60}
B.b80.prototype={
$1(d){return C.f.bB(d)},
$S:1162}
B.b84.prototype={
$0(){var x=0,w=A.j(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(A.iJ("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.aq.f4(r,null))
j=A.as(k.h(0,"n"))
j=j==null?null:C.f.bB(j)
j=C.j.d1(j==null?2:j,1,5)
i=C.b.n(D.K5,k.h(0,"r"))?A.ez(k.h(0,"r")):1
h=A.ep(k.h(0,"auto"))
g=A.ep(k.h(0,"hide"))
k=A.ep(k.h(0,"in"))
s.a.b=new B.Ws(j,i,h!==!1,g===!0,k===!0)}u=2
x=6
break
case 4:u=3
e=t.pop()
x=6
break
case 3:x=2
break
case 6:u=9
x=12
return A.c(A.iJ("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.cen(y.P.a(C.aq.f4(q,null)))
u=2
x=11
break
case 9:u=8
d=t.pop()
x=11
break
case 8:x=2
break
case 11:u=14
x=17
return A.c(A.iJ("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.aq.f4(p,null))
n=C.f.bB(A.cT(J.at(o,"s")))
m=C.f.bB(A.cT(J.at(o,"f")))
l=C.f.bB(A.cT(J.at(o,"t")))
if(B.csK(n,m)&&B.csK(n,l)&&m<=l)s.a.z=new A.aY(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.aa6()){k.a.as5()
x=1
break}a1=k
x=18
return A.c(k.a.Nh(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.a5()
if(k.b.e)k.Du()
k.wO()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:115}
B.b85.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.a5()},
$S:1163}
B.b86.prototype={
$2(d,e){return C.j.aJ(A.eL(A.n(d),null,null),1000)===this.a},
$S:1164}
B.bOs.prototype={
$1(d){var x=0,w=A.j(y.a),v=this,u,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.c(u.d.a.EN(),$async$$1)
case 2:t=f
if(u.c!=null)u.j(new B.bOr(u,t))
return A.h(null,w)}})
return A.i($async$$1,w)},
$S:1165}
B.bOr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bOt.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.bOq(x,d))},
$S:z+8}
B.bOq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bOu.prototype={
$1(d){},
$S:20}
B.bOe.prototype={
$0(){},
$S:0}
B.bOk.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.DR(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bOl.prototype={
$0(){},
$S:0}
B.bOo.prototype={
$0(){var x=y.z
return A.O(this.a,!1).aD(A.aH(new B.bOn(),null,x),x)},
$S:0}
B.bOn.prototype={
$1(d){return D.bDq},
$S:z+10}
B.bOp.prototype={
$0(){return B.csw(this.a)},
$S:0}
B.bOh.prototype={
$0(){var x=this.b
return this.a.y7(x.a,x.b,x.c)},
$S:0}
B.bOi.prototype={
$1(d){return this.a.j(new B.bOg())},
$S:4}
B.bOg.prototype={
$0(){},
$S:0}
B.bOj.prototype={
$0(){var x=this.a
return x.j(new B.bOf(x))},
$S:0}
B.bOf.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bOm.prototype={
$0(){return this.a.b8g(this.b)},
$S:0}
B.c9O.prototype={
$1(d){return new A.ji(new B.c9L(this.a,this.b,this.c),null)},
$S:57}
B.c9L.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.c9N(u,e),s=this.a,r=new B.c9M(s,e),q=A.d(G.kw(this.c),v,v,v,v,v,C.i8,v,v,v),p=A.d("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.bp(u)+" \u0622\u064a\u0629)",v,v,v,v,v,C.aP,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.bp(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.bp(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.j.d1(w+4,1,u)))}u=A.a([q,C.ak,p,C.v,A.cE(C.ap,n,C.aw,6,8),C.A,A.z(A.a([t.$3("\u0645\u0646",s.b,new B.c9G(s)),C.a1j,t.$3("\u0644\u062d\u062f",s.c,new B.c9H(s))],o),C.h,C.d,C.e,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aYx)
u.push(C.a6)
u.push(A.d1(D.bzc,v,new B.c9I(s,d),A.el(C.x,C.ah,D.bc_,v,v,v,v)))
return A.cw(!0,new A.A(C.Gf,A.J(u,C.aa,C.d,C.H,0,C.l),v),C.G,!0)},
$S:284}
B.c9N.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.d(d,u,u,u,u,u,C.fL,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.c4(v,A.d("\u0622\u064a\u0629 "+E.bp(v),u,u,u,u,u,u,u,u,u),C.aj,u,w))
return A.R(A.J(A.a([t,P.GT(C.cu,!0,s,320,new B.c9K(this.b,f),D.bl9,e,y.S)],y.p),C.r,C.d,C.e,0,C.l),1)},
$S:1167}
B.c9K.prototype={
$1(d){return d==null?null:this.a.$1(new B.c9J(this.b,d))},
$S:52}
B.c9J.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.c9M.prototype={
$3(d,e,f){var x=null
return A.aCn(x,A.d(d,x,x,x,x,x,x,x,x,x),new B.c9F(this.a,this.b,e,f))},
$S:1168}
B.c9F.prototype={
$0(){var x=this
return x.b.$1(new B.c9E(x.a,x.c,x.d))},
$S:0}
B.c9E.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.c9G.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:15}
B.c9H.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:15}
B.c9I.prototype={
$0(){var x=this.a
return A.O(this.b,!1).ac(new A.V(x.b,x.c))},
$S:0}
B.c1f.prototype={
$0(){},
$S:0}
B.c1v.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.mJ
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.c1z.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.jk:D.mJ},
$S:0}
B.c1A.prototype={
$0(){var x=this.a
x.f=D.vm
x.as=null},
$S:0}
B.c1B.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.c1D.prototype={
$0(){var x=this.a
x.f=D.vn
x.as=null
x.y=0
x.z=new A.aP(Date.now(),0,!1)
x.ax=null},
$S:0}
B.c1E.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1C())},
$S:27}
B.c1C.prototype={
$0(){},
$S:0}
B.c1G.prototype={
$1(d){return this.a.y=d},
$S:72}
B.c1F.prototype={
$1(d){return this.a.C_()},
$S:4}
B.c1H.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.jk:D.mJ
x=this.b
w.as=B.NB(x)
w.at=x},
$S:0}
B.c1J.prototype={
$0(){var x=this.a
x.f=D.px
x.ay=Date.now()},
$S:0}
B.c1K.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1I())},
$S:27}
B.c1I.prototype={
$0(){},
$S:0}
B.c1u.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.jk:D.mJ
x.as=this.b
x.at=this.c},
$S:0}
B.c1w.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.jk
x.x=!1},
$S:0}
B.c1n.prototype={
$0(){var x=this.a
x.f=D.px
x.ay=Date.now()
x.as=null},
$S:0}
B.c1o.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1m())},
$S:27}
B.c1m.prototype={
$0(){},
$S:0}
B.c1p.prototype={
$1(d){return d.d!==D.jd},
$S:z+11}
B.c1q.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.c1P.prototype={
$0(){return B.csw(this.a)},
$S:0}
B.c1Q.prototype={
$1(d){var x=this.a.d
return x.qS(x.b.aqK(d))},
$S:3}
B.c1R.prototype={
$0(){var x=y.z
return A.O(this.b,!1).aD(A.aH(new B.c1O(this.a),null,x),x)},
$S:0}
B.c1O.prototype={
$1(d){var x=this.a.a
return new B.DQ(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.c1S.prototype={
$0(){this.a.d.a.bns()
this.b.H(y.q).f.Y(D.bd8)},
$S:0}
B.c1t.prototype={
$2(d,e){return C.aY},
$S:16}
B.c1s.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.a7h(s.c,r).a.a){case 2:s=F.cU
break
case 1:s=D.dT
break
case 0:s=C.ir
break
default:s=u}x=A.u(16)
w=t.f===D.px?u:new B.c1r(t,r)
v=s.ae(0.25)
if(r===t.gjf())s=C.i
s=A.aJ(s,r===t.gjf()?2:1)
return A.bu(!1,x,!0,A.E(C.P,A.d(E.bp(r),u,u,u,u,u,C.a2O,u,u,u),C.k,u,u,new A.G(v,u,s,u,u,u,u,C.bY),u,u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:65}
B.c1r.prototype={
$0(){return this.a.a_Y(this.b)},
$S:0}
B.c1y.prototype={
$0(){var x=this.a
return x.j(new B.c1x(x))},
$S:0}
B.c1x.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c1L.prototype={
$1(d){return d===D.v6},
$S:z+2}
B.c1M.prototype={
$1(d){return d===D.v7},
$S:z+2}
B.c1N.prototype={
$1(d){return d===D.v8},
$S:z+2}
B.c1g.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Sa(x)},
$S:0}
B.c1h.prototype={
$1(d){var x=this.a.d
return x.qS(x.b.bdi(d.ga_(d)))},
$S:114}
B.c1j.prototype={
$1(d){return d.n(0,C.W)?C.ah:C.i},
$S:5}
B.c1i.prototype={
$1(d){return d.n(0,C.W)?C.x:C.a8},
$S:5}
B.c1k.prototype={
$0(){var x=this.a
return x.a_Y(x.gjf()+1)},
$S:0}
B.c1l.prototype={
$0(){var x=this.a
return x.a_Y(x.gjf()+1)},
$S:0}
B.c0Z.prototype={
$0(){},
$S:0}
B.c17.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.aP(Date.now(),0,!1)},
$S:0}
B.c18.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c16())},
$S:27}
B.c16.prototype={
$0(){},
$S:0}
B.c1a.prototype={
$1(d){return this.a.x=d},
$S:72}
B.c19.prototype={
$1(d){return this.a.G0(this.b,!1)},
$S:4}
B.c1b.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.NB(x)
w.as=x},
$S:0}
B.c12.prototype={
$0(){var x=this.a
x.e=null
x.r.E(0,this.b)},
$S:0}
B.c13.prototype={
$0(){var x,w=this.a,v=this.b
w.r.L(0,v)
x=this.c
w.w.p(0,v,B.NB(x))
w.as=x},
$S:0}
B.c14.prototype={
$1(d){var x=0,w=A.j(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
o=s.a
n=o.d
m=s.c
l=o.a
k=l.f
l=l.c
x=6
return A.c(n.a.awE(s.b,B.FC(G.Nz(l,m,k.yi(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.cqG(G.Nz(l,m,k.yi(l,m)).b,r.a)
if(C.c.K(q.c).length!==0){l=n.c
k=o.a.c
j=q.gtF()
l.avF(k,m,n.b.a,j)}n.A4()
if(o.c!=null)o.j(new B.c1_(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.a8(h)
if(o instanceof B.lI){p=o
o=s.a
if(o.c!=null)o.j(new B.c10(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.j(new B.c11(o,s.c))
x=t.pop()
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$$1,w)},
$S:130}
B.c1_.prototype={
$0(){var x=this.c
this.a.f.p(0,this.b,x)
return x},
$S:0}
B.c10.prototype={
$0(){var x=this.a,w=this.c
x.w.p(0,this.b,B.NB(w))
x.as=w},
$S:0}
B.c11.prototype={
$0(){return this.a.r.L(0,this.b)},
$S:0}
B.c15.prototype={
$0(){var x=this.a
x.f.an(0)
x.w.an(0)
x.as=null},
$S:0}
B.c1c.prototype={
$1(d){return d.gtF()},
$S:z+13}
B.c1d.prototype={
$0(){return this.a.G0(this.b,!0)},
$S:0}
B.c1e.prototype={
$0(){return this.a.IG(this.b)},
$S:0}
B.c0Q.prototype={
$0(){},
$S:0}
B.c0X.prototype={
$2(d,e){return d+this.a.a79(e)},
$S:120}
B.c0Y.prototype={
$2(d,e){return d+H.cX[e-1].a[1]},
$S:120}
B.c0W.prototype={
$0(){return this.a.Ox(this.b)},
$S:0}
B.c0V.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.d(G.kw(p),q,q,q,q,q,C.i8,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.rw():r).a.a){case 2:r=F.cU.ae(0.35)
break
case 1:r=D.dT.ae(0.35)
break
case 0:r=C.fk
break
default:r=q}m.push(A.E(C.P,A.d(E.bp(t),q,q,q,q,q,C.j8,q,q,q),C.k,q,q,new A.G(r,q,q,new A.cF(s,s,s,s),q,q,q,C.n),q,38,q,q,q,q,q,38))}return A.cw(!0,new A.A(C.h0,A.J(A.a([o,C.ak,D.bwi,C.v,new A.dm(D.a7S,A.f2(A.cE(C.ap,m,C.aw,6,6),q,C.q,q,q,q,C.y),q),C.V,A.b1(D.by7,q,q,q,new B.c0U(w,d,p),q,q)],n),C.aa,C.d,C.H,0,C.l),q),C.G,!0)},
$S:36}
B.c0U.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.c(A.dc(null,null,!0,null,new B.c0T(t),u,null,!0,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.c(v.a.d.LD(t),$async$$0)
case 5:if(u.e!=null)A.O(u,!1).e5()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.c0T.prototype={
$1(d){var x=null,w=A.d("\u0647\u062a\u0628\u062f\u0623 "+G.kw(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.dh(A.a([A.b1(C.en,x,x,x,new B.c0R(d),x,x),A.b1(C.pk,x,x,x,new B.c0S(d),x,x)],y.p),w,D.bzJ)},
$S:14}
B.c0R.prototype={
$0(){A.O(this.a,!1).ac(!1)
return null},
$S:0}
B.c0S.prototype={
$0(){A.O(this.a,!1).ac(!0)
return null},
$S:0}
B.caL.prototype={
$1(d){var x=this.a
return new A.kM(new B.caK(x),null,x,null)},
$S:1169}
B.caK.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.eh(w,t,A.d(E.bp(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.boS,C.V,D.by1,C.I,A.nE(new B.caF(s,r),q,A.dg([r.a],x),!1,A.kz(t,t,t,new A.bf(new B.caG(),v),t,t,t,t,new A.bf(new B.caH(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.A,A.iA(C.x,C.G,t,new B.caI(s,r),D.bvD,D.bBu,r.c),A.iA(C.x,C.G,t,new B.caJ(s,r),t,D.bnF,r.d)],u)
s=s.x
if(s!=null)C.b.A(x,A.a([C.ak,A.d("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gn7(),t,t,t,t,t,C.aP,t,C.bb,t)],u))
x.push(C.A)
x.push(D.a40)
return A.cw(!0,A.f2(A.J(x,C.aa,C.d,C.e,0,C.l),t,C.q,C.h0,t,t,C.y),C.G,!0)},
$S:1170}
B.caF.prototype={
$1(d){return this.a.qS(this.b.bdf(d.ga_(d)))},
$S:114}
B.caH.prototype={
$1(d){return d.n(0,C.W)?C.ah:C.i},
$S:5}
B.caG.prototype={
$1(d){return d.n(0,C.W)?C.x:C.a8},
$S:5}
B.caI.prototype={
$1(d){return this.a.qS(this.b.bcC(d))},
$S:3}
B.caJ.prototype={
$1(d){return this.a.qS(this.b.aqK(d))},
$S:3}
B.b7O.prototype={
$0(){return A.ck(A.bs(this.a,0,null),C.aI,null)},
$S:0}
B.cb1.prototype={
$1(d){var x,w=A.aB("https?://",!0,!1,!1)
w=A.bD(d,w,"")
x=A.aB("www\\.",!0,!1,!1)
return A.v9(A.bD(w,x,"www[.]"),A.aB("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1,!1),new B.cb2(),null)},
$S:35}
B.cb2.prototype={
$1(d){return A.n(d.h(0,1))+"[.]"+A.n(d.h(0,2))},
$S:56}
B.c1T.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.c1U.prototype={
$0(){return this.a.f=!0},
$S:0}
B.c1V.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.c1W.prototype={
$0(){return this.a.e=!1},
$S:0}
B.c1Y.prototype={
$0(){var x=this.a
return x.j(new B.c1X(x))},
$S:0}
B.c1X.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.cb0.prototype={
$1(d){return d==null?"\u2013":A.n(d)},
$S:176};(function installTearOffs(){var x=a._instance_0u
x(B.akM.prototype,"gbja","bjb",1)
var w
x(w=B.Wt.prototype,"gbjr","Du",0)
x(w,"gaFn","wO",0)
x(w=B.a17.prototype,"goF","y6",1)
x(w,"gb_f","Qu",0)
x(w=B.a3G.prototype,"goF","y6",1)
x(w,"gb2a","QU",0)
x(w,"gb6P","C_",0)
x(w,"gaLn","Ou",0)
x(w=B.a3F.prototype,"goF","y6",1)
x(w,"gb34","b35",1)
x(B.a3E.prototype,"goF","y6",1)
x(B.a3H.prototype,"gb8i","Sb",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.a7,[B.akM,B.Wu,B.Kz,B.KB,B.KA,B.lI,B.Tz,B.n6,B.Ja,B.rG,B.akN,B.Ws])
x(A.lh,[B.b7P,B.b7R,B.b7W,B.b7X,B.b7Z,B.b7Y,B.aYR,B.b84,B.bOr,B.bOq,B.bOe,B.bOl,B.bOo,B.bOp,B.bOh,B.bOg,B.bOj,B.bOf,B.bOm,B.c9J,B.c9F,B.c9E,B.c9I,B.c1f,B.c1v,B.c1z,B.c1A,B.c1B,B.c1D,B.c1C,B.c1H,B.c1J,B.c1I,B.c1u,B.c1w,B.c1n,B.c1m,B.c1q,B.c1P,B.c1R,B.c1S,B.c1r,B.c1y,B.c1x,B.c1g,B.c1k,B.c1l,B.c0Z,B.c17,B.c16,B.c1b,B.c12,B.c13,B.c1_,B.c10,B.c11,B.c15,B.c1d,B.c1e,B.c0Q,B.c0W,B.c0U,B.c0R,B.c0S,B.b7O,B.c1T,B.c1U,B.c1V,B.c1W,B.c1Y,B.c1X])
x(A.iN,[B.b7S,B.b7U,B.b7V,B.b7T,B.aYQ,B.c71,B.b82,B.b83,B.b80,B.bOs,B.bOt,B.bOu,B.bOk,B.bOn,B.bOi,B.c9O,B.c9N,B.c9K,B.c9M,B.c9G,B.c9H,B.c1E,B.c1G,B.c1F,B.c1K,B.c1o,B.c1p,B.c1Q,B.c1O,B.c1L,B.c1M,B.c1N,B.c1h,B.c1j,B.c1i,B.c18,B.c1a,B.c19,B.c14,B.c1c,B.c0V,B.c0T,B.caL,B.caF,B.caH,B.caG,B.caI,B.caJ,B.cb1,B.cb2,B.cb0])
x(A.oh,[B.b7Q,B.c4W,B.b85,B.b86,B.c9L,B.c1t,B.c1s,B.c0X,B.c0Y,B.caK])
x(A.Eq,[B.nO,B.FX,B.Ia,B.ET])
w(B.Wt,A.i7)
x(A.K,[B.xc,B.DR,B.DQ,B.DP,B.DS])
x(A.N,[B.a17,B.a3G,B.a3F,B.a3E,B.a3H])
x(A.a2,[B.Ib,B.YS,B.E8,B.akL])})()
A.pw(b.typeUniverse,JSON.parse('{"lI":{"bN":[]},"DR":{"K":[],"l":[]},"DQ":{"K":[],"l":[]},"DP":{"K":[],"l":[]},"DS":{"K":[],"l":[]},"Wt":{"aI":[]},"xc":{"K":[],"l":[]},"a17":{"N":["xc"]},"Ib":{"a2":[],"l":[]},"YS":{"a2":[],"l":[]},"a3G":{"N":["DR"]},"E8":{"a2":[],"l":[]},"a3F":{"N":["DQ"]},"a3E":{"N":["DP"]},"akL":{"a2":[],"l":[]},"a3H":{"N":["DS"]}}'))
var y=(function rtii(){var x=A.af
return{u:x("rG"),c:x("eh<x>"),r:x("c4<x>"),k:x("H<n6>"),n:x("H<eh<x>>"),I:x("H<c4<x>>"),R:x("H<hT>"),Z:x("H<aD<o,@>>"),d:x("H<Tz>"),s:x("H<o>"),p:x("H<l>"),t:x("H<x>"),m:x("bV"),j:x("a6<@>"),L:x("a6<x>"),P:x("aD<o,@>"),f:x("aD<@,@>"),x:x("av<o,x>"),a:x("bH"),K:x("a7"),B:x("Ja"),l:x("+(x,x)"),e:x("d8<n6>"),N:x("o"),C:x("Kz"),D:x("KA"),X:x("Wu"),_:x("KB"),U:x("ah<o>"),G:x("nO"),q:x("pt"),b:x("bf<Y?>"),y:x("M"),i:x("a3"),z:x("@"),S:x("x"),A:x("bV?"),Y:x("aD<@,@>?"),O:x("a7?"),M:x("+quota,usage(x,x)?"),o:x("dK"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.pG=new B.FX(0,"none")
D.pH=new B.FX(1,"learning")
D.fh=new B.FX(2,"memorized")
D.a7S=new A.aE(0,1/0,0,320)
D.eQ=new A.Y(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.t)
D.a81=new A.G(D.eQ,null,null,null,null,null,null,C.bY)
D.dT=new A.Y(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.t)
D.aqD=new A.F(C.yY,null,C.bu,null,null,null)
D.bzN=new A.m("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.f9,null,null,null,null,null,null,null,null)
D.bhs=new A.v(!0,C.eu,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bwl=new A.m("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.bhs,null,null,null,null,null,null,null,null)
D.aMB=x([D.aqD,C.I,D.bzN,D.bwl],y.p)
D.agb=new A.fj(C.y,C.d,C.e,C.h,null,C.l,null,0,D.aMB,null)
D.ajX=new A.T(0,26,0,26)
D.ak_=new A.T(0,4,0,6)
D.akp=new A.T(14,12,14,14)
D.ala=new A.T(3,0,0,0)
D.aoH=new A.P(63251,"MaterialIcons",null,!1)
D.r5=new A.P(63677,"MaterialIcons",null,!1)
D.apv=new A.P(983209,"MaterialIcons",null,!1)
D.aq9=new A.F(D.apv,28,C.x,null,null,null)
D.aqT=new A.F(C.HX,null,C.ir,null,null,null)
D.aoq=new A.P(62961,"MaterialIcons",null,!1)
D.arz=new A.F(D.aoq,null,null,null,null,null)
D.aoF=new A.P(63199,"MaterialIcons",null,!1)
D.arA=new A.F(D.aoF,null,null,null,null,null)
D.arI=new A.F(C.jQ,null,C.eu,null,null,null)
D.arM=new A.F(C.nM,44,C.i,null,null,null)
D.asg=new A.F(D.r5,null,D.eQ,null,null,null)
D.asy=new A.F(C.lq,null,D.eQ,null,null,null)
D.asZ=new A.F(D.r5,null,null,null,null,null)
D.atw=new A.F(C.hQ,20,D.dT,null,null,null)
D.atU=new A.F(C.nJ,30,C.x,null,null,null)
D.aun=new A.F(C.lw,16,C.x,null,null,null)
D.auU=new A.F(C.HU,null,null,null,null,null)
D.av3=new A.F(C.nL,null,null,null,null,null)
D.ave=new A.F(C.yE,null,null,null,null,null)
D.K5=x([1,3,5],y.t)
D.KT=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aZ9=new A.A(C.ix,C.mV,null)
D.aIf=x([D.aZ9],y.p)
D.b2H=new A.V(C.nF,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.b2u=new A.V(D.r5,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.b32=new A.V(C.dg,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.b3g=new A.V(C.HW,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aKx=x([D.b2H,D.b2u,D.b32,D.b3g],A.af("H<+(P,o)>"))
D.aN1=x([D.pG,D.pH,D.fh],A.af("H<FX>"))
D.PB=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.aUQ=new B.Ia(0,"idle")
D.VV=new B.Ia(1,"loading")
D.k9=new B.Ia(2,"ready")
D.aUR=new B.Ia(3,"failed")
D.al8=new A.T(2,6,2,4)
D.biy=new A.v(!0,C.x,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBy=new A.m("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.biy,null,null,null,null,null,null,null,null)
D.aXT=new A.A(D.al8,D.bBy,null)
D.bB2=new A.m("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.f9,null,null,null,null,null,null,null,null)
D.aIC=x([N.uq,C.N,D.bB2],y.p)
D.b9f=new A.ed(C.ag,C.ch,C.e,C.h,null,C.l,null,0,D.aIC,null)
D.aYw=new A.A(C.lb,D.b9f,null)
D.C9=new A.v(!0,D.dT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBo=new A.m("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.C9,null,null,null,null,null,null,null,null)
D.aYx=new A.A(C.df,D.bBo,null)
D.bAG=new A.m("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,C.aP,C.X,null,null,null,null,null,null,null)
D.aYH=new A.A(C.C,D.bAG,null)
D.ase=new A.F(C.c2,18,F.cU,null,null,null)
D.bqZ=new A.m("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,C.p7,null,null,null,null,null,null,null,null)
D.aL6=x([D.ase,C.aY,D.bqZ],y.p)
D.b9s=new A.ed(C.ag,C.d,C.e,C.h,null,C.l,null,0,D.aL6,null)
D.aZ_=new A.A(C.aO,D.b9s,null)
D.al5=new A.T(2,0,2,8)
D.bwz=new A.m("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,C.aP,null,null,null,null,null,null,null,null)
D.aZ0=new A.A(D.al5,D.bwz,null)
D.auw=new A.F(C.lu,30,C.x,null,null,null)
D.byk=new A.m("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,C.i8,null,null,null,null,null,null,null,null)
D.am4=new A.bT(1,C.af,D.byk,null)
D.aGe=x([D.auw,C.a0,D.am4],y.p)
D.b9e=new A.ed(C.ag,C.d,C.e,C.h,null,C.l,null,0,D.aGe,null)
D.au6=new A.F(C.dg,18,F.cU,null,null,null)
D.a2K=new A.v(!0,F.cU,null,null,null,null,12,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bum=new A.m("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.a2K,null,null,null,null,null,null,null,null)
D.aGV=x([D.au6,C.bK,D.bum],y.p)
D.b9h=new A.ed(C.ag,C.d,C.H,C.h,null,C.l,null,0,D.aGV,null)
D.bbC=new A.W(0,30)
D.un=new A.W(1/0,54)
D.bc_=new A.W(1/0,48)
D.bc2=new A.W(1/0,50)
D.bc5=new A.W(1/0,52)
D.byf=new A.m("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.bd8=new A.cV(D.byf,null,null,null,null,null,null,null,null,null,null,null,null,C.w,!1,null,null,null,C.m,null)
D.bgZ=new A.v(!0,C.au,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.kx=new A.v(!0,C.i,null,"AmiriQuranMT",null,null,28,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.BZ=new A.v(!0,D.eQ,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bj5=new A.v(!0,F.cU,null,null,null,null,null,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a2v=new A.v(!0,D.eQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bkS=new A.v(!0,D.dT,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bkY=new A.v(!0,C.x,null,null,null,null,24,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bl9=new A.v(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bmR=new A.m("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.fL,null,null,null,null,null,null,null,null)
D.bnF=new A.m("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.d2,null,null,null,null,null,null,null,null)
D.bon=new A.m("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,C.aP,null,null,null,null,null,null,null,null)
D.boS=new A.m("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.i8,null,null,null,null,null,null,null,null)
D.boT=new A.m("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.aP,null,null,null,null,null,null,null,null)
D.boX=new A.m("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,C.a2m,null,null,null,null,null,null,null,null)
D.bps=new A.m("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.f9,null,null,null,null,null,null,null,null)
D.bqS=new A.m("reset safe mode / WebGPU ban",null,C.ho,null,null,null,null,null,null,null,null)
D.bqT=new A.m("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cj,null,null,null,null,null,null,null,null)
D.brW=new A.m("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,C.aP,null,null,null,null,null,null,null,null)
D.brX=new A.m("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,I.bF,null,null,null,null,null,null,null,null)
D.btM=new A.m("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.buo=new A.m("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,C.uN,null,null,null,null,null,null,null,null)
D.bjP=new A.v(!0,F.cU,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.buW=new A.m("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.bjP,null,null,null,null,null,null,null,null)
D.bvh=new A.m("\u062e\u0644\u0635\u062a",null,C.kw,null,null,null,null,null,null,null,null)
D.bvr=new A.m("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.C9,null,null,null,null,null,null,null,null)
D.bvD=new A.m("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,C.aP,null,null,null,null,null,null,null,null)
D.bwi=new A.m("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,C.aP,null,null,null,null,null,null,null,null)
D.bwB=new A.m("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,C.aP,null,null,null,null,null,null,null,null)
D.bwQ=new A.m("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.p8,null,null,null,null,null,null,null,null)
D.by1=new A.m("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.p8,null,null,null,null,null,null,null,null)
D.bjq=new A.v(!0,D.eQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.by7=new A.m("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.bjq,null,null,null,null,null,null,null,null)
D.biR=new A.v(!0,C.bu,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,C.fG,null,null,null,null,null,null,null,null)
D.byG=new A.m("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.biR,null,null,null,null,null,null,null,null)
D.byN=new A.m("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,I.bF,null,null,null,null,null,null,null,null)
D.bzc=new A.m("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.bC,null,null,null,null,null,null,null,null)
D.bzJ=new A.m("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.bzT=new A.m("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.pd,null,null,null,null,null,null,null,null)
D.bzZ=new A.m("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.bAz=new A.m("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,C.aP,null,null,null,null,null,null,null,null)
D.bAA=new A.m("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.C9,null,null,null,null,null,null,null,null)
D.bBu=new A.m("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.d2,null,null,null,null,null,null,null,null)
D.bC3=new A.m("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,C.aP,null,null,null,null,null,null,null,null)
D.bCI=new A.m("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cj,null,null,null,null,null,null,null,null)
D.a40=new B.akL(null)
D.bDq=new B.DP(null)
D.bDr=new B.Ws(2,1,!0,!1,!1)
D.a44=new B.Wu(!1,!1,!1,!1,!1,0)
D.jd=new B.nO(0,"ok")
D.v6=new B.nO(1,"near")
D.v7=new B.nO(2,"wrong")
D.v8=new B.nO(3,"missing")
D.a4v=new B.nO(4,"extra")
D.aoW=new A.P(63456,"MaterialIcons",null,!1)
D.bJn=new B.E8(D.dT,D.aoW,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.bK_=new B.YS(!1,null)
D.CK=new B.YS(!0,null)
D.mJ=new B.ET(0,"idle")
D.vm=new B.ET(1,"playing")
D.vn=new B.ET(2,"recording")
D.px=new B.ET(3,"thinking")
D.jk=new B.ET(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTC","cgO",()=>new B.akM())
x($,"cX5","cwv",()=>A.aB("\u0640[\u064b-\u0652]*\u0670",!0,!1,!1))
x($,"cX6","cww",()=>A.aB("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1,!1))
x($,"cXi","cwF",()=>A.aB("\u0648\u0670",!0,!1,!1))
x($,"cWE","cwb",()=>A.aB("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1,!1))
x($,"cUU","cv_",()=>A.aB("\u0627[\u0654\u0655]",!0,!1,!1))
x($,"cW9","cvO",()=>A.aB("[\u0654\u0655]",!0,!1,!1))
x($,"cUV","cv0",()=>A.aB("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1,!1))
x($,"cV1","cv6",()=>A.aB("[\u0624\u0626]",!0,!1,!1))
x($,"cWb","cvQ",()=>A.aB("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1,!1))
x($,"cWJ","cwe",()=>A.aB("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1,!1))
x($,"cWj","cvX",()=>A.aB("[^\u0621-\u064a\\s]",!0,!1,!1))
x($,"cX3","chp",()=>A.aB("\\s+",!0,!1,!1))
x($,"cQT","rw",()=>B.cxw(D.pG,0,A.cci(0,!0)))
x($,"cTD","NH",()=>new B.Wt($.cgO(),D.bDr,B.cFM(),D.aUQ,$.U()))})()};
(a=>{a["r/r7zfuOMSY6MuQH0BJboha5AHc="]=a.current})($__dart_deferred_initializers__);