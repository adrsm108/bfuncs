shadow$provide.module$bfuncs$EditorField=function(global,require,module,exports){function _typeof(obj$jscomp$0){"@babel/helpers - typeof";_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"===typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};return _typeof(obj$jscomp$0)}function _getRequireWildcardCache(nodeInterop){if("function"!==typeof WeakMap)return null;var cacheBabelInterop=
new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i],key;for(key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};return _extends.apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof
Constructor))throw new TypeError("Cannot call a class as a function");}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;"value"in descriptor&&(descriptor.writable=!0);Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){protoProps&&_defineProperties(Constructor.prototype,protoProps);staticProps&&_defineProperties(Constructor,
staticProps);return Constructor}function _inherits(subClass,superClass){if("function"!==typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,
p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;Super=Reflect.construct(Super,arguments,NewTarget)}else Super=Super.apply(this,arguments);Super=!Super||"object"!==_typeof(Super)&&"function"!==typeof Super?_assertThisInitialized(this):Super;return Super}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return self}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o$jscomp$0){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o$jscomp$0)}function _defineProperty(obj,key,
value){key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value;return obj}function _toConsumableArray(arr){var JSCompiler_temp=Array.isArray(arr)?_arrayLikeToArray(arr):void 0;JSCompiler_temp||(JSCompiler_temp="undefined"!==typeof Symbol&&null!=arr[Symbol.iterator]||null!=arr["@@iterator"]?Array.from(arr):void 0);if(!(arr=JSCompiler_temp||_unsupportedIterableToArray(arr)))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
return arr}function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!==typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"===typeof o.length){it&&(o=it);var i=0;allowArrayLike=function(){};return{s:allowArrayLike,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(_e2){throw _e2;},f:allowArrayLike}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var normalCompletion=!0,didErr=!1,err;return{s:function(){it=it.call(o)},n:function(){var step=it.next();normalCompletion=step.done;return step},e:function(_e3){didErr=!0;err=_e3},f:function(){try{if(!normalCompletion&&null!=it["return"])it["return"]()}finally{if(didErr)throw err;}}}}function _unsupportedIterableToArray(o,minLen){if(o){if("string"===typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);
if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}}function _arrayLikeToArray(arr,len){if(null==len||len>arr.length)len=arr.length;for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function updateByEffect(effectType){return function(value,tr){tr=_createForOfIteratorHelper(tr.effects);var _step;try{for(tr.s();!(_step=tr.n()).done;){var e=_step.value;if(e.is(effectType))return e.value}}catch(err){tr.e(err)}finally{tr.f()}return value}}
function getExprParseData(state){var errRanges=new _rangeset.RangeSetBuilder,vars=new Set,stack=[];(0,_language.syntaxTree)(state).iterate({enter:function(nt,from,to){if(nt.isError)from===to?from?errRanges.add(from-1,to,zeroWidthErrorRightMark):errRanges.add(from,to+1,zeroWidthErrorLeftMark):errRanges.add(from,to,errorMark),stack.push(Object.assign([],{operation:"ERROR"}));else if(nt.is("str"))stack.push(Object.assign([],{operation:nt.name}));else{if(nt.is("atom")){var stackTop=stack[stack.length-
1];switch(nt.name){case "TRUE":stackTop.push(!0);break;case "FALSE":stackTop.push(!1);break;case "var":nt=state.sliceDoc(from,to);stackTop.push(nt);vars.add(nt);break;default:console.warn("Unknown atom "+nt.name)}}return!1}},leave:function(nt){nt.is("atom")||(nt=stack[stack.length-2])&&nt.push(stack.pop())}});var errMarks=errRanges.finish(),parse=stack.pop();console.log(parse);return{parse,vars:_toConsumableArray(vars),errors:!!errMarks.size,errMarks}}function getVariableMarks(state){var mVar=state.field(markedVariableField),
ranges=new _rangeset.RangeSetBuilder;(0,_language.syntaxTree)(state).iterate({enter:function(nt,from,to){"var"===nt.name&&state.sliceDoc(from,to)===mVar&&ranges.add(from,to,varMark);if(!nt.isError&&!nt.is("str"))return!1}});return ranges.finish()}function getTermsParseData(state){var cursorPos=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:1)&&state.selection.main.empty?state.selection.main.from:null,dups=new Set(state.field(dupedTermsField));console.log("duppies: ",dups);var errRanges=new _rangeset.RangeSetBuilder,
termPositions=new Map,isUnderCursor=null!=cursorPos?function(from,to){return from<=cursorPos&&cursorPos<=to}:function(){return!1},termUnderCursor=null;(0,_language.syntaxTree)(state).iterate({enter:function(nt,from,to){if(nt.isError||"None"===nt.name)isUnderCursor(from,to)||(from===to?from?errRanges.add(from-1,to,zeroWidthErrorRightMark):errRanges.add(from,to+1,zeroWidthErrorLeftMark):errRanges.add(from,to,errorMark));else if(nt.is("term")){nt=state.sliceDoc(from,to);var _text$replaceAll$matc,arr=
null!==(_text$replaceAll$matc=nt.replaceAll("_","").match(/^(0[obx])?([\da-fA-F]+)$/))&&void 0!==_text$replaceAll$matc?_text$replaceAll$matc:[];_text$replaceAll$matc=Array.isArray(arr)?arr:void 0;if(!_text$replaceAll$matc)if(_text$replaceAll$matc=arr&&("undefined"!==typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]),null!=_text$replaceAll$matc){var _arr=[],_n=!0,_d=!1,_s;try{for(_text$replaceAll$matc=_text$replaceAll$matc.call(arr);!(_n=(_s=_text$replaceAll$matc.next()).done)&&(_arr.push(_s.value),
3!==_arr.length);_n=!0);}catch(err){_d=!0;var _e=err}finally{try{if(!_n&&null!=_text$replaceAll$matc["return"])_text$replaceAll$matc["return"]()}finally{if(_d)throw _e;}}_text$replaceAll$matc=_arr}else _text$replaceAll$matc=void 0;if(!(arr=_text$replaceAll$matc||_unsupportedIterableToArray(arr,3)))throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");_s=arr[0];_e=arr[1];arr=arr[2];if(null==_s)throw Error("Could not parse term from input "+
nt);nt=parseInt(arr,"0b"===_e?2:"0o"===_e?8:"0x"===_e?16:10);nt=nt>Number.MAX_SAFE_INTEGER?BigInt(_s):nt;_s=termPositions.get(nt);null!=_s?isUnderCursor(from,to)||(_s.push([from,to]),dups.add(nt)):isUnderCursor(from,to)?(termUnderCursor=nt,termPositions.set(nt,[])):termPositions.set(nt,[[from,to]])}}});var errMarks=errRanges.finish();return{terms:_toConsumableArray(termPositions.keys()),extra:null!=termUnderCursor&&0===termPositions.get(termUnderCursor).length?termUnderCursor:null,errors:!!errMarks.size,
duplicates:!!dups.size,dupMarks:_rangeset.RangeSet.of(_toConsumableArray(dups).flatMap(function(val){var _termPositions$get$ma,_termPositions$get;return null!==(_termPositions$get$ma=null===(_termPositions$get=termPositions.get(val))||void 0===_termPositions$get?void 0:_termPositions$get.map(function(r){return duplicateTermMark.range.apply(duplicateTermMark,_toConsumableArray(r))}))&&void 0!==_termPositions$get$ma?_termPositions$get$ma:[]}),!0),errMarks}}function correctSelection(){var active=document.activeElement,
sel=window.getSelection();"Range"===(null===sel||void 0===sel?void 0:sel.type)&&(active instanceof HTMLElement&&active.blur(),sel.collapseToStart(),active instanceof HTMLElement?active.focus():document.activeElement instanceof HTMLElement&&document.activeElement.blur())}Object.defineProperty(exports,"__esModule",{value:!0});exports.TermsField=exports.ExpressionField=void 0;var _react=function(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&
"function"!==typeof obj)return{"default":obj};if((nodeInterop=_getRequireWildcardCache(nodeInterop))&&nodeInterop.has(obj))return nodeInterop.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor,key;for(key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj["default"]=
obj;nodeInterop&&nodeInterop.set(obj,newObj);return newObj}(require("module$node_modules$react$index")),_state=require("module$node_modules$$codemirror$state$dist$index_cjs"),_view=require("module$node_modules$$codemirror$view$dist$index_cjs"),_rangeset=require("module$node_modules$$codemirror$rangeset$dist$index_cjs"),_matchbrackets=require("module$node_modules$$codemirror$matchbrackets$dist$index_cjs"),_highlight=require("module$node_modules$$codemirror$highlight$dist$index_cjs"),_language=require("module$node_modules$$codemirror$language$dist$index_cjs"),
_bexprParser=require("module$bfuncs$bexprParser"),_termsParser=require("module$bfuncs$termsParser"),_clsx=function(obj){return obj&&obj.__esModule?obj:{"default":obj}}(require("module$node_modules$clsx$dist$clsx")),varMark=_view.Decoration.mark({"class":"cm-markedVar"}),errorMark=_view.Decoration.mark({"class":"cm-parseError"}),zeroWidthErrorLeftMark=_view.Decoration.mark({"class":"cm-zeroWidthErrorLeft"}),zeroWidthErrorRightMark=_view.Decoration.mark({"class":"cm-zeroWidthErrorRight"}),duplicateTermMark=
_view.Decoration.mark({"class":"cm-duplicateTerm"}),hexInt=_highlight.Tag.define(_highlight.tags.integer),octInt=_highlight.Tag.define(_highlight.tags.integer),binInt=_highlight.Tag.define(_highlight.tags.integer),style=_highlight.HighlightStyle.define([{tag:_highlight.tags.compareOperator,"class":"cmt-rel-op"},{tag:_highlight.tags.operatorKeyword,"class":"cmt-operator-keyword cmt-operator"},{tag:_highlight.tags.logicOperator,"class":"cmt-log-op"},{tag:_highlight.tags.special(_highlight.tags.logicOperator),
"class":"cmt-negated"},{tag:_highlight.tags.integer,"class":"cmt-integer"},{tag:hexInt,"class":"cmt-hex"},{tag:octInt,"class":"cmt-oct"},{tag:binInt,"class":"cmt-bin"},{tag:_highlight.tags.separator,"class":"cmt-sep"}]),changeMarkedVariable=_state.StateEffect.define(),changeShowErrors=_state.StateEffect.define(),changeDuplicatedTerms=_state.StateEffect.define(),changeIgnoreAtCursor=_state.StateEffect.define(),dontIgnoreAtCursor=changeIgnoreAtCursor.of(!1),showErrorsField=_state.StateField.define({create:function(){return!1},
update:updateByEffect(changeShowErrors)}),markedVariableField=_state.StateField.define({create:function(){return null},update:updateByEffect(changeMarkedVariable)}),dupedTermsField=_state.StateField.define({create:function(){return[]},update:updateByEffect(changeDuplicatedTerms)}),ignoreAtCursorField=_state.StateField.define({create:function(){return!0},update:function(value,tr){var _tr$effects$find$valu,_tr$effects$find;return null!==(_tr$effects$find$valu=null===(_tr$effects$find=tr.effects.find(function(e){return e.is(changeIgnoreAtCursor)}))||
void 0===_tr$effects$find?void 0:_tr$effects$find.value)&&void 0!==_tr$effects$find$valu?_tr$effects$find$valu:tr.docChanged?!0:null!=tr.selection?!1:value}}),parseFacet=_state.Facet.define({combine:function(value){return value.length?value[0]:{errors:!1,errMarks:_view.Decoration.none}}});global=function(_Component){function EditorField(props){_classCallCheck(this,EditorField);var _this=_super.call(this,props);_defineProperty(_assertThisInitialized(_this),"divProps",void 0);_defineProperty(_assertThisInitialized(_this),
"divRef",void 0);_defineProperty(_assertThisInitialized(_this),"initErrors",void 0);_defineProperty(_assertThisInitialized(_this),"finishParse",function(data,text){text=text||_this.props.allowEmpty?Object.assign(data,{text}):{errors:!0,text};_this.props.onParse(text);null==_this.state?_this.initErrors=text.errors:_this.state.hasErrors!==text.errors&&_this.setState({hasErrors:text.errors});return data});_this.divRef=_react["default"].createRef();_this.initErrors=!1;props=_this.createEditor(props);
_this.state={view:props,hasErrors:_this.initErrors};return _this}_inherits(EditorField,_Component);var _super=_createSuper(EditorField);_createClass(EditorField,[{key:"componentDidMount",value:function(){var _this$divRef$current;null===(_this$divRef$current=this.divRef.current)||void 0===_this$divRef$current?void 0:_this$divRef$current.append(this.state.view.dom)}},{key:"componentWillUnmount",value:function(){this.state.view.destroy()}},{key:"render",value:function(){return _react["default"].createElement("div",
_extends({},this.divProps,{className:(0,_clsx["default"])("EditorField",this.constructor.name,this.props.showErrors&&"show-errors",this.state.hasErrors&&"has-errors",this.props.className),ref:this.divRef}))}}]);return EditorField}(_react.Component);_defineProperty(global,"defaultProps",{showErrors:!1,initialDoc:"",className:"",allowEmpty:!1});require=function(_EditorField){function ExpressionField(props){_classCallCheck(this,ExpressionField);return _super2.call(this,props)}_inherits(ExpressionField,
_EditorField);var _super2=_createSuper(ExpressionField);_createClass(ExpressionField,[{key:"parse",value:function(state){return this.finishParse(getExprParseData(state),state.doc.toString())}},{key:"createEditor",value:function(props){var _this2=this,doc=props.initialDoc,showErrors=props.showErrors,markedVariable=props.markedVariable;return new _view.EditorView({state:_state.EditorState.create({extensions:[new _language.LanguageSupport(_language.LezerLanguage.define({parser:_bexprParser.parser.configure({props:[(0,
_highlight.styleTags)({lit:_highlight.tags.bool,litKey:[_highlight.tags.keyword,_highlight.tags.bool],log:_highlight.tags.logicOperator,logKey:[_highlight.tags.operatorKeyword,_highlight.tags.logicOperator],rel:_highlight.tags.compareOperator,relKey:[_highlight.tags.operatorKeyword,_highlight.tags.compareOperator],not:_highlight.tags.special(_highlight.tags.logicOperator),notKey:[_highlight.tags.operatorKeyword,_highlight.tags.special(_highlight.tags.logicOperator)],"var":_highlight.tags.variableName,
neg:_highlight.tags.special(_highlight.tags.logicOperator)})]})})),(0,_matchbrackets.bracketMatching)(),style.extension,_highlight.classHighlightStyle.extension,showErrorsField.init(function(){return showErrors}),markedVariableField.init(function(){return markedVariable}),parseFacet.compute(["doc"],function(state){return _this2.parse(state)}),_view.EditorView.decorations.compute(["doc",markedVariableField],getVariableMarks),_view.EditorView.decorations.compute([showErrorsField,parseFacet],function(state){return state.field(showErrorsField)?
state.facet(parseFacet).errMarks:_view.Decoration.none}),_view.EditorView.lineWrapping],doc})})}},{key:"componentDidUpdate",value:function(prevProps,prevState,snapshot){prevState=[];var _this$props=this.props;snapshot=_this$props.markedVariable;_this$props=_this$props.showErrors;snapshot!==prevProps.markedVariable&&prevState.push(changeMarkedVariable.of(snapshot));_this$props!==prevProps.showErrors&&prevState.push(changeShowErrors.of(_this$props));prevState.length&&(prevState.push(dontIgnoreAtCursor),
correctSelection(),this.state.view.dispatch({effects:prevState}))}}]);return ExpressionField}(global);exports.ExpressionField=require;global=function(_EditorField2){function TermsField(props){_classCallCheck(this,TermsField);var _this3=_super3.call(this,props);_defineProperty(_assertThisInitialized(_this3),"divProps",{onBlur:function(){_this3.state.view.dispatch({effects:dontIgnoreAtCursor})}});return _this3}_inherits(TermsField,_EditorField2);var _super3=_createSuper(TermsField);_createClass(TermsField,
[{key:"parse",value:function(state){var _this$state,_this$state$view,ignoreAtCursor=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0;return this.finishParse(getTermsParseData(state,!!((null===(_this$state=this.state)||void 0===_this$state?0:null===(_this$state$view=_this$state.view)||void 0===_this$state$view?0:_this$state$view.hasFocus)&&ignoreAtCursor)),state.doc.toString())}},{key:"createEditor",value:function(props){var _this4=this,doc=props.initialDoc,showErrors=props.showErrors,duplicatedTerms=
props.duplicatedTerms;props=props.placeholder;return new _view.EditorView({state:_state.EditorState.create({extensions:[new _language.LanguageSupport(_language.LezerLanguage.define({parser:_termsParser.parser.configure({props:[(0,_highlight.styleTags)({Dec:_highlight.tags.integer,Bin:binInt,Oct:octInt,Hex:hexInt,Sep:_highlight.tags.separator})]})})),null==props?[]:(0,_view.placeholder)(props),style.extension,_highlight.classHighlightStyle.extension,dupedTermsField.init(function(){return duplicatedTerms}),
showErrorsField.init(function(){return showErrors}),ignoreAtCursorField,parseFacet.compute(["doc",ignoreAtCursorField,dupedTermsField],function(state){return _this4.parse(state,state.field(ignoreAtCursorField))}),_view.EditorView.decorations.compute([showErrorsField,parseFacet],function(state){return state.field(showErrorsField)?state.facet(parseFacet).errMarks:_view.Decoration.none}),_view.EditorView.decorations.compute([parseFacet],function(state){var _state$facet$dupMarks,_state$facet;return null!==
(_state$facet$dupMarks=null===(_state$facet=state.facet(parseFacet))||void 0===_state$facet?void 0:_state$facet.dupMarks)&&void 0!==_state$facet$dupMarks?_state$facet$dupMarks:_view.Decoration.none}),_view.EditorView.lineWrapping],doc})})}},{key:"componentDidUpdate",value:function(prevProps,prevState,snapshot){prevState=[];var _this$props2=this.props;snapshot=_this$props2.duplicatedTerms;_this$props2=_this$props2.showErrors;snapshot!==prevProps.duplicatedTerms&&prevState.push(changeDuplicatedTerms.of(snapshot));
_this$props2!==prevProps.showErrors&&prevState.push(changeShowErrors.of(_this$props2));prevState.length&&(correctSelection(),this.state.view.dispatch({effects:prevState}))}}]);return TermsField}(global);exports.TermsField=global}
//# sourceMappingURL=module$bfuncs$EditorField.js.map