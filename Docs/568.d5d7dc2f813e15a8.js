"use strict";(self.webpackChunkcrud_users=self.webpackChunkcrud_users||[]).push([[568],{9568:(Ge,ee,m)=>{m.r(ee);var a=m(5861),w=m(3942),r=m(1808),c=m(2090),te=(m(9681),m(1877),m(4859));function R(){return window}function S(){return(S=(0,a.Z)(function*(n,t,e){var i;const{BuildInfo:o}=R();(0,r.ap)(t.sessionId,"AuthEvent did not contain a session ID");const s=yield ue(t.sessionId),u={};return(0,r.aq)()?u.ibi=o.packageName:(0,r.ar)()?u.apn=o.packageName:(0,r.as)(n,"operation-not-supported-in-this-environment"),o.displayName&&(u.appDisplayName=o.displayName),u.sessionId=s,(0,r.at)(n,e,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,u)})).apply(this,arguments)}function b(){return(b=(0,a.Z)(function*(n){const{BuildInfo:t}=R(),e={};(0,r.aq)()?e.iosBundleId=t.packageName:(0,r.ar)()?e.androidPackageName=t.packageName:(0,r.as)(n,"operation-not-supported-in-this-environment"),yield(0,r.au)(n,e)})).apply(this,arguments)}function C(){return(C=(0,a.Z)(function*(n,t,e){const{cordova:i}=R();let o=()=>{};try{yield new Promise((s,u)=>{let d=null;function h(){var l;s();const I=null===(l=i.plugins.browsertab)||void 0===l?void 0:l.close;"function"==typeof I&&I(),"function"==typeof e?.close&&e.close()}function f(){d||(d=window.setTimeout(()=>{u((0,r.aw)(n,"redirect-cancelled-by-user"))},2e3))}function v(){"visible"===document?.visibilityState&&f()}t.addPassiveListener(h),document.addEventListener("resume",f,!1),(0,r.ar)()&&document.addEventListener("visibilitychange",v,!1),o=()=>{t.removePassiveListener(h),document.removeEventListener("resume",f,!1),document.removeEventListener("visibilitychange",v,!1),d&&window.clearTimeout(d)}})}finally{o()}})).apply(this,arguments)}function ue(n){return N.apply(this,arguments)}function N(){return(N=(0,a.Z)(function*(n){const t=le(n),e=yield crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(o=>o.toString(16).padStart(2,"0")).join("")})).apply(this,arguments)}function le(n){if((0,r.ap)(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return(new TextEncoder).encode(n);const t=new ArrayBuffer(n.length),e=new Uint8Array(t);for(let i=0;i<n.length;i++)e[i]=n.charCodeAt(i);return e}class ce extends r.ay{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(e=>e(t)),super.onEvent(t)}initialized(){var t=this;return(0,a.Z)(function*(){yield t.initPromise})()}}function B(n){return L.apply(this,arguments)}function L(){return(L=(0,a.Z)(function*(n){const t=yield O()._get(T(n));return t&&(yield O()._remove(T(n))),t})).apply(this,arguments)}function fe(){const n=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<20;e++){const i=Math.floor(Math.random()*t.length);n.push(t.charAt(i))}return n.join("")}function O(){return(0,r.az)(r.b)}function T(n){return(0,r.aA)("authEvent",n.config.apiKey,n.name)}function k(n){if(!n?.includes("?"))return{};const[t,...e]=n.split("?");return(0,c.zd)(e.join("?"))}const Ie=class ye{constructor(){this._redirectPersistence=r.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}_initialize(t){var e=this;return(0,a.Z)(function*(){const i=t._key();let o=e.eventManagers.get(i);return o||(o=new ce(t),e.eventManagers.set(i,o),e.attachCallbackListeners(t,o)),o})()}_openPopup(t){(0,r.as)(t,"operation-not-supported-in-this-environment")}_openRedirect(t,e,i,o){var s=this;return(0,a.Z)(function*(){!function ae(n){var t,e,i,o,s,u,d,h,f,v;const l=R();(0,r.ax)("function"==typeof(null===(t=l?.universalLinks)||void 0===t?void 0:t.subscribe),n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,r.ax)(typeof(null===(e=l?.BuildInfo)||void 0===e?void 0:e.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,r.ax)("function"==typeof(null===(s=null===(o=null===(i=l?.cordova)||void 0===i?void 0:i.plugins)||void 0===o?void 0:o.browsertab)||void 0===s?void 0:s.openUrl),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"==typeof(null===(h=null===(d=null===(u=l?.cordova)||void 0===u?void 0:u.plugins)||void 0===d?void 0:d.browsertab)||void 0===h?void 0:h.isAvailable),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"==typeof(null===(v=null===(f=l?.cordova)||void 0===f?void 0:f.InAppBrowser)||void 0===v?void 0:v.open),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(t);const u=yield s._initialize(t);yield u.initialized(),u.resetRedirect(),(0,r.aD)(),yield s._originValidation(t);const d=function he(n,t,e=null){return{type:t,eventId:e,urlResponse:null,sessionId:fe(),postBody:null,tenantId:n.tenantId,error:(0,r.aw)(n,"no-auth-event")}}(t,i,o);yield function ge(n,t){return O()._set(T(n),t)}(t,d);const h=yield function re(n,t,e){return S.apply(this,arguments)}(t,d,e),f=yield function oe(n){const{cordova:t}=R();return new Promise(e=>{t.plugins.browsertab.isAvailable(i=>{let o=null;i?t.plugins.browsertab.openUrl(n):o=t.InAppBrowser.open(n,(0,r.av)()?"_blank":"_system","location=yes"),e(o)})})}(h);return function se(n,t,e){return C.apply(this,arguments)}(t,u,f)})()}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=function ie(n){return b.apply(this,arguments)}(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:i,handleOpenURL:o,BuildInfo:s}=R(),u=setTimeout((0,a.Z)(function*(){yield B(t),e.onEvent(z())}),500),d=function(){var v=(0,a.Z)(function*(l){clearTimeout(u);const I=yield B(t);let q=null;I&&l?.url&&(q=function pe(n,t){var e,i;const o=function _e(n){const t=k(n),e=t.link?decodeURIComponent(t.link):void 0,i=k(e).link,o=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return k(o).link||o||i||e||n}(t);if(o.includes("/__/auth/callback")){const s=k(o),u=s.firebaseError?function ve(n){try{return JSON.parse(n)}catch{return null}}(decodeURIComponent(s.firebaseError)):null,d=null===(i=null===(e=u?.code)||void 0===e?void 0:e.split("auth/"))||void 0===i?void 0:i[1],h=d?(0,r.aw)(d):null;return h?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:h,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:o,postBody:null}}return null}(I,l.url)),e.onEvent(q||z())});return function(I){return v.apply(this,arguments)}}();typeof i<"u"&&"function"==typeof i.subscribe&&i.subscribe(null,d);const h=o,f=`${s.packageName.toLowerCase()}://`;R().handleOpenURL=function(){var v=(0,a.Z)(function*(l){if(l.toLowerCase().startsWith(f)&&d({url:l}),"function"==typeof h)try{h(l)}catch(I){console.error(I)}});return function(l){return v.apply(this,arguments)}}()}};function z(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,r.aw)("no-auth-event")}}function E(){var n;return(null===(n=self?.location)||void 0===n?void 0:n.protocol)||null}function G(n=(0,c.z$)()){return!("file:"!==E()&&"ionic:"!==E()&&"capacitor:"!==E()||!n.toLowerCase().match(/iphone|ipad|ipod|android/))}function H(){try{const n=self.localStorage,t=r.aI();if(n)return n.setItem(t,"1"),n.removeItem(t),!function Ce(n=(0,c.z$)()){return function Se(){return(0,c.w1)()&&11===document?.documentMode}()||function be(n=(0,c.z$)()){return/Edge\/\d+/.test(n)}(n)}()||(0,c.hl)()}catch{return U()&&(0,c.hl)()}return!1}function U(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function x(){return(function ke(){return"http:"===E()||"https:"===E()}()||(0,c.ru)()||G())&&!function we(){return(0,c.b$)()||(0,c.UG)()}()&&H()&&!U()}function Y(){return G()&&typeof document<"u"}function D(){return(D=(0,a.Z)(function*(){return!!Y()&&new Promise(n=>{const t=setTimeout(()=>{n(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),n(!0)})})})).apply(this,arguments)}const p={LOCAL:"local",NONE:"none",SESSION:"session"},P=r.ax,$="persistence";function Z(n){return M.apply(this,arguments)}function M(){return(M=(0,a.Z)(function*(n){yield n._initializationPromise;const t=K(),e=r.aA($,n.config.apiKey,n.name);t&&t.setItem(e,n._getPersistence())})).apply(this,arguments)}function K(){var n;try{return(null===(n=function Le(){return typeof window<"u"?window:null}())||void 0===n?void 0:n.sessionStorage)||null}catch{return null}}const Ue=r.ax;class y{constructor(){this.browserResolver=r.az(r.k),this.cordovaResolver=r.az(Ie),this.underlyingResolver=null,this._redirectPersistence=r.a,this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}_initialize(t){var e=this;return(0,a.Z)(function*(){return yield e.selectUnderlyingResolver(),e.assertedUnderlyingResolver._initialize(t)})()}_openPopup(t,e,i,o){var s=this;return(0,a.Z)(function*(){return yield s.selectUnderlyingResolver(),s.assertedUnderlyingResolver._openPopup(t,e,i,o)})()}_openRedirect(t,e,i,o){var s=this;return(0,a.Z)(function*(){return yield s.selectUnderlyingResolver(),s.assertedUnderlyingResolver._openRedirect(t,e,i,o)})()}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return Y()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Ue(this.underlyingResolver,"internal-error"),this.underlyingResolver}selectUnderlyingResolver(){var t=this;return(0,a.Z)(function*(){if(t.underlyingResolver)return;const e=yield function Ne(){return D.apply(this,arguments)}();t.underlyingResolver=e?t.cordovaResolver:t.browserResolver})()}}function J(n){return n.unwrap()}function De(n){return Q(n)}function Q(n){const{_tokenResponse:t}=n instanceof c.ZR?n.customData:n;if(!t)return null;if(!(n instanceof c.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return r.P.credentialFromResult(n);const e=t.providerId;if(!e||e===r.o.PASSWORD)return null;let i;switch(e){case r.o.GOOGLE:i=r.Q;break;case r.o.FACEBOOK:i=r.N;break;case r.o.GITHUB:i=r.T;break;case r.o.TWITTER:i=r.W;break;default:const{oauthIdToken:o,oauthAccessToken:s,oauthTokenSecret:u,pendingToken:d,nonce:h}=t;return s||u||o||d?d?e.startsWith("saml.")?r.aL._create(e,d):r.J._fromParams({providerId:e,signInMethod:e,pendingToken:d,idToken:o,accessToken:s}):new r.U(e).credential({idToken:o,accessToken:s,rawNonce:h}):null}return n instanceof c.ZR?i.credentialFromError(n):i.credentialFromResult(n)}function g(n,t){return t.catch(e=>{throw e instanceof c.ZR&&function Ze(n,t){var e;const i=null===(e=t.customData)||void 0===e?void 0:e._tokenResponse;if("auth/multi-factor-auth-required"===t?.code)t.resolver=new Me(n,r.an(n,t));else if(i){const o=Q(t),s=t;o&&(s.credential=o,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}(n,e),e}).then(e=>{const o=e.user;return{operationType:e.operationType,credential:De(e),additionalUserInfo:r.al(e),user:_.getOrCreate(o)}})}function W(n,t){return F.apply(this,arguments)}function F(){return(F=(0,a.Z)(function*(n,t){const e=yield t;return{verificationId:e.verificationId,confirm:i=>g(n,e.confirm(i))}})).apply(this,arguments)}class Me{constructor(t,e){this.resolver=e,this.auth=function xe(n){return n.wrapped()}(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return g(J(this.auth),this.resolver.resolveSignIn(t))}}class _{constructor(t){this._delegate=t,this.multiFactor=r.ao(t)}static getOrCreate(t){return _.USER_MAP.has(t)||_.USER_MAP.set(t,new _(t)),_.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}linkWithCredential(t){var e=this;return(0,a.Z)(function*(){return g(e.auth,r.Z(e._delegate,t))})()}linkWithPhoneNumber(t,e){var i=this;return(0,a.Z)(function*(){return W(i.auth,r.l(i._delegate,t,e))})()}linkWithPopup(t){var e=this;return(0,a.Z)(function*(){return g(e.auth,r.d(e._delegate,t,y))})()}linkWithRedirect(t){var e=this;return(0,a.Z)(function*(){return yield Z(r.aE(e.auth)),r.g(e._delegate,t,y)})()}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}reauthenticateWithCredential(t){var e=this;return(0,a.Z)(function*(){return g(e.auth,r._(e._delegate,t))})()}reauthenticateWithPhoneNumber(t,e){return W(this.auth,r.r(this._delegate,t,e))}reauthenticateWithPopup(t){return g(this.auth,r.e(this._delegate,t,y))}reauthenticateWithRedirect(t){var e=this;return(0,a.Z)(function*(){return yield Z(r.aE(e.auth)),r.h(e._delegate,t,y)})()}sendEmailVerification(t){return r.ab(this._delegate,t)}unlink(t){var e=this;return(0,a.Z)(function*(){return yield r.ak(e._delegate,t),e})()}updateEmail(t){return r.ag(this._delegate,t)}updatePassword(t){return r.ah(this._delegate,t)}updatePhoneNumber(t){return r.u(this._delegate,t)}updateProfile(t){return r.af(this._delegate,t)}verifyBeforeUpdateEmail(t,e){return r.ac(this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_.USER_MAP=new WeakMap;const A=r.ax;let j=(()=>{class n{constructor(e,i){if(this.app=e,i.isInitialized())return this._delegate=i.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:o}=e.options;A(o,"invalid-api-key",{appName:e.name}),A(o,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?y:void 0;this._delegate=i.initialize({options:{persistence:We(o,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(r.B),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,i){r.G(this._delegate,e,i)}applyActionCode(e){return r.a2(this._delegate,e)}checkActionCode(e){return r.a3(this._delegate,e)}confirmPasswordReset(e,i){return r.a1(this._delegate,e,i)}createUserWithEmailAndPassword(e,i){var o=this;return(0,a.Z)(function*(){return g(o._delegate,r.a5(o._delegate,e,i))})()}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.aa(this._delegate,e)}isSignInWithEmailLink(e){return r.a8(this._delegate,e)}getRedirectResult(){var e=this;return(0,a.Z)(function*(){A(x(),e._delegate,"operation-not-supported-in-this-environment");const i=yield r.j(e._delegate,y);return i?g(e._delegate,Promise.resolve(i)):{credential:null,user:null}})()}addFrameworkForLogging(e){!function Re(n,t){(0,r.aE)(n)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,i,o){const{next:s,error:u,complete:d}=X(e,i,o);return this._delegate.onAuthStateChanged(s,u,d)}onIdTokenChanged(e,i,o){const{next:s,error:u,complete:d}=X(e,i,o);return this._delegate.onIdTokenChanged(s,u,d)}sendSignInLinkToEmail(e,i){return r.a7(this._delegate,e,i)}sendPasswordResetEmail(e,i){return r.a0(this._delegate,e,i||void 0)}setPersistence(e){var i=this;return(0,a.Z)(function*(){let o;switch(function Oe(n,t){P(Object.values(p).includes(t),n,"invalid-persistence-type"),(0,c.b$)()?P(t!==p.SESSION,n,"unsupported-persistence-type"):(0,c.UG)()?P(t===p.NONE,n,"unsupported-persistence-type"):U()?P(t===p.NONE||t===p.LOCAL&&(0,c.hl)(),n,"unsupported-persistence-type"):P(t===p.NONE||H(),n,"unsupported-persistence-type")}(i._delegate,e),e){case p.SESSION:o=r.a;break;case p.LOCAL:o=(yield r.az(r.i)._isAvailable())?r.i:r.b;break;case p.NONE:o=r.L;break;default:return r.as("argument-error",{appName:i._delegate.name})}return i._delegate.setPersistence(o)})()}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return g(this._delegate,r.X(this._delegate))}signInWithCredential(e){return g(this._delegate,r.Y(this._delegate,e))}signInWithCustomToken(e){return g(this._delegate,r.$(this._delegate,e))}signInWithEmailAndPassword(e,i){return g(this._delegate,r.a6(this._delegate,e,i))}signInWithEmailLink(e,i){return g(this._delegate,r.a9(this._delegate,e,i))}signInWithPhoneNumber(e,i){return W(this._delegate,r.s(this._delegate,e,i))}signInWithPopup(e){var i=this;return(0,a.Z)(function*(){return A(x(),i._delegate,"operation-not-supported-in-this-environment"),g(i._delegate,r.c(i._delegate,e,y))})()}signInWithRedirect(e){var i=this;return(0,a.Z)(function*(){return A(x(),i._delegate,"operation-not-supported-in-this-environment"),yield Z(i._delegate),r.f(i._delegate,e,y)})()}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}return n.Persistence=p,n})();function X(n,t,e){let i=n;"function"!=typeof n&&({next:i,error:t,complete:e}=n);const o=i;return{next:u=>o(u&&_.getOrCreate(u)),error:t,complete:e}}function We(n,t){const e=function Te(n,t){const e=K();if(!e)return[];const i=r.aA($,n,t);switch(e.getItem(i)){case p.NONE:return[r.L];case p.LOCAL:return[r.i,r.a];case p.SESSION:return[r.a];default:return[]}}(n,t);if(typeof self<"u"&&!e.includes(r.i)&&e.push(r.i),typeof window<"u")for(const i of[r.b,r.a])e.includes(i)||e.push(i);return e.includes(r.L)||e.push(r.L),e}class V{constructor(){this.providerId="phone",this._delegate=new r.P(J(w.Z.auth()))}static credential(t,e){return r.P.credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}V.PHONE_SIGN_IN_METHOD=r.P.PHONE_SIGN_IN_METHOD,V.PROVIDER_ID=r.P.PROVIDER_ID;const Fe=r.ax;class Ve{constructor(t,e,i=w.Z.app()){var o;Fe(null===(o=i.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r.R(t,e,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}!function ze(n){n.INTERNAL.registerComponent(new te.wA("auth-compat",t=>{const e=t.getProvider("app-compat").getImmediate(),i=t.getProvider("auth");return new j(e,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.A.EMAIL_SIGNIN,PASSWORD_RESET:r.A.PASSWORD_RESET,RECOVER_EMAIL:r.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.A.VERIFY_EMAIL}},EmailAuthProvider:r.M,FacebookAuthProvider:r.N,GithubAuthProvider:r.T,GoogleAuthProvider:r.Q,OAuthProvider:r.U,SAMLAuthProvider:r.V,PhoneAuthProvider:V,PhoneMultiFactorGenerator:r.m,RecaptchaVerifier:Ve,TwitterAuthProvider:r.W,Auth:j,AuthCredential:r.H,Error:c.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion("@firebase/auth-compat","0.3.1")}(w.Z)}}]);