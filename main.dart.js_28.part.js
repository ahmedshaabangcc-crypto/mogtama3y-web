((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,P,H,G,N,Q,K,B={
cFX(d){var x,w,v,u,t,s
if(d instanceof B.lN)return d
try{x=A.cW(d)
w=x.code
v=x.message
u=w==null?"failed":A.S(w)
t=v==null?"":A.S(v)
return new B.lN(u,t)}catch(s){u=A.n(d)
return new B.lN("failed",u)}},
akT:function akT(){this.b=this.a=null},
b7Z:function b7Z(d){this.a=d},
b81:function b81(){},
b80:function b80(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8_:function b8_(d){this.a=d},
b85:function b85(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b83:function b83(d){this.a=d},
b84:function b84(d){this.a=d},
b86:function b86(d){this.a=d},
b88:function b88(d,e,f){this.a=d
this.b=e
this.c=f},
b87:function b87(d,e,f){this.a=d
this.b=e
this.c=f},
b82:function b82(){},
cFY(d,e){return new B.lN(d,e)},
Wx:function Wx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
KD:function KD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
KF:function KF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
KE:function KE(d,e){this.a=d
this.b=e},
lN:function lN(d,e){this.a=d
this.b=e},
crX(d){var x,w=$.cwI()
w=A.bD(d,w,"\u0627")
x=$.cwJ()
w=A.bD(w,x,"\u064a")
x=$.cwS()
w=A.bD(w,x,"\u0627")
x=$.cvc()
w=A.bD(w,x,"\u0627")
x=$.cwo()
w=A.bD(w,x,"\u0621")
x=$.cw0()
w=A.bD(w,x,"\u0621")
x=$.cvd()
w=A.bD(w,x,"\u0627")
x=$.cvj()
w=A.bD(w,x,"\u0621")
w=A.bD(w,"\u0649","\u064a")
w=A.bD(w,"\u0629","\u0647")
x=$.cw2()
w=A.bD(w,x,"")
x=$.cwr()
w=A.bD(w,x," ")
x=$.cw9()
w=A.bD(w,x," ")
x=$.chy()
return C.c.K(A.bD(w,x," "))},
cKH(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.kb(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.cc(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
cbi(d,e){var x,w,v,u,t,s
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
s=1-B.cKH(d,e)/u
return s>=1?0.99:s},
FG(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.uc(d,$.chy()),w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
if(u.length===0)continue
t=B.crX(u)
s=A.bD(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.TC(r.a+" "+u,r.b))}continue}q.push(new B.TC(u,s))}return q},
cJl(d,e){var x,w,v,u,t=new B.c54(),s=A.a([],y.s)
for(x=A.fj(e,0,A.iq(5,"count",y.S),A.aj(e).c),w=x.$ti,x=new A.ch(x,x.gN(0),w.i("ch<aW.E>")),w=w.i("aW.E");x.v();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.L4)&&t.$2(d,D.L4)?C.b.jB(d,5):d
return!t.$2(s,D.PM)&&t.$2(u,D.PM)?C.b.jB(u,4):u},
cqS(d,e){var x=B.FG(d),w=B.crX(e),v=y.U
v=A.a9(new A.ah(A.a(w.split(" "),y.s),new B.c7b(),v),v.i("Y.E"))
return new B.Jf(x,B.cIw(x,B.cJl(v,x)),w)},
cIw(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.L)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.cc(x,0,!1,s)
q=A.cc(x,0,!1,y.S)
p=A.cc(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.cbi(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.cbi(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.cbi(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
if(a2>=1)m=D.jg
else m=a2>=0.6?D.vc:D.vd
a1.push(new B.na(o,x,s,m))
break
case 1:--o
a1.push(new B.na(o,a4[o],null,D.ve))
break
case 2:--n
a1.push(new B.na(null,null,a6[n],D.a5e))
break
case 3:--o
a3=n-2
a1.push(new B.na(o,a4[o],a6[a3]+" "+a6[n-1],D.jg))
n=a3
break
default:x=o-1;--n
a1.push(new B.na(x,a4[x],a6[n],D.jg))
o-=2
a1.push(new B.na(o,a4[o],a6[n],D.jg))}}a4=y.e
a4=A.a9(new A.d8(a1,a4),a4.i("aW.E"))
return a4},
nR:function nR(d,e){this.a=d
this.b=e},
TC:function TC(d,e){this.a=d
this.b=e},
na:function na(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Jf:function Jf(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aYZ:function aYZ(d){this.a=d},
aYY:function aYY(){},
c54:function c54(){},
c7b:function c7b(){},
cxJ(d,e,f){return new B.rK(d,e,f)},
cLC(d){var x
A:{if("memorized"===d){x=D.fp
break A}if("learning"===d){x=D.pF
break A}x=D.pE
break A}return x},
csX(d,e){return d>=1&&d<=114&&e>=1&&e<=I.cY[d-1].a[1]},
cFZ(){var x=y.S
return new B.akU(A.C(x,y.u),A.aO(x))},
b8b(d){var x=d.eP()
return C.c.du(C.j.k(A.br(x)),4,"0")+"-"+C.c.du(C.j.k(A.bv(x)),2,"0")+"-"+C.c.du(C.j.k(A.c_(x)),2,"0")},
cnK(d){var x=y.x,w=A.a9(new A.av(A.a(d.split("-"),y.s),A.cN2(),x),x.i("aW.E"))
return B.b8b(A.dz(w[0],w[1],w[2]-1,12,0,0,0))},
cex(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.C(p,y.u),n=A.aO(p),m=new B.akU(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gcN(),x=x.ga0(x),w=y.j;x.v();){v=x.gG()
u=A.dX(A.n(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.aN(t)>=3){v=C.j.aI(u,1000)
s=C.j.a3(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=I.cY[v-1].a[1])}if(v)continue
v=J.bb(t)
r=C.f.bB(A.cT(v.h(t,0)))
if(r<0||r>=3)continue
o.p(0,u,new B.rK(D.aNY[r],C.f.bB(A.cT(v.h(t,1))),new A.aQ(A.kE(C.f.bB(A.cT(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.aCl(q,y.o)
p=A.mB(x,new B.b8a(),x.$ti.i("Y.E"),p)
n.A(0,new A.ah(p,o.ga4R(),A.y(p).i("ah<Y.E>")))}m.c=A.q(d.h(0,"last"))
p=A.as(d.h(0,"streak"))
p=p==null?null:C.f.bB(p)
p=m.d=p==null?0:p
o=A.as(d.h(0,"best"))
o=o==null?null:C.f.bB(o)
m.e=o==null?p:o
return m},
aBC(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.du(C.j.k(d),3,"0")+C.c.du(C.j.k(e),3,"0")+".mp3"},
G_:function G_(d,e){this.a=d
this.b=e},
rK:function rK(d,e,f){this.a=d
this.b=e
this.c=f},
akU:function akU(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
b8c:function b8c(){},
b8d:function b8d(){},
b8a:function b8a(){},
Wv:function Wv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cDq(){return new B.xf(null)},
cPt(d,e){var x,w,v,u,t={},s=I.cY[e-1].a[1],r=$.NL().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.rz():v).a===D.fp}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.j.d1(u+4,1,s)
return A.e4(C.cU,new B.c9Y(t,s,e),d,!0,null,null,!1,y.l)},
cgk(d){return A.du(0,0,0,0,0,C.j.d1(C.f.al(6+d*1.2),25,90))},
cfe(d){return E.bq(C.j.aI(d,60))+":"+C.c.du(E.bq(C.j.a3(d,60)),2,"\u0660")},
csJ(d){return A.e4(C.cU,new B.caV($.NL()),d,!0,null,null,!1,y.H)},
NE(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gl9()
break A}return x},
cQO(d,e,f){var x,w=new B.cbb(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.a7(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.a7(x,0,1990):x},
csS(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.ap.f4(a4,null))
s=y.Y
r=s.a(J.at(x,"rec"))
w=r==null?C.cP:r
q=s.a(J.at(x,"last"))
v=q==null?C.cP:q
u=new B.cba()
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
a0=J.aN(t)!==0?" \xb7 recovered from "+A.n(t):""
a1=J.k(J.at(x,"safe"),!0)?" \xb7 safe mode":""
a2=J.k(J.at(x,"nogpu"),!0)?" \xb7 no-gpu":""
return"record "+s+" s ("+p+", "+o+" Hz, peak "+n+", "+m+") \u2192 stop/decode "+l+" ms \u2192 resample "+k+" ms \u2192 infer "+j+" ms (mel "+i+", enc "+h+", dec "+g+") \u2192 wall "+f+" ms \xb7 "+e+" \xd7"+d+a0+a1+a2}catch(a3){return""}},
Ie:function Ie(d,e){this.a=d
this.b=e},
Ww:function Ww(d,e,f,g,h){var _=this
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
b8e:function b8e(d){this.a=d},
b8f:function b8f(d){this.a=d},
b8g:function b8g(d){this.a=d},
xf:function xf(d){this.a=d},
a1b:function a1b(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bOB:function bOB(d){this.a=d},
bOA:function bOA(d,e){this.a=d
this.b=e},
bOC:function bOC(d){this.a=d},
bOz:function bOz(d,e){this.a=d
this.b=e},
bOD:function bOD(){},
bOn:function bOn(){},
bOt:function bOt(d,e,f){this.a=d
this.b=e
this.c=f},
bOu:function bOu(){},
bOx:function bOx(d){this.a=d},
bOw:function bOw(){},
bOy:function bOy(d){this.a=d},
bOq:function bOq(d,e){this.a=d
this.b=e},
bOr:function bOr(d){this.a=d},
bOp:function bOp(){},
bOs:function bOs(d){this.a=d},
bOo:function bOo(d){this.a=d},
bOv:function bOv(d,e){this.a=d
this.b=e},
If:function If(d,e,f){this.c=d
this.d=e
this.a=f},
YW:function YW(d,e){this.c=d
this.a=e},
c9Y:function c9Y(d,e,f){this.a=d
this.b=e
this.c=f},
c9V:function c9V(d,e,f){this.a=d
this.b=e
this.c=f},
c9X:function c9X(d,e){this.a=d
this.b=e},
c9U:function c9U(d,e){this.a=d
this.b=e},
c9T:function c9T(d,e){this.a=d
this.b=e},
c9W:function c9W(d,e){this.a=d
this.b=e},
c9P:function c9P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9O:function c9O(d,e,f){this.a=d
this.b=e
this.c=f},
c9Q:function c9Q(d){this.a=d},
c9R:function c9R(d){this.a=d},
c9S:function c9S(d,e){this.a=d
this.b=e},
EV:function EV(d,e){this.a=d
this.b=e},
DS:function DS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3K:function a3K(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
c1o:function c1o(){},
c1E:function c1E(d,e){this.a=d
this.b=e},
c1I:function c1I(d){this.a=d},
c1J:function c1J(d){this.a=d},
c1K:function c1K(d,e,f){this.a=d
this.b=e
this.c=f},
c1M:function c1M(d){this.a=d},
c1N:function c1N(d){this.a=d},
c1L:function c1L(){},
c1P:function c1P(d){this.a=d},
c1O:function c1O(d){this.a=d},
c1Q:function c1Q(d,e){this.a=d
this.b=e},
c1S:function c1S(d){this.a=d},
c1T:function c1T(d){this.a=d},
c1R:function c1R(){},
c1D:function c1D(d,e,f){this.a=d
this.b=e
this.c=f},
c1F:function c1F(d,e,f){this.a=d
this.b=e
this.c=f},
c1w:function c1w(d){this.a=d},
c1x:function c1x(d){this.a=d},
c1v:function c1v(){},
c1y:function c1y(){},
c1z:function c1z(d,e){this.a=d
this.b=e},
c1Y:function c1Y(d){this.a=d},
c1Z:function c1Z(d){this.a=d},
c2_:function c2_(d,e){this.a=d
this.b=e},
c1X:function c1X(d){this.a=d},
c20:function c20(d,e){this.a=d
this.b=e},
c1C:function c1C(){},
c1B:function c1B(d){this.a=d},
c1A:function c1A(d,e){this.a=d
this.b=e},
c1H:function c1H(d){this.a=d},
c1G:function c1G(d){this.a=d},
c1U:function c1U(){},
c1V:function c1V(){},
c1W:function c1W(){},
c1p:function c1p(d,e,f){this.a=d
this.b=e
this.c=f},
c1q:function c1q(d){this.a=d},
c1s:function c1s(){},
c1r:function c1r(){},
c1t:function c1t(d){this.a=d},
c1u:function c1u(d){this.a=d},
Ea:function Ea(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
DR:function DR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3J:function a3J(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
c17:function c17(){},
c1g:function c1g(d,e){this.a=d
this.b=e},
c1h:function c1h(d){this.a=d},
c1f:function c1f(){},
c1j:function c1j(d){this.a=d},
c1i:function c1i(d,e){this.a=d
this.b=e},
c1k:function c1k(d,e){this.a=d
this.b=e},
c1b:function c1b(d,e){this.a=d
this.b=e},
c1c:function c1c(d,e,f){this.a=d
this.b=e
this.c=f},
c1d:function c1d(d,e,f){this.a=d
this.b=e
this.c=f},
c18:function c18(d,e,f){this.a=d
this.b=e
this.c=f},
c19:function c19(d,e,f){this.a=d
this.b=e
this.c=f},
c1a:function c1a(d,e){this.a=d
this.b=e},
c1e:function c1e(d){this.a=d},
c1l:function c1l(){},
c1m:function c1m(d,e){this.a=d
this.b=e},
c1n:function c1n(d,e){this.a=d
this.b=e},
DQ:function DQ(d){this.a=d},
a3I:function a3I(d){this.d=d
this.c=this.a=null},
c0Z:function c0Z(){},
c15:function c15(d){this.a=d},
c16:function c16(){},
c14:function c14(d,e){this.a=d
this.b=e},
c13:function c13(d,e,f){this.a=d
this.b=e
this.c=f},
c12:function c12(d,e,f){this.a=d
this.b=e
this.c=f},
c11:function c11(d){this.a=d},
c1_:function c1_(d){this.a=d},
c10:function c10(d){this.a=d},
caV:function caV(d){this.a=d},
caU:function caU(d){this.a=d},
caP:function caP(d,e){this.a=d
this.b=e},
caR:function caR(){},
caQ:function caQ(){},
caS:function caS(d,e){this.a=d
this.b=e},
caT:function caT(d,e){this.a=d
this.b=e},
akS:function akS(d){this.a=d},
b7Y:function b7Y(d){this.a=d},
cbb:function cbb(){},
cbc:function cbc(){},
DT:function DT(d,e,f){this.c=d
this.d=e
this.a=f},
a3L:function a3L(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
c21:function c21(d){this.a=d},
c22:function c22(d){this.a=d},
c23:function c23(d,e){this.a=d
this.b=e},
c24:function c24(d){this.a=d},
c26:function c26(d){this.a=d},
c25:function c25(d){this.a=d},
cba:function cba(){}},D,R,O,I,E,F
J=c[1]
A=c[0]
C=c[2]
L=c[15]
M=c[19]
P=c[21]
H=c[13]
G=c[32]
N=c[31]
Q=c[10]
K=c[37]
B=a.updateHolder(c[8],B)
D=c[38]
R=c[29]
O=c[35]
I=c[27]
E=c[16]
F=c[18]
B.akT.prototype={
rj(){var x=this,w=x.a
if(w!=null)return A.et(w,y.m)
w=x.b
return w==null?x.b=new B.b7Z(x).$0():w},
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
r=B.cFX(s)
throw A.t(r)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uD,w)},
ou(d,e){var x=A.eq(d[e])
if(x==null)x=null
return x===!0},
Nm(){var x=0,w=A.j(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Nm=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.c(s.rj(),$async$Nm)
case 7:r=h.cW(g.cR(e,"support",null,null,null,null))
q=s.ou(r,"worker")
p=s.ou(r,"wasm")
o=s.ou(r,"mic")
n=s.ou(r,"audio")
s.ou(r,"webgpu")
m=s.ou(r,"secure")
s.ou(r,"ios")
l=A.jZ(r.memory)
if(l==null)l=null
if(l==null)l=0
s.ou(r,"isolated")
k=A.jZ(r.cores)
if(k!=null)C.f.al(k)
v=new B.Wx(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.a4N
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nm,w)},
EP(){var x=0,w=A.j(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.c(s.rj(),$async$EP)
case 8:x=7
return A.c(m.eM(l.cW(k.cR(e,"storage",null,null,null,null)),y.A),$async$EP)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.f.al(A.dV(r.quota))
p=C.f.al(A.dV(r.usage))
v=new A.av2(q,p)
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
return A.i($async$EP,w)},
bm9(){var x=y.K
A.Hk(this.rj().bJ(new B.b81(),x),x)},
ri(d,e){var x=A.jZ(d[e])
x=x==null?null:C.f.al(x)
return x==null?0:x},
bjw(d,e,f){return this.uD(new B.b80(this,d,e,f),y.C)},
galX(){var x,w
try{x=A.kv(b.G.sessionStorage)
return x}catch(w){return null}},
gaty(){var x=A.eq(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
aa8(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.eq(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gaty())return!1
l=A.eq(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cW(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.S(x.userAgent)
l=A.jZ(x.maxTouchPoints)
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
l=A.jZ(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.galX()
l=l==null?f:A.q(A.cR(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.dX(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.kv(m.localStorage)
m=o
m=m==null?f:A.q(A.cR(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.dX(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
as5(){var x,w,v,u,t,s,r=null
try{x=this.galX()
if(x!=null)A.cR(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cW(x.location)
u=A.S(v.hash)
t=A.S(v.search)
s=A.bs(A.S(A.cW(x.document).baseURI),0,r).a2("tutor/").k(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cR(v,"replace",s+t+x,r,r,r)},
bje(){var x,w=null,v=b.G,u=A.cW(v.history),t=A.jZ(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cR(u,"back",w,w,w,w)
else{x=A.S(A.cW(v.document).baseURI)
A.cR(A.cW(v.location),"replace",A.bs(x,0,w).a2("./").k(0)+"#/",w,w,w)}},
aak(d,e,f,g,h){return this.uD(new B.b85(this,e,d,f,h,g),y.H)},
aao(){return this.uD(new B.b86(this),y.D)},
a4u(){var x=null,w=this.a
if(w!=null)A.cR(w,"cancelRecording",x,x,x,x)},
ann(d){var x,w,v=this,u=A.q(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.ri(d,"ms")
w=A.jZ(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.KF(u,x,w,v.ri(d,"frames"),v.ri(d,"tokens"),v.ou(d,"retried"),v.ri(d,"encMs"),v.ri(d,"decMs"),v.ri(d,"featMs"))},
ajG(d){var x={}
x.words=d
return x},
awF(d,e){return this.uD(new B.b88(this,d,e),y._)},
bol(d,e){return this.uD(new B.b87(this,d,e),y._)},
Lq(d,e){return this.bmf(d,e)},
bmf(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Lq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.c(s.rj(),$async$Lq)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.aj(d).i("av<1,o>")
o=A.a9(new A.av(d,new B.b82(),o),o.i("aW.E"))
x=11
return A.c(A.eM(A.cW(A.cR(r,"play",o,e,null,null)),y.y),$async$Lq)
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
return A.i($async$Lq,w)},
N3(){var x=null,w=this.a
if(w!=null)A.cR(w,"stopPlayback",x,x,x,x)},
JU(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.S(A.cR(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
bnv(){var x,w,v=null
try{x=this.a
if(x!=null)A.cR(x,"resetDevice",v,v,v,v)}catch(w){}},
a7K(d){var x=this.a
if(x!=null)A.cR(x,"prefetch",d,null,null,null)}}
B.Wx.prototype={}
B.KD.prototype={
gn7(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.n(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.KF.prototype={
gTH(){var x=this,w=C.f.aB(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.KE.prototype={}
B.lN.prototype={
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
B.nR.prototype={
S(){return"WordStatus."+this.b}}
B.TC.prototype={}
B.na.prototype={
k(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Jf.prototype={
gN1(){var x,w=this,v=w.d
if(v===$){x=new B.aYZ(w).$0()
w.d!==$&&A.aq()
w.d=x
v=x}return v},
gKd(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
if(u.d===D.a5e&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gbkn(){return J.h0(this.gN1(),new B.aYY()).gN(0)},
gtF(){var x=this.a
return x.length!==0&&this.gbkn()===x.length&&this.gKd().length===0}}
B.G_.prototype={
S(){return"AyahStatus."+this.b}}
B.rK.prototype={}
B.akU.prototype={
a7l(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.rz():x},
b1l(d){var x=this,w=B.b8b(d),v=x.c
if(v===w)return
v=v!=null&&v===B.cnK(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
arg(){var x=Date.now(),w=B.b8b(new A.aQ(x,0,!1))
x=this.c
return x===w||x===B.cnK(w)?this.d:0},
avG(d,e,f,g){var x=this,w=new A.aQ(Date.now(),0,!1),v=x.a7l(d,e),u=g?C.j.d1(v.b+1,0,100):0,t=g&&u>=f?D.fp:D.pF,s=new B.rK(t,u,w.h6()),r=d*1000+e
x.a.p(0,r,s)
x.b.E(0,r)
x.b1l(w)
return s},
a7d(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.cY[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.rz():s).a===D.fp)++u}return u},
bjc(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=I.cY[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.rz():s).a===D.pF)++u}return u},
gauF(){var x=this.a,w=A.y(x).i("c5<2>")
return new A.ah(new A.c5(x,w),new B.b8c(),w.i("ah<Y.E>")).gN(0)},
gaAi(){var x=this.a,w=A.y(x).i("bQ<1>")
w=A.mB(new A.bQ(x,w),new B.b8d(),w.i("Y.E"),y.S)
w=A.eI(w,A.y(w).i("Y.E"))
x=A.a9(w,A.y(w).c)
C.b.lf(x)
return x},
dq(){var x,w,v,u,t,s=this,r=y.N,q=A.C(r,y.L)
for(x=s.a,x=new A.eB(x,A.y(x).i("eB<1,2>")).ga0(0),w=y.t;x.v();){v=x.d
u=v.a
t=v.b
q.p(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a9(x,A.y(x).c)
return A.I(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
bf4(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.b6y(x,300,A.y(x).c),x=new A.Kj(J.ar(x.a),x.b,A.y(x).i("Kj<1>")),w=y.N,v=y.z,u=this.a;x.v();){t=x.gG()
s=C.j.aI(t,1000)
t=C.j.a3(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.rz():q).a===D.fp?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.rz()
r=u.h(0,r)
o.push(A.I(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.rz():r).c.iG()],w,v))}return o},
bjO(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.L)(d),++u){t=d[u]
s=A.ez(t.h(0,"surah"))*1000+A.ez(t.h(0,"ayah"))
r=w.h(0,C.j.aI(s,1000)*1000+C.j.a3(s,1000))
if((r==null?$.rz():r).c.iG()===t.h(0,"updated_at"))v.L(0,s)}},
bjW(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.ar(d),w=this.b,v=this.a,u=y.f,t=!1;x.v();){s=x.gG()
if(!u.b(s))continue
r=A.as(s.h(0,"surah"))
q=r==null?null:C.f.bB(r)
r=A.as(s.h(0,"ayah"))
p=r==null?null:C.f.bB(r)
o=A.dF(A.n(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=I.cY[q-1].a[1])
if(r)continue
n=B.cLC(s.h(0,"status"))
if(n===D.pE)continue
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
v.p(0,r,new B.rK(n,C.j.d1(l==null?0:l,0,100),o.h6()))
w.L(0,r)
t=!0}return t}}
B.Wv.prototype={
JD(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Wv(w,v,u,t,f==null?x.e:f)},
bdh(d){var x=null
return this.JD(x,x,d,x,x)},
aqL(d){var x=null
return this.JD(x,d,x,x,x)},
bdl(d){var x=null
return this.JD(x,x,x,x,d)},
bcE(d){var x=null
return this.JD(d,x,x,x,x)},
bdi(d){var x=null
return this.JD(x,x,x,d,x)},
dq(){var x=this
return A.I(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Ie.prototype={
S(){return"ModelState."+this.b}}
B.Ww.prototype={
vP(){var x=this.Q
return x==null?this.Q=new B.b8e(this).$0():x},
qT(d){return this.ayv(d)},
ayv(d){var x=0,w=A.j(y.H),v=this
var $async$qT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:v.b=d
v.a5()
x=2
return A.c(A.ir("mt.tutor.settings",C.ap.hl(d.dq(),null)),$async$qT)
case 2:return A.h(null,w)}})
return A.i($async$qT,w)},
A6(){var x=0,w=A.j(y.H),v=this,u
var $async$A6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.a5()
x=2
return A.c(A.ir("mt.tutor.progress",C.ap.hl(v.c.dq(),null)),$async$A6)
case 2:u=v.as
if(u!=null)u.av()
v.as=A.cS(C.x,v.gaFn())
return A.h(null,w)}})
return A.i($async$A6,w)},
MM(d,e,f){return this.azi(d,e,f)},
azi(d,e,f){var x=0,w=A.j(y.H),v=this
var $async$MM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v.z=new A.aZ(d,e,f)
x=2
return A.c(A.ir("mt.tutor.last",C.ap.hl(A.I(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$MM)
case 2:return A.h(null,w)}})
return A.i($async$MM,w)},
Dx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Dx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.W5||n===D.kb){x=1
break}s.f=D.W5
s.y=null
s.a5()
u=4
n=A.lO().geK().h(0,"tutor_device")
if(n==null)n="auto"
p=A.lO().geK().h(0,"tutor_threads")
p=A.dX(p==null?"":p,null)
if(p==null)p=0
x=7
return A.c(s.a.bjw(new B.b8f(s),n,p),$async$Dx)
case 7:s.x=e
s.f=D.kb
n=A.lO().geK().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.ru().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.a8(m)
if(n instanceof B.lN){q=n
s.f=D.aVR
s.y=q
n=A.lO().geK().h(0,"debug")
if(n==="1")A.ru().$1("[tutor] model failed: "+A.n(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.a5()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dx,w)},
wN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$wN=A.e(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.D().b
k===$&&A.b()
k=k.ga4().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.D().b
k===$&&A.b()
p=k
x=7
return A.c(p.aQ("quran_tutor_progress").d9("surah, ayah, status, perfect_count, updated_at"),$async$wN)
case 7:o=a1
n=r.c.bjW(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.bf4()
if(J.aN(l)===0){x=10
break}h=p
g=A.I(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.A(0,A.nj(h.x,k,k))
x=11
return A.c(f.bnU("quran_tutor_save",!1,g,i),$async$wN)
case 11:r.c.bjO(l)
case 9:++m
x=8
break
case 10:x=12
return A.c(A.ir("mt.tutor.progress",C.ap.hl(r.c.dq(),null)),$async$wN)
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
return A.i($async$wN,w)},
LH(d){return this.bnx(d)},
bnx(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$LH=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.cex(t.c.dq()).dq()
y.f.a(p.h(0,"rows")).en(0,new B.b8g(d))
t.c=B.cex(p)
x=2
return A.c(t.A6(),$async$LH)
case 2:v=4
s=$.D().b
s===$&&A.b()
r=s.ga4().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.c(s.ar("quran_tutor_reset",A.I(["p_surah",d],y.N,r),r),$async$LH)
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
return A.i($async$LH,w)}}
B.xf.prototype={
O(){var x=$.NL()
return new B.a1b(x,new A.ae(C.F,$.U()))}}
B.a1b.prototype={
W(){var x,w,v=this
v.Z()
x=v.d
x.ac(v.goG())
w=y.a
x.vP().bJ(new B.bOB(v),w)
H.aXp().bJ(new B.bOC(v),w).fC(new B.bOD())
A.Hk(H.cdT(),y.y)},
y5(){if(this.c!=null)this.j(new B.bOn())},
m(){var x,w=this
w.d.U(w.goG())
x=w.e
x.q$=$.U()
x.M$=0
w.a1()},
Qz(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.c(s.qT(s.b.bdh(!0)),$async$Qz)
case 3:t=s.a
t.bm9()
if(t.aa8()){t.as5()
x=1
break}s.Dx()
case 1:return A.h(v,w)}})
return A.i($async$Qz,w)},
y6(d,e,f){return this.aZZ(d,e,f)},
b8i(d){return this.y6(d,null,null)},
aZZ(d,e,f){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$y6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(u.w==null){u.c.H(y.q).f.Y(A.aC(null,null,null,null,null,C.m,null,A.d("\u0644\u062d\u0638\u0629\u2026 \u0628\u0646\u062c\u0647\u0651\u0632 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641",null,null,null,null,null,null,null,null,null),null,C.x,null,null,null,null,null,null,null,null,null,null))
x=1
break}x=e!=null&&f!=null?3:5
break
case 3:t=new A.W(e,f)
x=4
break
case 5:s=u.c
s.toString
x=6
return A.c(B.cPt(s,d),$async$y6)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.c(u.d.MM(d,t.a,t.b),$async$y6)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.c(A.O(s,!1).aD(A.aH(new B.bOt(u,d,t),null,r),r),$async$y6)
case 8:if(u.c!=null)u.j(new B.bOu())
case 1:return A.h(v,w)}})
return A.i($async$y6,w)},
t(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gaty()&&!A.O(d,!1).vm())u.push(A.bP(x,x,x,x,C.z6,x,x,t.gbjd(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.bP(x,x,x,x,D.avI,x,x,new B.bOx(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.bP(x,x,x,x,C.iB,x,x,new B.bOy(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.aJ5
else w=t?this.aUJ():this.aVk()
return L.y1(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aVk(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.a4N
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.ba3,C.T],x)
for(t=0;t<4;++t){s=D.aLp[t]
u.push(new A.A(C.bu,A.z(A.a([A.aX(s.a,C.ao,p,18),C.O,new A.bS(1,C.ae,A.d(s.b,p,p,p,p,p,G.a2k,p,p,p),p)],x),C.r,C.d,C.e,0,p,p),p))}u=A.J(u,C.r,C.d,C.e,0,C.l)
s=A.a([D.bDE,C.J,A.d("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.bq(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,F.aP,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.bq(C.f.al(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629 \u2713"
C.b.A(s,A.a([C.J,A.d(q,p,p,p,p,p,A.bC(p,p,r?D.e4:C.cO,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.A(s,A.a([C.J,D.bCF],x))
x=A.a([new E.dG(u,C.a7,C.aM,p,!0,p),new E.dG(A.J(s,C.r,C.d,C.e,0,C.l),C.a7,C.aM,p,!1,p),D.bMv,C.J],x)
if(v!=null)x.push(new E.dG(A.d(v,p,p,p,p,p,D.bmZ,p,p,p),C.a7,C.aM,p,!1,p))
else x.push(A.fn(D.asv,p,D.bt2,this.gb_h(),A.el(C.w,C.ah,D.bd6,p,p,p,p)))
x.push(C.a5)
x.push(D.a4J)
return x},
aUJ(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.K(r.a.a),p=q.length===0,o=p?C.rZ:H.csC(q),n=t.z,m=A.Q(v.amE(C.dc,E.bq(s.gauF())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.bq(s.arg()),k=s.c,j=Date.now()
k=k===B.b8b(new A.aQ(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.If(t,!1,u),A.z(A.a([m,C.O,A.Q(v.amE(C.lv,l+" \u064a\u0648\u0645",k),1)],j),C.h,C.d,C.e,0,u,u),C.v],j)
if(n!=null){t=H.kx(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.bq(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.bq(m)+"\u2013"+E.bq(l)
k.push(new E.dG(A.z(A.a([D.auO,C.a_,A.Q(A.J(A.a([D.boY,A.d(t+" \u2014 "+m,u,u,u,u,u,C.bA,u,u,u)],j),C.r,C.d,C.e,0,C.l),1),M.o0],j),C.h,C.d,C.e,0,u,u),C.a7,C.aM,new B.bOq(v,n),!0,u))}t=C.i.a9(0.08)
k.push(A.ay(u,C.o,!1,u,!0,C.m,u,A.az(),r,u,u,u,u,u,2,A.cK(u,new A.cp(4,A.v(14),C.L),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.uK,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.rk,u,u,u,u,u,u,u,u,u,u,u,u),C.q,!0,u,!0,u,!1,u,C.D,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bOr(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.d3,!0,C.u,u,C.E,u,u,u,u))
k.push(C.v)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.byx)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.L)(o),++x)t.push(v.RZ(o[x]))
C.b.A(k,t)}else{t=A.a([D.aZe,D.b__,v.RZ(1)],j)
for(w=114;w>=78;--w)t.push(v.RZ(w))
t.push(C.J)
r=v.f
p=A.aX(r?C.yM:C.lt,C.ao,u,u)
t.push(A.eY(p,u,A.d(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.fh,u,u,u),new B.bOs(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.RZ(w))
C.b.A(k,t)}k.push(C.T)
k.push(D.CU)
return k},
amE(d,e,f){var x=null,w=y.p
return new E.dG(A.z(A.a([A.aX(d,C.w,x,x),C.O,A.Q(A.J(A.a([A.d(e,x,x,x,x,x,C.bA,x,x,x),A.d(f,x,1,C.N,x,x,C.a2Y,x,x,x)],w),C.r,C.d,C.e,0,C.l),1)],w),C.h,C.d,C.e,0,x,x),C.a7,C.H,x,!1,x)},
RZ(d){var x,w=null,v=this.d.c,u=I.cY[d-1].a[1],t=v.a7d(d),s=t/u,r=y.p,q=A.am(A.dA(C.P,A.a([A.ccc(C.eC,G.cV,w,w,w,w,w,3,s,w),A.d(E.bq(d),w,w,w,w,w,P.a3k,w,w,w)],r),C.m,C.bn,w),36,36),p=A.d(H.kx(d),w,w,w,w,w,D.bhH,w,w,w)
if(t===0)x=E.bq(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627 \u2713":"\u062d\u0641\u0638\u062a "+E.bq(t)+" \u0645\u0646 "+E.bq(u)
r=A.a([q,C.cy,A.Q(A.J(A.a([p,A.d(x,w,w,w,w,w,A.bC(w,w,t===u?G.cV:C.cO,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.r,C.d,C.e,0,C.l),1)],r)
if(s>0&&s<1)r.push(A.d(E.bq(C.f.al(s*100))+"\u066a",w,w,w,w,w,D.a2O,w,w,w))
r.push(D.asD)
return new E.dG(A.z(r,C.h,C.d,C.e,0,w,w),C.qB,C.da,new B.bOv(this,d),!1,w)}}
B.If.prototype={
t(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.b0
return D.aYZ
case 3:x=q.y
x=A.a([A.d(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.NE(x),r,r,r,r,r,D.C2,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.DT(w,"model load",r))
x.push(C.J)
x.push(A.cjG(C.mu,r,q.gbjv()))
return new E.dG(A.J(x,C.r,C.d,C.e,0,C.l),C.a7,C.aM,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.f.d1(u/v,0,1):r
s=q&&u<v
q=A.d(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.bq(C.f.al(u/1e6))+" \u0645\u0646 "+E.bq(C.f.al(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.p7,r,r,r)
x=A.v(8)
w=y.p
x=A.a([q,C.B,A.f6(x,A.qr(C.eC,C.w,7,s?t:r,r),C.ay)],w)
if(!this.d)C.b.A(x,A.a([C.J,D.btV],w))
return new E.dG(A.J(x,C.r,C.d,C.e,0,C.l),C.a7,C.aM,r,!1,r)}}}
B.YW.prototype={
t(d){var x=null,w=D.e4.a9(0.1),v=A.v(14),u=A.aK(D.e4.a9(0.4),1)
return A.E(x,A.z(A.a([D.aur,C.O,A.Q(A.d(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,C.Ca,x,x,x),1)],y.p),C.r,C.d,C.e,0,x,x),C.k,x,x,new A.F(w,x,u,v,x,x,x,C.n),x,x,x,C.aM,C.ad,x,x,x)}}
B.EV.prototype={
S(){return"_Phase."+this.b}}
B.DS.prototype={
O(){return new B.a3K($.NL(),D.mM)}}
B.a3K.prototype={
gjg(){var x=this.e
return x===$?this.e=this.a.d:x},
gC7(){var x,w=this.a,v=w.f
w=w.c
x=this.gjg()
return H.NC(w,x,v.yh(w,x)).b},
W(){var x,w=this
w.Z()
x=w.d
x.ac(w.goG())
x.vP()
x.a.a7K(B.aBC(w.a.c,w.gjg()))},
y5(){if(this.c!=null)this.j(new B.c1o())},
m(){var x,w=this,v=w.d
v.U(w.goG())
x=w.Q
if(x!=null)x.av()
v=v.a
v.N3()
v.a4u()
w.a1()},
a01(d){var x,w,v=this
if(v.f===D.vt)v.d.a.a4u()
x=v.d.a
x.N3()
w=v.Q
if(w!=null)w.av()
v.j(new B.c1E(v,d))
x.a7K(B.aBC(v.a.c,d))
w=v.a
if(d<w.e)x.a7K(B.aBC(w.c,d+1))},
Sf(d){return this.aWc(d)},
aWc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Sf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.f===D.vs){u.d.a.N3()
u.j(new B.c1I(u))
x=1
break}t=u.r!=null?D.jn:D.mM
u.j(new B.c1J(u))
s=u.d
r=A.a([B.aBC(u.a.c,u.gjg())],y.s)
q=d==null?s.b.b:d
x=3
return A.c(s.a.Lq(r,q),$async$Sf)
case 3:p=f
if(u.c==null||u.f!==D.vs){x=1
break}u.j(new B.c1K(u,t,p))
case 1:return A.h(v,w)}})
return A.i($async$Sf,w)},
QZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$QZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.kb){x=1
break}p=l.a
p.N3()
r=B.FG(s.gC7()).length
s.j(new B.c1M(s))
o=s.Q
if(o!=null)o.av()
s.Q=A.hg(C.f0,new B.c1N(s))
u=4
o=B.cgk(r)
n=A.du(0,0,0,350*r,0,0)
x=7
return A.c(p.aak(l.b.c,o,n,new B.c1O(s),new B.c1P(s)),$async$QZ)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.a8(k)
if(l instanceof B.lN){q=l
l=s.Q
if(l!=null)l.av()
if(s.c!=null)s.j(new B.c1Q(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QZ,w)},
C1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$C1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.vt){x=1
break}m=s.Q
if(m!=null)m.av()
s.j(new B.c1S(s))
s.Q=A.hg(C.iv,new B.c1T(s))
l=new A.Dj()
$.FJ()
l.op()
r=l
u=4
m=s.d.a
x=7
return A.c(m.aao(),$async$C1)
case 7:q=e
if(q.b<0.8){s.b8h("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.c(m.awF(q,B.FG(s.gC7()).length),$async$C1)
case 8:p=e
s.ch=A.du(0,0,r.ga5N(),0,0,0)
k=A.lO().geK().h(0,"debug")
if(k==="1"){o=B.csS(m.JU())
A.ru().$1("[tutor] "+s.a.c+":"+s.gjg()+" audio="+C.f.aB(q.b,1)+"s infer="+p.b+"ms total="+r.gCT()+"ms "+p.gTH()+" text="+p.a)
A.ru().$1("[tutor] stages: "+A.n(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.f.aB(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.f.aB(p.b/1000,2)+" \u062b\n"+p.gTH()+"\n"+A.n(o)+"\n"+p.a}s.agF(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.a8(i)
if(m instanceof B.lN){n=m
m=A.lO().geK().h(0,"debug")
if(m==="1")A.ru().$1("[tutor] check failed: "+A.n(n)+"\n"+s.d.a.JU())
s.a3j(B.NE(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$C1,w)},
a3j(d,e){var x=this,w=x.Q
if(w!=null)w.av()
if(x.c==null)return
x.j(new B.c1D(x,d,e))},
b8h(d){return this.a3j(d,null)},
agF(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.av()
if(s.c==null)return
x=B.cqS(s.gC7(),d)
r.a=null
if(C.c.K(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gjg()
t=x.gtF()
r.a=w.avG(v,u,q.b.a,t)
q.A6()}s.j(new B.c1F(r,s,x))},
Oz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Oz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.kb){x=1
break}s.j(new B.c1w(s))
l=s.Q
if(l!=null)l.av()
s.Q=A.hg(C.iv,new B.c1x(s))
k=new A.Dj()
$.FJ()
k.op()
r=k
u=4
l=g.a
x=7
return A.c(l.bol(B.aBC(s.a.c,s.gjg()),B.FG(s.gC7()).length),$async$Oz)
case 7:q=e
p=B.csS(l.JU())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.f.aB(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.f.aB(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.f.aB(r.gCT()/1000,2)+" \u062b)\n"+q.gTH()+"\n"+A.n(p)+"\n"+q.a
A.ru().$1("[tutor-debug] "+s.a.c+":"+s.gjg()+" audio="+C.f.aB(q.c,1)+"s infer="+q.b+"ms total="+r.gCT()+"ms "+q.gTH()+" text="+q.a)
A.ru().$1("[tutor-debug] stages: "+A.n(p))
s.ch=A.du(0,0,r.ga5N(),0,0,0)
s.agF(q.a)
n=s.r
if(n!=null){l=n.gtF()
j=n.b
i=A.aj(j).i("ah<1>")
j=A.a9(new A.ah(j,new B.c1y(),i),i.i("Y.E"))
A.ru().$1("[tutor-debug] perfect="+l+" ops="+A.n(j))}s.j(new B.c1z(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.a8(f)
if(l instanceof B.lN){m=l
A.ru().$1("[tutor-debug] failed: "+A.n(m)+"\n"+g.a.JU())
s.a3j(B.NE(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Oz,w)},
ga21(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.rz():v).a!==D.fp)return!1}return!0},
t(d){var x,w=this,v=null,u=w.d,t=u.c.a7l(w.a.c,w.gjg()),s=u.b,r=s.d&&!w.x&&w.f!==D.jn,q=H.kx(w.a.c),p=y.p,o=A.a([A.bP(v,v,v,v,C.iB,v,v,new B.c1Y(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.aMq(),m=A.d("\u0622\u064a\u0629 "+E.bq(w.gjg()),v,v,v,v,v,C.ms,v,v,v),l=E.bq(w.gjg()-w.a.d+1),k=w.a
s=A.a([A.z(A.a([m,C.aV,A.d("("+l+" \u0645\u0646 "+E.bq(k.e-k.d+1)+")",v,v,v,v,v,F.aP,v,v,v),C.bD,w.b05(t,s.a)],p),C.h,C.d,C.e,0,v,v),C.v],p)
if(r)s.push(w.aUE())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.vt&&l!==D.pv}else l=!1
if(l)s.push(w.aK3(m))
else s.push(A.d(w.gC7()+" \ufd3f"+E.bq(w.gjg())+"\ufd3e",v,v,v,v,v,D.kB,C.W,C.b8,v))}s=A.a([new B.If(u,!0,v),n,C.B,new E.dG(A.J(s,C.a9,C.d,C.e,0,C.l),D.alm,C.aM,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.jn)s.push(w.b9M(n))
if(w.r!=null&&w.f===D.jn&&w.ch!=null){x=C.f.al(C.j.aI(w.ch.a,1000)/100)
s.push(new A.A(C.bu,A.d("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.bq(C.j.aI(x,10))+"\u066b"+E.bq(C.j.a3(x,10)))+" \u062b",v,v,v,v,v,F.aP,C.W,v,v),v))}n=w.as
if(n!=null)s.push(new A.A(C.aM,A.d(n,v,v,v,v,v,D.C2,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.DT(n,"check "+w.a.c+":"+w.gjg(),v))}s.push(w.aKE())
s.push(C.T)
s.push(A.iC(C.w,C.H,v,new B.c1Z(w),D.bqK,D.bwe,u.b.d))
n=w.a
if(n.e>n.d){n=w.ga21()
s.push(new E.dG(A.z(A.a([D.ar4,C.a_,A.Q(A.J(A.a([D.bxT,A.d(w.ga21()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,F.aP,v,v,v)],p),C.r,C.d,C.e,0,C.l),1),M.o0],p),C.h,C.d,C.e,0,v,v),C.a7,C.aM,new B.c2_(w,d),n,v))}n=A.lO().geK().h(0,"debug")
if(n==="1"){p=A.a([C.B,A.d7(D.asu,D.bvG,u.f===D.kb&&w.f!==D.pv?w.gaLn():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.A(C.h5,A.p6(n,F.aP,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gn7()
u=u.x
p.push(A.d("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,F.aP,v,v,v))}p.push(A.b2(D.bx1,v,v,v,new B.c20(w,d),v,v))
C.b.A(s,p)}s.push(C.B)
s.push(D.CU)
return L.y1(o,s,q)},
aMq(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.b0
return A.am(A.fo(new B.c1B(this),w,null,C.af,new B.c1C()),36,null)},
b05(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.fp)return D.bag
x=d.b
w=E.bq(x)
v=E.bq(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.c2:C.r9
u.push(new A.A(D.am5,A.aX(r,s?G.cV:C.eZ,q,16),q))}return A.Kx(A.z(u,C.h,C.d,C.I,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aUE(){var x=null
return A.bu(!1,A.v(12),!0,A.E(x,D.ah4,C.k,x,x,new A.F(C.q5,x,x,A.v(12),x,x,x,C.n),x,x,x,x,D.akU,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.c1H(this),x,x,x,x,x,x,x)},
aK3(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.at(d.gN1(),w)
A:{if(D.jg===v){u=D.kB.cv(G.cV)
break A}if(D.vc===v){u=D.kB.a56(D.e4,C.fO,D.e4)
break A}if(D.vd===v){u=D.kB.a56(D.eX,C.fO,D.eX)
break A}u=D.kB.a56(C.eZ,C.j9,C.c9)
break A}t=x[w]
r.push(new A.eT(t.a,s,s,C.bv,s,s,s,s,s,s,u))
r.push(O.BU)}x=E.bq(this.gjg())
r.push(A.ex(s,s,s,s,s,s,s,s,s,D.kB.cv(C.ao),"\ufd3f"+x+"\ufd3e"))
return A.Dw(A.ex(r,s,s,s,s,s,s,s,s,s,s),s,s,s,C.W,C.b8)},
b9M(d){var x,w,v,u,t,s,r=this.w
if(C.c.K(d.c).length===0)return D.bLT
if(d.gtF()){x=r==null
if((x?null:r.a)===D.fp&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.fp?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.bq(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.Ea(G.cV,C.c2,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713",x,null)}x=d.gN1()
w=J.dJ(x)
v=w.io(x,new B.c1U()).gN(0)
u=w.io(x,new B.c1V()).gN(0)
t=w.io(x,new B.c1W()).gN(0)
x=A.a([],y.s)
if(u>0)x.push(E.bq(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.bq(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.bq(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gKd().length!==0)x.push(E.bq(d.gKd().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.eX:D.e4
x=C.b.aq(x," \u2022 ")
s=d.gKd().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.aq(d.gKd(),"\u060c "):""
return new B.Ea(w,C.nQ,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
aKE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.kb,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.j.aI(new A.aQ(f,0,!1).dB(w).a,1e6)}v=C.j.aI(B.cgk(B.FG(j.gC7()).length).a,1e6)
f=j.gb6R()
w=96+26*j.y
u=D.eX.a9(0.25)
w=A.hT(i,A.a6C(C.P,A.E(i,D.asH,C.k,i,i,D.a8N,i,84,i,i,i,i,i,84),i,C.aU,new A.F(u,i,i,i,i,i,i,C.bX),C.FR,i,w,i,w),C.q,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i,!1,C.cw)
u=A.d("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.cfe(x)+" / "+B.cfe(v),i,i,i,i,i,K.p6,i,i,i)
return A.J(A.a([w,C.B,u,A.d(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,F.aP,i,i,i),A.b2(D.bCE,i,i,i,f,i,i)],y.p),C.h,C.d,C.e,0,C.l)
case 3:t=C.f.eE((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.bq(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.bq(t)+" \u062b)"
return new A.A(C.qw,A.J(A.a([C.wk,C.T,D.bun,A.d(h,i,i,i,i,i,F.aP,C.W,i,i)],y.p),C.h,C.d,C.e,0,C.l),i)
default:s=f===D.vs
r=j.r
f=r==null
w=!f
q=w&&r.gtF()
u=A.aX(s?C.nR:K.Iv,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.d(p,i,i,i,i,i,i,i,i,i)
o=A.el(i,i,D.bd3,i,i,i,i)
u=A.Q(new A.Aq(C.a5z,!0,new B.c1p(j,r,q),i,i,i,o,C.k,i,!1,i,!0,i,new A.ZA(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.Kh[n]
p.push(new A.eh(m,i,A.d("\xd7"+E.bq(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.z(A.a([u,C.O,A.nH(new B.c1q(j),p,A.dh([h.b.b],o),!1,A.kB(i,i,i,new A.bh(new B.c1r(),l),i,i,i,i,new A.bh(new B.c1s(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.cS),o)],k),C.h,C.d,C.e,0,i,i)
h=g&&!s?j.gb2c():i
u=A.aX(f?D.r4:C.nQ,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.d(f,i,i,i,i,i,C.cr,i,i,i)
p=q?C.is:C.w
h=A.a([o,C.v,A.fn(u,i,f,h,A.el(p,q?C.i:C.ah,D.ul,i,i,i,i))],k)
if(w&&j.gjg()<j.a.e)C.b.A(h,A.a([C.B,q?A.fn(D.aw3,i,D.bBj,new B.c1t(j),A.el(G.cV,C.ah,D.ul,i,i,i,i)):A.b2(D.brb,i,i,i,new B.c1u(j),i,i)],k))
if(w){f=j.gjg()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.A(C.hS,A.d(j.ga21()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,K.uS,C.W,i,i),i))
return A.J(h,C.a9,C.d,C.e,0,C.l)}}}
B.Ea.prototype={
t(d){var x=this,w=null,v=x.c,u=v.a9(0.12),t=A.v(14),s=A.aK(v.a9(0.5),1),r=y.p
return A.E(w,A.z(A.a([A.aX(x.d,v,w,w),C.O,A.Q(A.J(A.a([A.d(x.e,w,w,w,w,w,A.bC(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.bN,A.d(x.f,w,w,w,w,w,C.Ca,w,w,w)],r),C.r,C.d,C.e,0,C.l),1)],r),C.r,C.d,C.e,0,w,w),C.k,w,w,new A.F(u,w,s,t,w,w,w,C.n),w,w,w,C.aM,C.ad,w,w,w)}}
B.DR.prototype={
O(){var x=y.S
return new B.a3J($.NL(),A.C(x,y.B),A.aO(x),A.C(x,y.N),A.et(null,y.H))}}
B.a3J.prototype={
W(){this.Z()
this.d.ac(this.goG())},
y5(){if(this.c!=null)this.j(new B.c17())},
m(){var x,w=this,v=w.d
v.U(w.goG())
x=w.y
if(x!=null)x.av()
v.a.a4u()
w.a1()},
II(d){return this.b6A(d)},
b6A(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$II=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.j(new B.c1g(t,d))
r=t.y
if(r!=null)r.av()
t.y=A.hg(C.f0,new B.c1h(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.cgk(B.FG(H.NC(q,d,p.yh(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.du(0,0,0,350*B.FG(H.NC(p,d,o.yh(p,d)).b).length,0,0)
x=6
return A.c(r.a.aak(r.b.c,q,p,new B.c1i(t,d),new B.c1j(t)),$async$II)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.a8(m)
if(r instanceof B.lN){s=r
r=t.y
if(r!=null)r.av()
if(t.c!=null)t.j(new B.c1k(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$II,w)},
G2(d,e){return this.aNG(d,e)},
aNG(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$G2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.av()
s.j(new B.c1b(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.aao()
if(e&&n!=null)s.II(n)
q=null
u=4
x=7
return A.c(r,$async$G2)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a8(l)
if(o instanceof B.lN){p=o
s.j(new B.c1c(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bJ(new B.c1d(s,o,d),y.H)}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$G2,w)},
gaYr(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aF(x)&&!v.n(0,x)&&!u.aF(x)&&x!==t.e)return x
return null},
b37(){this.j(new B.c1e(this))},
t(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.kb,o=s.e,n=s.gaYr(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.y(m).i("c5<2>")
x=new A.ah(new A.c5(m,l),new B.c1l(),l.i("ah<Y.E>")).gN(0)
l=H.kx(s.a.c)
m=y.p
q=A.a([new B.If(q,!0,r),A.d("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.bq(s.a.d)+" \u0644\u062d\u062f "+E.bq(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,F.aP,r,r,r),C.v],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.b8j(w))
q.push(C.B)
k=s.Q
if(k!=null)q.push(A.d(k,r,r,r,r,r,D.C2,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.DT(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.bq(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.j.aI(new A.aQ(v,0,!1).dB(u).a,1e6)
v=u}v=A.d("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.cfe(v),r,r,r,r,r,K.p6,C.W,r,r)
j=A.f6(A.v(6),A.qr(C.eC,D.eX,6,s.x,r),C.ay)
u=o<s.a.e
t=A.aX(u?R.Ip:C.nR,r,r,r)
C.b.A(q,A.a([v,C.J,j,C.v,A.fn(t,r,A.d(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cr,r,r,r),new B.c1m(s,o),A.el(C.w,C.ah,D.ul,r,r,r,r))],m))}else if(n!=null){j=p?new B.c1n(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.bq(n)
q.push(A.fn(D.atU,r,A.d(v,r,r,r,r,r,C.cr,r,r,r),j,A.el(C.w,C.ah,D.ul,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aZr)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?G.cV:D.e4
v=k?C.nI:C.nQ
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647 \u2713 \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.bq(x)
u=s.a
u=k+" \u0645\u0646 "+E.bq(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.A(q,A.a([new B.Ea(j,v,k,u,r),A.d7(D.avS,D.bBZ,s.gb36(),r)],m))}q.push(C.v)
q.push(D.CU)
return L.y1(r,q,"\u0633\u0645\u0651\u0639 "+l)},
b8j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.atc
else if(l.r.n(0,d))x=N.uo
else if(i!=null)x=D.atv
else if(j!=null){w=j.gtF()?C.c2:D.apC
x=A.aX(w,j.gtF()?G.cV:D.e4,k,k)}else x=D.arM
w=y.p
v=A.a([A.z(A.a([A.d("\u0622\u064a\u0629 "+E.bq(d),k,k,k,k,k,C.a35,k,k,k),C.bD,x],w),C.h,C.d,C.e,0,k,k)],w)
if(i!=null)v.push(A.d(i,k,k,k,k,k,D.a3_,k,k,k))
if(j!=null&&!j.gtF()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gN1()
o=J.bb(p)
n=o.h(p,r)
A:{if(D.jg===n){m=G.cV
break A}if(D.vc===n){m=D.e4
break A}if(D.vd===n){m=D.eX
break A}m=C.eZ
break A}m=D.kB.bdX(m,o.h(p,r)===D.ve?C.j9:k,22)
C.b.A(t,A.a([new A.eT(q.a,k,k,C.bv,k,k,k,k,k,k,m),O.BU],u))}w=A.a([C.ak,A.Dw(A.ex(t,k,k,k,k,k,k,k,k,k,k),k,k,k,C.W,C.b8)],w)
if(C.c.K(j.c).length===0)w.push(D.bxg)
C.b.A(v,w)}return new E.dG(A.J(v,C.a9,C.d,C.e,0,C.l),C.bQ,C.da,k,!1,k)}}
B.DQ.prototype={
O(){return new B.a3I($.NL())}}
B.a3I.prototype={
W(){this.Z()
var x=this.d
x.ac(this.goG())
x.vP()},
y5(){if(this.c!=null)this.j(new B.c0Z())},
m(){this.d.U(this.goG())
this.a1()},
t(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gaAi(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.ie(o,0,new B.c15(q))
v=C.b.ie(o,0,new B.c16())
o=y.p
o=A.a([A.z(A.a([A.Q(s.YS(E.bq(q.gauF()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.O,A.Q(s.YS(E.bq(q.arg()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.O,A.Q(s.YS(E.bq(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.h,C.d,C.e,0,r,r),C.v,new E.dG(A.J(A.a([A.d("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.bq(C.f.al(w*100/v))+"\u066a",r,r,r,r,r,C.bA,r,r,r),C.J,A.f6(A.v(6),A.qr(C.eC,G.cV,8,w/v,r),C.ay),C.ak,A.d(E.bq(w)+" \u0645\u0646 "+E.bq(v)+" \u0622\u064a\u0629",r,r,r,r,r,F.aP,r,r,r)],o),C.r,C.d,C.e,0,C.l),C.a7,C.aM,r,!1,r)],o)
if(p.length===0)o.push(D.aZH)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.L)(p),++t)o.push(s.b8l(p[t]))
o.push(C.B)
u=$.D().b
u===$&&A.b()
u=u.ga4().e.a
o.push(A.d((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,F.aP,r,r,r))
return L.y1(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
YS(d,e){var x=null
return new E.dG(A.J(A.a([A.d(d,x,x,x,x,x,D.blW,x,x,x),A.d(e,x,x,x,x,x,C.a3x,C.W,x,x)],y.p),C.h,C.d,C.e,0,C.l),C.a7,C.H,x,!1,x)},
b8l(d){var x=null,w=this.d.c,v=I.cY[d-1].a[1],u=w.a7d(d),t=w.bjc(d),s=y.p,r=A.z(A.a([A.Q(A.d(H.kx(d),x,x,x,x,x,C.bA,x,x,x),1),A.d(E.bq(C.f.al(u*100/v))+"\u066a",x,x,x,x,x,D.bn_,x,x,x)],s),C.h,C.d,C.e,0,x,x),q=A.f6(A.v(6),A.qr(C.eC,G.cV,7,u/v,x),C.ay),p=E.bq(u),o=E.bq(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.bq(t):""
return new E.dG(A.J(A.a([r,C.J,q,C.ak,A.d("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,F.aP,x,x,x)],s),C.r,C.d,C.e,0,C.l),C.a7,C.aM,new B.c14(this,d),!1,x)},
OC(d){return this.aLJ(d)},
aLJ(d){var x=0,w=A.j(y.H),v=this,u,t
var $async$OC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=I.cY[d-1].a[1]
t=v.c
t.toString
x=2
return A.c(A.e4(C.cU,new B.c13(v,d,u),t,!0,null,null,!1,y.H),$async$OC)
case 2:return A.h(null,w)}})
return A.i($async$OC,w)}}
B.akS.prototype={
Se(d,e){var x=null,w=A.jR(x,x,x,x,x,x,x,x,x,x,x,D.bcD,C.H,x,x,x,x,C.ka,x,x)
return A.b2(A.d(d,x,x,x,x,x,C.mr,x,x,x),x,x,x,new B.b7Y(e),x,w)},
t(d){var x=this,w=y.p
return new E.dG(A.J(A.a([D.bB3,C.J,D.bCD,A.cF(C.ar,A.a([x.Se("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Se("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.av,0,12),D.bqk,x.Se("tanzil.net","https://tanzil.net"),D.bEk,x.Se("everyayah.com","https://everyayah.com")],w),C.r,C.d,C.e,0,C.l),C.a7,C.aM,null,!1,null)}}
B.DT.prototype={
O(){return new B.a3L()}}
B.a3L.prototype={
gant(){var x=this.a
return B.cQO(x.c,x.d,$.cgX().JU())},
Sg(){var x=0,w=A.j(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Sg=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.j(new B.c21(s))
v=3
r=A.cak()
n=s.gant()
m=y.N
q=A.C(m,m)
J.e_(q,"app","mogtama3y")
J.e_(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.a7(r,0,160):r
J.e_(q,"ua",m)}x=6
return A.c(A.abf(n,null,C.GZ,q),$async$Sg)
case 6:if(s.c!=null)s.j(new B.c22(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.a8(k)
o=p instanceof A.c6?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.j(new B.c23(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.j(new B.c24(s))
x=t.pop()
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$Sg,w)},
t(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.bu(!1,t,!0,new A.A(C.le,A.z(A.a([A.aX(u.d?C.yM:C.lt,C.c9,t,18),C.bM,D.bDr],s),C.h,C.d,C.e,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.c26(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.v(8)
s.push(A.E(t,A.p6(u.gant(),D.bi7,t,C.z),C.k,t,t,new A.F(C.q5,t,t,x,t,t,t,C.n),t,t,t,D.akX,C.ej,t,t,1/0))}if(u.f)s.push(D.bqE)
else{x=A.jR(t,t,t,t,t,t,t,t,t,t,t,C.a1m,C.H,t,t,t,t,C.ka,t,t)
w=u.e
v=w?t:u.gb8k()
s.push(A.eY(w?C.a1A:D.avg,t,D.bA1,v,x))}x=u.r
if(x!=null)s.push(A.d(x,t,t,t,t,t,D.a3_,t,t,t))
return new A.A(C.aM,A.J(s,C.r,C.d,C.e,0,C.l),t)}}
var z=a.updateTypes(["al<~>()","~()","M(nR)","al<KF>()","al<KD>()","al<KE>()","a6<nR>()","M(rK)","bI(oZ)","DS(u)","DQ(u)","M(na)","DR(u)","M(Jf)"])
B.b7Z.prototype={
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
m=B.cFY("network",A.n(o))
throw A.t(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:314}
B.b81.prototype={
$1(d){var x=null
return A.c4D(A.cR(d,"persist",x,x,x,x))},
$S:1161}
B.b80.prototype={
$0(){var x=0,w=A.j(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.c(q.rj(),$async$$0)
case 4:x=3
return A.c(n.eM(m.cW(l.cR(e,"loadModel",A.c5l(new B.b8_(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.q(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.q(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.ri(p,"ms")
r=q.ou(p,"cached")
A.q(p.backend)
v=new B.KD(o,t,s,r,q.ri(p,"threads"),q.ou(p,"isolated"),q.ri(p,"warmMs"))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+4}
B.b8_.prototype={
$2(d,e){this.a.$2(C.f.al(d),C.f.al(e))},
$S:1162}
B.b85.prototype={
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
u.maxMs=C.j.aI(v.b.a,1000)
u.autoStop=v.c
u.minMs=C.j.aI(v.d.a,1000)
u.onLevel=A.fY(new B.b83(v.e))
u.onAutoStop=A.fY(new B.b84(v.f))
x=5
return A.c(A.eM(A.cW(A.cR(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.b83.prototype={
$1(d){return this.a.$1(d)},
$S:72}
B.b84.prototype={
$1(d){return this.a.$1(d)},
$S:4}
B.b86.prototype={
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
v=new B.KE(r,A.dV(r.seconds))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+5}
B.b88.prototype={
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
return A.c(q.eM(p.cW(o.cR(e,"transcribe",t.audio,t.rate,s.ajG(u.c),null)),y.m),$async$$0)
case 3:v=r.ann(e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+3}
B.b87.prototype={
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
return A.c(r.eM(q.cW(p.cR(e,"transcribeUrl",u.b,t.ajG(u.c),null,null)),y.m),$async$$0)
case 3:v=s.ann(e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+3}
B.b82.prototype={
$1(d){return d},
$S:37}
B.aYZ.prototype={
$0(){var x,w,v,u,t=this.a,s=A.cc(t.a.length,D.ve,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aYY.prototype={
$1(d){return d===D.jg},
$S:z+2}
B.c54.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.cbi(e[x],d[x])<0.75)return!1
return!0},
$S:1163}
B.c7b.prototype={
$1(d){return d.length!==0},
$S:10}
B.b8c.prototype={
$1(d){return d.a===D.fp},
$S:z+7}
B.b8d.prototype={
$1(d){return C.j.aI(d,1000)},
$S:59}
B.b8a.prototype={
$1(d){return C.f.bB(d)},
$S:1164}
B.b8e.prototype={
$0(){var x=0,w=A.j(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$0=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(A.iM("mt.tutor.settings"),$async$$0)
case 7:r=a3
if(r!=null){k=y.P.a(C.ap.f4(r,null))
j=A.as(k.h(0,"n"))
j=j==null?null:C.f.bB(j)
j=C.j.d1(j==null?2:j,1,5)
i=C.b.n(D.Kh,k.h(0,"r"))?A.ez(k.h(0,"r")):1
h=A.eq(k.h(0,"auto"))
g=A.eq(k.h(0,"hide"))
k=A.eq(k.h(0,"in"))
s.a.b=new B.Wv(j,i,h!==!1,g===!0,k===!0)}u=2
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
return A.c(A.iM("mt.tutor.progress"),$async$$0)
case 12:q=a3
if(q!=null)s.a.c=B.cex(y.P.a(C.ap.f4(q,null)))
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
return A.c(A.iM("mt.tutor.last"),$async$$0)
case 17:p=a3
if(p!=null){o=y.P.a(C.ap.f4(p,null))
n=C.f.bB(A.cT(J.at(o,"s")))
m=C.f.bB(A.cT(J.at(o,"f")))
l=C.f.bB(A.cT(J.at(o,"t")))
if(B.csX(n,m)&&B.csX(n,l)&&m<=l)s.a.z=new A.aZ(n,m,l)}u=2
x=16
break
case 14:u=13
a0=t.pop()
x=16
break
case 13:x=2
break
case 16:k=s.a
if(k.b.e&&k.a.aa8()){k.a.as5()
x=1
break}a1=k
x=18
return A.c(k.a.Nm(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.a5()
if(k.b.e)k.Dx()
k.wN()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:114}
B.b8f.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.a5()},
$S:1165}
B.b8g.prototype={
$2(d,e){return C.j.aI(A.eL(A.n(d),null,null),1000)===this.a},
$S:1166}
B.bOB.prototype={
$1(d){var x=0,w=A.j(y.a),v=this,u,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.c(u.d.a.EP(),$async$$1)
case 2:t=f
if(u.c!=null)u.j(new B.bOA(u,t))
return A.h(null,w)}})
return A.i($async$$1,w)},
$S:1167}
B.bOA.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bOC.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.bOz(x,d))},
$S:z+8}
B.bOz.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bOD.prototype={
$1(d){},
$S:26}
B.bOn.prototype={
$0(){},
$S:0}
B.bOt.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.DS(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bOu.prototype={
$0(){},
$S:0}
B.bOx.prototype={
$0(){var x=y.z
return A.O(this.a,!1).aD(A.aH(new B.bOw(),null,x),x)},
$S:0}
B.bOw.prototype={
$1(d){return D.bFK},
$S:z+10}
B.bOy.prototype={
$0(){return B.csJ(this.a)},
$S:0}
B.bOq.prototype={
$0(){var x=this.b
return this.a.y6(x.a,x.b,x.c)},
$S:0}
B.bOr.prototype={
$1(d){return this.a.j(new B.bOp())},
$S:4}
B.bOp.prototype={
$0(){},
$S:0}
B.bOs.prototype={
$0(){var x=this.a
return x.j(new B.bOo(x))},
$S:0}
B.bOo.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bOv.prototype={
$0(){return this.a.b8i(this.b)},
$S:0}
B.c9Y.prototype={
$1(d){return new A.jk(new B.c9V(this.a,this.b,this.c),null)},
$S:56}
B.c9V.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.c9X(u,e),s=this.a,r=new B.c9W(s,e),q=A.d(H.kx(this.c),v,v,v,v,v,C.mo,v,v,v),p=A.d("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.bq(u)+" \u0622\u064a\u0629)",v,v,v,v,v,F.aP,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.bq(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.bq(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.j.d1(w+4,1,u)))}u=A.a([q,C.ak,p,C.v,A.cF(C.ar,n,C.av,6,8),C.B,A.z(A.a([t.$3("\u0645\u0646",s.b,new B.c9Q(s)),C.a1x,t.$3("\u0644\u062d\u062f",s.c,new B.c9R(s))],o),C.h,C.d,C.e,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aZw)
u.push(C.a5)
u.push(A.d1(D.btP,v,new B.c9S(s,d),A.el(C.w,C.ah,D.bd0,v,v,v,v)))
return A.cx(!0,new A.A(C.Gp,A.J(u,C.a9,C.d,C.I,0,C.l),v),C.H,!0)},
$S:286}
B.c9X.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.d(d,u,u,u,u,u,C.ic,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.c4(v,A.d("\u0622\u064a\u0629 "+E.bq(v),u,u,u,u,u,u,u,u,u),C.ai,u,w))
return A.Q(A.J(A.a([t,Q.GX(C.cU,!0,s,320,new B.c9U(this.b,f),D.bng,e,y.S)],y.p),C.r,C.d,C.e,0,C.l),1)},
$S:1169}
B.c9U.prototype={
$1(d){return d==null?null:this.a.$1(new B.c9T(this.b,d))},
$S:51}
B.c9T.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.c9W.prototype={
$3(d,e,f){var x=null
return A.aCu(x,A.d(d,x,x,x,x,x,x,x,x,x),new B.c9P(this.a,this.b,e,f))},
$S:1170}
B.c9P.prototype={
$0(){var x=this
return x.b.$1(new B.c9O(x.a,x.c,x.d))},
$S:0}
B.c9O.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.c9Q.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:15}
B.c9R.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:15}
B.c9S.prototype={
$0(){var x=this.a
return A.O(this.b,!1).ad(new A.W(x.b,x.c))},
$S:0}
B.c1o.prototype={
$0(){},
$S:0}
B.c1E.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.mM
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.c1I.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.jn:D.mM},
$S:0}
B.c1J.prototype={
$0(){var x=this.a
x.f=D.vs
x.as=null},
$S:0}
B.c1K.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.c1M.prototype={
$0(){var x=this.a
x.f=D.vt
x.as=null
x.y=0
x.z=new A.aQ(Date.now(),0,!1)
x.ax=null},
$S:0}
B.c1N.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1L())},
$S:28}
B.c1L.prototype={
$0(){},
$S:0}
B.c1P.prototype={
$1(d){return this.a.y=d},
$S:72}
B.c1O.prototype={
$1(d){return this.a.C1()},
$S:4}
B.c1Q.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.jn:D.mM
x=this.b
w.as=B.NE(x)
w.at=x},
$S:0}
B.c1S.prototype={
$0(){var x=this.a
x.f=D.pv
x.ay=Date.now()},
$S:0}
B.c1T.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1R())},
$S:28}
B.c1R.prototype={
$0(){},
$S:0}
B.c1D.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.jn:D.mM
x.as=this.b
x.at=this.c},
$S:0}
B.c1F.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.jn
x.x=!1},
$S:0}
B.c1w.prototype={
$0(){var x=this.a
x.f=D.pv
x.ay=Date.now()
x.as=null},
$S:0}
B.c1x.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1v())},
$S:28}
B.c1v.prototype={
$0(){},
$S:0}
B.c1y.prototype={
$1(d){return d.d!==D.jg},
$S:z+11}
B.c1z.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.c1Y.prototype={
$0(){return B.csJ(this.a)},
$S:0}
B.c1Z.prototype={
$1(d){var x=this.a.d
return x.qT(x.b.aqL(d))},
$S:3}
B.c2_.prototype={
$0(){var x=y.z
return A.O(this.b,!1).aD(A.aH(new B.c1X(this.a),null,x),x)},
$S:0}
B.c1X.prototype={
$1(d){var x=this.a.a
return new B.DR(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.c20.prototype={
$0(){this.a.d.a.bnv()
this.b.H(y.q).f.Y(D.bea)},
$S:0}
B.c1C.prototype={
$2(d,e){return C.aV},
$S:18}
B.c1B.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.a7l(s.c,r).a.a){case 2:s=G.cV
break
case 1:s=D.e4
break
case 0:s=C.is
break
default:s=u}x=A.v(18)
w=t.f===D.pv?u:new B.c1A(t,r)
v=s.a9(0.25)
if(r===t.gjg())s=C.i
s=A.aK(s,r===t.gjg()?2:1)
return A.bu(!1,x,!0,A.E(C.P,A.d(E.bq(r),u,u,u,u,u,C.a2E,u,u,u),C.k,u,u,new A.F(v,u,s,u,u,u,u,C.bX),u,u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:65}
B.c1A.prototype={
$0(){return this.a.a01(this.b)},
$S:0}
B.c1H.prototype={
$0(){var x=this.a
return x.j(new B.c1G(x))},
$S:0}
B.c1G.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c1U.prototype={
$1(d){return d===D.vc},
$S:z+2}
B.c1V.prototype={
$1(d){return d===D.vd},
$S:z+2}
B.c1W.prototype={
$1(d){return d===D.ve},
$S:z+2}
B.c1p.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Sf(x)},
$S:0}
B.c1q.prototype={
$1(d){var x=this.a.d
return x.qT(x.b.bdl(d.ga_(d)))},
$S:116}
B.c1s.prototype={
$1(d){return d.n(0,C.V)?C.ah:C.i},
$S:5}
B.c1r.prototype={
$1(d){return d.n(0,C.V)?C.w:C.a8},
$S:5}
B.c1t.prototype={
$0(){var x=this.a
return x.a01(x.gjg()+1)},
$S:0}
B.c1u.prototype={
$0(){var x=this.a
return x.a01(x.gjg()+1)},
$S:0}
B.c17.prototype={
$0(){},
$S:0}
B.c1g.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.aQ(Date.now(),0,!1)},
$S:0}
B.c1h.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1f())},
$S:28}
B.c1f.prototype={
$0(){},
$S:0}
B.c1j.prototype={
$1(d){return this.a.x=d},
$S:72}
B.c1i.prototype={
$1(d){return this.a.G2(this.b,!1)},
$S:4}
B.c1k.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.NE(x)
w.as=x},
$S:0}
B.c1b.prototype={
$0(){var x=this.a
x.e=null
x.r.E(0,this.b)},
$S:0}
B.c1c.prototype={
$0(){var x,w=this.a,v=this.b
w.r.L(0,v)
x=this.c
w.w.p(0,v,B.NE(x))
w.as=x},
$S:0}
B.c1d.prototype={
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
return A.c(n.a.awF(s.b,B.FG(H.NC(l,m,k.yh(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.cqS(H.NC(l,m,k.yh(l,m)).b,r.a)
if(C.c.K(q.c).length!==0){l=n.c
k=o.a.c
j=q.gtF()
l.avG(k,m,n.b.a,j)}n.A6()
if(o.c!=null)o.j(new B.c18(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.a8(h)
if(o instanceof B.lN){p=o
o=s.a
if(o.c!=null)o.j(new B.c19(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.j(new B.c1a(o,s.c))
x=t.pop()
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$$1,w)},
$S:148}
B.c18.prototype={
$0(){var x=this.c
this.a.f.p(0,this.b,x)
return x},
$S:0}
B.c19.prototype={
$0(){var x=this.a,w=this.c
x.w.p(0,this.b,B.NE(w))
x.as=w},
$S:0}
B.c1a.prototype={
$0(){return this.a.r.L(0,this.b)},
$S:0}
B.c1e.prototype={
$0(){var x=this.a
x.f.ao(0)
x.w.ao(0)
x.as=null},
$S:0}
B.c1l.prototype={
$1(d){return d.gtF()},
$S:z+13}
B.c1m.prototype={
$0(){return this.a.G2(this.b,!0)},
$S:0}
B.c1n.prototype={
$0(){return this.a.II(this.b)},
$S:0}
B.c0Z.prototype={
$0(){},
$S:0}
B.c15.prototype={
$2(d,e){return d+this.a.a7d(e)},
$S:117}
B.c16.prototype={
$2(d,e){return d+I.cY[e-1].a[1]},
$S:117}
B.c14.prototype={
$0(){return this.a.OC(this.b)},
$S:0}
B.c13.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.d(H.kx(p),q,q,q,q,q,C.mo,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.b9(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.rz():r).a.a){case 2:r=G.cV.a9(0.35)
break
case 1:r=D.e4.a9(0.35)
break
case 0:r=C.fs
break
default:r=q}m.push(A.E(C.P,A.d(E.bq(t),q,q,q,q,q,C.kz,q,q,q),C.k,q,q,new A.F(r,q,q,new A.cE(s,s,s,s),q,q,q,C.n),q,38,q,q,q,q,q,38))}return A.cx(!0,new A.A(C.h7,A.J(A.a([o,C.ak,D.byc,C.v,new A.dm(D.a8D,A.f4(A.cF(C.ar,m,C.av,6,6),q,C.q,q,q,q,C.y),q),C.T,A.b2(D.bA4,q,q,q,new B.c12(w,d,p),q,q)],n),C.a9,C.d,C.I,0,C.l),q),C.H,!0)},
$S:35}
B.c12.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.c(A.dc(null,null,!0,null,new B.c11(t),u,null,!0,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.c(v.a.d.LH(t),$async$$0)
case 5:if(u.e!=null)A.O(u,!1).e5()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.c11.prototype={
$1(d){var x=null,w=A.d("\u0647\u062a\u0628\u062f\u0623 "+H.kx(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.di(A.a([A.b2(C.ew,x,x,x,new B.c1_(d),x,x),A.b2(C.pi,x,x,x,new B.c10(d),x,x)],y.p),w,D.bBH)},
$S:14}
B.c1_.prototype={
$0(){A.O(this.a,!1).ad(!1)
return null},
$S:0}
B.c10.prototype={
$0(){A.O(this.a,!1).ad(!0)
return null},
$S:0}
B.caV.prototype={
$1(d){var x=this.a
return new A.kO(new B.caU(x),null,x,null)},
$S:1171}
B.caU.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.eh(w,t,A.d(E.bq(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.bqf,C.T,D.bAu,C.J,A.nH(new B.caP(s,r),q,A.dh([r.a],x),!1,A.kB(t,t,t,new A.bh(new B.caQ(),v),t,t,t,t,new A.bh(new B.caR(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.B,A.iC(C.w,C.H,t,new B.caS(s,r),D.bxr,D.bDI,r.c),A.iC(C.w,C.H,t,new B.caT(s,r),t,D.bpG,r.d)],u)
s=s.x
if(s!=null)C.b.A(x,A.a([C.ak,A.d("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gn7(),t,t,t,t,t,F.aP,t,C.b8,t)],u))
x.push(C.B)
x.push(D.a4J)
return A.cx(!0,A.f4(A.J(x,C.a9,C.d,C.e,0,C.l),t,C.q,C.h7,t,t,C.y),C.H,!0)},
$S:1172}
B.caP.prototype={
$1(d){return this.a.qT(this.b.bdi(d.ga_(d)))},
$S:116}
B.caR.prototype={
$1(d){return d.n(0,C.V)?C.ah:C.i},
$S:5}
B.caQ.prototype={
$1(d){return d.n(0,C.V)?C.w:C.a8},
$S:5}
B.caS.prototype={
$1(d){return this.a.qT(this.b.bcE(d))},
$S:3}
B.caT.prototype={
$1(d){return this.a.qT(this.b.aqL(d))},
$S:3}
B.b7Y.prototype={
$0(){return A.ck(A.bs(this.a,0,null),C.aH,null)},
$S:0}
B.cbb.prototype={
$1(d){var x,w=A.aB("https?://",!0,!1,!1)
w=A.bD(d,w,"")
x=A.aB("www\\.",!0,!1,!1)
return A.vd(A.bD(w,x,"www[.]"),A.aB("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1,!1),new B.cbc(),null)},
$S:37}
B.cbc.prototype={
$1(d){return A.n(d.h(0,1))+"[.]"+A.n(d.h(0,2))},
$S:57}
B.c21.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.c22.prototype={
$0(){return this.a.f=!0},
$S:0}
B.c23.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.c24.prototype={
$0(){return this.a.e=!1},
$S:0}
B.c26.prototype={
$0(){var x=this.a
return x.j(new B.c25(x))},
$S:0}
B.c25.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.cba.prototype={
$1(d){return d==null?"\u2013":A.n(d)},
$S:179};(function installTearOffs(){var x=a._instance_0u
x(B.akT.prototype,"gbjd","bje",1)
var w
x(w=B.Ww.prototype,"gbjv","Dx",0)
x(w,"gaFn","wN",0)
x(w=B.a1b.prototype,"goG","y5",1)
x(w,"gb_h","Qz",0)
x(w=B.a3K.prototype,"goG","y5",1)
x(w,"gb2c","QZ",0)
x(w,"gb6R","C1",0)
x(w,"gaLn","Oz",0)
x(w=B.a3J.prototype,"goG","y5",1)
x(w,"gb36","b37",1)
x(B.a3I.prototype,"goG","y5",1)
x(B.a3L.prototype,"gb8k","Sg",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.a7,[B.akT,B.Wx,B.KD,B.KF,B.KE,B.lN,B.TC,B.na,B.Jf,B.rK,B.akU,B.Wv])
x(A.lm,[B.b7Z,B.b80,B.b85,B.b86,B.b88,B.b87,B.aYZ,B.b8e,B.bOA,B.bOz,B.bOn,B.bOu,B.bOx,B.bOy,B.bOq,B.bOp,B.bOs,B.bOo,B.bOv,B.c9T,B.c9P,B.c9O,B.c9S,B.c1o,B.c1E,B.c1I,B.c1J,B.c1K,B.c1M,B.c1L,B.c1Q,B.c1S,B.c1R,B.c1D,B.c1F,B.c1w,B.c1v,B.c1z,B.c1Y,B.c2_,B.c20,B.c1A,B.c1H,B.c1G,B.c1p,B.c1t,B.c1u,B.c17,B.c1g,B.c1f,B.c1k,B.c1b,B.c1c,B.c18,B.c19,B.c1a,B.c1e,B.c1m,B.c1n,B.c0Z,B.c14,B.c12,B.c1_,B.c10,B.b7Y,B.c21,B.c22,B.c23,B.c24,B.c26,B.c25])
x(A.iQ,[B.b81,B.b83,B.b84,B.b82,B.aYY,B.c7b,B.b8c,B.b8d,B.b8a,B.bOB,B.bOC,B.bOD,B.bOt,B.bOw,B.bOr,B.c9Y,B.c9X,B.c9U,B.c9W,B.c9Q,B.c9R,B.c1N,B.c1P,B.c1O,B.c1T,B.c1x,B.c1y,B.c1Z,B.c1X,B.c1U,B.c1V,B.c1W,B.c1q,B.c1s,B.c1r,B.c1h,B.c1j,B.c1i,B.c1d,B.c1l,B.c13,B.c11,B.caV,B.caP,B.caR,B.caQ,B.caS,B.caT,B.cbb,B.cbc,B.cba])
x(A.ol,[B.b8_,B.c54,B.b8f,B.b8g,B.c9V,B.c1C,B.c1B,B.c15,B.c16,B.caU])
x(A.Es,[B.nR,B.G_,B.Ie,B.EV])
w(B.Ww,A.i8)
x(A.K,[B.xf,B.DS,B.DR,B.DQ,B.DT])
x(A.N,[B.a1b,B.a3K,B.a3J,B.a3I,B.a3L])
x(A.a2,[B.If,B.YW,B.Ea,B.akS])})()
A.pC(b.typeUniverse,JSON.parse('{"lN":{"bN":[]},"DS":{"K":[],"l":[]},"DR":{"K":[],"l":[]},"DQ":{"K":[],"l":[]},"DT":{"K":[],"l":[]},"Ww":{"aI":[]},"xf":{"K":[],"l":[]},"a1b":{"N":["xf"]},"If":{"a2":[],"l":[]},"YW":{"a2":[],"l":[]},"a3K":{"N":["DS"]},"Ea":{"a2":[],"l":[]},"a3J":{"N":["DR"]},"a3I":{"N":["DQ"]},"akS":{"a2":[],"l":[]},"a3L":{"N":["DT"]}}'))
var y=(function rtii(){var x=A.af
return{u:x("rK"),c:x("eh<x>"),r:x("c4<x>"),k:x("H<na>"),n:x("H<eh<x>>"),I:x("H<c4<x>>"),R:x("H<hU>"),Z:x("H<aD<o,@>>"),d:x("H<TC>"),s:x("H<o>"),p:x("H<l>"),t:x("H<x>"),m:x("bU"),j:x("a6<@>"),L:x("a6<x>"),P:x("aD<o,@>"),f:x("aD<@,@>"),x:x("av<o,x>"),a:x("bI"),K:x("a7"),B:x("Jf"),l:x("+(x,x)"),e:x("d8<na>"),N:x("o"),C:x("KD"),D:x("KE"),X:x("Wx"),_:x("KF"),U:x("ah<o>"),G:x("nR"),q:x("pz"),b:x("bh<V?>"),y:x("M"),i:x("a3"),z:x("@"),S:x("x"),A:x("bU?"),Y:x("aD<@,@>?"),O:x("a7?"),M:x("+quota,usage(x,x)?"),o:x("dK"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.pE=new B.G_(0,"none")
D.pF=new B.G_(1,"learning")
D.fp=new B.G_(2,"memorized")
D.a8D=new A.aE(0,1/0,0,320)
D.eX=new A.V(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.t)
D.a8N=new A.F(D.eX,null,null,null,null,null,null,C.bX)
D.e4=new A.V(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.t)
D.auu=new A.G(C.yX,null,C.c9,null,null,null)
D.bBP=new A.m("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.fh,null,null,null,null,null,null,null,null)
D.biB=new A.r(!0,C.eZ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bye=new A.m("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.biB,null,null,null,null,null,null,null,null)
D.aMw=x([D.auu,C.J,D.bBP,D.bye],y.p)
D.ah4=new A.fk(C.y,C.d,C.e,C.h,null,C.l,null,0,D.aMw,null)
D.akU=new A.T(0,26,0,26)
D.akX=new A.T(0,4,0,6)
D.alm=new A.T(14,12,14,14)
D.am5=new A.T(3,0,0,0)
D.apC=new A.R(63251,"MaterialIcons",null,!1)
D.r4=new A.R(63677,"MaterialIcons",null,!1)
D.aqq=new A.R(983209,"MaterialIcons",null,!1)
D.ar4=new A.G(D.aqq,28,C.w,null,null,null)
D.arM=new A.G(C.I8,null,C.is,null,null,null)
D.apl=new A.R(62961,"MaterialIcons",null,!1)
D.asu=new A.G(D.apl,null,null,null,null,null)
D.apA=new A.R(63199,"MaterialIcons",null,!1)
D.asv=new A.G(D.apA,null,null,null,null,null)
D.asD=new A.G(C.jS,null,C.eZ,null,null,null)
D.asH=new A.G(C.nR,44,C.i,null,null,null)
D.atc=new A.G(D.r4,null,D.eX,null,null,null)
D.atv=new A.G(C.ls,null,D.eX,null,null,null)
D.atU=new A.G(D.r4,null,null,null,null,null)
D.aur=new A.G(C.hV,20,D.e4,null,null,null)
D.auO=new A.G(C.nO,30,C.w,null,null,null)
D.avg=new A.G(C.ly,16,C.w,null,null,null)
D.avI=new A.G(C.I4,null,null,null,null,null)
D.avS=new A.G(C.nQ,null,null,null,null,null)
D.aw3=new A.G(C.HS,null,null,null,null,null)
D.Kh=x([1,3,5],y.t)
D.L4=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.b_a=new A.A(C.iy,C.n_,null)
D.aJ5=x([D.b_a],y.p)
D.b3J=new A.W(C.nK,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.b3w=new A.W(D.r4,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.b43=new A.W(C.dc,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.b4h=new A.W(C.I7,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aLp=x([D.b3J,D.b3w,D.b43,D.b4h],A.af("H<+(R,o)>"))
D.aNY=x([D.pE,D.pF,D.fp],A.af("H<G_>"))
D.PM=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.aVQ=new B.Ie(0,"idle")
D.W5=new B.Ie(1,"loading")
D.kb=new B.Ie(2,"ready")
D.aVR=new B.Ie(3,"failed")
D.ata=new A.G(C.c2,18,G.cV,null,null,null)
D.bCQ=new A.m("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,K.uS,null,null,null,null,null,null,null,null)
D.aHU=x([D.ata,C.aV,D.bCQ],y.p)
D.bao=new A.ed(C.af,C.d,C.e,C.h,null,C.l,null,0,D.aHU,null)
D.aYZ=new A.A(C.aM,D.bao,null)
D.am3=new A.T(2,6,2,4)
D.bih=new A.r(!0,C.w,null,null,null,null,14,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqb=new A.m("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.bih,null,null,null,null,null,null,null,null)
D.aZe=new A.A(D.am3,D.bqb,null)
D.bDf=new A.m("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.fh,null,null,null,null,null,null,null,null)
D.aJs=x([N.uo,C.O,D.bDf],y.p)
D.bai=new A.ed(C.af,C.ch,C.e,C.h,null,C.l,null,0,D.aJs,null)
D.aZr=new A.A(C.ld,D.bai,null)
D.Ci=new A.r(!0,D.e4,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bDA=new A.m("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.Ci,null,null,null,null,null,null,null,null)
D.aZw=new A.A(C.dp,D.bDA,null)
D.bCL=new A.m("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,F.aP,C.W,null,null,null,null,null,null,null)
D.aZH=new A.A(C.C,D.bCL,null)
D.am0=new A.T(2,0,2,8)
D.byw=new A.m("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,F.aP,null,null,null,null,null,null,null,null)
D.b__=new A.A(D.am0,D.byw,null)
D.avp=new A.G(C.lw,30,C.w,null,null,null)
D.bEl=new A.m("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,C.Cj,null,null,null,null,null,null,null,null)
D.anb=new A.bS(1,C.ae,D.bEl,null)
D.aJI=x([D.avp,C.a_,D.anb],y.p)
D.ba3=new A.ed(C.af,C.d,C.e,C.h,null,C.l,null,0,D.aJI,null)
D.av0=new A.G(C.dc,18,G.cV,null,null,null)
D.a2O=new A.r(!0,G.cV,null,null,null,null,12,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCt=new A.m("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.a2O,null,null,null,null,null,null,null,null)
D.aIm=x([D.av0,C.bM,D.bCt],y.p)
D.bag=new A.ed(C.af,C.d,C.I,C.h,null,C.l,null,0,D.aIm,null)
D.bcD=new A.X(0,30)
D.ul=new A.X(1/0,54)
D.bd0=new A.X(1/0,48)
D.bd3=new A.X(1/0,50)
D.bd6=new A.X(1/0,52)
D.bAe=new A.m("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.bea=new A.cV(D.bAe,null,null,null,null,null,null,null,null,null,null,null,null,C.x,!1,null,null,null,C.m,null)
D.bhH=new A.r(!0,C.i,null,null,null,null,14.5,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bi7=new A.r(!0,C.ao,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.C2=new A.r(!0,D.eX,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.kB=new A.r(!0,C.i,null,"AmiriQuranMT",null,null,27,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3_=new A.r(!0,D.eX,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blW=new A.r(!0,C.w,null,null,null,null,24,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bmZ=new A.r(!0,D.e4,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bn_=new A.r(!0,G.cV,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bng=new A.r(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.boY=new A.m("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.ic,null,null,null,null,null,null,null,null)
D.bpG=new A.m("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.d3,null,null,null,null,null,null,null,null)
D.bqf=new A.m("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.mo,null,null,null,null,null,null,null,null)
D.bqk=new A.m("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,F.aP,null,null,null,null,null,null,null,null)
D.bjt=new A.r(!0,G.cV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqE=new A.m("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.bjt,null,null,null,null,null,null,null,null)
D.bqK=new A.m("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,F.aP,null,null,null,null,null,null,null,null)
D.brb=new A.m("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.fh,null,null,null,null,null,null,null,null)
D.bt2=new A.m("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cr,null,null,null,null,null,null,null,null)
D.btP=new A.m("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.bE,null,null,null,null,null,null,null,null)
D.btV=new A.m("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,F.aP,null,null,null,null,null,null,null,null)
D.bun=new A.m("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.uT,null,null,null,null,null,null,null,null)
D.bvG=new A.m("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.bwe=new A.m("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.p6,null,null,null,null,null,null,null,null)
D.bx1=new A.m("reset safe mode / WebGPU ban",null,C.BW,null,null,null,null,null,null,null,null)
D.bxg=new A.m("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.Ci,null,null,null,null,null,null,null,null)
D.bxr=new A.m("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,F.aP,null,null,null,null,null,null,null,null)
D.bxT=new A.m("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,C.bA,null,null,null,null,null,null,null,null)
D.byc=new A.m("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,F.aP,null,null,null,null,null,null,null,null)
D.byx=new A.m("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,F.aP,null,null,null,null,null,null,null,null)
D.bA1=new A.m("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,C.a3q,null,null,null,null,null,null,null,null)
D.bl6=new A.r(!0,D.eX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bA4=new A.m("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.bl6,null,null,null,null,null,null,null,null)
D.bAu=new A.m("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.p6,null,null,null,null,null,null,null,null)
D.bB3=new A.m("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,C.a2h,null,null,null,null,null,null,null,null)
D.bBj=new A.m("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cr,null,null,null,null,null,null,null,null)
D.bBH=new A.m("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.bBZ=new A.m("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.bCD=new A.m("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,F.aP,null,null,null,null,null,null,null,null)
D.bCE=new A.m("\u062e\u0644\u0635\u062a",null,C.ms,null,null,null,null,null,null,null,null)
D.bCF=new A.m("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.Ci,null,null,null,null,null,null,null,null)
D.bme=new A.r(!0,C.cO,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,C.fO,null,null,null,null,null,null,null,null)
D.bDr=new A.m("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.bme,null,null,null,null,null,null,null,null)
D.bDE=new A.m("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.bA,null,null,null,null,null,null,null,null)
D.bDI=new A.m("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.d3,null,null,null,null,null,null,null,null)
D.bEk=new A.m("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,F.aP,null,null,null,null,null,null,null,null)
D.a4J=new B.akS(null)
D.bFK=new B.DQ(null)
D.bFL=new B.Wv(2,1,!0,!1,!1)
D.a4N=new B.Wx(!1,!1,!1,!1,!1,0)
D.jg=new B.nR(0,"ok")
D.vc=new B.nR(1,"near")
D.vd=new B.nR(2,"wrong")
D.ve=new B.nR(3,"missing")
D.a5e=new B.nR(4,"extra")
D.apR=new A.R(63456,"MaterialIcons",null,!1)
D.bLT=new B.Ea(D.e4,D.apR,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.bMv=new B.YW(!1,null)
D.CU=new B.YW(!0,null)
D.mM=new B.EV(0,"idle")
D.vs=new B.EV(1,"playing")
D.vt=new B.EV(2,"recording")
D.pv=new B.EV(3,"thinking")
D.jn=new B.EV(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTP","cgX",()=>new B.akT())
x($,"cXi","cwI",()=>A.aB("\u0640[\u064b-\u0652]*\u0670",!0,!1,!1))
x($,"cXj","cwJ",()=>A.aB("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1,!1))
x($,"cXv","cwS",()=>A.aB("\u0648\u0670",!0,!1,!1))
x($,"cWR","cwo",()=>A.aB("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1,!1))
x($,"cV6","cvc",()=>A.aB("\u0627[\u0654\u0655]",!0,!1,!1))
x($,"cWm","cw0",()=>A.aB("[\u0654\u0655]",!0,!1,!1))
x($,"cV7","cvd",()=>A.aB("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1,!1))
x($,"cVe","cvj",()=>A.aB("[\u0624\u0626]",!0,!1,!1))
x($,"cWo","cw2",()=>A.aB("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1,!1))
x($,"cWW","cwr",()=>A.aB("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1,!1))
x($,"cWw","cw9",()=>A.aB("[^\u0621-\u064a\\s]",!0,!1,!1))
x($,"cXg","chy",()=>A.aB("\\s+",!0,!1,!1))
x($,"cR6","rz",()=>B.cxJ(D.pE,0,A.ccs(0,!0)))
x($,"cTQ","NL",()=>new B.Ww($.cgX(),D.bFL,B.cFZ(),D.aVQ,$.U()))})()};
(a=>{a["tfD8TB/fnSFt7LAtm1zuNZFmemQ="]=a.current})($__dart_deferred_initializers__);