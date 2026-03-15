exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 7959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.js


function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "bg-white shadow-sm",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex items-center gap-4",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "font-bold text-xl",
                        children: "WrenchWorks"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    className: "hidden md:flex gap-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/services",
                            children: "Services"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/case-studies",
                            children: "Case Studies"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/pricing",
                            children: "Pricing"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/contact",
                            children: "Contact"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "pt-6",
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;