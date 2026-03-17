"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        style: {
            backgroundColor: "#1C1C1E"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 py-16",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/logo.png",
                                    alt: "WrenchWorks Digital",
                                    className: "h-10 w-auto"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm max-w-xs leading-relaxed",
                                    style: {
                                        color: "#6B6560"
                                    },
                                    children: "Growth systems for auto repair shops."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-xs uppercase tracking-widest font-semibold mb-5",
                                    style: {
                                        color: "#D4A853"
                                    },
                                    children: "Pages"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "flex flex-col gap-3 text-sm",
                                    children: [
                                        {
                                            href: "/",
                                            label: "Home"
                                        },
                                        {
                                            href: "/services",
                                            label: "Services"
                                        },
                                        {
                                            href: "/case-studies",
                                            label: "Case Studies"
                                        },
                                        {
                                            href: "/contact",
                                            label: "Contact"
                                        }
                                    ].map(({ href, label })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: href,
                                                className: "transition-colors",
                                                style: {
                                                    color: "#E8E2DC"
                                                },
                                                onMouseEnter: (e)=>e.target.style.color = "#E85D2A",
                                                onMouseLeave: (e)=>e.target.style.color = "#E8E2DC",
                                                children: label
                                            })
                                        }, label))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-xs uppercase tracking-widest font-semibold mb-5",
                                    style: {
                                        color: "#D4A853"
                                    },
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm mb-5 leading-relaxed",
                                    style: {
                                        color: "#6B6560"
                                    },
                                    children: "Ready to grow your shop? We would love to hear from you."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/contact",
                                    className: "inline-block px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 shadow-md",
                                    style: {
                                        backgroundColor: "#E85D2A"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.transform = "scale(1.02)";
                                        e.currentTarget.style.backgroundColor = "#cf4e1e";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.backgroundColor = "#E85D2A";
                                    },
                                    children: "Schedule a Free Call"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-12 pt-6 text-center text-xs",
                    style: {
                        borderTop: "1px solid rgba(214,207,199,0.12)",
                        color: "#6B6560"
                    },
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " WrenchWorks Digital. All rights reserved."
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Header() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "sticky top-0 z-50",
        style: {
            backgroundColor: "rgba(28,28,30,0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(214,207,199,0.1)"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "flex items-center gap-2 shrink-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/images/logo.png",
                            alt: "WrenchWorks Digital",
                            className: "h-10 w-auto"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/services",
                                className: "text-sm font-medium transition-colors",
                                style: {
                                    color: "#E8E2DC"
                                },
                                onMouseEnter: (e)=>e.target.style.color = "#E85D2A",
                                onMouseLeave: (e)=>e.target.style.color = "#E8E2DC",
                                children: "Services"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/case-studies",
                                className: "text-sm font-medium transition-colors",
                                style: {
                                    color: "#E8E2DC"
                                },
                                onMouseEnter: (e)=>e.target.style.color = "#E85D2A",
                                onMouseLeave: (e)=>e.target.style.color = "#E8E2DC",
                                children: "Case Studies"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/contact",
                                className: "text-sm font-medium transition-colors",
                                style: {
                                    color: "#E8E2DC"
                                },
                                onMouseEnter: (e)=>e.target.style.color = "#E85D2A",
                                onMouseLeave: (e)=>e.target.style.color = "#E8E2DC",
                                children: "Contact"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/contact",
                                className: "px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg",
                                style: {
                                    backgroundColor: "#E85D2A"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = "scale(1.02)";
                                    e.currentTarget.style.backgroundColor = "#cf4e1e";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.backgroundColor = "#E85D2A";
                                },
                                children: "Get a Free Plan"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "md:hidden focus:outline-none",
                        style: {
                            color: "#E8E2DC"
                        },
                        onClick: ()=>setOpen(!open),
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "h-6 w-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16M4 18h16"
                            })
                        })
                    })
                ]
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:hidden px-4 pb-5",
                style: {
                    backgroundColor: "rgba(28,28,30,0.97)",
                    borderTop: "1px solid rgba(214,207,199,0.1)"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: "flex flex-col gap-4 pt-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/services",
                            className: "text-sm font-medium",
                            style: {
                                color: "#E8E2DC"
                            },
                            onClick: ()=>setOpen(false),
                            children: "Services"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/case-studies",
                            className: "text-sm font-medium",
                            style: {
                                color: "#E8E2DC"
                            },
                            onClick: ()=>setOpen(false),
                            children: "Case Studies"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/contact",
                            className: "text-sm font-medium",
                            style: {
                                color: "#E8E2DC"
                            },
                            onClick: ()=>setOpen(false),
                            children: "Contact"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/contact",
                            className: "inline-block px-5 py-2.5 rounded-xl text-white text-sm font-semibold text-center",
                            style: {
                                backgroundColor: "#E85D2A"
                            },
                            onClick: ()=>setOpen(false),
                            children: "Get a Free Plan"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;