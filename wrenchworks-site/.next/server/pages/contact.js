"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335,660];
exports.modules = {

/***/ 2655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/contact.js
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (Contact)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.js + 1 modules
var _app = __webpack_require__(7959);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/AuditForm.js

function AuditForm() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "mt-6 max-w-xl",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("label", {
                className: "block",
                children: "Company"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                className: "w-full border rounded p-2 mt-1",
                placeholder: "Company name"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("label", {
                className: "block mt-3",
                children: "Primary contact"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                className: "w-full border rounded p-2 mt-1",
                placeholder: "Name & email"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("label", {
                className: "block mt-3",
                children: "Notes"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                className: "w-full border rounded p-2 mt-1",
                rows: "4",
                placeholder: "Short description of issues"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "mt-4 bg-green-600 text-white px-4 py-2 rounded",
                children: "Request Audit"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/FAQ.js

function FAQ({ items }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mt-8 space-y-4",
        children: (items || []).map((q, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                className: "border rounded p-3",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("summary", {
                        className: "font-semibold",
                        children: q.q
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-2 text-sm text-gray-700",
                        children: q.a
                    })
                ]
            }, i))
    });
}

;// CONCATENATED MODULE: ./pages/contact.js




const FAQ_ITEMS = [
    {
        q: "What exactly does WrenchWorks do?",
        a: "We reduce friction and improve execution consistency with audits, pilots, and scaled rollouts."
    },
    {
        q: "How long does the audit take?",
        a: "Most audits complete in 1–2 weeks depending on scope and availability."
    },
    {
        q: "Do we need to pause operations?",
        a: "No — the process is designed to minimize disruption."
    }
];
function Contact() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "p-8 max-w-3xl mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "Contact — WrenchWorks"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-3xl font-bold",
                children: "Request an Audit"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "mt-2",
                children: "Start with a diagnostic audit: baseline, prioritized plan, and clear next steps."
            }),
            /*#__PURE__*/ jsx_runtime.jsx(AuditForm, {}),
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "mt-8 text-2xl font-semibold",
                children: "FAQ"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(FAQ, {
                items: FAQ_ITEMS
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcontact&preferredRegion=&absolutePagePath=private-next-pages%2Fcontact.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(contact_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(contact_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(contact_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/contact","pathname":"/contact","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: contact_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,869,959], () => (__webpack_exec__(2655)));
module.exports = __webpack_exports__;

})();