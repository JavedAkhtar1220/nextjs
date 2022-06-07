"use strict";
(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Signin),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/auth/signin.js






function Signin({ providers  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        let token = sessionStorage.getItem('Token');
        if (token) {
            router.push("/");
        }
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Register Page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Login Page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex flex-col justify-center items-center text-center w-full flex-1 min-h-screen px-20 bg-blue-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-3/5 p-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "font-bold",
                                    children: "DingDong"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "py-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-2xl font-bold mb-2 text-[#0199dc]",
                                        children: "Sign In to your Account"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-2 w-10 border-[#0199dc] inline-block mb-2"
                                }),
                                Object.values(providers).map((provider)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex justify-center my-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: ()=>(0,react_.signIn)(provider.id, {
                                                        callbackUrl: "/"
                                                    })
                                                ,
                                                className: "border-2 border-[#0199dc] p-3 rounded-full mx-1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGoogle, {
                                                    className: " text-[#0199dc]"
                                                })
                                            }),
                                            "               "
                                        ]
                                    }, provider.name)
                                ),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-500 my-3",
                                    children: "Or you can use your email address"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-gray-100 w-64 p-2 flex items-center rounded mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaRegEnvelope, {
                                                    className: "text-gray-400 m-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "email",
                                                    name: "email",
                                                    placeholder: "Email",
                                                    className: "bg-gray-100 outline-none flex-1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-gray-100 w-64 p-2 flex items-center rounded mb-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaLock, {
                                                    className: "text-gray-400 m-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "password",
                                                    name: "password",
                                                    placeholder: "Password",
                                                    className: "bg-gray-100 outline-none flex-1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex w-64 mb-5 justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: "text-xs flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "checkbox",
                                                            name: "remember",
                                                            className: "mr-2"
                                                        }),
                                                        "Remember me"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-xs",
                                                    children: "Forgot Password"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            /*  onClick={signUp} */ className: "border-2 border-[#0199dc] rounded px-12 py-3 inline-block hover:text-white hover:bg-[#0199dc]",
                                            children: "Sign Up"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-2/5 p-5 bg-[#0199dc] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "Join our B2B Program"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-2 w-10 border-white inline-block mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-10",
                                    children: "Sign up with our B2B program and enjoy access to thousands of Consultants, Developers, Agents, Propeties for sale and more.."
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
// This is the recommended way for Next.js 9.3 or newer
async function getServerSideProps(context) {
    const providers = await (0,react_.getProviders)(context);
    return {
        props: {
            providers
        }
    };
}


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(743));
module.exports = __webpack_exports__;

})();