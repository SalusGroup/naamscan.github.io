(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},13:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n,s=a(0),i=a.n(s),o=a(12),r=a.n(o),c=(a(19),a(4)),l=a(2),u=a(5),d=a(6),p=a(8),h=a(7),m=a(9),b=a(1),f=a(3),v=a.n(f),j=(a(10),a(20),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.stepButtonStatus(!1,this.props.subject.name.length>2)}},{key:"render",value:function(){return i.a.createElement("div",{className:"formContainer"},i.a.createElement("h2",null,i.a.createElement("div",{className:"productName"},this.props.productName)),i.a.createElement("input",{id:"name",placeholder:"persoon of bedrijf",value:this.props.subject.name,onChange:this.handleChange}))}},{key:"handleChange",value:function(e){this.props.onFieldChange(Object(c.a)({},e.target.id,e.target.value)),this.props.stepButtonStatus(!1,e.target.value.length>2)}}]),t}(i.a.Component)),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).watchTimeout=void 0,a.downloadReport=a.downloadReport.bind(Object(b.a)(Object(b.a)(a))),a.licenseReport=a.licenseReport.bind(Object(b.a)(Object(b.a)(a))),a.state={reportCreationStatus:"paid",startedTime:new Date,timedOut:!1,isLicensing:!1,isMailing:!1},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.licenseReport()}},{key:"render",value:function(){return i.a.createElement("div",{className:"DownloadForm"},"Rapport Downloaden",this.state.isLicensing&&i.a.createElement("div",{className:"justify"},i.a.createElement("div",{className:"paymentComponent"},"Uw rapport wordt gelicenseerd..."),i.a.createElement("div",{className:"lds-dual-ring"})),this.state.isMailing&&i.a.createElement("div",null,i.a.createElement("div",{className:"paymentComponent"},"Uw rapport wordt nu gedownload en gemaild naar: ",this.props.emailAddress)))}},{key:"licenseReport",value:function(){console.log("Start Report Creation");var e={sku:this.props.sku,licenseKey:this.props.licenseId,id:this.props.fileId,email:this.props.emailAddress};this.setState({isLicensing:!0});var t=this;v.a.ajax({type:"POST",url:"https://us-central1-test-firebase-functions-51beb.cloudfunctions.net/licenseReport",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(e),success:function(e){console.log("RESULT:",e),t.setState({isLicensing:!1,isMailing:"success"===e.result}),"success"===e.result&&(console.log("Start DownLoad"),t.downloadReport())},error:function(e){console.log(e)}})}},{key:"testMobile",value:function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};return e}},{key:"downloadReport",value:function(){var e=null!==this.testMobile().any(),t="https://us-central1-test-firebase-functions-51beb.cloudfunctions.net/downLoadReport";console.log(t);var a=this.props.fileId;this.downloadFile(t+"?id="+a+"&emailAddress="+this.props.emailAddress+"&view="+e)}},{key:"downloadFile",value:function(e){var t=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,a=navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(t||a){var n=document.createElement("a");if(n.href=e,void 0!==n.download){var s=e.substring(e.lastIndexOf("/")+1,e.length);n.download=s}if(document.createEvent){var i=document.createEvent("MouseEvents");return i.initEvent("click",!0,!0),n.dispatchEvent(i),!0}}return-1===e.indexOf("?")&&(e+="?download"),window.open(e,"_self"),!0}}]),t}(s.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).watchTimeout=void 0,a.state={reportSummary:null,isGettingReportSummary:!1,isCreatingReport:!1,fileId:""},a.startReportCreation=a.startReportCreation.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.stepButtonStatus(!0,!1),this.startReportCreation()}},{key:"render",value:function(){console.log("Payment component State :",this.state),console.log("Payment component Props :",this.props);return i.a.createElement("div",null,this.state.isCreatingReport&&i.a.createElement("div",{className:"justify"},i.a.createElement("div",{className:"paymentComponent"},"Uw rapport wordt gegenereerd..."),i.a.createElement("div",{className:"lds-dual-ring"})),""!==this.state.fileId&&!this.state.isCreatingReport&&i.a.createElement("div",null,"Uw rapport is gecreeerd. ",i.a.createElement("br",null),"De volgende licentiekey wordt gebruikt voor het downloaden",i.a.createElement("br",null),this.props.licenceKey))}},{key:"startReportCreation",value:function(){var e=this;console.log("Start Report Creation");var t={sku:this.props.sku,subject:this.props.subject.name,client:this.props.client};this.setState({isCreatingReport:!0});var a=this;v.a.ajax({type:"POST",url:"https://us-central1-test-firebase-functions-51beb.cloudfunctions.net/startReportCreation",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(t),success:function(t){console.log(t),a.setState({isCreatingReport:!1,fileId:t.id},function(){e.props.setFileId(e.state.fileId)}),e.props.stepButtonStatus(!1,!0)},error:function(e){console.log(e)}})}}]),t}(s.Component);!function(e){e[e.ChooseSubject=0]="ChooseSubject",e[e.CreateReport=1]="CreateReport",e[e.Download=2]="Download"}(n||(n={}));var S="Persoon of bedrijf ",w="Download rapport",y="Maak rapport";Object.freeze(n);var C=function(e){function t(e){var a;Object(u.a)(this,t);var s=(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).urlParameter("token"),i=(a.urlParameter("productId"),a.urlParameter("sku")),o=a.urlParameter("licensekey"),r=a.urlParameter("email"),c=a.urlParameter("fullname");return console.log("SKU:",i),console.log("licensekey:",o),a.state={wizardStep:n.ChooseSubject,subject:{name:""},client:{id:"",name:c,company:"",address:"",city:"",zipcode:"",country:"",email:r,telephone:""},termsAndConditions:{accepted:!1},nextEnabled:!1,prevEnabled:!1,quotation:{productId:i,productName:"",token:s,licenseKey:o},mobileClient:!1,headerLeft:0,isRetrievingClient:!1,saveClientInfo:!0,member:!0,fileId:""},a.stepBack=a.stepBack.bind(Object(b.a)(Object(b.a)(a))),a.stepForward=a.stepForward.bind(Object(b.a)(Object(b.a)(a))),a.persistSubject=a.persistSubject.bind(Object(b.a)(Object(b.a)(a))),a.persistClientInformation=a.persistClientInformation.bind(Object(b.a)(Object(b.a)(a))),a.persistTermsAndConditionsAcceptance=a.persistTermsAndConditionsAcceptance.bind(Object(b.a)(Object(b.a)(a))),a.persistQuotation=a.persistQuotation.bind(Object(b.a)(Object(b.a)(a))),a.setReloadedState=a.setReloadedState.bind(Object(b.a)(Object(b.a)(a))),a.stepButtonStatus=a.stepButtonStatus.bind(Object(b.a)(Object(b.a)(a))),a.retrieveClientInfo=a.retrieveClientInfo.bind(Object(b.a)(Object(b.a)(a))),a.getProductName=a.getProductName.bind(Object(b.a)(Object(b.a)(a))),a.setFileId=a.setFileId.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.href.split("?")[0];history.pushState("data to be passed","Title of the page",e),history.replaceState("data to be passed","Title of the page",e),window.innerWidth<600&&(v()(".App-main").css("height",(window.innerHeight-132).toString()+"px"),this.setState({mobileClient:!0},function(){var e=v()(".App-header").offset();e&&window.scrollTo(0,e.top)})),this.state.quotation.productId&&this.getProductName(this.state.quotation.productId)}},{key:"render",value:function(){return console.log("AppState:",this.state),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"chevron"+(this.state.wizardStep==n.ChooseSubject?" active":" inactive")},i.a.createElement("span",null,S)),i.a.createElement("div",{className:"chevron"+(this.state.wizardStep==n.CreateReport?" active":" inactive")},i.a.createElement("span",null,y)),i.a.createElement("div",{className:"chevron"+(this.state.wizardStep==n.Download?" active":" inactive")},i.a.createElement("span",null,w))),i.a.createElement("div",{className:"App-main"},this.state.wizardStep===n.ChooseSubject&&i.a.createElement(j,{subject:this.state.subject,productName:this.state.quotation.productName,onFieldChange:this.persistSubject,stepButtonStatus:this.stepButtonStatus}),this.state.wizardStep===n.CreateReport&&i.a.createElement(O,{subject:this.state.subject,licenceKey:this.state.quotation.licenseKey,sku:this.state.quotation.productId,client:this.state.client,stepButtonStatus:this.stepButtonStatus,setFileId:this.setFileId}),this.state.wizardStep===n.Download&&i.a.createElement(g,{fileId:this.state.fileId,licenseId:this.state.quotation.licenseKey,sku:this.state.quotation.productId,emailAddress:this.state.client.email})),i.a.createElement("footer",{className:"App-footer"},i.a.createElement("div",{className:"stepButtons"},i.a.createElement("button",{className:"stepButtonleft "+(this.state.wizardStep>n.ChooseSubject?"":"hide"),onClick:this.stepBack,disabled:!this.state.prevEnabled},i.a.createElement("span",{className:"lnr lnr-arrow-left"})," Terug"),i.a.createElement("button",{className:"stepButtonright "+(this.state.wizardStep<n.Download?"":"hide"),onClick:this.stepForward,disabled:!this.state.nextEnabled},"Volgende ",i.a.createElement("span",{className:"lnr lnr-arrow-right"})))),i.a.createElement("div",{className:"nonBlocking"},"NAAMSCAN.NL"))}},{key:"stepBack",value:function(){var e=this;if(this.state.wizardStep>0&&(this.setState({wizardStep:this.state.wizardStep-1}),this.state.mobileClient)){var t=this.state.headerLeft+100;this.setState({headerLeft:t},function(){v()(".App-header").css("left",e.state.headerLeft.toString()+"px")})}if(this.state.mobileClient){var a=v()(".App-header").offset();a&&window.scrollTo(0,a.top)}}},{key:"stepForward",value:function(){var e=this;if(this.state.wizardStep<Object.keys(n).length){var t=this.state.wizardStep+1;if(this.setState({wizardStep:t}),this.state.mobileClient){var a=this.state.headerLeft-100;this.setState({headerLeft:a},function(){v()(".App-header").css("left",e.state.headerLeft.toString()+"px")})}}if(this.state.mobileClient){var s=v()(".App-header").offset();s&&window.scrollTo(0,s.top)}}},{key:"stepButtonStatus",value:function(e,t){console.log("BUTTONSTATUS CHANGING:",e,"-",t),this.setState({prevEnabled:e,nextEnabled:t})}},{key:"persistSubject",value:function(e){var t=Object.keys(e)[0],a=Object(l.a)({},this.state.subject,Object(c.a)({},t,e[t]));this.setState(Object(l.a)({},this.state,{subject:a}))}},{key:"persistClientInformation",value:function(e){var t=Object.keys(e)[0];if("save"===t){var a=Object(l.a)({},this.state,{saveClientInfo:"true"===e[t]});this.setState(a)}else{var n=Object(l.a)({},this.state.client,Object(c.a)({},t,e[t]));this.setState(Object(l.a)({},this.state,{client:n}))}}},{key:"persistTermsAndConditionsAcceptance",value:function(e){var t=Object.keys(e)[0],a=Object(l.a)({},this.state.termsAndConditions,Object(c.a)({},t,e[t]));this.setState(Object(l.a)({},this.state,{termsAndConditions:a}))}},{key:"persistQuotation",value:function(e){var t=Object.keys(e)[0],a=Object(l.a)({},this.state.quotation,Object(c.a)({},t,e[t]));this.setState(Object(l.a)({},this.state,{quotation:a}))}},{key:"setReloadedState",value:function(e){var t=Object(l.a)({},this.state.quotation),a=Object(l.a)({},this.state.client,{email:e});this.setState(Object(l.a)({},this.state,{quotation:t,client:a}))}},{key:"retrieveClientInfo",value:function(){var e=this,t={clientID:this.state.client.id};this.state.isRetrievingClient||(this.setState({isRetrievingClient:!0}),console.log("START RETRIEVE CLIENT"),v.a.ajax({type:"POST",url:"https://us-central1-test-firebase-functions-51beb.cloudfunctions.net/getCustomerDetails",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(t),success:function(t){if(console.log("retrievedClient:",t),t){var a=Object(l.a)({},e.state.client,t);e.setState(Object(l.a)({},e.state,{client:a,isRetrievingClient:!1,member:!0}))}else e.setState(Object(l.a)({},e.state,{member:!1}))}}))}},{key:"saveClientInfo",value:function(){var e=this,t={clientID:this.state.client.id,clientDetails:this.state.client};console.log("START SAVE CLIENT"),v.a.ajax({type:"POST",url:"https://us-central1-test-firebase-functions-51beb.cloudfunctions.net/saveCustomerDetails",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(t),success:function(t){console.log("retrievedClient:",t);var a=Object(l.a)({},e.state.client,t);e.setState(Object(l.a)({},e.state,{client:a,isRetrievingClient:!1}))}})}},{key:"getProductName",value:function(e){var t=this;console.log("Getting ProductName");var a={productID:e};v.a.ajax({type:"POST",url:"https://us-central1-test-firebase-functions-51beb.cloudfunctions.net/getProductName",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(a),success:function(e){console.log("productName:",e);var a={productName:e.productname},n=Object(l.a)({},t.state.quotation,a);t.setState(Object(l.a)({},t.state,{quotation:n}))}})}},{key:"setFileId",value:function(e){this.setState({fileId:e})}},{key:"urlParameter",value:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?null:decodeURIComponent(t[1].replace(/\+/g," "))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("reactRoot")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.41736dc0.chunk.js.map