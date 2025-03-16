import{d as A,r as U,v as _,B as i,N as D,x as u,j as V,p as W,R as $,o as M,M as K,A as B,W as F,k as Q,t as q}from"./index-Dt0Wg-4Q.js";import{r as s,n as w,c as C,U as x}from"./if-defined-CsAeHPzA.js";import"./index-e35PnjZz.js";import{M as R}from"./index-BViljaQg.js";import"./index-BwnVNNGD.js";import"./index-CmAnRuWe.js";import"./index-Diq2CFpW.js";import"./index-igIlYn3r.js";import"./index-CPe8eByf.js";import"./index-BlwZkaaq.js";import"./index-BdRSSYO9.js";const G={numericInputKeyDown(l,t,e){const n=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],r=l.metaKey||l.ctrlKey,o=l.key,a=o.toLocaleLowerCase(),c=a==="a",y=a==="c",k=a==="v",j=a==="x",E=o===",",O=o===".",L=o>="0"&&o<="9";!r&&(c||y||k||j)&&l.preventDefault(),t==="0"&&!E&&!O&&o==="0"&&l.preventDefault(),t==="0"&&L&&(e(o),l.preventDefault()),(E||O)&&(t||(e("0."),l.preventDefault()),(t!=null&&t.includes(".")||t!=null&&t.includes(","))&&l.preventDefault()),!L&&!n.includes(o)&&!O&&!E&&l.preventDefault()}},H=A`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var b=function(l,t,e,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,n);else for(var c=l.length-1;c>=0;c--)(a=l[c])&&(o=(r<3?a(o):r>3?a(t,e,o):a(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};const X=V.CONVERT_SLIPPAGE_TOLERANCE;let f=class extends U{constructor(){var t;super(),this.unsubscribe=[],this.networkName=(t=_.state.activeCaipNetwork)==null?void 0:t.name,this.detailsOpen=!1,this.sourceToken=i.state.sourceToken,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount,this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.gasPriceInUSD=i.state.gasPriceInUSD,this.priceImpact=i.state.priceImpact,this.maxSlippage=i.state.maxSlippage,this.networkTokenSymbol=i.state.networkTokenSymbol,this.inputError=i.state.inputError,this.unsubscribe.push(i.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError}))}render(){const t=this.toTokenAmount&&this.maxSlippage?D.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return u`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${x.formatNumberToLocalString(e,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${x.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?u`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${x.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?u` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${x.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?u`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${x.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${x.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${X}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};f.styles=[H];b([s()],f.prototype,"networkName",void 0);b([w()],f.prototype,"detailsOpen",void 0);b([s()],f.prototype,"sourceToken",void 0);b([s()],f.prototype,"toToken",void 0);b([s()],f.prototype,"toTokenAmount",void 0);b([s()],f.prototype,"sourceTokenPriceInUSD",void 0);b([s()],f.prototype,"toTokenPriceInUSD",void 0);b([s()],f.prototype,"gasPriceInUSD",void 0);b([s()],f.prototype,"priceImpact",void 0);b([s()],f.prototype,"maxSlippage",void 0);b([s()],f.prototype,"networkTokenSymbol",void 0);b([s()],f.prototype,"inputError",void 0);f=b([C("w3m-swap-details")],f);const Y=A`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var z=function(l,t,e,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,n);else for(var c=l.length-1;c>=0;c--)(a=l[c])&&(o=(r<3?a(o):r>3?a(t,e,o):a(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let N=class extends U{constructor(){super(...arguments),this.target="sourceToken"}render(){return u`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};N.styles=[Y];z([w()],N.prototype,"target",void 0);N=z([C("w3m-swap-input-skeleton")],N);const Z=A`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var T=function(l,t,e,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,n);else for(var c=l.length-1;c>=0;c--)(a=l[c])&&(o=(r<3?a(o):r>3?a(t,e,o):a(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};const J=5e-5;let m=class extends U{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=this.marketValue||"0",e=D.bigNumber(t).gt("0");return u`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${e?`$${x.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return G.numericInputKeyDown(t,this.value,e=>{var n;return(n=this.onSetAmount)==null?void 0:n.call(this,this.target,e)})}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const e=t.target.value.replace(/[^0-9.]/gu,"");e===","||e==="."?this.onSetAmount(this.target,"0."):e.endsWith(",")?this.onSetAmount(this.target,e.replace(",",".")):this.onSetAmount(this.target,e)}setMaxValueToInput(){var t;(t=this.onSetMaxValue)==null||t.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:u` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=D.multiply(this.balance,this.price),e=t?t==null?void 0:t.gt(J):!1;return u`
      ${e?u`<wui-text variant="small-400" color="fg-200">
            ${x.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(e):null}
    `}tokenActionButtonTemplate(t){return t?u` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:u` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){W.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),$.push("SwapSelectToken",{target:this.target})}onBuyToken(){$.push("OnRampProviders")}};m.styles=[Z];T([w()],m.prototype,"focused",void 0);T([w()],m.prototype,"balance",void 0);T([w()],m.prototype,"value",void 0);T([w()],m.prototype,"price",void 0);T([w()],m.prototype,"marketValue",void 0);T([w()],m.prototype,"disabled",void 0);T([w()],m.prototype,"target",void 0);T([w()],m.prototype,"token",void 0);T([w()],m.prototype,"onSetAmount",void 0);T([w()],m.prototype,"onSetMaxValue",void 0);m=T([C("w3m-swap-input")],m);const tt=A`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var g=function(l,t,e,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,n);else for(var c=l.length-1;c>=0;c--)(a=l[c])&&(o=(r<3?a(o):r>3?a(t,e,o):a(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let d=class extends U{constructor(){var t;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(t=_.state.activeCaipNetwork)==null?void 0:t.caipNetworkId,this.initialized=i.state.initialized,this.loadingQuote=i.state.loadingQuote,this.loadingPrices=i.state.loadingPrices,this.loadingTransaction=i.state.loadingTransaction,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount,this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount,this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.inputError=i.state.inputError,this.gasPriceInUSD=i.state.gasPriceInUSD,this.fetchError=i.state.fetchError,this.onDebouncedGetSwapCalldata=M.debounce(async()=>{await i.swapTokens()},200),_.subscribeKey("activeCaipNetwork",e=>{this.caipNetworkId!==(e==null?void 0:e.caipNetworkId)&&(this.caipNetworkId=e==null?void 0:e.caipNetworkId,i.resetState(),i.initializeState())}),this.unsubscribe.push(K.subscribeKey("open",e=>{e||i.resetState()}),$.subscribeKey("view",e=>{e.includes("Swap")||i.resetValues()}),i.subscribe(e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError}))}firstUpdated(){i.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t()),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{i.getNetworkTokenPrice(),i.getMyTokensWithBalance(),i.swapTokens()},1e4)}templateSwap(){return u`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount"}templateReplaceTokensButton(){return u`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return u`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,e){var c,y;const n=(c=i.state.myTokensWithBalance)==null?void 0:c.find(k=>(k==null?void 0:k.address)===(e==null?void 0:e.address)),r=t==="toToken"?this.toTokenAmount:this.sourceTokenAmount,o=t==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,a=D.parseLocalStringToNumber(r)*o;return u`<w3m-swap-input
      .value=${t==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${t==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${e}
      .balance=${(y=n==null?void 0:n.quantity)==null?void 0:y.numeric}
      .price=${n==null?void 0:n.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,e){const n=t==="sourceToken"?this.sourceToken:this.toToken,r=(n==null?void 0:n.address)===_.getActiveNetworkTokenAddress();let o="0";if(!e){o="0",this.handleChangeAmount(t,o);return}if(!this.gasPriceInUSD){o=e,this.handleChangeAmount(t,o);return}const a=D.bigNumber(this.gasPriceInUSD.toFixed(5)).div(this.sourceTokenPriceInUSD),c=r?D.bigNumber(e).minus(a):D.bigNumber(e);this.handleChangeAmount(t,c.gt(0)?c.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(t,e){i.clearError(),t==="sourceToken"?i.setSourceTokenAmount(e):i.setToTokenAmount(e),this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken,e=!this.sourceTokenAmount,n=this.loadingQuote||this.loadingPrices||this.loadingTransaction,r=n||t||e||this.inputError;return u` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${t?"neutral":"main"}
        .loading=${n}
        .disabled=${r}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){i.switchTokens()}onSwapPreview(){var t,e;if(this.fetchError){i.swapTokens();return}W.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:((t=this.sourceToken)==null?void 0:t.symbol)||"",swapToToken:((e=this.toToken)==null?void 0:e.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:B.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),$.push("SwapPreview")}};d.styles=tt;g([s()],d.prototype,"interval",void 0);g([s()],d.prototype,"detailsOpen",void 0);g([s()],d.prototype,"caipNetworkId",void 0);g([s()],d.prototype,"initialized",void 0);g([s()],d.prototype,"loadingQuote",void 0);g([s()],d.prototype,"loadingPrices",void 0);g([s()],d.prototype,"loadingTransaction",void 0);g([s()],d.prototype,"sourceToken",void 0);g([s()],d.prototype,"sourceTokenAmount",void 0);g([s()],d.prototype,"sourceTokenPriceInUSD",void 0);g([s()],d.prototype,"toToken",void 0);g([s()],d.prototype,"toTokenAmount",void 0);g([s()],d.prototype,"toTokenPriceInUSD",void 0);g([s()],d.prototype,"inputError",void 0);g([s()],d.prototype,"gasPriceInUSD",void 0);g([s()],d.prototype,"fetchError",void 0);d=g([C("w3m-swap-view")],d);const et=A`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var h=function(l,t,e,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,n);else for(var c=l.length-1;c>=0;c--)(a=l[c])&&(o=(r<3?a(o):r>3?a(t,e,o):a(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let p=class extends U{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=i.state.approvalTransaction,this.swapTransaction=i.state.swapTransaction,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount??"",this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.caipNetwork=_.state.activeCaipNetwork,this.balanceSymbol=B.state.balanceSymbol,this.gasPriceInUSD=i.state.gasPriceInUSD,this.inputError=i.state.inputError,this.loadingQuote=i.state.loadingQuote,this.loadingApprovalTransaction=i.state.loadingApprovalTransaction,this.loadingBuildTransaction=i.state.loadingBuildTransaction,this.loadingTransaction=i.state.loadingTransaction,this.unsubscribe.push(B.subscribeKey("balanceSymbol",t=>{this.balanceSymbol!==t&&$.goBack()}),_.subscribeKey("activeCaipNetwork",t=>{this.caipNetwork!==t&&(this.caipNetwork=t)}),i.subscribe(t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toToken=t.toToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&$.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction}))}firstUpdated(){i.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t()),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{i.getApprovalLoadingState()||i.getTransaction()},1e4)}templateSwap(){var y,k,j,E;const t=`${x.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(y=this.sourceToken)==null?void 0:y.symbol}`,e=`${x.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(k=this.toToken)==null?void 0:k.symbol}`,n=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,r=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),o=x.formatNumberToLocalString(n),a=x.formatNumberToLocalString(r),c=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return u`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${o}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(j=this.sourceToken)==null?void 0:j.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(E=this.toToken)==null?void 0:E.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${c}
            ?disabled=${c}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){$.goBack()}onSendTransaction(){this.approvalTransaction?i.sendTransactionForApproval(this.approvalTransaction):i.sendTransactionForSwap(this.swapTransaction)}};p.styles=et;h([s()],p.prototype,"interval",void 0);h([s()],p.prototype,"detailsOpen",void 0);h([s()],p.prototype,"approvalTransaction",void 0);h([s()],p.prototype,"swapTransaction",void 0);h([s()],p.prototype,"sourceToken",void 0);h([s()],p.prototype,"sourceTokenAmount",void 0);h([s()],p.prototype,"sourceTokenPriceInUSD",void 0);h([s()],p.prototype,"toToken",void 0);h([s()],p.prototype,"toTokenAmount",void 0);h([s()],p.prototype,"toTokenPriceInUSD",void 0);h([s()],p.prototype,"caipNetwork",void 0);h([s()],p.prototype,"balanceSymbol",void 0);h([s()],p.prototype,"gasPriceInUSD",void 0);h([s()],p.prototype,"inputError",void 0);h([s()],p.prototype,"loadingQuote",void 0);h([s()],p.prototype,"loadingApprovalTransaction",void 0);h([s()],p.prototype,"loadingBuildTransaction",void 0);h([s()],p.prototype,"loadingTransaction",void 0);p=h([C("w3m-swap-preview-view")],p);const ot=A`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var P=function(l,t,e,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,n);else for(var c=l.length-1;c>=0;c--)(a=l[c])&&(o=(r<3?a(o):r>3?a(t,e,o):a(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let S=class extends U{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e;if(!this.visible)return null;const t=this.amount&&this.price?(e=D.multiply(this.price,this.amount))==null?void 0:e.toFixed(3):null;return u`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?u`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${x.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?u`<wui-text variant="small-400" color="fg-200">
                  ${x.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?u`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?u`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};S.styles=[Q,q,ot];P([w()],S.prototype,"imageSrc",void 0);P([w()],S.prototype,"name",void 0);P([w()],S.prototype,"symbol",void 0);P([w()],S.prototype,"price",void 0);P([w()],S.prototype,"amount",void 0);P([s()],S.prototype,"visible",void 0);P([s()],S.prototype,"imageError",void 0);S=P([C("wui-token-list-item")],S);const it=A`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var I=function(l,t,e,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,n);else for(var c=l.length-1;c>=0;c--)(a=l[c])&&(o=(r<3?a(o):r>3?a(t,e,o):a(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let v=class extends U{constructor(){var t;super(),this.unsubscribe=[],this.targetToken=(t=$.state.data)==null?void 0:t.target,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount,this.toToken=i.state.toToken,this.myTokensWithBalance=i.state.myTokensWithBalance,this.popularTokens=i.state.popularTokens,this.searchValue="",this.unsubscribe.push(i.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance}))}updated(){var n,r;const t=(n=this.renderRoot)==null?void 0:n.querySelector(".suggested-tokens-container");t==null||t.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const e=(r=this.renderRoot)==null?void 0:r.querySelector(".tokens");e==null||e.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var n,r;super.disconnectedCallback();const t=(n=this.renderRoot)==null?void 0:n.querySelector(".suggested-tokens-container"),e=(r=this.renderRoot)==null?void 0:r.querySelector(".tokens");t==null||t.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),e==null||e.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){this.targetToken==="sourceToken"?i.setSourceToken(t):(i.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&i.swapTokens()),$.goBack()}templateSearchInput(){return u`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],e=this.popularTokens?this.popularTokens:[],n=this.filterTokensWithText(t,this.searchValue),r=this.filterTokensWithText(e,this.searchValue);return u`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${(n==null?void 0:n.length)>0?u`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${n.map(o=>{var c,y,k;const a=o.symbol===((c=this.sourceToken)==null?void 0:c.symbol)||o.symbol===((y=this.toToken)==null?void 0:y.symbol);return u`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${o.symbol}"
                      name=${o.name}
                      ?disabled=${a}
                      symbol=${o.symbol}
                      price=${o==null?void 0:o.price}
                      amount=${(k=o==null?void 0:o.quantity)==null?void 0:k.numeric}
                      imageSrc=${o.logoUri}
                      @click=${()=>{a||this.onSelectToken(o)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(r==null?void 0:r.length)>0?r.map(o=>u`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${o.symbol}"
                    name=${o.name}
                    symbol=${o.symbol}
                    imageSrc=${o.logoUri}
                    @click=${()=>this.onSelectToken(o)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=i.state.suggestedTokens?i.state.suggestedTokens.slice(0,8):null;return t?u`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${t.map(e=>u`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){var e;const t=(e=this.renderRoot)==null?void 0:e.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",R.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",R.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){var e;const t=(e=this.renderRoot)==null?void 0:e.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",R.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",R.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,e){return t.filter(n=>`${n.symbol} ${n.name} ${n.address}`.toLowerCase().includes(e.toLowerCase()))}};v.styles=it;I([s()],v.prototype,"interval",void 0);I([s()],v.prototype,"targetToken",void 0);I([s()],v.prototype,"sourceToken",void 0);I([s()],v.prototype,"sourceTokenAmount",void 0);I([s()],v.prototype,"toToken",void 0);I([s()],v.prototype,"myTokensWithBalance",void 0);I([s()],v.prototype,"popularTokens",void 0);I([s()],v.prototype,"searchValue",void 0);v=I([C("w3m-swap-select-token-view")],v);export{p as W3mSwapPreviewView,v as W3mSwapSelectTokenView,d as W3mSwapView};
