(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{524:function(a,s,t){"use strict";t.r(s);var e=t(6),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" xxx\nversion "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" v1.0.0\n\n\nbuild-linux:\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64\n    go build -o release/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("-linux-amd64 main.go\n    \nbuild-mac:\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("darwin\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64\n    go build -o release/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("-darwin-amd64 main.go\n\nbuild-win:\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64\n    go build -o release/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("-winx64.exe main.go\n\nbuild: build-linux build-mac build-win\n\nrun:\n    go run main.go\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);