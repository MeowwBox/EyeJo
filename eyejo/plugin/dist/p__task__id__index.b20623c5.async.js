(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{G87g:function(module,exports,__webpack_require__){eval('// extracted by mini-css-extract-plugin\nmodule.exports = {"table":"table___2S8eH"};\n\n//# sourceURL=webpack:///./src/pages/task/G87g/components/DetailsFuzz.less?')},HM6k:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js\nvar objectSpread2 = __webpack_require__("k1fw");\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\nvar classCallCheck = __webpack_require__("fWQN");\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createClass.js\nvar createClass = __webpack_require__("mtLc");\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules\nvar inherits = __webpack_require__("yKVA");\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules\nvar createSuper = __webpack_require__("879j");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/tabs/style/index.js\nvar style = __webpack_require__("Znn+");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 1 modules\nvar tabs = __webpack_require__("ZTPi");\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__("q1tI");\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./src/.umi-production/core/umiExports.ts + 17 modules\nvar umiExports = __webpack_require__("9kvl");\n\n// EXTERNAL MODULE: ./src/components/index.js + 13 modules\nvar components = __webpack_require__("Kvkj");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/table/style/index.js + 1 modules\nvar table_style = __webpack_require__("g9YV");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 22 modules\nvar table = __webpack_require__("wCAj");\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js\nvar esm_extends = __webpack_require__("0Owb");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/row/style/index.js\nvar row_style = __webpack_require__("14J3");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js\nvar row = __webpack_require__("BMrR");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/col/style/index.js\nvar col_style = __webpack_require__("jCWc");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js\nvar col = __webpack_require__("kPKH");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js\nvar form_style = __webpack_require__("y8nQ");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 13 modules\nvar es_form = __webpack_require__("Vl3Y");\n\n// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules\nvar objectWithoutProperties = __webpack_require__("PpiC");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js\nvar button_style = __webpack_require__("+L6B");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js\nvar es_button = __webpack_require__("2/Rp");\n\n// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ContainerOutlined.js\nvar ContainerOutlined = __webpack_require__("JKUY");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js\nvar input_style = __webpack_require__("5NDa");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 7 modules\nvar input = __webpack_require__("5rEg");\n\n// EXTERNAL MODULE: ./node_modules/@lingui/react/index.js\nvar _lingui_react = __webpack_require__("ZD0w");\n\n// EXTERNAL MODULE: ./src/pages/task/[id]/components/List.less?modules\nvar Listmodules = __webpack_require__("P5nt");\nvar Listmodules_default = /*#__PURE__*/__webpack_require__.n(Listmodules);\n\n// CONCATENATED MODULE: ./src/pages/task/[id]/components/List.js\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _dec, _class, _temp;\n\n\n\n\nvar Search = input["a" /* default */].Search;\nvar List_List = (_dec = Object(_lingui_react["withI18n"])(), _dec(_class = (_temp = /*#__PURE__*/function (_PureComponent) {\n  Object(inherits["a" /* default */])(List, _PureComponent);\n\n  var _super = Object(createSuper["a" /* default */])(List);\n\n  function List() {\n    var _this;\n\n    Object(classCallCheck["a" /* default */])(this, List);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n    _this.formRef = /*#__PURE__*/react_default.a.createRef();\n\n    _this.getColumns = function (activeKey) {\n      var onDetails = _this.props.onDetails;\n      var arr = [];\n\n      switch (activeKey) {\n        case \'1\':\n          arr = [{\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "URL"\n            }),\n            dataIndex: \'url\',\n            key: \'url\',\n            width: 100,\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "payload"\n            }),\n            dataIndex: \'payload\',\n            key: \'payload\',\n            width: 100\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u8BF7\\u6C42\\u6570\\u636E"\n            }),\n            dataIndex: \'snapshot_req\',\n            key: \'snapshot_req\',\n            width: 200\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u6F0F\\u6D1E\\u7C7B\\u578B"\n            }),\n            dataIndex: \'vulntype\',\n            key: \'vulntype\',\n            width: 100\n          }];\n          break;\n\n        case \'2\':\n          arr = [{\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "URL"\n            }),\n            dataIndex: \'poc_url\',\n            key: \'poc_url\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "POC\\u540D\\u79F0"\n            }),\n            dataIndex: \'poc_name\',\n            key: \'poc_name\'\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u68C0\\u9A8C\\u4FE1\\u606F"\n            }),\n            dataIndex: \'verifyinfo\',\n            key: \'verifyinfo\'\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u68C0\\u6D4B\\u7ED3\\u679C"\n            }),\n            dataIndex: \'result_code\',\n            key: \'result_code\'\n          }];\n          break;\n\n        case \'3\':\n          arr = [{\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "url"\n            }),\n            dataIndex: \'url\',\n            key: \'url\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "count"\n            }),\n            dataIndex: \'count\',\n            key: \'count\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u64CD\\u4F5C"\n            }),\n            key: \'\u64cd\u4f5c\',\n            show: true,\n            sorter: false,\n            render: function render(text, record) {\n              return /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {\n                type: "primary",\n                onClick: function onClick() {\n                  return onDetails(record);\n                },\n                title: "\\u67E5\\u770B\\u8BE6\\u60C5",\n                shape: "circle",\n                icon: /*#__PURE__*/react_default.a.createElement(ContainerOutlined["a" /* default */], null)\n              });\n            }\n          }];\n          break;\n\n        case \'4\':\n          arr = [{\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "ip\\u5730\\u5740"\n            }),\n            dataIndex: \'ip_address\',\n            key: \'ip_address\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u7AEF\\u53E3"\n            }),\n            dataIndex: \'port\',\n            key: \'port\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u670D\\u52A1"\n            }),\n            dataIndex: \'service\',\n            key: \'service\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u7528\\u6237\\u540D"\n            }),\n            dataIndex: \'username\',\n            key: \'username\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }, {\n            title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n              id: "\\u5BC6\\u7801"\n            }),\n            dataIndex: \'password\',\n            key: \'password\',\n            render: function render(text) {\n              return /*#__PURE__*/react_default.a.createElement("span", null, text);\n            }\n          }];\n          break;\n\n        default:\n          break;\n      }\n\n      return arr;\n    };\n\n    _this.getPlaceholder = function () {\n      var activeKey = _this.props.activeKey;\n      var str = \'\';\n\n      switch (activeKey) {\n        case \'1\':\n          str = \'\u8bf7\u8f93\u5165url\';\n          break;\n\n        case \'2\':\n          str = \'\u8bf7\u8f93\u5165url\';\n          break;\n\n        case \'3\':\n          str = \'\u8bf7\u8f93\u5165url\';\n          break;\n\n        default:\n          break;\n      }\n\n      return str;\n    };\n\n    _this.handleSubmit = function () {\n      var onFilterChange = _this.props.onFilterChange;\n\n      var values = _this.formRef.current.getFieldsValue();\n\n      onFilterChange(values);\n    };\n\n    return _this;\n  }\n\n  Object(createClass["a" /* default */])(List, [{\n    key: "render",\n    value: function render() {\n      var _this$props = this.props,\n          activeKey = _this$props.activeKey,\n          filter = _this$props.filter,\n          tableProps = Object(objectWithoutProperties["a" /* default */])(_this$props, ["activeKey", "filter"]);\n\n      var query = filter.query;\n      var columns = this.getColumns(activeKey);\n      var placeholder = this.getPlaceholder();\n      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(row["a" /* default */], {\n        gutter: 24\n      }, /*#__PURE__*/react_default.a.createElement(col["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */], {\n        ref: this.formRef,\n        name: "control-ref",\n        initialValues: {\n          query: query\n        }\n      }, [\'1\', \'3\'].includes(activeKey) ? /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {\n        name: "url"\n      }, /*#__PURE__*/react_default.a.createElement(Search, {\n        placeholder: placeholder,\n        onSearch: this.handleSubmit\n      })) : null, activeKey === \'2\' ? /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {\n        name: "poc_url"\n      }, /*#__PURE__*/react_default.a.createElement(Search, {\n        placeholder: placeholder,\n        onSearch: this.handleSubmit\n      })) : null))), /*#__PURE__*/react_default.a.createElement(table["a" /* default */], Object(esm_extends["a" /* default */])({}, tableProps, {\n        pagination: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, tableProps.pagination), {}, {\n          showTotal: function showTotal(total) {\n            return "Total ".concat(total, " Items");\n          }\n        }),\n        className: Listmodules_default.a.table,\n        bordered: true,\n        columns: columns,\n        simple: true,\n        rowKey: function rowKey(record) {\n          return record.id || record.url;\n        }\n      })));\n    }\n  }]);\n\n  return List;\n}(react["PureComponent"]), _temp)) || _class);\n/* harmony default export */ var components_List = (List_List);\n// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js\nvar modal_style = __webpack_require__("2qtc");\n\n// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules\nvar modal = __webpack_require__("kLXV");\n\n// EXTERNAL MODULE: ./src/pages/task/[id]/components/DetailsFuzz.less?modules\nvar DetailsFuzzmodules = __webpack_require__("G87g");\nvar DetailsFuzzmodules_default = /*#__PURE__*/__webpack_require__.n(DetailsFuzzmodules);\n\n// CONCATENATED MODULE: ./src/pages/task/[id]/components/DetailsFuzz.js\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar DetailsFuzz_Search = input["a" /* default */].Search;\n\nvar DetailsFuzz_TaskModal = /*#__PURE__*/function (_PureComponent) {\n  Object(inherits["a" /* default */])(TaskModal, _PureComponent);\n\n  var _super = Object(createSuper["a" /* default */])(TaskModal);\n\n  function TaskModal() {\n    var _this;\n\n    Object(classCallCheck["a" /* default */])(this, TaskModal);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n    _this.formRef = /*#__PURE__*/react_default.a.createRef();\n\n    _this.handleSubmit = function () {\n      var onFilterChange = _this.props.onFilterChange;\n\n      var values = _this.formRef.current.getFieldsValue();\n\n      onFilterChange(values);\n    };\n\n    return _this;\n  }\n\n  Object(createClass["a" /* default */])(TaskModal, [{\n    key: "componentDidMount",\n    value: function componentDidMount() {\n      var handleDetailsInfo = this.props.handleDetailsInfo;\n      handleDetailsInfo();\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this$props = this.props,\n          onCancel = _this$props.onCancel,\n          onChange = _this$props.onChange,\n          pagination = _this$props.pagination,\n          dataSource = _this$props.dataSource,\n          modalProps = Object(objectWithoutProperties["a" /* default */])(_this$props, ["onCancel", "onChange", "pagination", "dataSource"]);\n\n      var columns = [{\n        title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n          id: "Fuzz url"\n        }),\n        dataIndex: \'fuzz_url\',\n        key: \'fuzz_url\',\n        sorter: true,\n        render: function render(text) {\n          return /*#__PURE__*/react_default.a.createElement("span", null, text);\n        }\n      }, {\n        title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n          id: "\\u72B6\\u6001\\u7801"\n        }),\n        dataIndex: \'status_code\',\n        key: \'status_code\',\n        sorter: true\n      }, {\n        title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n          id: "\\u54CD\\u5E94\\u5305\\u884C\\u6570"\n        }),\n        dataIndex: \'lines\',\n        key: \'lines\',\n        sorter: true\n      }, {\n        title: /*#__PURE__*/react_default.a.createElement(_lingui_react["Trans"], {\n          id: "\\u54CD\\u5E94\\u5305\\u5B57\\u7B26\\u6570"\n        }),\n        dataIndex: \'words\',\n        key: \'words\',\n        sorter: true\n      }];\n      return /*#__PURE__*/react_default.a.createElement(modal["a" /* default */], Object(esm_extends["a" /* default */])({}, modalProps, {\n        onCancel: onCancel,\n        footer: [/*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {\n          key: "back",\n          onClick: onCancel\n        }, "\\u5173\\u95ED")]\n      }), /*#__PURE__*/react_default.a.createElement(row["a" /* default */], {\n        gutter: 24\n      }, /*#__PURE__*/react_default.a.createElement(col["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */], {\n        ref: this.formRef,\n        name: "control-ref"\n      }, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {\n        name: "fuzz_url"\n      }, /*#__PURE__*/react_default.a.createElement(DetailsFuzz_Search, {\n        placeholder: "\\u8BF7\\u8F93\\u5165Fuzz url",\n        onSearch: this.handleSubmit\n      }))))), /*#__PURE__*/react_default.a.createElement(table["a" /* default */], {\n        onChange: onChange,\n        dataSource: dataSource,\n        pagination: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, pagination), {}, {\n          showTotal: function showTotal(total) {\n            return "Total ".concat(total, " Items");\n          }\n        }),\n        bordered: true,\n        columns: columns,\n        simple: true,\n        rowKey: function rowKey(record) {\n          return record.id;\n        },\n        className: DetailsFuzzmodules_default.a.table,\n        scroll: {\n          y: 300\n        },\n        style: {\n          marginTop: 8\n        }\n      }));\n    }\n  }]);\n\n  return TaskModal;\n}(react["PureComponent"]);\n\n/* harmony default export */ var DetailsFuzz = (DetailsFuzz_TaskModal);\n// CONCATENATED MODULE: ./src/pages/task/[id]/index.js\n\n\n\n\n\n\n\n\nvar _id_dec, _id_class, _id_temp;\n\n\n\n\n\n\n\nvar _require = __webpack_require__("hNau"),\n    pathToRegexp = _require.pathToRegexp;\n\nvar TabPane = tabs["a" /* default */].TabPane;\nvar _id_TaskDetail = (_id_dec = Object(umiExports["a" /* connect */])(function (_ref) {\n  var taskDetail = _ref.taskDetail,\n      loading = _ref.loading;\n  return {\n    taskDetail: taskDetail,\n    loading: loading\n  };\n}), _id_dec(_id_class = (_id_temp = /*#__PURE__*/function (_PureComponent) {\n  Object(inherits["a" /* default */])(TaskDetail, _PureComponent);\n\n  var _super = Object(createSuper["a" /* default */])(TaskDetail);\n\n  function TaskDetail() {\n    var _this;\n\n    Object(classCallCheck["a" /* default */])(this, TaskDetail);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.handleRefresh = function (newQuery) {\n      var _this$props = _this.props,\n          dispatch = _this$props.dispatch,\n          location = _this$props.location;\n      var pathname = location.pathname;\n      var match = pathToRegexp(\'/task/:id\').exec(pathname);\n      var obj = {};\n\n      if (match) {\n        obj = {\n          id: match[1]\n        };\n      }\n\n      dispatch({\n        type: \'taskDetail/query\',\n        payload: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, obj), newQuery)\n      });\n    };\n\n    _this.handleTabChange = function (activeKey) {\n      var dispatch = _this.props.dispatch;\n      dispatch({\n        type: \'taskDetail/changeKey\',\n        payload: {\n          activeKey: activeKey\n        }\n      });\n\n      _this.handleRefresh();\n    };\n\n    return _this;\n  }\n\n  Object(createClass["a" /* default */])(TaskDetail, [{\n    key: "render",\n    value: function render() {\n      // console.log(this.props)\n      var _this$props$taskDetai = this.props.taskDetail,\n          activeKey = _this$props$taskDetai.activeKey,\n          detailsVisible = _this$props$taskDetai.detailsVisible;\n      return /*#__PURE__*/react_default.a.createElement(components["d" /* Page */], {\n        inner: true\n      }, /*#__PURE__*/react_default.a.createElement(tabs["a" /* default */], {\n        onChange: this.handleTabChange,\n        type: "card",\n        activeKey: activeKey\n      }, /*#__PURE__*/react_default.a.createElement(TabPane, {\n        tab: "\\u6F0F\\u6D1E",\n        key: "1"\n      }, /*#__PURE__*/react_default.a.createElement(components_List, this.listProps)), /*#__PURE__*/react_default.a.createElement(TabPane, {\n        tab: "POC",\n        key: "2"\n      }, /*#__PURE__*/react_default.a.createElement(components_List, this.listProps)), /*#__PURE__*/react_default.a.createElement(TabPane, {\n        tab: "FUZZ",\n        key: "3"\n      }, /*#__PURE__*/react_default.a.createElement(components_List, this.listProps)), /*#__PURE__*/react_default.a.createElement(TabPane, {\n        tab: "\\u670D\\u52A1\\u7206\\u7834",\n        key: "4"\n      }, /*#__PURE__*/react_default.a.createElement(components_List, this.listProps))), detailsVisible ? /*#__PURE__*/react_default.a.createElement(DetailsFuzz, this.detailsProps) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null));\n    }\n  }, {\n    key: "listProps",\n    get: function get() {\n      var _this2 = this;\n\n      var _this$props2 = this.props,\n          taskDetail = _this$props2.taskDetail,\n          loading = _this$props2.loading,\n          location = _this$props2.location,\n          dispatch = _this$props2.dispatch;\n      var list = taskDetail.list,\n          pagination = taskDetail.pagination,\n          activeKey = taskDetail.activeKey;\n      var query = location.query;\n      return {\n        filter: Object(objectSpread2["a" /* default */])({}, query),\n        activeKey: activeKey,\n        pagination: pagination,\n        dataSource: list,\n        loading: loading.effects[\'taskDetail/query\'],\n        onChange: function onChange(page) {\n          _this2.handleRefresh({\n            page: page.current,\n            limit: page.pageSize\n          });\n        },\n        onFilterChange: function onFilterChange(value) {\n          _this2.handleRefresh(Object(objectSpread2["a" /* default */])({}, value));\n        },\n        onDetails: function onDetails(item) {\n          // console.log(item, \'details\')\n          dispatch({\n            type: \'taskDetail/changeState\',\n            payload: {\n              currentItem: item,\n              detailsVisible: true\n            }\n          });\n        }\n      };\n    }\n  }, {\n    key: "detailsProps",\n    get: function get() {\n      var _this$props3 = this.props,\n          dispatch = _this$props3.dispatch,\n          taskDetail = _this$props3.taskDetail,\n          location = _this$props3.location;\n      var currentItem = taskDetail.currentItem;\n      var pathname = location.pathname; // console.log(currentItem)\n\n      var detailsVisible = taskDetail.detailsVisible,\n          paginationDetails = taskDetail.paginationDetails,\n          listDetails = taskDetail.listDetails;\n      var taskId = pathToRegexp(\'/task/:id\').exec(pathname)[1];\n      return {\n        pagination: paginationDetails,\n        dataSource: listDetails,\n        visible: detailsVisible,\n        destroyOnClose: true,\n        maskClosable: false,\n        title: \'FUZZ\u8be6\u60c5\',\n        width: 900,\n        centered: true,\n        handleDetailsInfo: function handleDetailsInfo() {\n          dispatch({\n            type: \'taskDetail/details\',\n            payload: {\n              url: currentItem.url,\n              id: taskId\n            }\n          });\n        },\n        onFilterChange: function onFilterChange(value) {\n          dispatch({\n            type: \'taskDetail/details\',\n            payload: Object(objectSpread2["a" /* default */])({\n              url: currentItem.url,\n              id: taskId\n            }, value)\n          });\n          dispatch({\n            type: \'projecyDetail/changeState\',\n            payload: {\n              taskFuzzDetailsFilterData: value\n            }\n          });\n        },\n        onChange: function onChange(page, filters, sorter) {\n          // console.log(page)\n          var sortData = {};\n\n          if (sorter.order) {\n            sortData = {\n              field: sorter.field,\n              order: sorter.order === \'ascend\' ? \'asc\' : \'desc\'\n            };\n          }\n\n          dispatch({\n            type: \'taskDetail/details\',\n            payload: Object(objectSpread2["a" /* default */])({\n              page: page.current,\n              limit: page.pageSize,\n              url: currentItem.url,\n              id: taskId\n            }, sortData)\n          });\n          dispatch({\n            type: \'projecyDetail/changeState\',\n            payload: {\n              taskFuzzDetailsSortData: sortData\n            }\n          });\n        },\n        onCancel: function onCancel() {\n          dispatch({\n            type: \'taskDetail/changeState\',\n            payload: {\n              detailsVisible: false\n            }\n          });\n        }\n      };\n    }\n  }]);\n\n  return TaskDetail;\n}(react["PureComponent"]), _id_temp)) || _id_class);\n/* harmony default export */ var _id_ = __webpack_exports__["default"] = (_id_TaskDetail);\n\n//# sourceURL=webpack:///./src/pages/task/HM6k/index.js_+_2_modules?')},P5nt:function(module,exports,__webpack_require__){eval('// extracted by mini-css-extract-plugin\nmodule.exports = {"table":"table___20TsV"};\n\n//# sourceURL=webpack:///./src/pages/task/P5nt/components/List.less?')}}]);