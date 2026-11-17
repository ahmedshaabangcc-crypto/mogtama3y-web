((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,F,G,N,P,K,B={
cFZ(d){var x,w,v,u,t,s
if(d instanceof B.lI)return d
try{x=A.cW(d)
w=x.code
v=x.message
u=w==null?"failed":A.S(w)
t=v==null?"":A.S(v)
return new B.lI(u,t)}catch(s){u=A.n(d)
return new B.lI("failed",u)}},
akN:function akN(){this.b=this.a=null},
b7R:function b7R(d){this.a=d},
b7U:function b7U(){},
b7T:function b7T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7S:function b7S(d){this.a=d},
b7Y:function b7Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b7W:function b7W(d){this.a=d},
b7X:function b7X(d){this.a=d},
b7Z:function b7Z(d){this.a=d},
b80:function b80(d,e,f){this.a=d
this.b=e
this.c=f},
b8_:function b8_(d,e,f){this.a=d
this.b=e
this.c=f},
b7V:function b7V(){},
cG_(d,e){return new B.lI(d,e)},
Ww:function Ww(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i},
KB:function KB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
KD:function KD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
KC:function KC(d,e){this.a=d
this.b=e},
lI:function lI(d,e){this.a=d
this.b=e},
crX(d){var x,w=$.cwK()
w=A.bC(d,w,"\u0627")
x=$.cwL()
w=A.bC(w,x,"\u064a")
x=$.cwU()
w=A.bC(w,x,"\u0627")
x=$.cve()
w=A.bC(w,x,"\u0627")
x=$.cwq()
w=A.bC(w,x,"\u0621")
x=$.cw2()
w=A.bC(w,x,"\u0621")
x=$.cvf()
w=A.bC(w,x,"\u0627")
x=$.cvl()
w=A.bC(w,x,"\u0621")
w=A.bC(w,"\u0649","\u064a")
w=A.bC(w,"\u0629","\u0647")
x=$.cw4()
w=A.bC(w,x,"")
x=$.cwt()
w=A.bC(w,x," ")
x=$.cwb()
w=A.bC(w,x," ")
x=$.chC()
return C.c.K(A.bC(w,x," "))},
cKH(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.length,k=e.length
if(l===0)return k
if(k===0)return l
x=k+1
w=y.S
v=J.k9(x,w)
for(u=0;u<x;++u)v[u]=u
t=A.ci(x,0,!1,w)
for(s=1;s<=l;++s,r=t,t=v,v=r){t[0]=s
for(w=s-1,u=1;u<=k;++u){q=u-1
p=d.charCodeAt(w)===e.charCodeAt(q)?0:1
o=v[u]+1
n=t[q]+1
m=v[q]+p
if(o<n)q=o<m?o:m
else q=n<m?n:m
t[u]=q}}return v[k]},
cbl(d,e){var x,w,v,u,t,s
if(d===e)return 1
x=A.ay("[\u0627\u0621]",!0,!1,!1)
w=A.bC(d,x,"")
x=A.ay("[\u0627\u0621]",!0,!1,!1)
v=A.bC(e,x,"")
if(w.length!==0&&w===v)return 1
u=d.length
t=e.length
u=u>t?u:t
if(u===0)return 1
s=1-B.cKH(d,e)/u
return s>=1?0.99:s},
FE(d){var x,w,v,u,t,s,r,q=A.a([],y.d)
for(x=C.c.uc(d,$.chC()),w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
if(u.length===0)continue
t=B.crX(u)
s=A.bC(t," ","")
if(s.length===0){if(q.length!==0){r=q.pop()
q.push(new B.TB(r.a+" "+u,r.b))}continue}q.push(new B.TB(u,s))}return q},
cJm(d,e){var x,w,v,u,t=new B.c58(),s=A.a([],y.s)
for(x=A.fa(e,0,A.i3(5,"count",y.S),A.aj(e).c),w=x.$ti,x=new A.ch(x,x.gN(0),w.i("ch<aV.E>")),w=w.i("aV.E");x.v();){v=x.d
s.push((v==null?w.a(v):v).b)}u=!t.$2(s,D.KY)&&t.$2(d,D.KY)?C.b.jB(d,5):d
return!t.$2(s,D.PG)&&t.$2(u,D.PG)?C.b.jB(u,4):u},
cqT(d,e){var x=B.FE(d),w=B.crX(e),v=y.U
v=A.a9(new A.ah(A.a(w.split(" "),y.s),new B.c7e(),v),v.i("W.E"))
return new B.Jc(x,B.cIx(x,B.cJm(v,x)),w)},
cIx(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=A.a([],y.s)
for(x=a5.length,w=0;w<a5.length;a5.length===x||(0,A.L)(a5),++w)a4.push(a5[w].b)
v=a4.length
u=a6.length
t=u+1
x=(v+1)*t
s=y.i
r=A.ci(x,0,!1,s)
q=A.ci(x,0,!1,y.S)
p=A.ci(v*(u===0?1:u),0,!1,s)
for(o=0;o<v;++o)for(x=o*u,n=0;n<u;++n)p[x+n]=B.cbl(a4[o],a6[n])
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
e=2}if(n>=2&&r[h-2]<g&&B.cbl(a4[m],a6[n-2]+a6[n-1])>=1){g=r[h-2]
e=3}if(s&&r[i+n-1]<g&&B.cbl(a4[j]+a4[m],a6[n-1])>=1){g=r[i+n-1]
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
else m=a2>=0.6?D.v7:D.v8
a1.push(new B.n6(o,x,s,m))
break
case 1:--o
a1.push(new B.n6(o,a4[o],null,D.v9))
break
case 2:--n
a1.push(new B.n6(null,null,a6[n],D.a4E))
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
TB:function TB(d,e){this.a=d
this.b=e},
n6:function n6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Jc:function Jc(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
aYT:function aYT(d){this.a=d},
aYS:function aYS(){},
c58:function c58(){},
c7e:function c7e(){},
cxL(d,e,f){return new B.rI(d,e,f)},
cLC(d){var x
A:{if("memorized"===d){x=D.fi
break A}if("learning"===d){x=D.pJ
break A}x=D.pI
break A}return x},
csX(d,e){return d>=1&&d<=114&&e>=1&&e<=H.cY[d-1].a[1]},
cG0(){var x=y.S
return new B.akO(A.D(x,y.u),A.aN(x))},
b83(d){var x=d.eP()
return C.c.du(C.j.k(A.bs(x)),4,"0")+"-"+C.c.du(C.j.k(A.bv(x)),2,"0")+"-"+C.c.du(C.j.k(A.c_(x)),2,"0")},
cnO(d){var x=y.x,w=A.a9(new A.av(A.a(d.split("-"),y.s),A.cN2(),x),x.i("aV.E"))
return B.b83(A.dy(w[0],w[1],w[2]-1,12,0,0,0))},
ceA(d){var x,w,v,u,t,s,r,q,p=y.S,o=A.D(p,y.u),n=A.aN(p),m=new B.akO(o,n),l=d.h(0,"rows")
if(y.f.b(l))for(x=l.gcN(),x=x.ga0(x),w=y.j;x.v();){v=x.gG()
u=A.dX(A.n(v.a),null)
t=v.b
v=!0
if(u!=null)if(w.b(t))if(J.aM(t)>=3){v=C.j.aJ(u,1000)
s=C.j.a3(u,1000)
v=!(v>=1&&v<=114&&s>=1&&s<=H.cY[v-1].a[1])}if(v)continue
v=J.bb(t)
r=C.f.bB(A.cT(v.h(t,0)))
if(r<0||r>=3)continue
o.p(0,u,new B.rI(D.aN6[r],C.f.bB(A.cT(v.h(t,1))),new A.aP(A.kC(C.f.bB(A.cT(v.h(t,2))),0,!0),0,!0)))}q=d.h(0,"dirty")
if(y.j.b(q)){x=J.aCg(q,y.o)
p=A.my(x,new B.b82(),x.$ti.i("W.E"),p)
n.A(0,new A.ah(p,o.ga4P(),A.y(p).i("ah<W.E>")))}m.c=A.p(d.h(0,"last"))
p=A.as(d.h(0,"streak"))
p=p==null?null:C.f.bB(p)
p=m.d=p==null?0:p
o=A.as(d.h(0,"best"))
o=o==null?null:C.f.bB(o)
m.e=o==null?p:o
return m},
aBx(d,e){return"https://everyayah.com/data/Husary_Muallim_128kbps/"+C.c.du(C.j.k(d),3,"0")+C.c.du(C.j.k(e),3,"0")+".mp3"},
FZ:function FZ(d,e){this.a=d
this.b=e},
rI:function rI(d,e,f){this.a=d
this.b=e
this.c=f},
akO:function akO(d,e){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0},
b84:function b84(){},
b85:function b85(){},
b82:function b82(){},
Wu:function Wu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cDt(){return new B.xe(null)},
cPu(d,e){var x,w,v,u,t={},s=H.cY[e-1].a[1],r=$.NJ().c
t.a=1
x=r.a
w=e*1000
v=1
for(;;){if(v<=s){v=x.h(0,w+v)
v=(v==null?$.ry():v).a===D.fi}else v=!1
if(!v)break
v=++t.a}x=t.a
if(x>s){t.a=1
u=1}else u=x
x=s<=10
if(x)u=1
t.b=u
t.c=x?s:C.j.d1(u+4,1,s)
return A.e4(C.cu,new B.ca0(t,s,e),d,!0,null,null,!1,y.l)},
cgo(d){return A.du(0,0,0,0,0,C.j.d1(C.f.ak(6+d*1.2),25,90))},
cfi(d){return E.bq(C.j.aJ(d,60))+":"+C.c.du(E.bq(C.j.a3(d,60)),2,"\u0660")},
csJ(d){return A.e4(C.cu,new B.caY($.NJ()),d,!0,null,null,!1,y.H)},
ND(d){var x,w=d.a
A:{if("timeout"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0627\u062a\u0623\u062e\u0631 \u0623\u0648\u064a \u0648\u0645\u0631\u062f\u0651\u0634\u060c \u0641\u0648\u0642\u0651\u0641\u0646\u0627\u0647 \u0648\u062c\u0631\u0651\u0628\u0646\u0627 \u062a\u0627\u0646\u064a \u0628\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0623\u062e\u0641 \u0648\u0645\u0646\u0641\u0639\u0634. \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}if("crashed"===w){x="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0642\u0641 \u0641\u062c\u0623\u0629 (\u063a\u0627\u0644\u0628\u064b\u0627 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0634 \u0645\u0643\u0641\u064a\u0629). \u0627\u0642\u0641\u0644 \u0627\u0644\u062a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u0627\u0646\u064a\u0629 \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u2014 \u0648\u0644\u0648 \u0627\u062a\u0643\u0631\u0631\u062a \u0627\u0628\u0639\u062a\u0644\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062a\u062d\u062a."
break A}x=d.gl9()
break A}return x},
cQP(d,e,f){var x,w=new B.cbe(),v=w.$1(f),u=w.$1("\xab\u0627\u0644\u0645\u062d\u0641\u0651\u0638\xbb \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 ("+e+")\n"+d.a+": "+d.b+"\n"),t=1990-u.length
if(v.length>t)v=t<=1?"":C.c.a7(v,0,t-1)+"\u2026"
x=u+v
return x.length>1990?C.c.a7(x,0,1990):x},
csS(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
try{x=y.P.a(C.aq.f4(a4,null))
s=y.Y
r=s.a(J.at(x,"rec"))
w=r==null?C.cP:r
q=s.a(J.at(x,"last"))
v=q==null?C.cP:q
u=new B.cbd()
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
Ic:function Ic(d,e){this.a=d
this.b=e},
Wv:function Wv(d,e,f,g,h){var _=this
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
b86:function b86(d){this.a=d},
b87:function b87(d){this.a=d},
b88:function b88(d){this.a=d},
xe:function xe(d){this.a=d},
a19:function a19(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.w=_.r=null},
bOF:function bOF(d){this.a=d},
bOE:function bOE(d,e){this.a=d
this.b=e},
bOG:function bOG(d){this.a=d},
bOD:function bOD(d,e){this.a=d
this.b=e},
bOH:function bOH(){},
bOr:function bOr(){},
bOx:function bOx(d,e,f){this.a=d
this.b=e
this.c=f},
bOy:function bOy(){},
bOB:function bOB(d){this.a=d},
bOA:function bOA(){},
bOC:function bOC(d){this.a=d},
bOu:function bOu(d,e){this.a=d
this.b=e},
bOv:function bOv(d){this.a=d},
bOt:function bOt(){},
bOw:function bOw(d){this.a=d},
bOs:function bOs(d){this.a=d},
bOz:function bOz(d,e){this.a=d
this.b=e},
Id:function Id(d,e,f){this.c=d
this.d=e
this.a=f},
YU:function YU(d,e){this.c=d
this.a=e},
ca0:function ca0(d,e,f){this.a=d
this.b=e
this.c=f},
c9Y:function c9Y(d,e,f){this.a=d
this.b=e
this.c=f},
ca_:function ca_(d,e){this.a=d
this.b=e},
c9X:function c9X(d,e){this.a=d
this.b=e},
c9W:function c9W(d,e){this.a=d
this.b=e},
c9Z:function c9Z(d,e){this.a=d
this.b=e},
c9S:function c9S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9R:function c9R(d,e,f){this.a=d
this.b=e
this.c=f},
c9T:function c9T(d){this.a=d},
c9U:function c9U(d){this.a=d},
c9V:function c9V(d,e){this.a=d
this.b=e},
EV:function EV(d,e){this.a=d
this.b=e},
DT:function DT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3I:function a3I(d,e){var _=this
_.d=d
_.e=$
_.f=e
_.w=_.r=null
_.x=!1
_.y=0
_.ax=_.at=_.as=_.Q=_.z=null
_.ay=0
_.c=_.a=_.ch=null},
c1s:function c1s(){},
c1I:function c1I(d,e){this.a=d
this.b=e},
c1M:function c1M(d){this.a=d},
c1N:function c1N(d){this.a=d},
c1O:function c1O(d,e,f){this.a=d
this.b=e
this.c=f},
c1Q:function c1Q(d){this.a=d},
c1R:function c1R(d){this.a=d},
c1P:function c1P(){},
c1T:function c1T(d){this.a=d},
c1S:function c1S(d){this.a=d},
c1U:function c1U(d,e){this.a=d
this.b=e},
c1W:function c1W(d){this.a=d},
c1X:function c1X(d){this.a=d},
c1V:function c1V(){},
c1H:function c1H(d,e,f){this.a=d
this.b=e
this.c=f},
c1J:function c1J(d,e,f){this.a=d
this.b=e
this.c=f},
c1A:function c1A(d){this.a=d},
c1B:function c1B(d){this.a=d},
c1z:function c1z(){},
c1C:function c1C(){},
c1D:function c1D(d,e){this.a=d
this.b=e},
c21:function c21(d){this.a=d},
c22:function c22(d){this.a=d},
c23:function c23(d,e){this.a=d
this.b=e},
c20:function c20(d){this.a=d},
c24:function c24(d,e){this.a=d
this.b=e},
c1G:function c1G(){},
c1F:function c1F(d){this.a=d},
c1E:function c1E(d,e){this.a=d
this.b=e},
c1L:function c1L(d){this.a=d},
c1K:function c1K(d){this.a=d},
c1Y:function c1Y(){},
c1Z:function c1Z(){},
c2_:function c2_(){},
c1t:function c1t(d,e,f){this.a=d
this.b=e
this.c=f},
c1u:function c1u(d){this.a=d},
c1w:function c1w(){},
c1v:function c1v(){},
c1x:function c1x(d){this.a=d},
c1y:function c1y(d){this.a=d},
Ea:function Ea(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
DS:function DS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a3H:function a3H(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=f
_.w=g
_.x=0
_.as=_.Q=_.z=_.y=null
_.at=h
_.c=_.a=null},
c1b:function c1b(){},
c1k:function c1k(d,e){this.a=d
this.b=e},
c1l:function c1l(d){this.a=d},
c1j:function c1j(){},
c1n:function c1n(d){this.a=d},
c1m:function c1m(d,e){this.a=d
this.b=e},
c1o:function c1o(d,e){this.a=d
this.b=e},
c1f:function c1f(d,e){this.a=d
this.b=e},
c1g:function c1g(d,e,f){this.a=d
this.b=e
this.c=f},
c1h:function c1h(d,e,f){this.a=d
this.b=e
this.c=f},
c1c:function c1c(d,e,f){this.a=d
this.b=e
this.c=f},
c1d:function c1d(d,e,f){this.a=d
this.b=e
this.c=f},
c1e:function c1e(d,e){this.a=d
this.b=e},
c1i:function c1i(d){this.a=d},
c1p:function c1p(){},
c1q:function c1q(d,e){this.a=d
this.b=e},
c1r:function c1r(d,e){this.a=d
this.b=e},
DR:function DR(d){this.a=d},
a3G:function a3G(d){this.d=d
this.c=this.a=null},
c12:function c12(){},
c19:function c19(d){this.a=d},
c1a:function c1a(){},
c18:function c18(d,e){this.a=d
this.b=e},
c17:function c17(d,e,f){this.a=d
this.b=e
this.c=f},
c16:function c16(d,e,f){this.a=d
this.b=e
this.c=f},
c15:function c15(d){this.a=d},
c13:function c13(d){this.a=d},
c14:function c14(d){this.a=d},
caY:function caY(d){this.a=d},
caX:function caX(d){this.a=d},
caS:function caS(d,e){this.a=d
this.b=e},
caU:function caU(){},
caT:function caT(){},
caV:function caV(d,e){this.a=d
this.b=e},
caW:function caW(d,e){this.a=d
this.b=e},
akM:function akM(d){this.a=d},
b7Q:function b7Q(d){this.a=d},
cbe:function cbe(){},
cbf:function cbf(){},
DU:function DU(d,e,f){this.c=d
this.d=e
this.a=f},
a3J:function a3J(){var _=this
_.f=_.e=_.d=!1
_.c=_.a=_.r=null},
c25:function c25(d){this.a=d},
c26:function c26(d){this.a=d},
c27:function c27(d,e){this.a=d
this.b=e},
c28:function c28(d){this.a=d},
c2a:function c2a(d){this.a=d},
c29:function c29(d){this.a=d},
cbd:function cbd(){}},D,Q,O,H,E,I
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
B.akN.prototype={
rj(){var x=this,w=x.a
if(w!=null)return A.es(w,y.m)
w=x.b
return w==null?x.b=new B.b7R(x).$0():w},
uD(d,e){return this.aPj(d,e,e)},
aPj(d,e,f){var x=0,w=A.j(f),v,u=2,t=[],s,r,q,p
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
r=B.cFZ(s)
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
Ni(){var x=0,w=A.j(y.X),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ni=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
h=A
g=A
x=7
return A.c(s.rj(),$async$Ni)
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
v=new B.Ww(q,p,o,n,m,l)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=D.a4d
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ni,w)},
EO(){var x=0,w=A.j(y.M),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=A
l=A
k=A
x=8
return A.c(s.rj(),$async$EO)
case 8:x=7
return A.c(m.eM(l.cW(k.cR(e,"storage",null,null,null,null)),y.A),$async$EO)
case 7:r=e
if(r==null){v=null
x=1
break}q=C.f.ak(A.dV(r.quota))
p=C.f.ak(A.dV(r.usage))
v=new A.auY(q,p)
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
return A.i($async$EO,w)},
bma(){var x=y.K
A.Hi(this.rj().bK(new B.b7U(),x),x)},
ri(d,e){var x=A.jX(d[e])
x=x==null?null:C.f.ak(x)
return x==null?0:x},
bjw(d,e,f){return this.uD(new B.b7T(this,d,e,f),y.C)},
galX(){var x,w
try{x=A.ku(b.G.sessionStorage)
return x}catch(w){return null}},
gatz(){var x=A.ep(b.G.mogtama3yTutorIsolated)
if(x==null)x=null
return x===!0},
aa7(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
try{m=b.G
l=A.ep(m.crossOriginIsolated)
if(l==null)l=f
if(l===!0)return!1
if(this.gatz())return!1
l=A.ep(m.isSecureContext)
if(l==null)l=f
if(l!==!0)return!1
x=A.cW(m.navigator)
if(!("serviceWorker" in x))return!1
w=A.S(x.userAgent)
l=A.jX(x.maxTouchPoints)
k=l==null?f:l
v=k==null?0:k
l=A.p(x.platform)
j=l==null?f:l
u=j==null?"":j
l=A.ay("iPad|iPhone|iPod",!0,!1,!1)
if(!l.b.test(w))i=J.k(u,"MacIntel")&&v>1
else i=!0
t=i
l=A.ay("Chrome/|Chromium/|Firefox/|Edg/",!0,!1,!1)
s=l.b.test(w)
if(t||!s)return!1
l=A.jX(x.hardwareConcurrency)
h=l==null?f:l
r=h==null?0:h
if(r>0&&r<3)return!1
q=Date.now()
l=this.galX()
l=l==null?f:A.p(A.cR(l,"getItem","mt.tutor.iso",f,f,f))
if(l==null)l=f
p=A.dX(l==null?"":l,f)
if(p!=null&&q-p<3e4)return!1
o=A.ku(m.localStorage)
m=o
m=m==null?f:A.p(A.cR(m,"getItem","mt.tutor.noiso",f,f,f))
if(m==null)m=f
n=A.dX(m==null?"":m,f)
if(n!=null&&q-n<2592e5)return!1
return!0}catch(g){return!1}},
as6(){var x,w,v,u,t,s,r=null
try{x=this.galX()
if(x!=null)A.cR(x,"setItem","mt.tutor.iso",""+Date.now(),r,r)}catch(w){}x=b.G
v=A.cW(x.location)
u=A.S(v.hash)
t=A.S(v.search)
s=A.bp(A.S(A.cW(x.document).baseURI),0,r).a2("tutor/").k(0)
x=u.length===0?"#/masjid/tools/tutor":u
A.cR(v,"replace",s+t+x,r,r,r)},
bjf(){var x,w=null,v=b.G,u=A.cW(v.history),t=A.jX(u.length),s=t==null?w:t
if((s==null?0:s)>1)A.cR(u,"back",w,w,w,w)
else{x=A.S(A.cW(v.document).baseURI)
A.cR(A.cW(v.location),"replace",A.bp(x,0,w).a2("./").k(0)+"#/",w,w,w)}},
aaj(d,e,f,g,h){return this.uD(new B.b7Y(this,e,d,f,h,g),y.H)},
aan(){return this.uD(new B.b7Z(this),y.D)},
a4s(){var x=null,w=this.a
if(w!=null)A.cR(w,"cancelRecording",x,x,x,x)},
ann(d){var x,w,v=this,u=A.p(d.text)
if(u==null)u=null
if(u==null)u=""
x=v.ri(d,"ms")
w=A.jX(d.seconds)
if(w==null)w=null
if(w==null)w=0
return new B.KD(u,x,w,v.ri(d,"frames"),v.ri(d,"tokens"),v.ot(d,"retried"),v.ri(d,"encMs"),v.ri(d,"decMs"),v.ri(d,"featMs"))},
ajG(d){var x={}
x.words=d
return x},
awF(d,e){return this.uD(new B.b80(this,d,e),y._)},
bom(d,e){return this.uD(new B.b8_(this,d,e),y._)},
Ln(d,e){return this.bmg(d,e)},
bmg(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Ln=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=p==null?7:9
break
case 7:x=10
return A.c(s.rj(),$async$Ln)
case 10:x=8
break
case 9:g=p
case 8:r=g
o=A.aj(d).i("av<1,o>")
o=A.a9(new A.av(d,new B.b7V(),o),o.i("aV.E"))
x=11
return A.c(A.eM(A.cW(A.cR(r,"play",o,e,null,null)),y.y),$async$Ln)
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
return A.i($async$Ln,w)},
N_(){var x=null,w=this.a
if(w!=null)A.cR(w,"stopPlayback",x,x,x,x)},
JT(){var x,w,v,u=null
try{w=this.a
x=w==null?u:A.S(A.cR(w,"diag",u,u,u,u))
w=x
if(w==null)w=u
if(w==null)w="{}"
return w}catch(v){return"{}"}},
bnw(){var x,w,v=null
try{x=this.a
if(x!=null)A.cR(x,"resetDevice",v,v,v,v)}catch(w){}},
a7H(d){var x=this.a
if(x!=null)A.cR(x,"prefetch",d,null,null,null)}}
B.Ww.prototype={}
B.KB.prototype={
gn7(){var x=this.f,w=x>0?"CPU \xd7"+x:""
x=this.a
if(x==="webgpu")return"WebGPU"
if(C.c.n(x,"webgpu"))return"WebGPU + "+w
return w.length===0?x:w}}
B.KD.prototype={
gTE(){var x=this,w=C.f.aB(x.d/100,0),v=x.f?" (retried on 30 s)":""
return"window "+w+" s, "+x.e+" tokens"+v+", mel "+x.x+" ms, encoder "+x.r+" ms, decoder "+x.w+" ms"}}
B.KC.prototype={}
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
B.TB.prototype={}
B.n6.prototype={
k(d){var x,w=this.b
if(w==null)w=""
x=this.c
if(x==null)x=""
return this.d.b+":"+w+"->"+x}}
B.Jc.prototype={
gMY(){var x,w=this,v=w.d
if(v===$){x=new B.aYT(w).$0()
w.d!==$&&A.ap()
w.d=x
v=x}return v},
gKc(){var x,w,v,u,t,s=A.a([],y.s)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
if(u.d===D.a4E&&u.c!=null){t=u.c
t.toString
s.push(t)}}return s},
gbko(){return J.h_(this.gMY(),new B.aYS()).gN(0)},
gtF(){var x=this.a
return x.length!==0&&this.gbko()===x.length&&this.gKc().length===0}}
B.FZ.prototype={
S(){return"AyahStatus."+this.b}}
B.rI.prototype={}
B.akO.prototype={
a7i(d,e){var x=this.a.h(0,d*1000+e)
return x==null?$.ry():x},
b1n(d){var x=this,w=B.b83(d),v=x.c
if(v===w)return
v=v!=null&&v===B.cnO(w)?x.d+1:1
x.d=v
if(v>x.e)x.e=v
x.c=w},
arg(){var x=Date.now(),w=B.b83(new A.aP(x,0,!1))
x=this.c
return x===w||x===B.cnO(w)?this.d:0},
avG(d,e,f,g){var x=this,w=new A.aP(Date.now(),0,!1),v=x.a7i(d,e),u=g?C.j.d1(v.b+1,0,100):0,t=g&&u>=f?D.fi:D.pJ,s=new B.rI(t,u,w.h5()),r=d*1000+e
x.a.p(0,r,s)
x.b.E(0,r)
x.b1n(w)
return s},
a7a(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.cY[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.ry():s).a===D.fi)++u}return u},
bjd(d){var x,w,v,u,t,s
for(x=d-1,w=this.a,v=d*1000,u=0,t=1;t<=H.cY[x].a[1];++t){s=w.h(0,v+t)
if((s==null?$.ry():s).a===D.pJ)++u}return u},
gauG(){var x=this.a,w=A.y(x).i("c5<2>")
return new A.ah(new A.c5(x,w),new B.b84(),w.i("ah<W.E>")).gN(0)},
gaAj(){var x=this.a,w=A.y(x).i("bP<1>")
w=A.my(new A.bP(x,w),new B.b85(),w.i("W.E"),y.S)
w=A.eI(w,A.y(w).i("W.E"))
x=A.a9(w,A.y(w).c)
C.b.lf(x)
return x},
dq(){var x,w,v,u,t,s=this,r=y.N,q=A.D(r,y.L)
for(x=s.a,x=new A.et(x,A.y(x).i("et<1,2>")).ga0(0),w=y.t;x.v();){v=x.d
u=v.a
t=v.b
q.p(0,""+u,A.a([t.a.a,t.b,t.c.a],w))}x=s.b
x=A.a9(x,A.y(x).c)
return A.I(["v",1,"rows",q,"dirty",x,"last",s.c,"streak",s.d,"best",s.e],r,y.z)},
bf5(){var x,w,v,u,t,s,r,q,p,o=A.a([],y.Z)
for(x=this.b,x=A.b6q(x,300,A.y(x).c),x=new A.Kg(J.ar(x.a),x.b,A.y(x).i("Kg<1>")),w=y.N,v=y.z,u=this.a;x.v();){t=x.gG()
s=C.j.aJ(t,1000)
t=C.j.a3(t,1000)
r=s*1000+t
q=u.h(0,r)
q=(q==null?$.ry():q).a===D.fi?"memorized":"learning"
p=u.h(0,r)
if(p==null)p=$.ry()
r=u.h(0,r)
o.push(A.I(["surah",s,"ayah",t,"status",q,"perfect_count",p.b,"updated_at",(r==null?$.ry():r).c.iE()],w,v))}return o},
bjO(d){var x,w,v,u,t,s,r
for(x=d.length,w=this.a,v=this.b,u=0;u<d.length;d.length===x||(0,A.L)(d),++u){t=d[u]
s=A.eA(t.h(0,"surah"))*1000+A.eA(t.h(0,"ayah"))
r=w.h(0,C.j.aJ(s,1000)*1000+C.j.a3(s,1000))
if((r==null?$.ry():r).c.iE()===t.h(0,"updated_at"))v.L(0,s)}},
bjW(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=J.ar(d),w=this.b,v=this.a,u=y.f,t=!1;x.v();){s=x.gG()
if(!u.b(s))continue
r=A.as(s.h(0,"surah"))
q=r==null?null:C.f.bB(r)
r=A.as(s.h(0,"ayah"))
p=r==null?null:C.f.bB(r)
o=A.dF(A.n(s.h(0,"updated_at")))
r=!0
if(q!=null)if(p!=null)if(o!=null)r=!(q>=1&&q<=114&&p>=1&&p<=H.cY[q-1].a[1])
if(r)continue
n=B.cLC(s.h(0,"status"))
if(n===D.pI)continue
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
v.p(0,r,new B.rI(n,C.j.d1(l==null?0:l,0,100),o.h5()))
w.L(0,r)
t=!0}return t}}
B.Wu.prototype={
JB(d,e,f,g,h){var x=this,w=g==null?x.a:g,v=h==null?x.b:h,u=d==null?x.c:d,t=e==null?x.d:e
return new B.Wu(w,v,u,t,f==null?x.e:f)},
bdi(d){var x=null
return this.JB(x,x,d,x,x)},
aqL(d){var x=null
return this.JB(x,d,x,x,x)},
bdm(d){var x=null
return this.JB(x,x,x,x,d)},
bcG(d){var x=null
return this.JB(d,x,x,x,x)},
bdj(d){var x=null
return this.JB(x,x,x,d,x)},
dq(){var x=this
return A.I(["n",x.a,"r",x.b,"auto",x.c,"hide",x.d,"in",x.e],y.N,y.z)}}
B.Ic.prototype={
S(){return"ModelState."+this.b}}
B.Wv.prototype={
vQ(){var x=this.Q
return x==null?this.Q=new B.b86(this).$0():x},
qS(d){return this.ayw(d)},
ayw(d){var x=0,w=A.j(y.H),v=this
var $async$qS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:v.b=d
v.a5()
x=2
return A.c(A.iq("mt.tutor.settings",C.aq.hl(d.dq(),null)),$async$qS)
case 2:return A.h(null,w)}})
return A.i($async$qS,w)},
A5(){var x=0,w=A.j(y.H),v=this,u
var $async$A5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.a5()
x=2
return A.c(A.iq("mt.tutor.progress",C.aq.hl(v.c.dq(),null)),$async$A5)
case 2:u=v.as
if(u!=null)u.av()
v.as=A.cS(C.w,v.gaFo())
return A.h(null,w)}})
return A.i($async$A5,w)},
MI(d,e,f){return this.azj(d,e,f)},
azj(d,e,f){var x=0,w=A.j(y.H),v=this
var $async$MI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v.z=new A.aZ(d,e,f)
x=2
return A.c(A.iq("mt.tutor.last",C.aq.hl(A.I(["s",d,"f",e,"t",f],y.N,y.S),null)),$async$MI)
case 2:return A.h(null,w)}})
return A.i($async$MI,w)},
Dv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Dv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=s.f
if(n===D.W0||n===D.ka){x=1
break}s.f=D.W0
s.y=null
s.a5()
u=4
n=A.lJ().geK().h(0,"tutor_device")
if(n==null)n="auto"
p=A.lJ().geK().h(0,"tutor_threads")
p=A.dX(p==null?"":p,null)
if(p==null)p=0
x=7
return A.c(s.a.bjw(new B.b87(s),n,p),$async$Dv)
case 7:s.x=e
s.f=D.ka
n=A.lJ().geK().h(0,"debug")
if(n==="1"){n=s.x
n.toString
r=n
A.rt().$1("[tutor] model ready: "+r.a+" "+r.b+" threads="+r.f+" isolated="+r.r+" in "+r.c+" ms (warm-up "+r.w+" ms, cached before: "+r.d+")")}u=2
x=6
break
case 4:u=3
m=t.pop()
n=A.a8(m)
if(n instanceof B.lI){q=n
s.f=D.aV_
s.y=q
n=A.lJ().geK().h(0,"debug")
if(n==="1")A.rt().$1("[tutor] model failed: "+A.n(q))}else throw m
x=6
break
case 3:x=2
break
case 6:s.a5()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dv,w)},
wO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$wO=A.e(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:if(r.at){x=1
break}q=null
try{k=$.B().b
k===$&&A.b()
k=k.ga4().e.a
q=(k==null?null:k.r)!=null}catch(d){x=1
break}if(!q){x=1
break}r.at=!0
u=4
k=$.B().b
k===$&&A.b()
p=k
x=7
return A.c(p.aQ("quran_tutor_progress").d9("surah, ayah, status, perfect_count, updated_at"),$async$wO)
case 7:o=a1
n=r.c.bjW(o)
m=0,k=y.N,i=y.z
case 8:if(!(m<25)){x=10
break}l=r.c.bf5()
if(J.aM(l)===0){x=10
break}h=p
g=A.I(["p_rows",l],k,i)
f=h.CW
f===$&&A.b()
f.b.A(0,A.ng(h.x,k,k))
x=11
return A.c(f.bnV("quran_tutor_save",!1,g,i),$async$wO)
case 11:r.c.bjO(l)
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
LE(d){return this.bny(d)},
bny(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$LE=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:p=B.ceA(t.c.dq()).dq()
y.f.a(p.h(0,"rows")).en(0,new B.b88(d))
t.c=B.ceA(p)
x=2
return A.c(t.A5(),$async$LE)
case 2:v=4
s=$.B().b
s===$&&A.b()
r=s.ga4().e.a
x=(r==null?null:r.r)!=null?7:8
break
case 7:r=y.z
x=9
return A.c(s.aq("quran_tutor_reset",A.I(["p_surah",d],y.N,r),r),$async$LE)
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
return A.i($async$LE,w)}}
B.xe.prototype={
O(){var x=$.NJ()
return new B.a19(x,new A.af(C.F,$.U()))}}
B.a19.prototype={
W(){var x,w,v=this
v.Z()
x=v.d
x.ab(v.goF())
w=y.a
x.vQ().bK(new B.bOF(v),w)
G.aXj().bK(new B.bOG(v),w).ff(new B.bOH())
A.Hi(G.cdW(),y.y)},
y7(){if(this.c!=null)this.j(new B.bOr())},
m(){var x,w=this
w.d.U(w.goF())
x=w.e
x.q$=$.U()
x.M$=0
w.a1()},
Qv(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.d
x=3
return A.c(s.qS(s.b.bdi(!0)),$async$Qv)
case 3:t=s.a
t.bma()
if(t.aa7()){t.as6()
x=1
break}s.Dv()
case 1:return A.h(v,w)}})
return A.i($async$Qv,w)},
y8(d,e,f){return this.b_0(d,e,f)},
b8k(d){return this.y8(d,null,null)},
b_0(d,e,f){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$y8=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.c(B.cPu(s,d),$async$y8)
case 6:t=h
case 4:if(t==null||u.c==null){x=1
break}x=7
return A.c(u.d.MI(d,t.a,t.b),$async$y8)
case 7:s=u.c
if(s==null){x=1
break}r=y.z
x=8
return A.c(A.O(s,!1).aD(A.aH(new B.bOx(u,d,t),null,r),r),$async$y8)
case 8:if(u.c!=null)u.j(new B.bOy())
case 1:return A.h(v,w)}})
return A.i($async$y8,w)},
t(d){var x=null,w=this.d,v=w.b,u=A.a([],y.p),t=w.a
if(t.gatz()&&!A.O(d,!1).vm())u.push(A.bL(x,x,x,x,C.zb,x,x,t.gbje(),x,x,x,"\u0631\u062c\u0648\u0639 \u0644\u0645\u0633\u062c\u062f\u064a",x))
t=v.e
if(t)u.push(A.bL(x,x,x,x,D.auZ,x,x,new B.bOB(d),x,x,x,"\u062a\u0642\u062f\u0651\u0645\u064a",x))
u.push(A.bL(x,x,x,x,C.iB,x,x,new B.bOC(d),x,x,x,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",x))
if(!w.e)w=D.aIk
else w=t?this.aUK():this.aVj()
return L.y0(u,w,"\u0627\u0644\u0645\u062d\u0641\u0651\u0638")},
aVj(){var x,w,v,u,t,s,r,q,p=null,o=this.d.d
if(o==null)o=D.a4d
x=this.r
w=x==null?p:x.a-x.b
if(!(o.a&&o.b))v="\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u062f\u0639\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638. \u062c\u0631\u0651\u0628 \u0623\u062d\u062f\u062b \u0646\u0633\u062e\u0629 \u0645\u0646 Chrome (\u0623\u0646\u062f\u0631\u0648\u064a\u062f) \u0623\u0648 Safari (\u0622\u064a\u0641\u0648\u0646)."
else if(!o.f)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u0648\u0642\u0639 \u064a\u0641\u062a\u062d \u0639\u0644\u0649 https \u0639\u0634\u0627\u0646 \u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0627\u064a\u0643."
else v=!o.c||!o.d?"\u0627\u0644\u0645\u062a\u0635\u0641\u062d \u062f\u0647 \u0645\u0634 \u0628\u064a\u0633\u0645\u062d \u0628\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u064a\u0643.":p
x=y.p
u=A.a([D.b9s,C.V],x)
for(t=0;t<4;++t){s=D.aKC[t]
u.push(new A.A(C.by,A.z(A.a([A.aW(s.a,C.au,p,18),C.O,new A.bT(1,C.af,A.d(s.b,p,p,p,p,p,C.p3,p,p,p),p)],x),C.r,C.d,C.e,0,p,p),p))}u=A.J(u,C.r,C.d,C.e,0,C.l)
s=A.a([D.bsb,C.H,A.d("\u0647\u0646\u062d\u0645\u0651\u0644 \u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 (\u062d\u0648\u0627\u0644\u064a "+E.bq(105)+" \u0645\u064a\u062c\u0627) \u0648\u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632\u060c \u0648\u0628\u0639\u062f \u0643\u062f\u0647 \u0628\u064a\u0641\u062a\u062d \u0645\u0646 \u063a\u064a\u0631 \u062a\u062d\u0645\u064a\u0644. \u064a\u064f\u0641\u0636\u0651\u0644 \u062a\u0643\u0648\u0646 \u0639\u0644\u0649 Wi-Fi.",p,p,p,p,p,C.aP,p,p,p)],x)
if(w!=null){r=w<3e8
q=r?"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0645\u062a\u0635\u0641\u062d \u0642\u0644\u064a\u0644\u0629 ("+E.bq(C.f.ak(w/1e6))+" \u0645\u064a\u062c\u0627) \u2014 \u0641\u0636\u0651\u064a \u0634\u0648\u064a\u0629 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0623\u0648\u0644.":"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629: \u0643\u0641\u0627\u064a\u0629"
C.b.A(s,A.a([C.H,A.d(q,p,p,p,p,p,A.bD(p,p,r?D.dU:C.bv,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x))}r=o.w
if(r>0&&r<3)C.b.A(s,A.a([C.H,D.bAQ],x))
x=A.a([new E.dG(u,C.a9,C.aO,p,!0,p),new E.dG(A.J(s,C.r,C.d,C.e,0,C.l),C.a9,C.aO,p,!1,p),D.bKf,C.H],x)
if(v!=null)x.push(new E.dG(A.d(v,p,p,p,p,p,D.bl5,p,p,p),C.a9,C.aO,p,!1,p))
else x.push(A.fm(D.arG,p,D.bCY,this.gb_j(),A.el(C.y,C.ah,D.bcj,p,p,p,p)))
x.push(C.a6)
x.push(D.a49)
return x},
aUK(){var x,w,v=this,u=null,t=v.d,s=t.c,r=v.e,q=C.c.K(r.a.a),p=q.length===0,o=p?C.t0:G.csC(q),n=t.z,m=A.Q(v.amE(C.dg,E.bq(s.gauG())+" \u0622\u064a\u0629","\u062d\u0641\u0638\u062a\u0647\u0627"),1),l=E.bq(s.arg()),k=s.c,j=Date.now()
k=k===B.b83(new A.aP(j,0,!1))?"\u0648\u0631\u0627 \u0628\u0639\u0636 \u2014 \u0643\u0645\u0651\u0644!":"\u0633\u0645\u0651\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0647 \u0639\u0634\u0627\u0646 \u062a\u0643\u0645\u0651\u0644"
j=y.p
k=A.a([new B.Id(t,!1,u),A.z(A.a([m,C.O,A.Q(v.amE(C.lu,l+" \u064a\u0648\u0645",k),1)],j),C.h,C.d,C.e,0,u,u),C.v],j)
if(n!=null){t=G.kw(n.a)
m=n.b
l=n.c
m=m===l?"\u0622\u064a\u0629 "+E.bq(m):"\u0627\u0644\u0622\u064a\u0627\u062a "+E.bq(m)+"\u2013"+E.bq(l)
k.push(new E.dG(A.z(A.a([D.atZ,C.a0,A.Q(A.J(A.a([D.bn4,A.d(t+" \u2014 "+m,u,u,u,u,u,I.bF,u,u,u)],j),C.r,C.d,C.e,0,C.l),1),M.nZ],j),C.h,C.d,C.e,0,u,u),C.a9,C.aO,new B.bOu(v,n),!0,u))}t=C.i.ae(0.08)
k.push(A.az(u,C.o,!1,u,!0,C.m,u,A.aA(),r,u,u,u,u,u,2,A.cK(u,new A.cp(4,A.u(14),C.J),u,u,u,u,u,u,!0,u,u,u,u,u,u,t,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,C.pc,"\u0639\u0627\u064a\u0632 \u062a\u062d\u0641\u0638 \u0633\u0648\u0631\u0629 \u0625\u064a\u0647\u061f",u,u,u,u,u,u,u,u,u,!0,!0,!1,u,C.rl,u,u,u,u,u,u,u,u,u,u,u,u),C.q,!0,u,!0,u,!1,u,C.D,u,u,u,u,u,u,u,u,u,1,u,u,!1,"\u2022",u,new B.bOv(v),u,u,u,!1,u,u,!1,u,!0,u,C.C,u,u,u,u,u,u,u,u,u,u,u,C.d2,!0,C.u,u,C.E,u,u,u,u))
k.push(C.v)
if(!p){t=A.a([],j)
if(o.length===0)t.push(D.bwP)
for(r=o.length,x=0;x<o.length;o.length===r||(0,A.L)(o),++x)t.push(v.RV(o[x]))
C.b.A(k,t)}else{t=A.a([D.aY8,D.aZg,v.RV(1)],j)
for(w=114;w>=78;--w)t.push(v.RV(w))
t.push(C.H)
r=v.f
p=A.aW(r?C.yN:C.ls,C.au,u,u)
t.push(A.eY(p,u,A.d(r?"\u0627\u062e\u0641\u064a \u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631":"\u0628\u0627\u0642\u064a \u0627\u0644\u0633\u0648\u0631 (\u0627\u0644\u0628\u0642\u0631\u0629 \u0644\u062d\u062f \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u062a)",u,u,u,u,u,C.f9,u,u,u),new B.bOw(v),u))
if(v.f)for(w=2;w<=77;++w)t.push(v.RV(w))
C.b.A(k,t)}k.push(C.V)
k.push(D.CO)
return k},
amE(d,e,f){var x=null,w=y.p
return new E.dG(A.z(A.a([A.aW(d,C.y,x,x),C.O,A.Q(A.J(A.a([A.d(e,x,x,x,x,x,I.bF,x,x,x),A.d(f,x,1,C.L,x,x,C.hq,x,x,x)],w),C.r,C.d,C.e,0,C.l),1)],w),C.h,C.d,C.e,0,x,x),C.a9,C.G,x,!1,x)},
RV(d){var x,w=null,v=this.d.c,u=H.cY[d-1].a[1],t=v.a7a(d),s=t/u,r=y.p,q=A.am(A.dA(C.P,A.a([A.ccf(C.eu,F.cW,w,w,w,w,w,3,s,w),A.d(E.bq(d),w,w,w,w,w,C.mk,w,w,w)],r),C.m,C.bo,w),36,36),p=A.d(G.kw(d),w,w,w,w,w,C.a2s,w,w,w)
if(t===0)x=E.bq(u)+" \u0622\u064a\u0629"
else x=t===u?"\u0645\u062d\u0641\u0648\u0638\u0629 \u0643\u0644\u0647\u0627":"\u062d\u0641\u0638\u062a "+E.bq(t)+" \u0645\u0646 "+E.bq(u)
r=A.a([q,C.cr,A.Q(A.J(A.a([p,A.d(x,w,w,w,w,w,A.bD(w,w,t===u?F.cW:C.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),C.r,C.d,C.e,0,C.l),1)],r)
if(s>0&&s<1)r.push(A.d(E.bq(C.f.ak(s*100))+"\u066a",w,w,w,w,w,D.a2T,w,w,w))
r.push(D.arO)
return new E.dG(A.z(r,C.h,C.d,C.e,0,w,w),C.qF,C.d4,new B.bOz(this,d),!1,w)}}
B.Id.prototype={
t(d){var x,w,v,u,t,s,r=null,q=this.c
switch(q.f.a){case 2:if(this.d)return C.b2
return D.aZf
case 3:x=q.y
x=A.a([A.d(x==null?"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0634\u063a\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638":B.ND(x),r,r,r,r,r,D.C2,r,r,r)],y.p)
w=q.y
if(w!=null)x.push(new B.DU(w,"model load",r))
x.push(C.H)
x.push(A.cjK(C.mr,r,q.gbjv()))
return new E.dG(A.J(x,C.r,C.d,C.e,0,C.l),C.a9,C.aO,r,!1,r)
case 0:case 1:v=q.w
u=q.r
q=v>0
t=q?C.f.d1(u/v,0,1):r
s=q&&u<v
q=A.d(s?"\u0628\u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026 "+E.bq(C.f.ak(u/1e6))+" \u0645\u0646 "+E.bq(C.f.ak(v/1e6))+" \u0645\u064a\u062c\u0627":"\u0628\u0646\u062c\u0647\u0651\u0632 \u0627\u0644\u0645\u062d\u0641\u0651\u0638\u2026",r,r,r,r,r,C.ib,r,r,r)
x=A.u(8)
w=y.p
x=A.a([q,C.A,A.f5(x,A.qp(C.eu,C.y,7,s?t:r,r),C.az)],w)
if(!this.d)C.b.A(x,A.a([C.H,D.bsa],w))
return new E.dG(A.J(x,C.r,C.d,C.e,0,C.l),C.a9,C.aO,r,!1,r)}}}
B.YU.prototype={
t(d){var x=null,w=D.dU.ae(0.1),v=A.u(14),u=A.aJ(D.dU.ae(0.4),1)
return A.E(x,A.z(A.a([D.atB,C.O,A.Q(A.d(this.c?"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0627\u0644\u062a\u062c\u0648\u064a\u062f.":"\u0645\u0633\u0627\u0639\u062f \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0634 \u0628\u062f\u064a\u0644 \u0639\u0646 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0645\u0643\u0646 \u064a\u063a\u0644\u0637\u060c \u0648\u0645\u0634 \u0628\u064a\u062d\u0643\u0645 \u0639\u0644\u0649 \u0623\u062d\u0643\u0627\u0645 \u0627\u0644\u062a\u062c\u0648\u064a\u062f. \u0627\u0642\u0631\u0627 \u0639\u0644\u0649 \u0634\u064a\u062e \u0623\u0648 \u0645\u062d\u0641\u0651\u0638 \u0641\u064a \u0645\u0633\u062c\u062f\u0643 \u0643\u0645\u0627\u0646.",x,x,x,x,x,C.p3,x,x,x),1)],y.p),C.r,C.d,C.e,0,x,x),C.k,x,x,new A.G(w,x,u,v,x,x,x,C.n),x,x,x,C.aO,C.ae,x,x,x)}}
B.EV.prototype={
S(){return"_Phase."+this.b}}
B.DT.prototype={
O(){return new B.a3I($.NJ(),D.mJ)}}
B.a3I.prototype={
gjf(){var x=this.e
return x===$?this.e=this.a.d:x},
gC6(){var x,w=this.a,v=w.f
w=w.c
x=this.gjf()
return G.NB(w,x,v.yj(w,x)).b},
W(){var x,w=this
w.Z()
x=w.d
x.ab(w.goF())
x.vQ()
x.a.a7H(B.aBx(w.a.c,w.gjf()))},
y7(){if(this.c!=null)this.j(new B.c1s())},
m(){var x,w=this,v=w.d
v.U(w.goF())
x=w.Q
if(x!=null)x.av()
v=v.a
v.N_()
v.a4s()
w.a1()},
a_Z(d){var x,w,v=this
if(v.f===D.vo)v.d.a.a4s()
x=v.d.a
x.N_()
w=v.Q
if(w!=null)w.av()
v.j(new B.c1I(v,d))
x.a7H(B.aBx(v.a.c,d))
w=v.a
if(d<w.e)x.a7H(B.aBx(w.c,d+1))},
Sb(d){return this.aWb(d)},
aWb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Sb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.f===D.vn){u.d.a.N_()
u.j(new B.c1M(u))
x=1
break}t=u.r!=null?D.jk:D.mJ
u.j(new B.c1N(u))
s=u.d
r=A.a([B.aBx(u.a.c,u.gjf())],y.s)
q=d==null?s.b.b:d
x=3
return A.c(s.a.Ln(r,q),$async$Sb)
case 3:p=f
if(u.c==null||u.f!==D.vn){x=1
break}u.j(new B.c1O(u,t,p))
case 1:return A.h(v,w)}})
return A.i($async$Sb,w)},
QV(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$QV=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.d
if(l.f!==D.ka){x=1
break}p=l.a
p.N_()
r=B.FE(s.gC6()).length
s.j(new B.c1Q(s))
o=s.Q
if(o!=null)o.av()
s.Q=A.hg(C.eU,new B.c1R(s))
u=4
o=B.cgo(r)
n=A.du(0,0,0,350*r,0,0)
x=7
return A.c(p.aaj(l.b.c,o,n,new B.c1S(s),new B.c1T(s)),$async$QV)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
l=A.a8(k)
if(l instanceof B.lI){q=l
l=s.Q
if(l!=null)l.av()
if(s.c!=null)s.j(new B.c1U(s,q))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QV,w)},
C0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$C0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.f!==D.vo){x=1
break}m=s.Q
if(m!=null)m.av()
s.j(new B.c1W(s))
s.Q=A.hg(C.iu,new B.c1X(s))
l=new A.Dk()
$.FI()
l.oo()
r=l
u=4
m=s.d.a
x=7
return A.c(m.aan(),$async$C0)
case 7:q=e
if(q.b<0.8){s.b8j("\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0642\u0635\u064a\u0631 \u0623\u0648\u064a \u2014 \u062f\u0648\u0633 \xab\u0633\u0645\u0651\u0639\xbb \u0648\u0627\u0642\u0631\u0627 \u0627\u0644\u0622\u064a\u0629 \u0643\u0644\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb.")
x=1
break}x=8
return A.c(m.awF(q,B.FE(s.gC6()).length),$async$C0)
case 8:p=e
s.ch=A.du(0,0,r.ga5J(),0,0,0)
k=A.lJ().geK().h(0,"debug")
if(k==="1"){o=B.csS(m.JT())
A.rt().$1("[tutor] "+s.a.c+":"+s.gjf()+" audio="+C.f.aB(q.b,1)+"s infer="+p.b+"ms total="+r.gCR()+"ms "+p.gTE()+" text="+p.a)
A.rt().$1("[tutor] stages: "+A.n(o))
s.ax="\u062a\u0633\u062c\u064a\u0644\u0643 "+C.f.aB(p.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.f.aB(p.b/1000,2)+" \u062b\n"+p.gTE()+"\n"+A.n(o)+"\n"+p.a}s.agF(p.a)
u=2
x=6
break
case 4:u=3
i=t.pop()
m=A.a8(i)
if(m instanceof B.lI){n=m
m=A.lJ().geK().h(0,"debug")
if(m==="1")A.rt().$1("[tutor] check failed: "+A.n(n)+"\n"+s.d.a.JT())
s.a3g(B.ND(n),n)}else throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$C0,w)},
a3g(d,e){var x=this,w=x.Q
if(w!=null)w.av()
if(x.c==null)return
x.j(new B.c1H(x,d,e))},
b8j(d){return this.a3g(d,null)},
agF(d){var x,w,v,u,t,s=this,r={},q=s.Q
if(q!=null)q.av()
if(s.c==null)return
x=B.cqT(s.gC6(),d)
r.a=null
if(C.c.K(x.c).length!==0){q=s.d
w=q.c
v=s.a.c
u=s.gjf()
t=x.gtF()
r.a=w.avG(v,u,q.b.a,t)
q.A5()}s.j(new B.c1J(r,s,x))},
Ov(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Ov=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:g=s.d
if(g.f!==D.ka){x=1
break}s.j(new B.c1A(s))
l=s.Q
if(l!=null)l.av()
s.Q=A.hg(C.iu,new B.c1B(s))
k=new A.Dk()
$.FI()
k.oo()
r=k
u=4
l=g.a
x=7
return A.c(l.bom(B.aBx(s.a.c,s.gjf()),B.FE(s.gC6()).length),$async$Ov)
case 7:q=e
p=B.csS(l.JT())
o="\u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a "+C.f.aB(q.c,1)+" \u062b \u2014 \u0627\u0644\u062a\u0639\u0631\u0651\u0641 "+C.f.aB(q.b/1000,2)+" \u062b (\u0627\u0644\u0643\u0644 "+C.f.aB(r.gCR()/1000,2)+" \u062b)\n"+q.gTE()+"\n"+A.n(p)+"\n"+q.a
A.rt().$1("[tutor-debug] "+s.a.c+":"+s.gjf()+" audio="+C.f.aB(q.c,1)+"s infer="+q.b+"ms total="+r.gCR()+"ms "+q.gTE()+" text="+q.a)
A.rt().$1("[tutor-debug] stages: "+A.n(p))
s.ch=A.du(0,0,r.ga5J(),0,0,0)
s.agF(q.a)
n=s.r
if(n!=null){l=n.gtF()
j=n.b
i=A.aj(j).i("ah<1>")
j=A.a9(new A.ah(j,new B.c1C(),i),i.i("W.E"))
A.rt().$1("[tutor-debug] perfect="+l+" ops="+A.n(j))}s.j(new B.c1D(s,o))
u=2
x=6
break
case 4:u=3
f=t.pop()
l=A.a8(f)
if(l instanceof B.lI){m=l
A.rt().$1("[tutor-debug] failed: "+A.n(m)+"\n"+g.a.JT())
s.a3g(B.ND(m),m)}else throw f
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ov,w)},
ga1Z(){var x,w,v
for(x=this.a.d,w=this.d;v=this.a,x<=v.e;++x){v=w.c.a.h(0,v.c*1000+x)
if((v==null?$.ry():v).a!==D.fi)return!1}return!0},
t(d){var x,w=this,v=null,u=w.d,t=u.c.a7i(w.a.c,w.gjf()),s=u.b,r=s.d&&!w.x&&w.f!==D.jk,q=G.kw(w.a.c),p=y.p,o=A.a([A.bL(v,v,v,v,C.iB,v,v,new B.c21(d),v,v,v,"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",v)],p),n=w.aMr(),m=A.d("\u0622\u064a\u0629 "+E.bq(w.gjf()),v,v,v,v,v,C.kx,v,v,v),l=E.bq(w.gjf()-w.a.d+1),k=w.a
s=A.a([A.z(A.a([m,C.aY,A.d("("+l+" \u0645\u0646 "+E.bq(k.e-k.d+1)+")",v,v,v,v,v,C.aP,v,v,v),C.bE,w.b07(t,s.a)],p),C.h,C.d,C.e,0,v,v),C.v],p)
if(r)s.push(w.aUF())
else{m=w.r
if(m!=null){l=w.f
l=l!==D.vo&&l!==D.pz}else l=!1
if(l)s.push(w.aK4(m))
else s.push(A.d(w.gC6()+" \ufd3f"+E.bq(w.gjf())+"\ufd3e",v,v,v,v,v,D.ky,C.W,C.ba,v))}s=A.a([new B.Id(u,!0,v),n,C.A,new E.dG(A.J(s,C.aa,C.d,C.e,0,C.l),D.akx,C.aO,v,!1,v)],p)
n=w.r
if(n!=null&&w.f===D.jk)s.push(w.b9O(n))
if(w.r!=null&&w.f===D.jk&&w.ch!=null){x=C.f.ak(C.j.aJ(w.ch.a,1000)/100)
s.push(new A.A(C.by,A.d("\u0627\u062a\u0631\u0627\u062c\u0639 \u0641\u064a "+(E.bq(C.j.aJ(x,10))+"\u066b"+E.bq(C.j.a3(x,10)))+" \u062b",v,v,v,v,v,C.aP,C.W,v,v),v))}n=w.as
if(n!=null)s.push(new A.A(C.aO,A.d(n,v,v,v,v,v,D.C2,v,v,v),v))
if(w.as!=null&&w.at!=null){n=w.at
n.toString
s.push(new B.DU(n,"check "+w.a.c+":"+w.gjf(),v))}s.push(w.aKF())
s.push(C.V)
s.push(A.iA(C.y,C.G,v,new B.c22(w),D.bp6,D.bx3,u.b.d))
n=w.a
if(n.e>n.d){n=w.ga1Z()
s.push(new E.dG(A.z(A.a([D.aqf,C.a0,A.Q(A.J(A.a([D.bz1,A.d(w.ga1Z()?"\u062d\u0641\u0638\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u0633\u0645\u0651\u0639\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636 \u0645\u0646 \u063a\u064a\u0631 \u0645\u0627 \u062a\u0634\u0648\u0641\u0647\u0627":"\u0644\u0645\u0627 \u062a\u062e\u0644\u0651\u0635 \u0627\u0644\u0622\u064a\u0627\u062a \u0648\u0627\u062d\u062f\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0644\u0647\u0627 \u0648\u0631\u0627 \u0628\u0639\u0636",v,v,v,v,v,C.aP,v,v,v)],p),C.r,C.d,C.e,0,C.l),1),M.nZ],p),C.h,C.d,C.e,0,v,v),C.a9,C.aO,new B.c23(w,d),n,v))}n=A.lJ().geK().h(0,"debug")
if(n==="1"){p=A.a([C.A,A.d4(D.arF,D.bu0,u.f===D.ka&&w.f!==D.pz?w.gaLo():v,v)],p)
n=w.ax
if(n!=null)p.push(new A.A(C.fZ,A.p2(n,C.aP,v,v),v))
n=u.x
if(n!=null){m=n.a
l=n.b
n=n.gn7()
u=u.x
p.push(A.d("model: "+m+" "+l+" \u2014 "+n+", isolated "+u.r+", load "+u.c+" ms (warm-up "+u.w+" ms)",v,v,v,v,v,C.aP,v,v,v))}p.push(A.b1(D.br5,v,v,v,new B.c24(w,d),v,v))
C.b.A(s,p)}s.push(C.A)
s.push(D.CO)
return L.y0(o,s,q)},
aMr(){var x=this.a,w=x.e-x.d+1
if(w===1)return C.b2
return A.am(A.fn(new B.c1F(this),w,null,C.ag,new B.c1G()),36,null)},
b07(d,e){var x,w,v,u,t,s,r,q=null
if(d.a===D.fi)return D.b9v
x=d.b
w=E.bq(x)
v=E.bq(e)
u=A.a([],y.p)
for(t=0;t<e;++t){s=t<x
r=s?C.c2:C.rb
u.push(new A.A(D.ali,A.aW(r,s?F.cW:C.ev,q,16),q))}return A.Kv(A.z(u,C.h,C.d,C.K,0,q,q),q,"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637 \u0648\u0631\u0627 \u0628\u0639\u0636: "+w+" \u0645\u0646 "+v,q,q)},
aUF(){var x=null
return A.bu(!1,A.u(12),!0,A.E(x,D.agk,C.k,x,x,new A.G(C.q8,x,x,A.u(12),x,x,x,C.n),x,x,x,x,D.ak5,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,new B.c1L(this),x,x,x,x,x,x,x)},
aK4(d){var x,w,v,u,t,s=null,r=A.a([],y.R)
for(x=d.a,w=0;w<x.length;++w){v=J.at(d.gMY(),w)
A:{if(D.jd===v){u=D.ky.cv(F.cW)
break A}if(D.v7===v){u=D.ky.a54(D.dU,C.fH,D.dU)
break A}if(D.v8===v){u=D.ky.a54(D.eQ,C.fH,D.eQ)
break A}u=D.ky.a54(C.ev,C.j6,C.bv)
break A}t=x[w]
r.push(new A.eT(t.a,s,s,C.bz,s,s,s,s,s,s,u))
r.push(O.C_)}x=E.bq(this.gjf())
r.push(A.ey(s,s,s,s,s,s,s,s,s,D.ky.cv(C.au),"\ufd3f"+x+"\ufd3e"))
return A.Dx(A.ey(r,s,s,s,s,s,s,s,s,s,s),s,s,s,C.W,C.ba)},
b9O(d){var x,w,v,u,t,s,r=this.w
if(C.c.K(d.c).length===0)return D.bJD
if(d.gtF()){x=r==null
if((x?null:r.a)===D.fi&&r.b===this.d.b.a)x="\u0627\u0644\u0622\u064a\u0629 \u062f\u064a \u0627\u062a\u062d\u0641\u0638\u062a! \u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u064a \u0628\u0639\u062f\u0647\u0627."
else x=!x&&r.a!==D.fi?"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637. \u0633\u0645\u0651\u0639\u0647\u0627 \u0643\u0645\u0627\u0646 "+E.bq(this.d.b.a-r.b)+" \u0645\u0631\u0629 \u0639\u0634\u0627\u0646 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629.":"\u062a\u0633\u0645\u064a\u0639 \u0645\u0638\u0628\u0648\u0637."
return new B.Ea(F.cW,C.c2,"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647",x,null)}x=d.gMY()
w=J.dJ(x)
v=w.io(x,new B.c1Y()).gN(0)
u=w.io(x,new B.c1Z()).gN(0)
t=w.io(x,new B.c2_()).gN(0)
x=A.a([],y.s)
if(u>0)x.push(E.bq(u)+" \u063a\u0644\u0637")
if(v>0)x.push(E.bq(v)+" \u0631\u0627\u062c\u0639\u0647\u0627")
if(t>0)x.push(E.bq(t)+" \u0646\u0627\u0642\u0635\u0629")
if(d.gKc().length!==0)x.push(E.bq(d.gKc().length)+" \u0632\u064a\u0627\u062f\u0629")
w=u+t>0?D.eQ:D.dU
x=C.b.ap(x," \u2022 ")
s=d.gKc().length!==0?"\n\u0632\u064a\u0627\u062f\u0629: "+C.b.ap(d.gKc(),"\u060c "):""
return new B.Ea(w,C.nN,"\u0642\u0631\u0628\u062a! \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0644\u0648\u0651\u0646\u0629",x+"\n\u0627\u0644\u0623\u0635\u0641\u0631: \u0631\u0627\u062c\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u062f\u064a \u2014 \u0627\u0644\u0623\u062d\u0645\u0631: \u063a\u0644\u0637 \u2014 \u0627\u0644\u0631\u0645\u0627\u062f\u064a \u0627\u0644\u0645\u0634\u0637\u0648\u0628: \u0646\u0633\u064a\u062a\u0647\u0627."+s,null)},
aKF(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d,g=h.f===D.ka,f=j.f
switch(f.a){case 2:if(j.z==null)x=0
else{f=Date.now()
w=j.z
w.toString
x=C.j.aJ(new A.aP(f,0,!1).dC(w).a,1e6)}v=C.j.aJ(B.cgo(B.FE(j.gC6()).length).a,1e6)
f=j.gb6T()
w=96+26*j.y
u=D.eQ.ae(0.25)
w=A.hS(i,A.a6A(C.P,A.E(i,D.arS,C.k,i,i,D.a8a,i,84,i,i,i,i,i,84),i,C.aX,new A.G(u,i,i,i,i,i,i,C.bY),C.FO,i,w,i,w),C.q,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,f,i,i,i,i,i,i,!1,C.cx)
u=A.d("\u0628\u0646\u0633\u062c\u0651\u0644\u2026 "+B.cfi(x)+" / "+B.cfi(v),i,i,i,i,i,K.pa,i,i,i)
return A.J(A.a([w,C.A,u,A.d(h.b.c?"\u0644\u0645\u0627 \u062a\u062e\u0644\u0635 \u0627\u0633\u0643\u062a \u062b\u0627\u0646\u064a\u0629 \u0623\u0648 \u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb":"\u062f\u0648\u0633 \xab\u062e\u0644\u0635\u062a\xbb \u0644\u0645\u0627 \u062a\u062e\u0644\u0635",i,i,i,i,i,C.aP,i,i,i),A.b1(D.bvw,i,i,i,f,i,i)],y.p),C.h,C.d,C.e,0,C.l)
case 3:t=C.f.eE((Date.now()-j.ay)/1000)
if(t<8)h="\u062b\u0648\u0627\u0646\u064a \u0648\u0646\u0642\u0648\u0644\u0643"
else h=t<25?"\u0644\u0633\u0647 \u0634\u063a\u0627\u0644\u064a\u0646 \u2014 \u0627\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0637\u0648\u064a\u0644\u0629 \u0628\u062a\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0643\u062a\u0631 ("+E.bq(t)+" \u062b)":"\u0648\u0627\u062e\u062f \u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0639\u0627\u062f\u064a \u2014 \u0644\u0648 \u0639\u0644\u0651\u0642 \u0647\u0646\u0639\u064a\u062f \u062a\u0634\u063a\u064a\u0644\u0647 \u0644\u0648\u062d\u062f\u0646\u0627 ("+E.bq(t)+" \u062b)"
return new A.A(C.qz,A.J(A.a([C.wg,C.V,D.bA8,A.d(h,i,i,i,i,i,C.aP,C.W,i,i)],y.p),C.h,C.d,C.e,0,C.l),i)
default:s=f===D.vn
r=j.r
f=r==null
w=!f
q=w&&r.gtF()
u=A.aW(s?C.nO:K.Io,i,i,i)
if(s)p="\u0648\u0642\u0651\u0641"
else p=w&&!q?"\u0627\u0633\u0645\u0639 \u0627\u0644\u0635\u062d":"\u0627\u0633\u0645\u0639"
p=A.d(p,i,i,i,i,i,i,i,i,i)
o=A.el(i,i,D.bcg,i,i,i,i)
u=A.Q(new A.Aq(C.a4Z,!0,new B.c1t(j,r,q),i,i,i,o,C.k,i,!1,i,!0,i,new A.Zy(p,u,o,i,i),i),1)
p=A.a([],y.n)
for(o=y.c,n=0;n<3;++n){m=D.Ka[n]
p.push(new A.eh(m,i,A.d("\xd7"+E.bq(m),i,i,i,i,i,i,i,i,i),o))}o=y.S
l=y.b
k=y.p
o=A.z(A.a([u,C.O,A.nE(new B.c1u(j),p,A.dg([h.b.b],o),!1,A.kz(i,i,i,new A.bf(new B.c1v(),l),i,i,i,i,new A.bf(new B.c1w(),l),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,C.cU),o)],k),C.h,C.d,C.e,0,i,i)
h=g&&!s?j.gb2e():i
u=A.aW(f?D.r7:C.nN,i,i,i)
if(g)f=f?"\u0633\u0645\u0651\u0639":"\u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a"
else f="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
f=A.d(f,i,i,i,i,i,C.cj,i,i,i)
p=q?C.ir:C.y
h=A.a([o,C.v,A.fm(u,i,f,h,A.el(p,q?C.i:C.ah,D.uo,i,i,i,i))],k)
if(w&&j.gjf()<j.a.e)C.b.A(h,A.a([C.A,q?A.fm(D.avj,i,D.br6,new B.c1x(j),A.el(F.cW,C.ah,D.uo,i,i,i,i)):A.b1(D.bpG,i,i,i,new B.c1y(j),i,i)],k))
if(w){f=j.gjf()
w=j.a
u=w.e
f=f===u&&q&&u>w.d}else f=!1
if(f)h.push(new A.A(C.hN,A.d(j.ga1Z()?"\u062e\u0644\u0651\u0635\u062a \u0627\u0644\u0622\u064a\u0627\u062a \u062f\u064a \u2014 \u062c\u0631\u0651\u0628 \xab\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636\xbb \u062a\u062d\u062a.":"\u062e\u0644\u0635\u062a \u0622\u062e\u0631 \u0622\u064a\u0629 \u2014 \u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0644\u0633\u0647 (\u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0635\u0641\u0631\u0627 \u0641\u0648\u0642).",i,i,i,i,i,C.p9,C.W,i,i),i))
return A.J(h,C.aa,C.d,C.e,0,C.l)}}}
B.Ea.prototype={
t(d){var x=this,w=null,v=x.c,u=v.ae(0.12),t=A.u(14),s=A.aJ(v.ae(0.5),1),r=y.p
return A.E(w,A.z(A.a([A.aW(x.d,v,w,w),C.O,A.Q(A.J(A.a([A.d(x.e,w,w,w,w,w,A.bD(w,w,v,w,w,w,w,w,w,w,w,15,w,w,C.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),C.bH,A.d(x.f,w,w,w,w,w,C.p3,w,w,w)],r),C.r,C.d,C.e,0,C.l),1)],r),C.r,C.d,C.e,0,w,w),C.k,w,w,new A.G(u,w,s,t,w,w,w,C.n),w,w,w,C.aO,C.ae,w,w,w)}}
B.DS.prototype={
O(){var x=y.S
return new B.a3H($.NJ(),A.D(x,y.B),A.aN(x),A.D(x,y.N),A.es(null,y.H))}}
B.a3H.prototype={
W(){this.Z()
this.d.ab(this.goF())},
y7(){if(this.c!=null)this.j(new B.c1b())},
m(){var x,w=this,v=w.d
v.U(w.goF())
x=w.y
if(x!=null)x.av()
v.a.a4s()
w.a1()},
IH(d){return this.b6C(d)},
b6C(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m
var $async$IH=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.j(new B.c1k(t,d))
r=t.y
if(r!=null)r.av()
t.y=A.hg(C.eU,new B.c1l(t))
v=3
r=t.d
q=t.a
p=q.f
q=q.c
q=B.cgo(B.FE(G.NB(q,d,p.yj(q,d)).b).length)
p=t.a
o=p.f
p=p.c
p=A.du(0,0,0,350*B.FE(G.NB(p,d,o.yj(p,d)).b).length,0,0)
x=6
return A.c(r.a.aaj(r.b.c,q,p,new B.c1m(t,d),new B.c1n(t)),$async$IH)
case 6:v=1
x=5
break
case 3:v=2
m=u.pop()
r=A.a8(m)
if(r instanceof B.lI){s=r
r=t.y
if(r!=null)r.av()
if(t.c!=null)t.j(new B.c1o(t,s))}else throw m
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$IH,w)},
G1(d,e){return this.aNH(d,e)},
aNH(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$G1=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.e!==d){x=1
break}o=s.y
if(o!=null)o.av()
s.j(new B.c1f(s,d))
n=d<s.a.e?d+1:null
r=s.d.a.aan()
if(e&&n!=null)s.IH(n)
q=null
u=4
x=7
return A.c(r,$async$G1)
case 7:q=g
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a8(l)
if(o instanceof B.lI){p=o
s.j(new B.c1g(s,d,p))}else throw l
x=6
break
case 3:x=2
break
case 6:if(q!=null){o=q
s.at=s.at.bK(new B.c1h(s,o,d),y.H)}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$G1,w)},
gaYs(){var x,w,v,u,t=this
for(x=t.a.d,w=t.f,v=t.r,u=t.w;x<=t.a.e;++x)if(!w.aF(x)&&!v.n(0,x)&&!u.aF(x)&&x!==t.e)return x
return null},
b39(){this.j(new B.c1i(this))},
t(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q.f===D.ka,o=s.e,n=s.gaYs(),m=s.f,l=m.a,k=s.w.a,j=s.a,i=l+k===j.e-j.d+1&&s.r.a===0&&o==null
l=A.y(m).i("c5<2>")
x=new A.ah(new A.c5(m,l),new B.c1p(),l.i("ah<W.E>")).gN(0)
l=G.kw(s.a.c)
m=y.p
q=A.a([new B.Id(q,!0,r),A.d("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 "+E.bq(s.a.d)+" \u0644\u062d\u062f "+E.bq(s.a.e)+" \u0645\u0646 \u062d\u0641\u0638\u0643\u060c \u0622\u064a\u0629 \u0622\u064a\u0629: \u0628\u0639\u062f \u0643\u0644 \u0622\u064a\u0629 \u062f\u0648\u0633 \xab\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629\xbb \u0648\u0643\u0645\u0651\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u2014 \u0647\u0646\u0635\u062d\u0651\u062d \u0648\u0625\u0646\u062a \u0628\u062a\u0642\u0631\u0627.",r,r,r,r,r,C.aP,r,r,r),C.v],m)
for(w=s.a.d;w<=s.a.e;++w)q.push(s.b8l(w))
q.push(C.A)
k=s.Q
if(k!=null)q.push(A.d(k,r,r,r,r,r,D.C2,r,r,r))
k=s.as
if(k!=null){j=s.a
q.push(new B.DU(k,"review "+j.c+":"+j.d+"-"+j.e,r))}k=o==null
if(!k){j=E.bq(o)
if(s.z==null)v=0
else{v=Date.now()
u=s.z
u.toString
u=C.j.aJ(new A.aP(v,0,!1).dC(u).a,1e6)
v=u}v=A.d("\u0628\u0646\u0633\u062c\u0651\u0644 \u0622\u064a\u0629 "+j+"\u2026 "+B.cfi(v),r,r,r,r,r,K.pa,C.W,r,r)
j=A.f5(A.u(6),A.qp(C.eu,D.eQ,6,s.x,r),C.az)
u=o<s.a.e
t=A.aW(u?Q.Ii:C.nO,r,r,r)
C.b.A(q,A.a([v,C.H,j,C.v,A.fm(t,r,A.d(u?"\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629":"\u062e\u0644\u0635\u062a",r,r,r,r,r,C.cj,r,r,r),new B.c1q(s,o),A.el(C.y,C.ah,D.uo,r,r,r,r))],m))}else if(n!=null){j=p?new B.c1r(s,n):r
if(!p)v="\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0644\u0633\u0647 \u0628\u064a\u062a\u062d\u0645\u0651\u0644\u2026"
else v=n===s.a.d?"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0633\u0645\u064a\u0639":"\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+E.bq(n)
q.push(A.fm(D.at3,r,A.d(v,r,r,r,r,r,C.cj,r,r,r),j,A.el(C.y,C.ah,D.uo,r,r,r,r)))}if(s.r.a!==0&&k)q.push(D.aYM)
if(i){k=s.a
k=x===k.e-k.d+1
j=k?F.cW:D.dU
v=k?C.nE:C.nN
if(k)k="\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647\u060c \u0633\u0645\u0651\u0639\u062a\u0647\u0645 \u0643\u0644\u0647\u0645 \u0635\u062d"
else{k=E.bq(x)
u=s.a
u=k+" \u0645\u0646 "+E.bq(u.e-u.d+1)+" \u0622\u064a\u0627\u062a \u0645\u0638\u0628\u0648\u0637\u0629"
k=u}u=s.a
u=x===u.e-u.d+1?"\u0631\u0628\u0646\u0627 \u064a\u062b\u0628\u0651\u062a\u0647\u0627 \u0641\u064a \u0642\u0644\u0628\u0643.":"\u0627\u0631\u062c\u0639 \u0644\u0644\u0622\u064a\u0627\u062a \u0627\u0644\u0644\u064a \u0641\u064a\u0647\u0627 \u0623\u0644\u0648\u0627\u0646 \u0648\u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0648\u0628\u0639\u062f\u064a\u0646 \u0633\u0645\u0651\u0639 \u062a\u0627\u0646\u064a."
C.b.A(q,A.a([new B.Ea(j,v,k,u,r),A.d4(D.av8,D.bAe,s.gb38(),r)],m))}q.push(C.v)
q.push(D.CO)
return L.y0(r,q,"\u0633\u0645\u0651\u0639 "+l)},
b8l(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f.h(0,d),i=l.w.h(0,d)
if(l.e===d)x=D.asm
else if(l.r.n(0,d))x=N.ur
else if(i!=null)x=D.asE
else if(j!=null){w=j.gtF()?C.c2:D.aoN
x=A.aW(w,j.gtF()?F.cW:D.dU,k,k)}else x=D.aqZ
w=y.p
v=A.a([A.z(A.a([A.d("\u0622\u064a\u0629 "+E.bq(d),k,k,k,k,k,C.a2j,k,k,k),C.bE,x],w),C.h,C.d,C.e,0,k,k)],w)
if(i!=null)v.push(A.d(i,k,k,k,k,k,D.a2E,k,k,k))
if(j!=null&&!j.gtF()){u=y.R
t=A.a([],u)
for(s=j.a,r=0;r<s.length;++r){q=s[r]
p=j.gMY()
o=J.bb(p)
n=o.h(p,r)
A:{if(D.jd===n){m=F.cW
break A}if(D.v7===n){m=D.dU
break A}if(D.v8===n){m=D.eQ
break A}m=C.ev
break A}m=D.ky.bdY(m,o.h(p,r)===D.v9?C.j6:k,22)
C.b.A(t,A.a([new A.eT(q.a,k,k,C.bz,k,k,k,k,k,k,m),O.C_],u))}w=A.a([C.ak,A.Dx(A.ey(t,k,k,k,k,k,k,k,k,k,k),k,k,k,C.W,C.ba)],w)
if(C.c.K(j.c).length===0)w.push(D.bvG)
C.b.A(v,w)}return new E.dG(A.J(v,C.aa,C.d,C.e,0,C.l),C.bQ,C.d4,k,!1,k)}}
B.DR.prototype={
O(){return new B.a3G($.NJ())}}
B.a3G.prototype={
W(){this.Z()
var x=this.d
x.ab(this.goF())
x.vQ()},
y7(){if(this.c!=null)this.j(new B.c12())},
m(){this.d.U(this.goF())
this.a1()},
t(d){var x,w,v,u,t,s=this,r=null,q=s.d.c,p=q.gaAj(),o=A.a([],y.t)
for(x=78;x<=114;++x)o.push(x)
w=C.b.ie(o,0,new B.c19(q))
v=C.b.ie(o,0,new B.c1a())
o=y.p
o=A.a([A.z(A.a([A.Q(s.YP(E.bq(q.gauG()),"\u0622\u064a\u0629 \u0645\u062d\u0641\u0648\u0638\u0629"),1),C.O,A.Q(s.YP(E.bq(q.arg()),"\u064a\u0648\u0645 \u0648\u0631\u0627 \u0628\u0639\u0636"),1),C.O,A.Q(s.YP(E.bq(q.e),"\u0623\u0637\u0648\u0644 \u0633\u0644\u0633\u0644\u0629"),1)],o),C.h,C.d,C.e,0,r,r),C.v,new E.dG(A.J(A.a([A.d("\u062c\u0632\u0621 \u0639\u0645\u0651: "+E.bq(C.f.ak(w*100/v))+"\u066a",r,r,r,r,r,I.bF,r,r,r),C.H,A.f5(A.u(6),A.qp(C.eu,F.cW,8,w/v,r),C.az),C.ak,A.d(E.bq(w)+" \u0645\u0646 "+E.bq(v)+" \u0622\u064a\u0629",r,r,r,r,r,C.aP,r,r,r)],o),C.r,C.d,C.e,0,C.l),C.a9,C.aO,r,!1,r)],o)
if(p.length===0)o.push(D.aYY)
for(u=p.length,t=0;t<p.length;p.length===u||(0,A.L)(p),++t)o.push(s.b8n(p[t]))
o.push(C.A)
u=$.B().b
u===$&&A.b()
u=u.ga4().e.a
o.push(A.d((u==null?r:u.r)!=null?"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643 \u0648\u064a\u0638\u0647\u0631 \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632 \u062a\u062f\u062e\u0644 \u0645\u0646\u0647.":"\u062a\u0642\u062f\u0651\u0645\u0643 \u0645\u062d\u0641\u0648\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647. \u0633\u062c\u0651\u0644 \u062f\u062e\u0648\u0644 \u0639\u0634\u0627\u0646 \u064a\u062a\u062d\u0641\u0638 \u0639\u0644\u0649 \u062d\u0633\u0627\u0628\u0643.",r,r,r,r,r,C.aP,r,r,r))
return L.y0(r,o,"\u062a\u0642\u062f\u0651\u0645\u064a \u0641\u064a \u0627\u0644\u062d\u0641\u0638")},
YP(d,e){var x=null
return new E.dG(A.J(A.a([A.d(d,x,x,x,x,x,D.blb,x,x,x),A.d(e,x,x,x,x,x,C.fL,C.W,x,x)],y.p),C.h,C.d,C.e,0,C.l),C.a9,C.G,x,!1,x)},
b8n(d){var x=null,w=this.d.c,v=H.cY[d-1].a[1],u=w.a7a(d),t=w.bjd(d),s=y.p,r=A.z(A.a([A.Q(A.d(G.kw(d),x,x,x,x,x,I.bF,x,x,x),1),A.d(E.bq(C.f.ak(u*100/v))+"\u066a",x,x,x,x,x,D.bjj,x,x,x)],s),C.h,C.d,C.e,0,x,x),q=A.f5(A.u(6),A.qp(C.eu,F.cW,7,u/v,x),C.az),p=E.bq(u),o=E.bq(v),n=t>0?" \u2022 \u0628\u062a\u0631\u0627\u062c\u0639 "+E.bq(t):""
return new E.dG(A.J(A.a([r,C.H,q,C.ak,A.d("\u0645\u062d\u0641\u0648\u0638 "+p+" \u0645\u0646 "+o+n,x,x,x,x,x,C.aP,x,x,x)],s),C.r,C.d,C.e,0,C.l),C.a9,C.aO,new B.c18(this,d),!1,x)},
Oy(d){return this.aLK(d)},
aLK(d){var x=0,w=A.j(y.H),v=this,u,t
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=H.cY[d-1].a[1]
t=v.c
t.toString
x=2
return A.c(A.e4(C.cu,new B.c17(v,d,u),t,!0,null,null,!1,y.H),$async$Oy)
case 2:return A.h(null,w)}})
return A.i($async$Oy,w)}}
B.akM.prototype={
Sa(d,e){var x=null,w=A.jP(x,x,x,x,x,x,x,x,x,x,x,D.bbQ,C.G,x,x,x,x,C.k9,x,x)
return A.b1(A.d(d,x,x,x,x,x,C.i9,x,x,x),x,x,x,new B.b7Q(e),x,w)},
t(d){var x=this,w=y.p
return new E.dG(A.J(A.a([D.bpa,C.H,D.bAP,A.cE(C.ap,A.a([x.Sa("tarteel-ai/whisper-base-ar-quran","https://huggingface.co/tarteel-ai/whisper-base-ar-quran"),x.Sa("iqbalaesthetic/Basira","https://huggingface.co/iqbalaesthetic/Basira")],w),C.aw,0,12),D.boB,x.Sa("tanzil.net","https://tanzil.net"),D.bCj,x.Sa("everyayah.com","https://everyayah.com")],w),C.r,C.d,C.e,0,C.l),C.a9,C.aO,null,!1,null)}}
B.DU.prototype={
O(){return new B.a3J()}}
B.a3J.prototype={
gant(){var x=this.a
return B.cQP(x.c,x.d,$.ch0().JT())},
Sc(){var x=0,w=A.j(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k
var $async$Sc=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.j(new B.c25(s))
v=3
r=A.can()
n=s.gant()
m=y.N
q=A.D(m,m)
J.e_(q,"app","mogtama3y")
J.e_(q,"path","tutor \u203a "+s.a.d)
if(r!=null){m=r.length>160?C.c.a7(r,0,160):r
J.e_(q,"ua",m)}x=6
return A.c(A.abb(n,null,C.GV,q),$async$Sc)
case 6:if(s.c!=null)s.j(new B.c26(s))
t.push(5)
x=4
break
case 3:v=2
k=u.pop()
p=A.a8(k)
o=p instanceof A.c6?p.a:"\u0645\u0639\u0631\u0641\u0646\u0627\u0634 \u0646\u0628\u0639\u062a \u2014 \u0627\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u062a \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a."
if(s.c!=null)s.j(new B.c27(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.j(new B.c28(s))
x=t.pop()
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$Sc,w)},
t(d){var x,w,v,u=this,t=null,s=y.p
s=A.a([A.bu(!1,t,!0,new A.A(C.ld,A.z(A.a([A.aW(u.d?C.yN:C.ls,C.bv,t,18),C.bL,D.byV],s),C.h,C.d,C.e,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new B.c2a(u),t,t,t,t,t,t,t)],s)
if(u.d){x=A.u(8)
s.push(A.E(t,A.p2(u.gant(),D.bhc,t,C.z),C.k,t,t,new A.G(C.q8,t,t,x,t,t,t,C.n),t,t,t,D.ak7,C.ec,t,t,1/0))}if(u.f)s.push(D.bva)
else{x=A.jP(t,t,t,t,t,t,t,t,t,t,t,C.a1h,C.G,t,t,t,t,C.k9,t,t)
w=u.e
v=w?t:u.gb8m()
s.push(A.eY(w?C.a1v:D.aus,t,D.buD,v,x))}x=u.r
if(x!=null)s.push(A.d(x,t,t,t,t,t,D.a2E,t,t,t))
return new A.A(C.aO,A.J(s,C.r,C.d,C.e,0,C.l),t)}}
var z=a.updateTypes(["al<~>()","~()","M(nO)","al<KD>()","al<KB>()","al<KC>()","a6<nO>()","M(rI)","bH(oU)","DT(t)","DR(t)","M(n6)","DS(t)","M(Jc)"])
B.b7R.prototype={
$0(){var x=0,w=A.j(y.m),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
r=A.S(A.cW(b.G.document).baseURI)
q=A.bp(r,0,null).a2("quran_tutor/tutor.js?v=3").k(0)
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
m=B.cG_("network",A.n(o))
throw A.r(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:257}
B.b7U.prototype={
$1(d){var x=null
return A.c4H(A.cR(d,"persist",x,x,x,x))},
$S:1160}
B.b7T.prototype={
$0(){var x=0,w=A.j(y.C),v,u=this,t,s,r,q,p,o,n,m,l
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.a
n=A
m=A
l=A
x=4
return A.c(q.rj(),$async$$0)
case 4:x=3
return A.c(n.eM(m.cW(l.cR(e,"loadModel",A.c5p(new B.b7S(u.b)),u.c,u.d,null)),y.m),$async$$0)
case 3:p=e
o=A.p(p.device)
if(o==null)o=null
if(o==null)o=""
t=A.p(p.dtype)
if(t==null)t=null
if(t==null)t=""
s=q.ri(p,"ms")
r=q.ot(p,"cached")
A.p(p.backend)
v=new B.KB(o,t,s,r,q.ri(p,"threads"),q.ot(p,"isolated"),q.ri(p,"warmMs"))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+4}
B.b7S.prototype={
$2(d,e){this.a.$2(C.f.ak(d),C.f.ak(e))},
$S:1161}
B.b7Y.prototype={
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
u.onLevel=A.fX(new B.b7W(v.e))
u.onAutoStop=A.fX(new B.b7X(v.f))
x=5
return A.c(A.eM(A.cW(A.cR(s,"startRecording",u,null,null,null)),y.O),$async$$0)
case 5:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.b7W.prototype={
$1(d){return this.a.$1(d)},
$S:72}
B.b7X.prototype={
$1(d){return this.a.$1(d)},
$S:4}
B.b7Z.prototype={
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
v=new B.KC(r,A.dV(r.seconds))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:z+5}
B.b80.prototype={
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
B.b8_.prototype={
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
B.b7V.prototype={
$1(d){return d},
$S:35}
B.aYT.prototype={
$0(){var x,w,v,u,t=this.a,s=A.ci(t.a.length,D.v9,!1,y.G)
for(t=t.b,x=t.length,w=0;w<x;++w){v=t[w]
u=v.a
if(u!=null)s[u]=v.d}return s},
$S:z+6}
B.aYS.prototype={
$1(d){return d===D.jd},
$S:z+2}
B.c58.prototype={
$2(d,e){var x,w=e.length
if(d.length<w)return!1
for(x=0;x<w;++x)if(B.cbl(e[x],d[x])<0.75)return!1
return!0},
$S:1162}
B.c7e.prototype={
$1(d){return d.length!==0},
$S:10}
B.b84.prototype={
$1(d){return d.a===D.fi},
$S:z+7}
B.b85.prototype={
$1(d){return C.j.aJ(d,1000)},
$S:60}
B.b82.prototype={
$1(d){return C.f.bB(d)},
$S:1163}
B.b86.prototype={
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
i=C.b.n(D.Ka,k.h(0,"r"))?A.eA(k.h(0,"r")):1
h=A.ep(k.h(0,"auto"))
g=A.ep(k.h(0,"hide"))
k=A.ep(k.h(0,"in"))
s.a.b=new B.Wu(j,i,h!==!1,g===!0,k===!0)}u=2
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
if(q!=null)s.a.c=B.ceA(y.P.a(C.aq.f4(q,null)))
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
if(k.b.e&&k.a.aa7()){k.a.as6()
x=1
break}a1=k
x=18
return A.c(k.a.Ni(),$async$$0)
case 18:a1.d=a3
k.e=!0
k.a5()
if(k.b.e)k.Dv()
k.wO()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:115}
B.b87.prototype={
$2(d,e){var x=this.a
x.r=d
x.w=e
x.a5()},
$S:1164}
B.b88.prototype={
$2(d,e){return C.j.aJ(A.eL(A.n(d),null,null),1000)===this.a},
$S:1165}
B.bOF.prototype={
$1(d){var x=0,w=A.j(y.a),v=this,u,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.c(u.d.a.EO(),$async$$1)
case 2:t=f
if(u.c!=null)u.j(new B.bOE(u,t))
return A.h(null,w)}})
return A.i($async$$1,w)},
$S:1166}
B.bOE.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bOG.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.bOD(x,d))},
$S:z+8}
B.bOD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bOH.prototype={
$1(d){},
$S:20}
B.bOr.prototype={
$0(){},
$S:0}
B.bOx.prototype={
$1(d){var x=this.c,w=this.a.w
w.toString
return new B.DT(this.b,x.a,x.b,w,null)},
$S:z+9}
B.bOy.prototype={
$0(){},
$S:0}
B.bOB.prototype={
$0(){var x=y.z
return A.O(this.a,!1).aD(A.aH(new B.bOA(),null,x),x)},
$S:0}
B.bOA.prototype={
$1(d){return D.bDG},
$S:z+10}
B.bOC.prototype={
$0(){return B.csJ(this.a)},
$S:0}
B.bOu.prototype={
$0(){var x=this.b
return this.a.y8(x.a,x.b,x.c)},
$S:0}
B.bOv.prototype={
$1(d){return this.a.j(new B.bOt())},
$S:4}
B.bOt.prototype={
$0(){},
$S:0}
B.bOw.prototype={
$0(){var x=this.a
return x.j(new B.bOs(x))},
$S:0}
B.bOs.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.bOz.prototype={
$0(){return this.a.b8k(this.b)},
$S:0}
B.ca0.prototype={
$1(d){return new A.ji(new B.c9Y(this.a,this.b,this.c),null)},
$S:57}
B.c9Y.prototype={
$2(d,e){var x,w,v=null,u=this.b,t=new B.ca_(u,e),s=this.a,r=new B.c9Z(s,e),q=A.d(G.kw(this.c),v,v,v,v,v,C.i8,v,v,v),p=A.d("\u0647\u062a\u0633\u0645\u0651\u0639 \u0623\u0646\u0647\u064a \u0622\u064a\u0627\u062a\u061f ("+E.bq(u)+" \u0622\u064a\u0629)",v,v,v,v,v,C.aP,v,v,v),o=y.p,n=A.a([],o)
if(u<=30)n.push(r.$3("\u0627\u0644\u0633\u0648\u0631\u0629 \u0643\u0644\u0647\u0627",1,u))
x=u<5
w=E.bq(x?u:5)
x=x?u:5
n.push(r.$3("\u0623\u0648\u0644 "+w+" \u0622\u064a\u0627\u062a",1,x))
x=s.a
if(x>1){x=E.bq(x)
w=s.a
n.push(r.$3("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u064a\u0629 "+x,w,C.j.d1(w+4,1,u)))}u=A.a([q,C.ak,p,C.v,A.cE(C.ap,n,C.aw,6,8),C.A,A.z(A.a([t.$3("\u0645\u0646",s.b,new B.c9T(s)),C.a1s,t.$3("\u0644\u062d\u062f",s.c,new B.c9U(s))],o),C.h,C.d,C.e,0,v,v)],o)
if(s.c-s.b>=10)u.push(D.aYN)
u.push(C.a6)
u.push(A.d1(D.bzs,v,new B.c9V(s,d),A.el(C.y,C.ah,D.bcd,v,v,v,v)))
return A.cw(!0,new A.A(C.Gk,A.J(u,C.aa,C.d,C.K,0,C.l),v),C.G,!0)},
$S:284}
B.ca_.prototype={
$3(d,e,f){var x,w,v,u=null,t=A.d(d,u,u,u,u,u,C.fL,u,u,u),s=A.a([],y.I)
for(x=this.a,w=y.r,v=1;v<=x;++v)s.push(new A.c4(v,A.d("\u0622\u064a\u0629 "+E.bq(v),u,u,u,u,u,u,u,u,u),C.aj,u,w))
return A.Q(A.J(A.a([t,P.GV(C.cu,!0,s,320,new B.c9X(this.b,f),D.bln,e,y.S)],y.p),C.r,C.d,C.e,0,C.l),1)},
$S:1168}
B.c9X.prototype={
$1(d){return d==null?null:this.a.$1(new B.c9W(this.b,d))},
$S:52}
B.c9W.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.c9Z.prototype={
$3(d,e,f){var x=null
return A.aCp(x,A.d(d,x,x,x,x,x,x,x,x,x),new B.c9S(this.a,this.b,e,f))},
$S:1169}
B.c9S.prototype={
$0(){var x=this
return x.b.$1(new B.c9R(x.a,x.c,x.d))},
$S:0}
B.c9R.prototype={
$0(){var x=this.a
x.b=this.b
x.c=this.c},
$S:0}
B.c9T.prototype={
$1(d){var x=this.a
x.b=d
if(x.c<d)x.c=d},
$S:15}
B.c9U.prototype={
$1(d){var x=this.a
x.c=d
if(x.b>d)x.b=d},
$S:15}
B.c9V.prototype={
$0(){var x=this.a
return A.O(this.b,!1).ac(new A.V(x.b,x.c))},
$S:0}
B.c1s.prototype={
$0(){},
$S:0}
B.c1I.prototype={
$0(){var x=this.a
x.e=this.b
x.f=D.mJ
x.w=x.r=null
x.x=!1
x.ch=x.ax=x.as=null},
$S:0}
B.c1M.prototype={
$0(){var x=this.a
return x.f=x.r!=null?D.jk:D.mJ},
$S:0}
B.c1N.prototype={
$0(){var x=this.a
x.f=D.vn
x.as=null},
$S:0}
B.c1O.prototype={
$0(){var x=this.a
x.f=this.b
if(!this.c&&x.as==null)x.as=null},
$S:0}
B.c1Q.prototype={
$0(){var x=this.a
x.f=D.vo
x.as=null
x.y=0
x.z=new A.aP(Date.now(),0,!1)
x.ax=null},
$S:0}
B.c1R.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1P())},
$S:27}
B.c1P.prototype={
$0(){},
$S:0}
B.c1T.prototype={
$1(d){return this.a.y=d},
$S:72}
B.c1S.prototype={
$1(d){return this.a.C0()},
$S:4}
B.c1U.prototype={
$0(){var x,w=this.a
w.f=w.r!=null?D.jk:D.mJ
x=this.b
w.as=B.ND(x)
w.at=x},
$S:0}
B.c1W.prototype={
$0(){var x=this.a
x.f=D.pz
x.ay=Date.now()},
$S:0}
B.c1X.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1V())},
$S:27}
B.c1V.prototype={
$0(){},
$S:0}
B.c1H.prototype={
$0(){var x=this.a
x.f=x.r!=null?D.jk:D.mJ
x.as=this.b
x.at=this.c},
$S:0}
B.c1J.prototype={
$0(){var x=this.b
x.r=this.c
x.w=this.a.a
x.f=D.jk
x.x=!1},
$S:0}
B.c1A.prototype={
$0(){var x=this.a
x.f=D.pz
x.ay=Date.now()
x.as=null},
$S:0}
B.c1B.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1z())},
$S:27}
B.c1z.prototype={
$0(){},
$S:0}
B.c1C.prototype={
$1(d){return d.d!==D.jd},
$S:z+11}
B.c1D.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.c21.prototype={
$0(){return B.csJ(this.a)},
$S:0}
B.c22.prototype={
$1(d){var x=this.a.d
return x.qS(x.b.aqL(d))},
$S:3}
B.c23.prototype={
$0(){var x=y.z
return A.O(this.b,!1).aD(A.aH(new B.c20(this.a),null,x),x)},
$S:0}
B.c20.prototype={
$1(d){var x=this.a.a
return new B.DS(x.c,x.d,x.e,x.f,null)},
$S:z+12}
B.c24.prototype={
$0(){this.a.d.a.bnw()
this.b.H(y.q).f.Y(D.bdm)},
$S:0}
B.c1G.prototype={
$2(d,e){return C.aY},
$S:16}
B.c1F.prototype={
$2(d,e){var x,w,v,u=null,t=this.a,s=t.a,r=s.d+e
switch(t.d.c.a7i(s.c,r).a.a){case 2:s=F.cW
break
case 1:s=D.dU
break
case 0:s=C.ir
break
default:s=u}x=A.u(16)
w=t.f===D.pz?u:new B.c1E(t,r)
v=s.ae(0.25)
if(r===t.gjf())s=C.i
s=A.aJ(s,r===t.gjf()?2:1)
return A.bu(!1,x,!0,A.E(C.P,A.d(E.bq(r),u,u,u,u,u,C.a2X,u,u,u),C.k,u,u,new A.G(v,u,s,u,u,u,u,C.bY),u,u,u,u,u,u,u,36),u,!0,u,u,u,u,u,u,u,u,u,u,u,w,u,u,u,u,u,u,u)},
$S:65}
B.c1E.prototype={
$0(){return this.a.a_Z(this.b)},
$S:0}
B.c1L.prototype={
$0(){var x=this.a
return x.j(new B.c1K(x))},
$S:0}
B.c1K.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c1Y.prototype={
$1(d){return d===D.v7},
$S:z+2}
B.c1Z.prototype={
$1(d){return d===D.v8},
$S:z+2}
B.c2_.prototype={
$1(d){return d===D.v9},
$S:z+2}
B.c1t.prototype={
$0(){var x=this.b!=null&&!this.c?1:null
return this.a.Sb(x)},
$S:0}
B.c1u.prototype={
$1(d){var x=this.a.d
return x.qS(x.b.bdm(d.ga_(d)))},
$S:114}
B.c1w.prototype={
$1(d){return d.n(0,C.X)?C.ah:C.i},
$S:5}
B.c1v.prototype={
$1(d){return d.n(0,C.X)?C.y:C.a8},
$S:5}
B.c1x.prototype={
$0(){var x=this.a
return x.a_Z(x.gjf()+1)},
$S:0}
B.c1y.prototype={
$0(){var x=this.a
return x.a_Z(x.gjf()+1)},
$S:0}
B.c1b.prototype={
$0(){},
$S:0}
B.c1k.prototype={
$0(){var x=this.a
x.e=this.b
x.Q=null
x.x=0
x.z=new A.aP(Date.now(),0,!1)},
$S:0}
B.c1l.prototype={
$1(d){var x=this.a
if(x.c!=null)x.j(new B.c1j())},
$S:27}
B.c1j.prototype={
$0(){},
$S:0}
B.c1n.prototype={
$1(d){return this.a.x=d},
$S:72}
B.c1m.prototype={
$1(d){return this.a.G1(this.b,!1)},
$S:4}
B.c1o.prototype={
$0(){var x,w=this.a
w.e=null
x=this.b
w.Q=B.ND(x)
w.as=x},
$S:0}
B.c1f.prototype={
$0(){var x=this.a
x.e=null
x.r.E(0,this.b)},
$S:0}
B.c1g.prototype={
$0(){var x,w=this.a,v=this.b
w.r.L(0,v)
x=this.c
w.w.p(0,v,B.ND(x))
w.as=x},
$S:0}
B.c1h.prototype={
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
return A.c(n.a.awF(s.b,B.FE(G.NB(l,m,k.yj(l,m)).b).length),$async$$1)
case 6:r=f
l=o.a
k=l.f
l=l.c
q=B.cqT(G.NB(l,m,k.yj(l,m)).b,r.a)
if(C.c.K(q.c).length!==0){l=n.c
k=o.a.c
j=q.gtF()
l.avG(k,m,n.b.a,j)}n.A5()
if(o.c!=null)o.j(new B.c1c(o,m,q))
t.push(5)
x=4
break
case 3:v=2
h=u.pop()
o=A.a8(h)
if(o instanceof B.lI){p=o
o=s.a
if(o.c!=null)o.j(new B.c1d(o,s.c,p))}else throw h
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
o=s.a
if(o.c!=null)o.j(new B.c1e(o,s.c))
x=t.pop()
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$$1,w)},
$S:130}
B.c1c.prototype={
$0(){var x=this.c
this.a.f.p(0,this.b,x)
return x},
$S:0}
B.c1d.prototype={
$0(){var x=this.a,w=this.c
x.w.p(0,this.b,B.ND(w))
x.as=w},
$S:0}
B.c1e.prototype={
$0(){return this.a.r.L(0,this.b)},
$S:0}
B.c1i.prototype={
$0(){var x=this.a
x.f.an(0)
x.w.an(0)
x.as=null},
$S:0}
B.c1p.prototype={
$1(d){return d.gtF()},
$S:z+13}
B.c1q.prototype={
$0(){return this.a.G1(this.b,!0)},
$S:0}
B.c1r.prototype={
$0(){return this.a.IH(this.b)},
$S:0}
B.c12.prototype={
$0(){},
$S:0}
B.c19.prototype={
$2(d,e){return d+this.a.a7a(e)},
$S:120}
B.c1a.prototype={
$2(d,e){return d+H.cY[e-1].a[1]},
$S:120}
B.c18.prototype={
$0(){return this.a.Oy(this.b)},
$S:0}
B.c17.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=this.b,o=A.d(G.kw(p),q,q,q,q,q,C.i8,q,q,q),n=y.p,m=A.a([],n)
for(x=this.c,w=this.a,v=w.d,u=p*1000,t=1;t<=x;++t){s=new A.ba(10,10)
r=v.c.a.h(0,u+t)
switch((r==null?$.ry():r).a.a){case 2:r=F.cW.ae(0.35)
break
case 1:r=D.dU.ae(0.35)
break
case 0:r=C.fl
break
default:r=q}m.push(A.E(C.P,A.d(E.bq(t),q,q,q,q,q,C.j8,q,q,q),C.k,q,q,new A.G(r,q,q,new A.cF(s,s,s,s),q,q,q,C.n),q,38,q,q,q,q,q,38))}return A.cw(!0,new A.A(C.h0,A.J(A.a([o,C.ak,D.bww,C.v,new A.dm(D.a80,A.f2(A.cE(C.ap,m,C.aw,6,6),q,C.q,q,q,q,C.x),q),C.V,A.b1(D.bym,q,q,q,new B.c16(w,d,p),q,q)],n),C.aa,C.d,C.K,0,C.l),q),C.G,!0)},
$S:36}
B.c16.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.b
t=v.c
x=4
return A.c(A.dc(null,null,!0,null,new B.c15(t),u,null,!0,y.y),$async$$0)
case 4:x=e===!0?2:3
break
case 2:x=5
return A.c(v.a.d.LE(t),$async$$0)
case 5:if(u.e!=null)A.O(u,!1).e6()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.c15.prototype={
$1(d){var x=null,w=A.d("\u0647\u062a\u0628\u062f\u0623 "+G.kw(this.a)+" \u0645\u0646 \u0627\u0644\u0623\u0648\u0644.",x,x,x,x,x,x,x,x,x)
return A.dh(A.a([A.b1(C.eo,x,x,x,new B.c13(d),x,x),A.b1(C.pm,x,x,x,new B.c14(d),x,x)],y.p),w,D.bzZ)},
$S:14}
B.c13.prototype={
$0(){A.O(this.a,!1).ac(!1)
return null},
$S:0}
B.c14.prototype={
$0(){A.O(this.a,!1).ac(!0)
return null},
$S:0}
B.caY.prototype={
$1(d){var x=this.a
return new A.kM(new B.caX(x),null,x,null)},
$S:1170}
B.caX.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.a,r=s.b,q=A.a([],y.n)
for(x=y.c,w=1;w<=5;++w)q.push(new A.eh(w,t,A.d(E.bq(w),t,t,t,t,t,t,t,t,t),x))
x=y.S
v=y.b
u=y.p
x=A.a([D.bp5,C.V,D.byf,C.H,A.nE(new B.caS(s,r),q,A.dg([r.a],x),!1,A.kz(t,t,t,new A.bf(new B.caT(),v),t,t,t,t,new A.bf(new B.caU(),v),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),x),C.A,A.iA(C.y,C.G,t,new B.caV(s,r),D.bvS,D.bBK,r.c),A.iA(C.y,C.G,t,new B.caW(s,r),t,D.bnT,r.d)],u)
s=s.x
if(s!=null)C.b.A(x,A.a([C.ak,A.d("\u0627\u0644\u0645\u0639\u0627\u0644\u062c: "+s.gn7(),t,t,t,t,t,C.aP,t,C.ba,t)],u))
x.push(C.A)
x.push(D.a49)
return A.cw(!0,A.f2(A.J(x,C.aa,C.d,C.e,0,C.l),t,C.q,C.h0,t,t,C.x),C.G,!0)},
$S:1171}
B.caS.prototype={
$1(d){return this.a.qS(this.b.bdj(d.ga_(d)))},
$S:114}
B.caU.prototype={
$1(d){return d.n(0,C.X)?C.ah:C.i},
$S:5}
B.caT.prototype={
$1(d){return d.n(0,C.X)?C.y:C.a8},
$S:5}
B.caV.prototype={
$1(d){return this.a.qS(this.b.bcG(d))},
$S:3}
B.caW.prototype={
$1(d){return this.a.qS(this.b.aqL(d))},
$S:3}
B.b7Q.prototype={
$0(){return A.cf(A.bp(this.a,0,null),C.aH,null)},
$S:0}
B.cbe.prototype={
$1(d){var x,w=A.ay("https?://",!0,!1,!1)
w=A.bC(d,w,"")
x=A.ay("www\\.",!0,!1,!1)
return A.va(A.bC(w,x,"www[.]"),A.ay("([A-Za-z0-9-]+)\\.(com|net|org|io|xyz|ru|info|me|link)\\b",!1,!1,!1),new B.cbf(),null)},
$S:35}
B.cbf.prototype={
$1(d){return A.n(d.h(0,1))+"[.]"+A.n(d.h(0,2))},
$S:56}
B.c25.prototype={
$0(){var x=this.a
x.e=!0
x.r=null},
$S:0}
B.c26.prototype={
$0(){return this.a.f=!0},
$S:0}
B.c27.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.c28.prototype={
$0(){return this.a.e=!1},
$S:0}
B.c2a.prototype={
$0(){var x=this.a
return x.j(new B.c29(x))},
$S:0}
B.c29.prototype={
$0(){var x=this.a
return x.d=!x.d},
$S:0}
B.cbd.prototype={
$1(d){return d==null?"\u2013":A.n(d)},
$S:176};(function installTearOffs(){var x=a._instance_0u
x(B.akN.prototype,"gbje","bjf",1)
var w
x(w=B.Wv.prototype,"gbjv","Dv",0)
x(w,"gaFo","wO",0)
x(w=B.a19.prototype,"goF","y7",1)
x(w,"gb_j","Qv",0)
x(w=B.a3I.prototype,"goF","y7",1)
x(w,"gb2e","QV",0)
x(w,"gb6T","C0",0)
x(w,"gaLo","Ov",0)
x(w=B.a3H.prototype,"goF","y7",1)
x(w,"gb38","b39",1)
x(B.a3G.prototype,"goF","y7",1)
x(B.a3J.prototype,"gb8m","Sc",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.a7,[B.akN,B.Ww,B.KB,B.KD,B.KC,B.lI,B.TB,B.n6,B.Jc,B.rI,B.akO,B.Wu])
x(A.lh,[B.b7R,B.b7T,B.b7Y,B.b7Z,B.b80,B.b8_,B.aYT,B.b86,B.bOE,B.bOD,B.bOr,B.bOy,B.bOB,B.bOC,B.bOu,B.bOt,B.bOw,B.bOs,B.bOz,B.c9W,B.c9S,B.c9R,B.c9V,B.c1s,B.c1I,B.c1M,B.c1N,B.c1O,B.c1Q,B.c1P,B.c1U,B.c1W,B.c1V,B.c1H,B.c1J,B.c1A,B.c1z,B.c1D,B.c21,B.c23,B.c24,B.c1E,B.c1L,B.c1K,B.c1t,B.c1x,B.c1y,B.c1b,B.c1k,B.c1j,B.c1o,B.c1f,B.c1g,B.c1c,B.c1d,B.c1e,B.c1i,B.c1q,B.c1r,B.c12,B.c18,B.c16,B.c13,B.c14,B.b7Q,B.c25,B.c26,B.c27,B.c28,B.c2a,B.c29])
x(A.iN,[B.b7U,B.b7W,B.b7X,B.b7V,B.aYS,B.c7e,B.b84,B.b85,B.b82,B.bOF,B.bOG,B.bOH,B.bOx,B.bOA,B.bOv,B.ca0,B.ca_,B.c9X,B.c9Z,B.c9T,B.c9U,B.c1R,B.c1T,B.c1S,B.c1X,B.c1B,B.c1C,B.c22,B.c20,B.c1Y,B.c1Z,B.c2_,B.c1u,B.c1w,B.c1v,B.c1l,B.c1n,B.c1m,B.c1h,B.c1p,B.c17,B.c15,B.caY,B.caS,B.caU,B.caT,B.caV,B.caW,B.cbe,B.cbf,B.cbd])
x(A.oi,[B.b7S,B.c58,B.b87,B.b88,B.c9Y,B.c1G,B.c1F,B.c19,B.c1a,B.caX])
x(A.Es,[B.nO,B.FZ,B.Ic,B.EV])
w(B.Wv,A.i8)
x(A.K,[B.xe,B.DT,B.DS,B.DR,B.DU])
x(A.N,[B.a19,B.a3I,B.a3H,B.a3G,B.a3J])
x(A.a2,[B.Id,B.YU,B.Ea,B.akM])})()
A.px(b.typeUniverse,JSON.parse('{"lI":{"bN":[]},"DT":{"K":[],"l":[]},"DS":{"K":[],"l":[]},"DR":{"K":[],"l":[]},"DU":{"K":[],"l":[]},"Wv":{"aI":[]},"xe":{"K":[],"l":[]},"a19":{"N":["xe"]},"Id":{"a2":[],"l":[]},"YU":{"a2":[],"l":[]},"a3I":{"N":["DT"]},"Ea":{"a2":[],"l":[]},"a3H":{"N":["DS"]},"a3G":{"N":["DR"]},"akM":{"a2":[],"l":[]},"a3J":{"N":["DU"]}}'))
var y=(function rtii(){var x=A.ag
return{u:x("rI"),c:x("eh<x>"),r:x("c4<x>"),k:x("H<n6>"),n:x("H<eh<x>>"),I:x("H<c4<x>>"),R:x("H<hT>"),Z:x("H<aD<o,@>>"),d:x("H<TB>"),s:x("H<o>"),p:x("H<l>"),t:x("H<x>"),m:x("bV"),j:x("a6<@>"),L:x("a6<x>"),P:x("aD<o,@>"),f:x("aD<@,@>"),x:x("av<o,x>"),a:x("bH"),K:x("a7"),B:x("Jc"),l:x("+(x,x)"),e:x("d8<n6>"),N:x("o"),C:x("KB"),D:x("KC"),X:x("Ww"),_:x("KD"),U:x("ah<o>"),G:x("nO"),q:x("pu"),b:x("bf<Y?>"),y:x("M"),i:x("a3"),z:x("@"),S:x("x"),A:x("bV?"),Y:x("aD<@,@>?"),O:x("a7?"),M:x("+quota,usage(x,x)?"),o:x("dK"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.pI=new B.FZ(0,"none")
D.pJ=new B.FZ(1,"learning")
D.fi=new B.FZ(2,"memorized")
D.a80=new A.aE(0,1/0,0,320)
D.eQ=new A.Y(1,0.9725490196078431,0.44313725490196076,0.44313725490196076,C.t)
D.a8a=new A.G(D.eQ,null,null,null,null,null,null,C.bY)
D.dU=new A.Y(1,0.984313725490196,0.7490196078431373,0.1411764705882353,C.t)
D.aqJ=new A.F(C.z_,null,C.bv,null,null,null)
D.bA2=new A.m("\u0627\u0644\u0646\u0635 \u0645\u062e\u0641\u064a \u2014 \u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.f9,null,null,null,null,null,null,null,null)
D.bhG=new A.v(!0,C.ev,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bwz=new A.m("(\u062f\u0648\u0633 \u0647\u0646\u0627 \u0644\u0648 \u0639\u0627\u064a\u0632 \u062a\u0628\u0635)",null,D.bhG,null,null,null,null,null,null,null,null)
D.aMG=x([D.aqJ,C.H,D.bA2,D.bwz],y.p)
D.agk=new A.fj(C.x,C.d,C.e,C.h,null,C.l,null,0,D.aMG,null)
D.ak5=new A.T(0,26,0,26)
D.ak7=new A.T(0,4,0,6)
D.akx=new A.T(14,12,14,14)
D.ali=new A.T(3,0,0,0)
D.aoN=new A.P(63251,"MaterialIcons",null,!1)
D.r7=new A.P(63677,"MaterialIcons",null,!1)
D.apB=new A.P(983209,"MaterialIcons",null,!1)
D.aqf=new A.F(D.apB,28,C.y,null,null,null)
D.aqZ=new A.F(C.I1,null,C.ir,null,null,null)
D.aow=new A.P(62961,"MaterialIcons",null,!1)
D.arF=new A.F(D.aow,null,null,null,null,null)
D.aoL=new A.P(63199,"MaterialIcons",null,!1)
D.arG=new A.F(D.aoL,null,null,null,null,null)
D.arO=new A.F(C.jQ,null,C.ev,null,null,null)
D.arS=new A.F(C.nO,44,C.i,null,null,null)
D.asm=new A.F(D.r7,null,D.eQ,null,null,null)
D.asE=new A.F(C.lr,null,D.eQ,null,null,null)
D.at3=new A.F(D.r7,null,null,null,null,null)
D.atB=new A.F(C.hQ,20,D.dU,null,null,null)
D.atZ=new A.F(C.nL,30,C.y,null,null,null)
D.aus=new A.F(C.lx,16,C.y,null,null,null)
D.auZ=new A.F(C.HZ,null,null,null,null,null)
D.av8=new A.F(C.nN,null,null,null,null,null)
D.avj=new A.F(C.yG,null,null,null,null,null)
D.Ka=x([1,3,5],y.t)
D.KY=x(["\u0627\u0639\u0648\u0630","\u0628\u0627\u0644\u0644\u0647","\u0645\u0646","\u0627\u0644\u0634\u064a\u0637\u0627\u0646","\u0627\u0644\u0631\u062c\u064a\u0645"],y.s)
D.aZn=new A.A(C.iy,C.mV,null)
D.aIk=x([D.aZn],y.p)
D.b2V=new A.V(C.nG,"\u0627\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0629 \u0628\u0635\u0648\u062a \u0627\u0644\u0634\u064a\u062e \u0627\u0644\u062d\u0635\u0631\u064a (\u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645) \u0645\u0631\u0629 \u0623\u0648 \u0663 \u0623\u0648 \u0665 \u0645\u0631\u0627\u062a.")
D.b2I=new A.V(D.r7,"\u0633\u0645\u0651\u0639\u0647\u0627 \u0645\u0646 \u062d\u0641\u0638\u0643 \u2014 \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0644\u0648\u0651\u0646\u0644\u0643 \u0643\u0644 \u0643\u0644\u0645\u0629: \u0623\u062e\u0636\u0631 \u0635\u062d\u060c \u0623\u0635\u0641\u0631 \u0631\u0627\u062c\u0639\u0647\u0627\u060c \u0623\u062d\u0645\u0631 \u063a\u0644\u0637.")
D.b3g=new A.V(C.dg,"\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0627 \u062a\u0633\u0645\u0651\u0639\u0647\u0627 \u0635\u062d \u0645\u0631\u062a\u064a\u0646 \u0648\u0631\u0627 \u0628\u0639\u0636 (\u062a\u0642\u062f\u0631 \u062a\u063a\u064a\u0651\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a).")
D.b3u=new A.V(C.I0,"\u0643\u0644 \u062f\u0647 \u0628\u064a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0648\u0628\u0627\u064a\u0644\u0643 \u2014 \u0635\u0648\u062a\u0643 \u0645\u0634 \u0628\u064a\u062a\u0631\u0641\u0639 \u0639\u0644\u0649 \u0623\u064a \u0633\u064a\u0631\u0641\u0631.")
D.aKC=x([D.b2V,D.b2I,D.b3g,D.b3u],A.ag("H<+(P,o)>"))
D.aN6=x([D.pI,D.pJ,D.fi],A.ag("H<FZ>"))
D.PG=x(["\u0628\u0633\u0645","\u0627\u0644\u0644\u0647","\u0627\u0644\u0631\u062d\u0645\u0646","\u0627\u0644\u0631\u062d\u064a\u0645"],y.s)
D.aUZ=new B.Ic(0,"idle")
D.W0=new B.Ic(1,"loading")
D.ka=new B.Ic(2,"ready")
D.aV_=new B.Ic(3,"failed")
D.alg=new A.T(2,6,2,4)
D.biM=new A.v(!0,C.y,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBO=new A.m("\u0627\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627 \u2014 \u0627\u0644\u0641\u0627\u062a\u062d\u0629 \u0648\u062c\u0632\u0621 \u0639\u0645\u0651",null,D.biM,null,null,null,null,null,null,null,null)
D.aY8=new A.A(D.alg,D.bBO,null)
D.bBi=new A.m("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.f9,null,null,null,null,null,null,null,null)
D.aIH=x([N.ur,C.O,D.bBi],y.p)
D.b9t=new A.ed(C.ag,C.ch,C.e,C.h,null,C.l,null,0,D.aIH,null)
D.aYM=new A.A(C.lc,D.b9t,null)
D.Cd=new A.v(!0,D.dU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBE=new A.m("\u0646\u0635\u064a\u062d\u0629: \u0627\u062d\u0641\u0638 \u0663\u2013\u0665 \u0622\u064a\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0631\u0629 \u0623\u0633\u0647\u0644.",null,D.Cd,null,null,null,null,null,null,null,null)
D.aYN=new A.A(C.df,D.bBE,null)
D.bAW=new A.m("\u0644\u0633\u0647 \u0645\u0633\u0645\u0651\u0639\u062a\u0634 \u0623\u064a \u0622\u064a\u0629 \u2014 \u0627\u0628\u062f\u0623 \u0628\u0633\u0648\u0631\u0629 \u0642\u0635\u064a\u0631\u0629 \u0645\u0646 \u062c\u0632\u0621 \u0639\u0645\u0651.",null,C.aP,C.W,null,null,null,null,null,null,null)
D.aYY=new A.A(C.C,D.bAW,null)
D.ask=new A.F(C.c2,18,F.cW,null,null,null)
D.brc=new A.m("\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u062c\u0627\u0647\u0632 \u064a\u0633\u0645\u0639\u0643",null,C.p9,null,null,null,null,null,null,null,null)
D.aLb=x([D.ask,C.aY,D.brc],y.p)
D.b9G=new A.ed(C.ag,C.d,C.e,C.h,null,C.l,null,0,D.aLb,null)
D.aZf=new A.A(C.aO,D.b9G,null)
D.ald=new A.T(2,0,2,8)
D.bwN=new A.m("\u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u060c \u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0644\u062d\u062f \u0627\u0644\u0646\u0628\u0623.",null,C.aP,null,null,null,null,null,null,null,null)
D.aZg=new A.A(D.ald,D.bwN,null)
D.auB=new A.F(C.lv,30,C.y,null,null,null)
D.byz=new A.m("\u0633\u0645\u0651\u0639\u060c \u0648\u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u064a\u0642\u0648\u0644\u0643 \u0635\u062d \u0648\u0644\u0627 \u063a\u0644\u0637",null,C.i8,null,null,null,null,null,null,null,null)
D.amc=new A.bT(1,C.af,D.byz,null)
D.aGj=x([D.auB,C.a0,D.amc],y.p)
D.b9s=new A.ed(C.ag,C.d,C.e,C.h,null,C.l,null,0,D.aGj,null)
D.aub=new A.F(C.dg,18,F.cW,null,null,null)
D.a2T=new A.v(!0,F.cW,null,null,null,null,12,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.buB=new A.m("\u0645\u062d\u0641\u0648\u0638\u0629",null,D.a2T,null,null,null,null,null,null,null,null)
D.aH_=x([D.aub,C.bL,D.buB],y.p)
D.b9v=new A.ed(C.ag,C.d,C.K,C.h,null,C.l,null,0,D.aH_,null)
D.bbQ=new A.X(0,30)
D.uo=new A.X(1/0,54)
D.bcd=new A.X(1/0,48)
D.bcg=new A.X(1/0,50)
D.bcj=new A.X(1/0,52)
D.byu=new A.m("safe mode / no-gpu flags cleared (reload)",null,null,null,null,null,null,null,null,null,null)
D.bdm=new A.cV(D.byu,null,null,null,null,null,null,null,null,null,null,null,null,C.w,!1,null,null,null,C.m,null)
D.bhc=new A.v(!0,C.au,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ky=new A.v(!0,C.i,null,"AmiriQuranMT",null,null,28,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.C2=new A.v(!0,D.eQ,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bjj=new A.v(!0,F.cW,null,null,null,null,null,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a2E=new A.v(!0,D.eQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bl5=new A.v(!0,D.dU,null,null,null,null,13,null,null,null,null,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blb=new A.v(!0,C.y,null,null,null,null,24,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bln=new A.v(!0,C.i,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bn4=new A.m("\u0643\u0645\u0651\u0644 \u0645\u0646 \u0622\u062e\u0631 \u0645\u0631\u0629",null,C.fL,null,null,null,null,null,null,null,null)
D.bnT=new A.m("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643 (\u062e\u0628\u0651\u064a \u0627\u0644\u0646\u0635)",null,C.d2,null,null,null,null,null,null,null,null)
D.boB=new A.m("\u2022 \u0646\u0635 \u0627\u0644\u0645\u0635\u062d\u0641: \u0645\u0634\u0631\u0648\u0639 \u062a\u0646\u0632\u064a\u0644 Tanzil (\u062a\u0631\u062e\u064a\u0635 CC BY 3.0).",null,C.aP,null,null,null,null,null,null,null,null)
D.bp5=new A.m("\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,C.i8,null,null,null,null,null,null,null,null)
D.bp6=new A.m("\u062e\u0628\u0651\u064a \u0646\u0635 \u0627\u0644\u0622\u064a\u0629 \u0648\u0633\u0645\u0651\u0639 \u0645\u0646 \u062d\u0641\u0638\u0643",null,C.aP,null,null,null,null,null,null,null,null)
D.bpa=new A.m("\u0627\u0644\u0645\u0635\u0627\u062f\u0631",null,C.a2v,null,null,null,null,null,null,null,null)
D.bpG=new A.m("\u0639\u062f\u0651\u064a \u0644\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.f9,null,null,null,null,null,null,null,null)
D.br5=new A.m("reset safe mode / WebGPU ban",null,C.hp,null,null,null,null,null,null,null,null)
D.br6=new A.m("\u0627\u0644\u0622\u064a\u0629 \u0627\u0644\u062c\u0627\u064a\u0629",null,C.cj,null,null,null,null,null,null,null,null)
D.bsa=new A.m("\u0645\u0645\u0643\u0646 \u062a\u0633\u0645\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0645\u0646 \u062f\u0644\u0648\u0642\u062a\u064a \u0644\u062d\u062f \u0645\u0627 \u064a\u062e\u0644\u0635.",null,C.aP,null,null,null,null,null,null,null,null)
D.bsb=new A.m("\u0623\u0648\u0644 \u0645\u0631\u0629 \u0628\u0633: \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638",null,I.bF,null,null,null,null,null,null,null,null)
D.bu0=new A.m("\u062c\u0631\u0651\u0628 \u0639\u0644\u0649 \u062a\u0644\u0627\u0648\u0629 \u0627\u0644\u062d\u0635\u0631\u064a (\u0644\u0644\u062a\u062c\u0631\u0628\u0629)",null,null,null,null,null,null,null,null,null,null)
D.buD=new A.m("\u0627\u0628\u0639\u062a \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,C.uO,null,null,null,null,null,null,null,null)
D.bk2=new A.v(!0,F.cW,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bva=new A.m("\u0648\u0635\u0644\u062a\u0646\u0627 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2014 \u0634\u0643\u0631\u064b\u0627\u060c \u0647\u0646\u0628\u0635 \u0639\u0644\u064a\u0647\u0627.",null,D.bk2,null,null,null,null,null,null,null,null)
D.bvw=new A.m("\u062e\u0644\u0635\u062a",null,C.kx,null,null,null,null,null,null,null,null)
D.bvG=new A.m("\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629",null,D.Cd,null,null,null,null,null,null,null,null)
D.bvS=new A.m("\u0628\u0639\u062f \u062d\u0648\u0627\u0644\u064a \u062b\u0627\u0646\u064a\u0629 \u0633\u0643\u0648\u062a",null,C.aP,null,null,null,null,null,null,null,null)
D.bww=new A.m("\u0623\u062e\u0636\u0631: \u0645\u062d\u0641\u0648\u0638\u0629 \u2014 \u0623\u0635\u0641\u0631: \u0628\u062a\u0631\u0627\u062c\u0639\u0647\u0627 \u2014 \u0631\u0645\u0627\u062f\u064a: \u0644\u0633\u0647",null,C.aP,null,null,null,null,null,null,null,null)
D.bwP=new A.m("\u0645\u0641\u064a\u0634 \u0633\u0648\u0631\u0629 \u0628\u0627\u0644\u0627\u0633\u0645 \u062f\u0647",null,C.aP,null,null,null,null,null,null,null,null)
D.bx3=new A.m("\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",null,K.pa,null,null,null,null,null,null,null,null)
D.byf=new A.m("\u0627\u0644\u0622\u064a\u0629 \u062a\u062a\u062d\u0633\u0628 \u0645\u062d\u0641\u0648\u0638\u0629 \u0628\u0639\u062f \u0643\u0627\u0645 \u062a\u0633\u0645\u064a\u0639 \u0635\u062d \u0648\u0631\u0627 \u0628\u0639\u0636\u061f",null,K.pa,null,null,null,null,null,null,null,null)
D.bjE=new A.v(!0,D.eQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bym=new A.m("\u0627\u0628\u062f\u0623 \u0627\u0644\u0633\u0648\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",null,D.bjE,null,null,null,null,null,null,null,null)
D.bj4=new A.v(!0,C.bv,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,C.fH,null,null,null,null,null,null,null,null)
D.byV=new A.m("\u062a\u0641\u0627\u0635\u064a\u0644 \u0644\u0644\u062f\u0639\u0645",null,D.bj4,null,null,null,null,null,null,null,null)
D.bz1=new A.m("\u0633\u0645\u0651\u0639 \u0627\u0644\u0622\u064a\u0627\u062a \u0643\u0644\u0647\u0627 \u0645\u0639 \u0628\u0639\u0636",null,I.bF,null,null,null,null,null,null,null,null)
D.bzs=new A.m("\u064a\u0644\u0627 \u0646\u0628\u062f\u0623",null,C.bC,null,null,null,null,null,null,null,null)
D.bzZ=new A.m("\u062a\u0645\u0633\u062d \u062a\u0642\u062f\u0651\u0645 \u0627\u0644\u0633\u0648\u0631\u0629 \u062f\u064a\u061f",null,null,null,null,null,null,null,null,null,null)
D.bA8=new A.m("\u0628\u0646\u0633\u0645\u0639 \u062a\u0633\u0645\u064a\u0639\u0643\u2026",null,C.pf,null,null,null,null,null,null,null,null)
D.bAe=new A.m("\u0633\u0645\u0651\u0639\u0647\u0645 \u062a\u0627\u0646\u064a",null,null,null,null,null,null,null,null,null,null)
D.bAP=new A.m("\u2022 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: whisper-base-ar-quran \u0645\u0646 Tarteel (\u062a\u0631\u062e\u064a\u0635 Apache-2.0)\u060c \u0628\u0635\u064a\u063a\u0629 ONNX \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 Basira\u060c \u0648\u0628\u064a\u0634\u062a\u063a\u0644 \u062c\u0648\u0651\u0647 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u0645\u0643\u062a\u0628\u0629 Transformers.js.",null,C.aP,null,null,null,null,null,null,null,null)
D.bAQ=new A.m("\u0627\u0644\u062c\u0647\u0627\u0632 \u062f\u0647 \u0630\u0627\u0643\u0631\u062a\u0647 \u0642\u0644\u064a\u0644\u0629 \u2014 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0645\u0645\u0643\u0646 \u064a\u0643\u0648\u0646 \u0628\u0637\u064a\u0621 \u0639\u0644\u064a\u0647.",null,D.Cd,null,null,null,null,null,null,null,null)
D.bBK=new A.m("\u0648\u0642\u0651\u0641 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0644\u0648\u062d\u062f\u0647 \u0644\u0645\u0627 \u0623\u0633\u0643\u062a",null,C.d2,null,null,null,null,null,null,null,null)
D.bCj=new A.m("\u2022 \u0627\u0644\u062a\u0644\u0627\u0648\u0629: \u0627\u0644\u0634\u064a\u062e \u0645\u062d\u0645\u0648\u062f \u062e\u0644\u064a\u0644 \u0627\u0644\u062d\u0635\u0631\u064a \u2014 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u060c \u0645\u0646 everyayah.com.",null,C.aP,null,null,null,null,null,null,null,null)
D.bCY=new A.m("\u062d\u0645\u0651\u0644 \u0627\u0644\u0645\u062d\u0641\u0651\u0638 \u0648\u0627\u0628\u062f\u0623",null,C.cj,null,null,null,null,null,null,null,null)
D.a49=new B.akM(null)
D.bDG=new B.DR(null)
D.bDH=new B.Wu(2,1,!0,!1,!1)
D.a4d=new B.Ww(!1,!1,!1,!1,!1,0)
D.jd=new B.nO(0,"ok")
D.v7=new B.nO(1,"near")
D.v8=new B.nO(2,"wrong")
D.v9=new B.nO(3,"missing")
D.a4E=new B.nO(4,"extra")
D.ap1=new A.P(63456,"MaterialIcons",null,!1)
D.bJD=new B.Ea(D.dU,D.ap1,"\u0645\u0633\u0645\u0639\u0646\u0627\u0634 \u062d\u0627\u062c\u0629 \u0648\u0627\u0636\u062d\u0629","\u0642\u0631\u0651\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0646\u0643 \u0648\u0627\u0642\u0631\u0627 \u0628\u0635\u0648\u062a \u0648\u0627\u0636\u062d \u0641\u064a \u0645\u0643\u0627\u0646 \u0647\u0627\u062f\u064a\u060c \u0648\u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a.",null)
D.bKf=new B.YU(!1,null)
D.CO=new B.YU(!0,null)
D.mJ=new B.EV(0,"idle")
D.vn=new B.EV(1,"playing")
D.vo=new B.EV(2,"recording")
D.pz=new B.EV(3,"thinking")
D.jk=new B.EV(4,"result")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cTR","ch0",()=>new B.akN())
x($,"cXm","cwK",()=>A.ay("\u0640[\u064b-\u0652]*\u0670",!0,!1,!1))
x($,"cXn","cwL",()=>A.ay("\u0640[\u064b-\u0652]*[\u06e6\u06e7]",!0,!1,!1))
x($,"cXz","cwU",()=>A.ay("\u0648\u0670",!0,!1,!1))
x($,"cWV","cwq",()=>A.ay("[\u0648\u064a\u0649][\u064b-\u0652]*[\u0654]",!0,!1,!1))
x($,"cVa","cve",()=>A.ay("\u0627[\u0654\u0655]",!0,!1,!1))
x($,"cWq","cw2",()=>A.ay("[\u0654\u0655]",!0,!1,!1))
x($,"cVb","cvf",()=>A.ay("[\u0622\u0623\u0625\u0671\u0672\u0673]",!0,!1,!1))
x($,"cVi","cvl",()=>A.ay("[\u0624\u0626]",!0,!1,!1))
x($,"cWs","cw4",()=>A.ay("[\u064b-\u065f\u0670\u06d6-\u06ed\u08d3-\u08ff\u0640]",!0,!1,!1))
x($,"cX_","cwt",()=>A.ay("[\u06dd\u06de\u0660-\u0669\u06f0-\u06f90-9]",!0,!1,!1))
x($,"cWA","cwb",()=>A.ay("[^\u0621-\u064a\\s]",!0,!1,!1))
x($,"cXk","chC",()=>A.ay("\\s+",!0,!1,!1))
x($,"cR7","ry",()=>B.cxL(D.pI,0,A.ccv(0,!0)))
x($,"cTS","NJ",()=>new B.Wv($.ch0(),D.bDH,B.cG0(),D.aUZ,$.U()))})()};
(a=>{a["kVvyAs+BGmVQ0NjDJY9pKhrg4s0="]=a.current})($__dart_deferred_initializers__);