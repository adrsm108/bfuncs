goog.provide('reagent_material_ui.styles');
var module$node_modules$$material_ui$core$esm$styles$index=shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
reagent_material_ui.styles.theme_provider_STAR_ = reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2(module$node_modules$$material_ui$core$esm$styles$index.MuiThemeProvider,"mui-theme-provider");
/**
 * Takes a styles-generating function or a styles object.
 * Returns a React hook which accepts a props object and returns the mapping from styles to class names.
 * Note: React hooks can't be used in regular Reagent components: https://cljdoc.org/d/reagent/reagent/1.0.0-alpha2/doc/tutorials/react-features#hooks
 */
reagent_material_ui.styles.make_styles = (function reagent_material_ui$styles$make_styles(var_args){
var G__40794 = arguments.length;
switch (G__40794) {
case 1:
return reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$2(styles,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,opts){
var use_styles = module$node_modules$$material_ui$core$esm$styles$index.makeStyles(reagent_material_ui.util.wrap_jss_styles(styles),cljs.core.clj__GT_js(opts));
return reagent_material_ui.util.wrap_js_function(use_styles);
}));

(reagent_material_ui.styles.make_styles.cljs$lang$maxFixedArity = 2);

/**
 * Takes a styles-generating function or a styles object.
 * Returns a higher-order component that wraps another component and adds a `:classes` prop to it.
 * Note: input component has to take all its props (including children) in a single map.
 */
reagent_material_ui.styles.with_styles = (function reagent_material_ui$styles$with_styles(var_args){
var G__40796 = arguments.length;
switch (G__40796) {
case 1:
return reagent_material_ui.styles.with_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_material_ui.styles.with_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.styles.with_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return reagent_material_ui.styles.with_styles.cljs$core$IFn$_invoke$arity$2(styles,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent_material_ui.styles.with_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,opts){
var hoc = module$node_modules$$material_ui$core$esm$styles$index.withStyles(reagent_material_ui.util.wrap_jss_styles(styles),cljs.core.clj__GT_js(opts));
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent_material_ui.util.apply_hoc,hoc);
}));

(reagent_material_ui.styles.with_styles.cljs$lang$maxFixedArity = 2);

/**
 * The styled-components pattern. Takes a component and a styles-generating function or a styles object.
 * Creates and returns a new component and gives the input component a `:class-name` prop for applying styles.
 * Note: input component has to take all its props (including children) in a single map.
 */
reagent_material_ui.styles.styled = (function reagent_material_ui$styles$styled(var_args){
var G__40800 = arguments.length;
switch (G__40800) {
case 2:
return reagent_material_ui.styles.styled.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_material_ui.styles.styled.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.styles.styled.cljs$core$IFn$_invoke$arity$2 = (function (component,styles){
return reagent_material_ui.styles.styled.cljs$core$IFn$_invoke$arity$3(component,styles,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent_material_ui.styles.styled.cljs$core$IFn$_invoke$arity$3 = (function (component,styles,opts){
var styled_component = module$node_modules$$material_ui$core$esm$styles$index.styled(reagent_material_ui.util.reactify_component(component));
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((function (){var G__40804 = reagent_material_ui.util.wrap_jss_styles(styles);
var G__40805 = cljs.core.clj__GT_js(opts);
return (styled_component.cljs$core$IFn$_invoke$arity$2 ? styled_component.cljs$core$IFn$_invoke$arity$2(G__40804,G__40805) : styled_component.call(null,G__40804,G__40805));
})());
}));

(reagent_material_ui.styles.styled.cljs$lang$maxFixedArity = 3);

/**
 * Takes a theme object and enhances it with responsive font options
 * Options may optionally be passed in to override the defaults provided by Material-UI
 * See: https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
 */
reagent_material_ui.styles.responsive_font_sizes = (function reagent_material_ui$styles$responsive_font_sizes(var_args){
var G__40810 = arguments.length;
switch (G__40810) {
case 1:
return reagent_material_ui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_material_ui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1 = (function (theme){
return reagent_material_ui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2(theme,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent_material_ui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2 = (function (theme,options){
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_(module$node_modules$$material_ui$core$esm$styles$index.responsiveFontSizes(reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_(theme),reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_(options)));
}));

(reagent_material_ui.styles.responsive_font_sizes.cljs$lang$maxFixedArity = 2);

/**
 * React hook that returns the theme object.
 * Note: React hooks can't be used in regular Reagent components: https://cljdoc.org/d/reagent/reagent/1.0.0-alpha2/doc/tutorials/react-features#hooks
 */
reagent_material_ui.styles.use_theme = (function reagent_material_ui$styles$use_theme(){
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_(module$node_modules$$material_ui$core$esm$styles$index.useTheme());
});
/**
 * Higher order component that provides the theme object as a prop to the input component.
 * Note: input component has to take all its props (including children) in a single map.
 */
reagent_material_ui.styles.with_theme = (function reagent_material_ui$styles$with_theme(component){
return reagent_material_ui.util.apply_hoc(module$node_modules$$material_ui$core$esm$styles$index.withTheme,component);
});
/**
 * Component that takes a theme object and makes it available in child components.
 * It should preferably be used at the root of your component tree.
 */
reagent_material_ui.styles.theme_provider = (function reagent_material_ui$styles$theme_provider(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40829 = arguments.length;
var i__4737__auto___40830 = (0);
while(true){
if((i__4737__auto___40830 < len__4736__auto___40829)){
args__4742__auto__.push((arguments[i__4737__auto___40830]));

var G__40831 = (i__4737__auto___40830 + (1));
i__4737__auto___40830 = G__40831;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent_material_ui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent_material_ui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (theme,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.styles.theme_provider_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.core.as_element,children));
}));

(reagent_material_ui.styles.theme_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_material_ui.styles.theme_provider.cljs$lang$applyTo = (function (seq40813){
var G__40814 = cljs.core.first(seq40813);
var seq40813__$1 = cljs.core.next(seq40813);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40814,seq40813__$1);
}));

/**
 * Takes an incomplete theme object and adds the missing parts
 */
reagent_material_ui.styles.create_mui_theme = (function reagent_material_ui$styles$create_mui_theme(options){
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_(module$node_modules$$material_ui$core$esm$styles$index.createMuiTheme(reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_(options)));
});

//# sourceMappingURL=reagent_material_ui.styles.js.map
