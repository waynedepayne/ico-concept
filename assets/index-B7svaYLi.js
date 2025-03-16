import{d as u,k as g,r as d,x as c,O as s,t as $}from"./index-Dt0Wg-4Q.js";import{n as x,c as f,o as k}from"./if-defined-CsAeHPzA.js";import{e as _,n as C}from"./index-e35PnjZz.js";const R=u`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var v=function(l,e,n,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,n,r);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,n,t):i(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let p=class extends d{constructor(){super(...arguments),this.inputElementRef=_(),this.checked=void 0}render(){return c`
      <label>
        <input
          ${C(this.inputElementRef)}
          ?checked=${k(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};p.styles=[g,R];v([x({type:Boolean})],p.prototype,"checked",void 0);p=v([f("wui-checkbox")],p);const j=u`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var O=function(l,e,n,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,n,r);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,n,t):i(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let w=class extends d{render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:n}=s.state,r=(o=s.state.features)==null?void 0:o.legalCheckbox;return!e&&!n||!r?null:c`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=s.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.state;return e?c`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.state;return e?c`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}};w.styles=[j];w=O([f("w3m-legal-checkbox")],w);const P=u`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var T=function(l,e,n,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,n,r);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,n,t):i(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let m=class extends d{render(){return c`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};m.styles=[g,$,P];m=T([f("wui-ux-by-reown")],m);const U=u`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var W=function(l,e,n,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,n,r);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,n,t):i(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let b=class extends d{render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:n}=s.state,r=(o=s.state.features)==null?void 0:o.legalCheckbox;return!e&&!n||r?null:c`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=s.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.state;return e?c`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.state;return e?c`<a href=${e}>Privacy Policy</a>`:null}};b.styles=[U];b=W([f("w3m-legal-footer")],b);const E=u`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var y=function(l,e,n,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,n,r);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,n,t):i(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let h=class extends d{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,t=245+r,i=360+r*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${t}"
          stroke-dashoffset=${i}
        />
      </svg>
    `}};h.styles=[g,E];y([x({type:Number})],h.prototype,"radius",void 0);h=y([f("wui-loading-thumbnail")],h);
