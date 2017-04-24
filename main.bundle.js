webpackJsonp([2,5],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpressionListComponent = (function () {
    function ExpressionListComponent() {
        this.expressions = [];
        this.expressionClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ExpressionListComponent.prototype.ngOnInit = function () {
    };
    ExpressionListComponent.prototype.selectedExpression = function (expression) {
        this.expressionClicked.emit(expression);
    };
    return ExpressionListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ExpressionListComponent.prototype, "expressions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ExpressionListComponent.prototype, "expressionClicked", void 0);
ExpressionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-expression-list',
        template: __webpack_require__(590),
        styles: [__webpack_require__(492)]
    }),
    __metadata("design:paramtypes", [])
], ExpressionListComponent);

var _a;
//# sourceMappingURL=expression-list.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionsProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExpressionsProvider = (function () {
    function ExpressionsProvider() {
        this.expressionsList = [];
    }
    Object.defineProperty(ExpressionsProvider.prototype, "expressions", {
        get: function () {
            return this.expressionsList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionsProvider.prototype, "columns", {
        get: function () {
            return [
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Id', 'employeeNo'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Name', 'name'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Date of birth', 'dob'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Join date', 'joinDate'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Notice period', 'noticePeriod'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Email address', 'email'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Rating', 'rating'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Salary', 'salary')
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionsProvider.prototype, "operators", {
        get: function () {
            return [
                "-",
                "!=",
                "=",
                "-",
                "(",
                ")",
                "*",
                "/",
                "@",
                "#"
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionsProvider.prototype, "functions", {
        get: function () {
            return [
                "abs",
                "add",
                "concat",
                "datediff",
                "dayadd",
                "daydiff",
                "dayno",
                "daypart",
                "hourpart",
                "if",
                "left",
                "lower",
                "mid"
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionsProvider.prototype, "macros", {
        get: function () {
            return [
                "$client",
                "$curr_period",
                "$end_period(ID)",
                "$first_period(ID)",
                "$fiscal_year(ID)",
                "$fiscal_year(ID,+/-n)",
                "$now",
                "$ob_period",
                "$open_period(ID)",
                "$open_period(ID,+/-n)",
                "$period(ID)",
                "$period(ID,+/-n)",
                "quarter"
            ];
        },
        enumerable: true,
        configurable: true
    });
    ExpressionsProvider.prototype.setExpressions = function (expressions) {
        this.expressionsList = expressions;
    };
    return ExpressionsProvider;
}());
ExpressionsProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ExpressionsProvider);

//# sourceMappingURL=expressions-provider.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expressions_provider__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expression__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expression_list_expression_list_component__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpressionsComponent = (function () {
    function ExpressionsComponent(expressionsProvider) {
        var _this = this;
        this.expressionsProvider = expressionsProvider;
        this.isVisible = false;
        this.expressions = [];
        this.activeExpression = null;
        this.expressions = [];
        this.expressionsProvider.expressions.forEach(function (item) {
            _this.expressions.push(item.copy());
        });
    }
    ExpressionsComponent.prototype.ngOnInit = function () {
    };
    ExpressionsComponent.prototype.show = function () {
        this.isVisible = true;
    };
    ExpressionsComponent.prototype.showMainHelp = function () {
        console.log("Showing help!");
    };
    ExpressionsComponent.prototype.onOkClicked = function () {
        console.log("Ok clicked!");
    };
    ExpressionsComponent.prototype.onCancelClicked = function () {
        console.log("Ok clicked!");
    };
    ExpressionsComponent.prototype.selectedExpression = function (expression) {
        this.activeExpression = expression;
    };
    ExpressionsComponent.prototype.onNewExpression = function () {
        this.activeExpression = new __WEBPACK_IMPORTED_MODULE_2__expression__["a" /* Expression */]("", "", "");
        this.expressions.push(this.activeExpression);
    };
    ExpressionsComponent.prototype.onExpressionModified = function (expression) {
        console.log(expression.name + " - " + expression.description + ": " + expression.expression);
    };
    return ExpressionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__expression_list_expression_list_component__["a" /* ExpressionListComponent */]),
    __metadata("design:type", Object)
], ExpressionsComponent.prototype, "expressionList", void 0);
ExpressionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-expressions',
        template: __webpack_require__(592),
        styles: [__webpack_require__(494)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__expressions_provider__["a" /* ExpressionsProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__expressions_provider__["a" /* ExpressionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__expressions_provider__["a" /* ExpressionsProvider */]) === "function" && _a || Object])
], ExpressionsComponent);

var _a;
//# sourceMappingURL=expressions.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sorting_bar_SortButton__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorting_bar_sorting_bar_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sorting_columns_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_provider__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renaming_renamingdialog_component__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GridComponent = (function () {
    function GridComponent(element, zone, sortingColumnsProvider, dataProvider, dialog) {
        this.element = element;
        this.zone = zone;
        this.sortingColumnsProvider = sortingColumnsProvider;
        this.dataProvider = dataProvider;
        this.dialog = dialog;
        this.sortBar = null;
        this.sortChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.width = '100%';
        this.height = '100%';
        this.grid = null;
        this.container = null;
        this.loading = true;
        this.me = this;
        this.nativeElement = element.nativeElement;
    }
    GridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dataProvider.getData(100000).subscribe(function (data) {
            _this.zone.runOutsideAngular(function () {
                var angularComponent = _this;
                angularComponent.zone.run(function () {
                    angularComponent.loading = false;
                });
                var store = _this.createStore(data);
                var columns = _this.createColumns();
                var features = _this.createFeatures();
                angularComponent.grid = Ext.create('Ext.grid.Panel', {
                    enableLocking: true,
                    flex: 1,
                    region: 'center',
                    applyTo: 'center',
                    store: store,
                    features: features,
                    columns: columns,
                    plugins: [
                        {
                            ptype: 'gridfilters'
                        },
                        {
                            ptype: 'gridexporter'
                        },
                        {
                            ptype: 'gridrenameheaders'
                        }
                    ],
                    listeners: {
                        headerclick: function (headerContainer, column, event, htmlElement, options) {
                            angularComponent.onHeaderClick(headerContainer, column);
                        },
                        renamingmenuclick: function (columnDataIndex) {
                            angularComponent.onRenamingMenuClick(columnDataIndex);
                        }
                    }
                });
                var headerCt = angularComponent.grid.headerCt;
                var dropTarget;
                dropTarget = Ext.create('Ext.dd.DropTarget', _this.sortBar.getSortingBarDropElement(), {
                    notifyOver: Ext.Function.bind(_this.onNotifyOver, _this),
                    notifyDrop: Ext.Function.bind(_this.onNotifyDrop, _this)
                });
                dropTarget.addToGroup('header-dd-zone-' + angularComponent.grid.id);
                angularComponent.container = Ext.create('Ext.container.Container', {
                    renderTo: angularComponent.panelBody.nativeElement,
                    width: '100%',
                    height: '100%',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    header: false,
                    border: false,
                    hideBorder: true,
                    items: [
                        angularComponent.grid
                    ]
                });
            });
        });
    };
    GridComponent.prototype.onNotifyOver = function (source, e, data) {
        if (this.sortBar.canDrop(source.dragData.header.ibData)) {
            return Ext.baseCSSPrefix + 'dd-drop-ok';
        }
        else {
            return Ext.baseCSSPrefix + 'dd-drop-nodrop';
        }
    };
    GridComponent.prototype.onNotifyDrop = function (source, e, data) {
        return this.sortBar.dropColumn(source.dragData.header.ibData);
    };
    GridComponent.prototype.ngOnChanges = function (changes) {
        for (var property in changes) {
            if (property == 'state' && this.container != null) {
                if (changes[property].currentValue == 'collapsed') {
                    this.container.disable();
                }
                else {
                    this.container.enable();
                }
            }
        }
    };
    GridComponent.prototype.reload = function (showMask) {
        var _this = this;
        if (showMask) {
            this.loading = true;
        }
        this.dataProvider.getData(100000).subscribe(function (data) {
            _this.grid.reconfigure(_this.createStore(data));
            if (showMask) {
                _this.loading = false;
            }
        });
    };
    GridComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.dataProvider.getData(100000).subscribe(function (data) {
            _this.grid.reconfigure(_this.createStore(data));
            _this.loading = false;
            _this.grid.saveDocumentAs({
                type: 'html',
                title: 'Information Browser grid',
                fileName: 'myReport.html'
            });
        });
    };
    GridComponent.prototype.onGridAnimationDone = function () {
        this.updateLayout();
    };
    GridComponent.prototype.updateLayout = function () {
        if (this.container != null) {
            this.container.updateLayout();
        }
    };
    GridComponent.prototype.createStore = function (data) {
        var me = this;
        return new Ext.data.Store({
            model: me.createModel(),
            groupField: 'department',
            sorters: [{
                    property: 'salary',
                    direction: 'ASC'
                }],
            data: data
        });
    };
    GridComponent.prototype.createModel = function () {
        return Ext.create('Ext.data.Model', {
            idField: 'employeeNo',
            fields: [{
                    name: 'employeeNo'
                }, {
                    name: 'rating',
                    type: 'int'
                }, {
                    name: 'salary',
                    type: 'float'
                }, {
                    name: 'name',
                    convert: function (value, record) {
                        return record.get('forename') + ' ' + record.get('surname');
                    }
                }, {
                    name: 'forename'
                }, {
                    name: 'surname'
                }, {
                    name: 'email'
                }, {
                    name: 'department'
                }, {
                    name: 'dob',
                    type: 'date',
                    dateFormat: 'Ymd'
                }, {
                    name: 'joinDate',
                    type: 'date',
                    dateFormat: 'Ymd'
                }, {
                    name: 'noticePeriod'
                }, {
                    name: 'sickDays',
                    type: 'int'
                }, {
                    name: 'holidayDays',
                    type: 'int'
                }, {
                    name: 'holidayAllowance',
                    type: 'int'
                }]
        });
    };
    GridComponent.prototype.createColumns = function () {
        return [{
                xtype: 'rownumberer',
                width: 130,
                sortable: false
            }, {
                text: 'Id',
                sortable: true,
                dataIndex: 'employeeNo',
                groupable: false,
                width: 70,
                lockable: true,
                filter: {
                    type: 'string'
                },
                ibData: {
                    publicPath: 'employeeNo'
                }
            }, {
                text: 'Name',
                sortable: true,
                dataIndex: 'name',
                groupable: false,
                width: 120,
                lockable: true,
                filter: {
                    type: 'string'
                },
                ibData: {
                    publicPath: 'name'
                }
            }, {
                text: 'Date of birth',
                dataIndex: 'dob',
                xtype: 'datecolumn',
                groupable: false,
                filter: {
                    type: 'date'
                },
                ibData: {
                    publicPath: 'dob'
                }
            }, {
                text: 'Join date',
                dataIndex: 'joinDate',
                xtype: 'datecolumn',
                groupable: false,
                filter: {
                    type: 'date'
                },
                ibData: {
                    publicPath: 'joinDate'
                }
            }, {
                text: 'Notice period',
                dataIndex: 'noticePeriod',
                filter: {
                    type: 'string'
                },
                ibData: {
                    publicPath: 'noticePeriod'
                }
            }, {
                text: 'Email address',
                dataIndex: 'email',
                width: 200,
                groupable: false,
                lockable: true,
                renderer: function (v) {
                    return '<a href="mailto:' + v + '">' + v + '</a>';
                },
                filter: {
                    type: 'string'
                },
                ibData: {
                    publicPath: 'email'
                }
            }, {
                text: 'Department',
                dataIndex: 'department',
                hidden: false,
                lockable: true,
                filter: {
                    type: 'list'
                },
                ibData: {
                    publicPath: 'department'
                }
            }, {
                text: 'Absences',
                columns: [{
                        text: 'Illness',
                        dataIndex: 'sickDays',
                        width: 60,
                        groupable: false,
                        filter: {
                            type: 'number'
                        },
                        ibData: {
                            publicPath: 'sickDays'
                        }
                    }, {
                        text: 'Holidays',
                        dataIndex: 'holidayDays',
                        width: 70,
                        groupable: false,
                        filter: {
                            type: 'number'
                        },
                        ibData: {
                            publicPath: 'holidayDays'
                        }
                    }, {
                        text: 'Holiday Allowance',
                        dataIndex: 'holidayAllowance',
                        width: 125,
                        groupable: false,
                        filter: {
                            type: 'number'
                        },
                        ibData: {
                            publicPath: 'holidayAllowance'
                        }
                    }]
            }, {
                text: 'Rating',
                width: 70,
                sortable: true,
                dataIndex: 'rating',
                groupable: false,
                lockable: true,
                filter: {
                    type: 'number'
                },
                renderer: function (value, metaData) {
                    switch (value) {
                        case 1:
                            metaData.tdAttr = 'bgcolor="red"';
                            break;
                        case 2:
                            metaData.tdAttr = 'bgcolor="orange"';
                            break;
                        case 3:
                            metaData.tdAttr = 'bgcolor="#cccc00"';
                            break;
                        case 4:
                            metaData.tdAttr = 'bgcolor="orange"';
                            break;
                        case 5:
                            metaData.tdAttr = 'bgcolor="green"';
                            break;
                    }
                    return value;
                },
                ibData: {
                    publicPath: 'rating'
                }
            }, {
                text: 'Salary',
                width: 140,
                sortable: true,
                dataIndex: 'salary',
                align: 'right',
                renderer: Ext.util.Format.usMoney,
                groupable: false,
                summaryType: 'sum',
                lockable: true,
                summaryRenderer: Ext.util.Format.usMoney,
                filter: {
                    type: 'number'
                },
                ibData: {
                    publicPath: 'salary'
                }
            }];
    };
    GridComponent.prototype.createFeatures = function () {
        return [{
                id: 'group',
                ftype: 'groupingsummary',
                groupHeaderTpl: '{name}',
                hideGroupedHeader: false,
                showSummaryRow: true,
                enableGroupingMenu: true
            }];
    };
    GridComponent.prototype.onResize = function () {
        this.updateLayout();
        console.log('Resized');
    };
    GridComponent.prototype.sortToggled = function (toggledButton) {
        var store = this.grid.getStore();
        var sorters = store.getSorters();
        sorters.add({
            property: toggledButton.dataIndex,
            direction: toggledButton.sortOrder
        });
    };
    GridComponent.prototype.updateSortings = function () {
        var sorters = [];
        for (var _i = 0, _a = this.sortingColumnsProvider.sorters; _i < _a.length; _i++) {
            var sorter = _a[_i];
            sorters.push({
                property: sorter.dataIndex,
                direction: sorter.sortOrder
            });
        }
        this.grid.getStore().sorters.clear();
        this.grid.getStore().setSorters(sorters);
    };
    GridComponent.prototype.onHeaderClick = function (headerContainer, column) {
        console.log('Header clicked');
        this.sortChanged.emit(new __WEBPACK_IMPORTED_MODULE_1__sorting_bar_SortButton__["a" /* SortButton */](column.dataIndex, column.sortState));
    };
    GridComponent.prototype.onRenamingMenuClick = function (columnDataIndex) {
        console.log('Column rename menu item clicked');
        this.openDialog(columnDataIndex);
    };
    GridComponent.prototype.openDialog = function (columnDataIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__renaming_renamingdialog_component__["a" /* RenamingDialogComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var columns = _this.grid.getColumns();
                for (var columnIndex in columns) {
                    if (columns[columnIndex].dataIndex === columnDataIndex) {
                        columns[columnIndex].setText(result);
                        return;
                    }
                }
            }
        });
    };
    return GridComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__sorting_bar_sorting_bar_component__["a" /* SortingBarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sorting_bar_sorting_bar_component__["a" /* SortingBarComponent */]) === "function" && _a || Object)
], GridComponent.prototype, "sortBar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], GridComponent.prototype, "sortChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gridPanelBody'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], GridComponent.prototype, "panelBody", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GridComponent.prototype, "onResize", null);
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-grid',
        template: __webpack_require__(593),
        styles: [__webpack_require__(495)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__sorting_columns_provider__["a" /* SortingColumnsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sorting_columns_provider__["a" /* SortingColumnsProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__data_provider__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_provider__["a" /* DataProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialog */]) === "function" && _h || Object])
], GridComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_provider__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PivotGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PivotGridComponent = (function () {
    function PivotGridComponent(zone, dataProvider) {
        this.zone = zone;
        this.dataProvider = dataProvider;
        this.container = null;
    }
    PivotGridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var angularComponent = this;
        this.dataProvider.getData(100000).subscribe(function (data) {
            _this.zone.runOutsideAngular(function () {
                var store = _this.createStore(data);
                var columns = _this.createColumns();
                var features = _this.createFeatures();
                _this.container = Ext.create('Ext.container.Container', {
                    renderTo: angularComponent.pivotGridContainer.nativeElement,
                    width: '100%',
                    height: '100%',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    header: false,
                    border: false,
                    hideBorder: true,
                    items: [
                        {
                            xtype: 'pivotgrid',
                            matrix: {
                                type: 'local',
                                store: store,
                                leftAxis: [{
                                        dataIndex: 'department',
                                        direction: 'DESC',
                                        header: 'Department',
                                        width: 150
                                    }],
                                topAxis: [{
                                        dataIndex: 'rating',
                                        header: 'Rating',
                                        direction: 'ASC'
                                    }]
                            },
                            plugins: [
                                'pivotdrilldown',
                                {
                                    ptype: 'pivotconfigurator',
                                    dock: 'top',
                                    fields: [
                                        {
                                            dataIndex: 'department',
                                            header: 'Department'
                                        },
                                        {
                                            dataIndex: 'name',
                                            header: 'Name'
                                        },
                                        {
                                            dataIndex: 'dob',
                                            header: 'Date of Birth'
                                        },
                                        {
                                            dataIndex: 'rating',
                                            header: 'Rating'
                                        },
                                        {
                                            dataIndex: 'joinDate',
                                            header: 'Join Date'
                                        },
                                        {
                                            dataIndex: 'salary',
                                            header: 'Salary'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                });
            });
        });
    };
    PivotGridComponent.prototype.onGridAnimationDone = function () {
        this.updateLayout();
    };
    PivotGridComponent.prototype.updateLayout = function () {
        if (this.container != null) {
            this.container.updateLayout();
        }
    };
    PivotGridComponent.prototype.onResize = function () {
        this.updateLayout();
        console.log('Resized');
    };
    PivotGridComponent.prototype.createStore = function (data) {
        var me = this;
        return new Ext.data.Store({
            model: me.createModel(),
            data: data
        });
    };
    PivotGridComponent.prototype.createModel = function () {
        return Ext.create('Ext.data.Model', {
            idField: 'employeeNo',
            fields: [{
                    name: 'employeeNo'
                }, {
                    name: 'rating',
                    type: 'int'
                }, {
                    name: 'salary',
                    type: 'float'
                }, {
                    name: 'name',
                    convert: function (value, record) {
                        return record.get('forename') + ' ' + record.get('surname');
                    }
                }, {
                    name: 'forename'
                }, {
                    name: 'surname'
                }, {
                    name: 'email'
                }, {
                    name: 'department'
                }, {
                    name: 'dob',
                    type: 'date',
                    dateFormat: 'Ymd'
                }, {
                    name: 'joinDate',
                    type: 'date',
                    dateFormat: 'Ymd'
                }, {
                    name: 'noticePeriod'
                }, {
                    name: 'sickDays',
                    type: 'int'
                }, {
                    name: 'holidayDays',
                    type: 'int'
                }, {
                    name: 'holidayAllowance',
                    type: 'int'
                }]
        });
    };
    PivotGridComponent.prototype.createColumns = function () {
        return [{
                xtype: 'rownumberer',
                width: 130,
                sortable: false
            }, {
                text: 'Id',
                sortable: true,
                dataIndex: 'employeeNo',
                groupable: false,
                width: 70,
                lockable: true,
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Name',
                sortable: true,
                dataIndex: 'name',
                groupable: false,
                width: 120,
                lockable: true,
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Date of birth',
                dataIndex: 'dob',
                xtype: 'datecolumn',
                groupable: false,
                filter: {
                    type: 'date'
                }
            }, {
                text: 'Join date',
                dataIndex: 'joinDate',
                xtype: 'datecolumn',
                groupable: false,
                filter: {
                    type: 'date'
                }
            }, {
                text: 'Notice period',
                dataIndex: 'noticePeriod',
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Email address',
                dataIndex: 'email',
                width: 200,
                groupable: false,
                lockable: true,
                renderer: function (v) {
                    return '<a href="mailto:' + v + '">' + v + '</a>';
                },
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Department',
                dataIndex: 'department',
                hidden: true,
                lockable: true,
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Absences',
                columns: [{
                        text: 'Illness',
                        dataIndex: 'sickDays',
                        width: 60,
                        groupable: false,
                        filter: {
                            type: 'number'
                        }
                    }, {
                        text: 'Holidays',
                        dataIndex: 'holidayDays',
                        width: 70,
                        groupable: false,
                        filter: {
                            type: 'number'
                        }
                    }, {
                        text: 'Holiday Allowance',
                        dataIndex: 'holidayAllowance',
                        width: 125,
                        groupable: false,
                        filter: {
                            type: 'number'
                        }
                    }]
            }, {
                text: 'Rating',
                width: 70,
                sortable: true,
                dataIndex: 'rating',
                groupable: false,
                lockable: true,
                filter: {
                    type: 'number'
                },
                renderer: function (value, metaData) {
                    switch (value) {
                        case 1:
                            metaData.tdAttr = 'bgcolor="red"';
                            break;
                        case 2:
                            metaData.tdAttr = 'bgcolor="orange"';
                            break;
                        case 3:
                            metaData.tdAttr = 'bgcolor="#cccc00"';
                            break;
                        case 4:
                            metaData.tdAttr = 'bgcolor="orange"';
                            break;
                        case 5:
                            metaData.tdAttr = 'bgcolor="green"';
                            break;
                    }
                    return value;
                }
            }, {
                text: 'Salary',
                width: 140,
                sortable: true,
                dataIndex: 'salary',
                align: 'right',
                renderer: Ext.util.Format.usMoney,
                groupable: false,
                summaryType: 'sum',
                lockable: true,
                summaryRenderer: Ext.util.Format.usMoney,
                filter: {
                    type: 'number'
                }
            }];
    };
    PivotGridComponent.prototype.createFeatures = function () {
        return [{
                id: 'group',
                ftype: 'groupingsummary',
                groupHeaderTpl: '{name}',
                hideGroupedHeader: false,
                showSummaryRow: true,
                enableGroupingMenu: true
            }];
    };
    return PivotGridComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pivotGridContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], PivotGridComponent.prototype, "pivotGridContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PivotGridComponent.prototype, "onResize", null);
PivotGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-pivot-grid',
        template: __webpack_require__(595),
        styles: [__webpack_require__(497)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__data_provider__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_provider__["a" /* DataProvider */]) === "function" && _c || Object])
], PivotGridComponent);

var _a, _b, _c;
//# sourceMappingURL=pivot-grid.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenamingDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RenamingDialogComponent = (function () {
    function RenamingDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return RenamingDialogComponent;
}());
RenamingDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-renamingdialog',
        template: __webpack_require__(596)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object])
], RenamingDialogComponent);

var _a;
//# sourceMappingURL=renamingdialog.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Criterion; });
var Criterion = (function () {
    function Criterion(propertyName, operator, valueFrom, valueTo) {
        this.propertyName = propertyName;
        this.operator = operator;
        this.valueFrom = valueFrom;
        this.valueTo = valueTo;
    }
    Criterion.prototype.copy = function () {
        return new Criterion(this.propertyName, this.operator, this.valueFrom, this.valueTo);
    };
    return Criterion;
}());

//# sourceMappingURL=Criterion.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__criteria_provider__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Criterion__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriteriaModalItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriteriaModalItemComponent = (function () {
    function CriteriaModalItemComponent(criteriaProvider) {
        this.criteriaProvider = criteriaProvider;
        this.criterion = null;
        this.criterionRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CriteriaModalItemComponent.prototype.ngDoCheck = function () {
        this.isPropertyNameValid = this.propertyNameField.nativeElement.checkValidity();
        this.isOperatorValid = this.operatorField.nativeElement.checkValidity();
        this.isValueFromValid = this.valueFrom.nativeElement.checkValidity();
        this.isValueToValid = this.valueTo.nativeElement.checkValidity();
    };
    CriteriaModalItemComponent.prototype.isValid = function () {
        return this.isPropertyNameValid && this.isOperatorValid &&
            this.isValueFromValid && this.isValueToValid;
    };
    CriteriaModalItemComponent.prototype.onOperatorSelected = function (operator) {
        this.criterion.operator = operator;
    };
    CriteriaModalItemComponent.prototype.onPropertyClicked = function (columnName) {
        this.criterion.propertyName = columnName;
    };
    CriteriaModalItemComponent.prototype.onCriterionRemoveClicked = function (criterion) {
        this.criterionRemoved.emit(criterion);
    };
    return CriteriaModalItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Criterion__["a" /* Criterion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Criterion__["a" /* Criterion */]) === "function" && _a || Object)
], CriteriaModalItemComponent.prototype, "criterion", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], CriteriaModalItemComponent.prototype, "criterionRemoved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('propertyNameField'),
    __metadata("design:type", Object)
], CriteriaModalItemComponent.prototype, "propertyNameField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('operatorField'),
    __metadata("design:type", Object)
], CriteriaModalItemComponent.prototype, "operatorField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('valueFromField'),
    __metadata("design:type", Object)
], CriteriaModalItemComponent.prototype, "valueFrom", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('valueToField'),
    __metadata("design:type", Object)
], CriteriaModalItemComponent.prototype, "valueTo", void 0);
CriteriaModalItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-criteria-modal-item',
        template: __webpack_require__(597),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__criteria_provider__["a" /* CriteriaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__criteria_provider__["a" /* CriteriaProvider */]) === "function" && _c || Object])
], CriteriaModalItemComponent);

var _a, _b, _c;
//# sourceMappingURL=criteria-modal-item.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortButton__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByModalItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SortByModalItemComponent = (function () {
    function SortByModalItemComponent(sortingColumnsProvider) {
        this.sortingColumnsProvider = sortingColumnsProvider;
        this.sorter = null;
        this.sorterRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SortByModalItemComponent.prototype.ngDoCheck = function () {
        this.isPropertyNameValid = this.propertyNameField.nativeElement.checkValidity();
        this.isSortOrderValid = this.sortOrderField.nativeElement.checkValidity();
    };
    SortByModalItemComponent.prototype.onSorterRemoveClicked = function (sorter) {
        this.sorterRemoved.emit(sorter);
    };
    SortByModalItemComponent.prototype.isValid = function () {
        return this.isPropertyNameValid && this.isSortOrderValid;
    };
    return SortByModalItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__SortButton__["a" /* SortButton */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__SortButton__["a" /* SortButton */]) === "function" && _a || Object)
], SortByModalItemComponent.prototype, "sorter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], SortByModalItemComponent.prototype, "sorterRemoved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('propertyNameField'),
    __metadata("design:type", Object)
], SortByModalItemComponent.prototype, "propertyNameField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sortOrderField'),
    __metadata("design:type", Object)
], SortByModalItemComponent.prototype, "sortOrderField", void 0);
SortByModalItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-sort-by-modal-item',
        template: __webpack_require__(599),
        styles: [__webpack_require__(500)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__["a" /* SortingColumnsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__["a" /* SortingColumnsProvider */]) === "function" && _c || Object])
], SortByModalItemComponent);

var _a, _b, _c;
//# sourceMappingURL=sort-by-modal-item.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortButton__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__criteria_provider__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_picker_property_picker_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortingBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SortingBarComponent = (function () {
    function SortingBarComponent(element, sortingColumnsProvider, criteriaProvider, http) {
        var _this = this;
        this.element = element;
        this.sortingColumnsProvider = sortingColumnsProvider;
        this.criteriaProvider = criteriaProvider;
        this.http = http;
        this.toggledButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.applySortings = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reloadGrid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expressionsButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sorters = [];
        this.sortingColumnsProvider.sorters.forEach(function (item) {
            _this.sorters.push(item.copy());
        });
    }
    SortingBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        this.getJSON("/property-picker-testdata.json").subscribe(function (data) {
            _this.data = new Array();
            _this.data.push(data.json());
        });
    };
    SortingBarComponent.prototype.onClick = function (clickedButton) {
        clickedButton.toggle();
        this.toggledButton.emit(clickedButton);
    };
    SortingBarComponent.prototype.onSortChanged = function (changedSort) {
        this.sortingColumnsProvider.setSorter(changedSort);
    };
    SortingBarComponent.prototype.onApplySortings = function () {
        this.applySortings.emit();
    };
    SortingBarComponent.prototype.reload = function () {
        this.reloadGrid.emit();
    };
    SortingBarComponent.prototype.showExpressions = function () {
        this.expressionsButtonClicked.emit();
    };
    SortingBarComponent.prototype.onShowCriteria = function () {
        alert("I'm a criteria!");
    };
    SortingBarComponent.prototype.onApplyCriteria = function () {
    };
    SortingBarComponent.prototype.getSortButtonName = function (dataIndex) {
        var property = this.sortingColumnsProvider.properties.find(function (x) { return x.dataIndex === dataIndex; });
        return property ? property.name : '';
    };
    SortingBarComponent.prototype.getSortingBarDropElement = function () {
        return this.sortingBarDropElement.nativeElement;
    };
    SortingBarComponent.prototype.canDrop = function (ibData) {
        return !this.checkColumnIsAlreadyASorter(ibData.publicPath);
    };
    SortingBarComponent.prototype.dropColumn = function (ibData) {
        if (!this.checkColumnIsAlreadyASorter(ibData.publicPath)) {
            var newSortButton = new __WEBPACK_IMPORTED_MODULE_1__SortButton__["a" /* SortButton */](ibData.publicPath, 'A');
            this.sortingColumnsProvider.sorters.push(newSortButton);
            this.applySortings.emit();
            return true;
        }
        return false;
    };
    SortingBarComponent.prototype.checkColumnIsAlreadyASorter = function (publicPath) {
        var ret = false;
        for (var _i = 0, _a = this.sortingColumnsProvider.sorters; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.dataIndex === publicPath) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    /*Property picker */
    SortingBarComponent.prototype.onGetSelectedProperties = function () {
        var selectedProperties = this.propertyPicker.getSelectedProperties();
        alert(selectedProperties.join());
    };
    SortingBarComponent.prototype.getJSON = function (filename) {
        return this.http.get(filename);
    };
    return SortingBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SortingBarComponent.prototype, "toggledButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], SortingBarComponent.prototype, "applySortings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], SortingBarComponent.prototype, "reloadGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], SortingBarComponent.prototype, "expressionsButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__property_picker_property_picker_component__["a" /* PropertyPickerComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__property_picker_property_picker_component__["a" /* PropertyPickerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__property_picker_property_picker_component__["a" /* PropertyPickerComponent */]) === "function" && _e || Object)
], SortingBarComponent.prototype, "propertyPicker", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sortingBarDropElement'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], SortingBarComponent.prototype, "sortingBarDropElement", void 0);
SortingBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-sorting-bar',
        template: __webpack_require__(601),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__["a" /* SortingColumnsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__["a" /* SortingColumnsProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__criteria_provider__["a" /* CriteriaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__criteria_provider__["a" /* CriteriaProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _k || Object])
], SortingBarComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=sorting-bar.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_picker_node_model__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_picker_nav_model__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyPickerNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyPickerNavComponent = (function () {
    function PropertyPickerNavComponent() {
        this.navigateObject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.navigationIndex = -1;
    }
    PropertyPickerNavComponent.prototype.ngOnInit = function () {
        var rootProperty = new __WEBPACK_IMPORTED_MODULE_1__property_picker_node_model__["a" /* PropertyPickerNodeModel */]({
            text: this.rootObject
        });
        this.items = [];
        this.addStep(rootProperty);
    };
    PropertyPickerNavComponent.prototype.addStep = function (property) {
        var me = this;
        var propertyNav;
        this.navigationIndex++;
        propertyNav = new __WEBPACK_IMPORTED_MODULE_2__property_picker_nav_model__["a" /* PropertyPickerNavModel */]({
            index: this.navigationIndex,
            property: property
        });
        this.items.push({ label: property.text, command: function () {
                me.goToStep(propertyNav);
            } });
    };
    PropertyPickerNavComponent.prototype.goToStep = function (propertyNav) {
        if (propertyNav.index !== this.navigationIndex) {
            this.items = this.items.slice(0, propertyNav.index + 1);
            this.navigateObject.emit({
                property: propertyNav.property,
                back: true,
                isRoot: (propertyNav.index === 0)
            });
        }
        this.navigationIndex = propertyNav.index;
    };
    return PropertyPickerNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PropertyPickerNavComponent.prototype, "rootObject", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PropertyPickerNavComponent.prototype, "navigateObject", void 0);
PropertyPickerNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-property-picker-nav',
        template: __webpack_require__(604),
        styles: [__webpack_require__(505)]
    }),
    __metadata("design:paramtypes", [])
], PropertyPickerNavComponent);

var _a;
//# sourceMappingURL=property-picker-nav.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyPickerNodeModel; });
var PropertyPickerNodeModel = (function () {
    function PropertyPickerNodeModel(fields) {
        this.root = false;
        this.text = this.originalText;
        this.showCode = true;
        this.showDescription = true;
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return PropertyPickerNodeModel;
}());

//# sourceMappingURL=property-picker-node-model.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_picker_nav_component__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyPickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyPickerComponent = (function () {
    function PropertyPickerComponent() {
    }
    PropertyPickerComponent.prototype.ngOnInit = function () {
        this.currentObjectTitle = this.rootObject;
        this.showNavigation = false;
    };
    PropertyPickerComponent.prototype.getSelectedProperties = function () {
        if (this.data && this.data.length > 0 && this.data[0].children) {
            return this.getChildrenSelectedProperties(this.data[0]);
        }
        return [];
    };
    PropertyPickerComponent.prototype.getChildrenSelectedProperties = function (node) {
        var me = this;
        var selectedProperties = [];
        if (node.children) {
            node.children.forEach(function (item) {
                if (item.isPropertyCodeChecked || item.isPropertyTextChecked) {
                    selectedProperties.push(item.text + (item.isPropertyCodeChecked ? ' (Code) ' : ' (Description)'));
                }
                var children = me.getChildrenSelectedProperties(item);
                if (children.length > 0) {
                    selectedProperties.push(children);
                }
            });
        }
        return selectedProperties;
    };
    PropertyPickerComponent.prototype.onNavigateObject = function (navInfo) {
        this.showNavigation = !navInfo.isRoot;
        if (!navInfo.back) {
            this.propertyPickerNav.addStep(navInfo.property);
        }
        this.currentObjectTitle = navInfo.property.text;
        console.log('Navigate to:' + navInfo.property.text);
    };
    return PropertyPickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PropertyPickerComponent.prototype, "rootObject", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PropertyPickerComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PropertyPickerComponent.prototype, "maxItemsPerGroup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PropertyPickerComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PropertyPickerComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__property_picker_nav_component__["a" /* PropertyPickerNavComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__property_picker_nav_component__["a" /* PropertyPickerNavComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__property_picker_nav_component__["a" /* PropertyPickerNavComponent */]) === "function" && _a || Object)
], PropertyPickerComponent.prototype, "propertyPickerNav", void 0);
PropertyPickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-property-picker',
        template: __webpack_require__(606),
        styles: [__webpack_require__(506)]
    }),
    __metadata("design:paramtypes", [])
], PropertyPickerComponent);

var _a;
//# sourceMappingURL=property-picker.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 302;


/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(332);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionBarComponent = (function () {
    function ActionBarComponent() {
        this.saveContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ActionBarComponent.prototype.onSaveContent = function ($event) {
        this.saveContent.emit();
    };
    return ActionBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ActionBarComponent.prototype, "saveContent", void 0);
ActionBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-action-bar',
        template: __webpack_require__(588),
        styles: [__webpack_require__(490)]
    }),
    __metadata("design:paramtypes", [])
], ActionBarComponent);

var _a;
//# sourceMappingURL=action-bar.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__information_browser_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid_grid_grid_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__action_bar_action_bar_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__grid_pivot_grid_pivot_grid_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__grid_gridtabs_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__grid_sorting_bar_sorting_bar_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__grid_sorting_bar_sort_by_modal_item_sort_by_modal_item_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__grid_sorting_bar_sort_by_modal_sort_by_modal_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grid_sorting_bar_criteria_modal_criteria_modal_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__grid_sorting_bar_criteria_modal_item_criteria_modal_item_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__expressions_expressions_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__expressions_expression_expression_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__expressions_expression_list_expression_list_item_expression_list_item_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__expressions_expression_list_expression_list_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__grid_renaming_renamingdialog_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__property_picker_property_picker_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__property_picker_property_picker_node_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__property_picker_property_picker_nav_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_component__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__information_browser_component__["a" /* InformationBrowserComponent */] },
    { path: 'token', component: __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__information_browser_component__["a" /* InformationBrowserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__grid_grid_grid_component__["a" /* GridComponent */],
            __WEBPACK_IMPORTED_MODULE_10__action_bar_action_bar_component__["a" /* ActionBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__grid_pivot_grid_pivot_grid_component__["a" /* PivotGridComponent */],
            __WEBPACK_IMPORTED_MODULE_12__grid_gridtabs_component__["a" /* GridtabsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__grid_sorting_bar_sorting_bar_component__["a" /* SortingBarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__grid_sorting_bar_sort_by_modal_item_sort_by_modal_item_component__["a" /* SortByModalItemComponent */],
            __WEBPACK_IMPORTED_MODULE_15__grid_sorting_bar_sort_by_modal_sort_by_modal_component__["a" /* SortByModalComponent */],
            __WEBPACK_IMPORTED_MODULE_16__grid_sorting_bar_criteria_modal_criteria_modal_component__["a" /* CriteriaModalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__grid_sorting_bar_criteria_modal_item_criteria_modal_item_component__["a" /* CriteriaModalItemComponent */],
            __WEBPACK_IMPORTED_MODULE_23__property_picker_property_picker_component__["a" /* PropertyPickerComponent */],
            __WEBPACK_IMPORTED_MODULE_24__property_picker_property_picker_node_component__["a" /* PropertyPickerNodeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__property_picker_property_picker_nav_component__["a" /* PropertyPickerNavComponent */],
            __WEBPACK_IMPORTED_MODULE_18__expressions_expressions_component__["a" /* ExpressionsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__expressions_expression_expression_component__["a" /* ExpressionComponent */],
            __WEBPACK_IMPORTED_MODULE_20__expressions_expression_list_expression_list_item_expression_list_item_component__["a" /* ExpressionListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_21__expressions_expression_list_expression_list_component__["a" /* ExpressionListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__grid_renaming_renamingdialog_component__["a" /* RenamingDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__grid_renaming_renamingdialog_component__["a" /* RenamingDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["BreadcrumbModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataListModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__information_browser_component__["a" /* InformationBrowserComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expression__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpressionListItemComponent = (function () {
    function ExpressionListItemComponent() {
        this.expression = null;
    }
    ExpressionListItemComponent.prototype.ngOnInit = function () {
    };
    return ExpressionListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__expression__["a" /* Expression */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__expression__["a" /* Expression */]) === "function" && _a || Object)
], ExpressionListItemComponent.prototype, "expression", void 0);
ExpressionListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-expression-list-item',
        template: __webpack_require__(589),
        styles: [__webpack_require__(491)]
    }),
    __metadata("design:paramtypes", [])
], ExpressionListItemComponent);

var _a;
//# sourceMappingURL=expression-list-item.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expression__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expressions_provider__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpressionComponent = (function () {
    function ExpressionComponent(expressionsProvider) {
        this.expressionsProvider = expressionsProvider;
        this.expression = null;
        this.expressionModified = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.name = this.expression == null ? "" : this.expression.name;
        this.description = this.expression == null ? "" : this.expression.description;
        this.expressionText = this.expression == null ? "" : this.expression.expression;
    }
    ExpressionComponent.prototype.ngOnInit = function () {
    };
    ExpressionComponent.prototype.onChanged = function () {
        if (this.expression != null) {
            this.expression.name = this.name;
            this.expression.description = this.description;
            this.expression.expression = this.expressionText;
            this.expressionModified.emit(this.expression);
        }
    };
    ExpressionComponent.prototype.onPropertySelected = function (property) {
        console.log("Selected: " + property.dataIndex);
        this.expression.expression += property.dataIndex;
    };
    return ExpressionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__expression__["a" /* Expression */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__expression__["a" /* Expression */]) === "function" && _a || Object)
], ExpressionComponent.prototype, "expression", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ExpressionComponent.prototype, "expressionModified", void 0);
ExpressionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-expression',
        template: __webpack_require__(591),
        styles: [__webpack_require__(493)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__expressions_provider__["a" /* ExpressionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__expressions_provider__["a" /* ExpressionsProvider */]) === "function" && _c || Object])
], ExpressionComponent);

var _a, _b, _c;
//# sourceMappingURL=expression.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pivot_grid_pivot_grid_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sorting_columns_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_provider__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridtabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GridtabsComponent = (function () {
    function GridtabsComponent() {
        this.showExpressions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gridTabLink = null;
        this.pivotGridTabLink = null;
        this.gridShownListenFunc = null;
        this.pivotGridShownListenFunc = null;
    }
    GridtabsComponent.prototype.ngOnInit = function () {
    };
    GridtabsComponent.prototype.ngAfterViewInit = function () {
        var angularComponent = this;
        if (this.gridTabLink != null) {
            $('#gridTabLink').on('shown.bs.tab', function (event) {
                angularComponent.onGridTabShown();
            });
        }
        if (this.pivotGridTabLink != null) {
            $('#pivotGridTabLink').on('shown.bs.tab', function (event) {
                angularComponent.onPivotGridTabShown();
            });
        }
    };
    GridtabsComponent.prototype.ngOnDestroy = function () {
        if (this.gridShownListenFunc != null) {
            this.gridShownListenFunc();
        }
        if (this.pivotGridShownListenFunc != null) {
            this.pivotGridShownListenFunc();
        }
    };
    GridtabsComponent.prototype.save = function () {
        this.grid.save();
    };
    GridtabsComponent.prototype.reload = function () {
        this.grid.reload(true);
    };
    //@HostListener('#gridTabLink:shown.bs.tab')
    GridtabsComponent.prototype.onGridTabShown = function () {
        if (this.grid != null) {
            this.grid.onGridAnimationDone();
        }
    };
    //@HostListener('#pivotGridTabLink:shown.bs.tab')
    GridtabsComponent.prototype.onPivotGridTabShown = function () {
        if (this.pivotGrid != null) {
            this.pivotGrid.onGridAnimationDone();
        }
    };
    GridtabsComponent.prototype.onShowExpressions = function () {
        this.showExpressions.emit();
    };
    return GridtabsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GridtabsComponent.prototype, "showExpressions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__grid_grid_component__["a" /* GridComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__["a" /* GridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__["a" /* GridComponent */]) === "function" && _b || Object)
], GridtabsComponent.prototype, "grid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__pivot_grid_pivot_grid_component__["a" /* PivotGridComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__pivot_grid_pivot_grid_component__["a" /* PivotGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pivot_grid_pivot_grid_component__["a" /* PivotGridComponent */]) === "function" && _c || Object)
], GridtabsComponent.prototype, "pivotGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gridTabLink'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], GridtabsComponent.prototype, "gridTabLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pivotGridTabLink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], GridtabsComponent.prototype, "pivotGridTabLink", void 0);
GridtabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-gridtabs',
        template: __webpack_require__(594),
        styles: [__webpack_require__(496)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__sorting_columns_provider__["a" /* SortingColumnsProvider */], __WEBPACK_IMPORTED_MODULE_4__data_provider__["a" /* DataProvider */]]
    }),
    __metadata("design:paramtypes", [])
], GridtabsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=gridtabs.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__criteria_provider__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__criteria_modal_item_criteria_modal_item_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Criterion__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriteriaModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriteriaModalComponent = (function () {
    function CriteriaModalComponent(criteriaProvider) {
        var _this = this;
        this.criteriaProvider = criteriaProvider;
        this.criteria = [];
        this.criteriaItems = null;
        this.isValid = false;
        this.criteriaProvider.criteria.forEach(function (item) {
            _this.criteria.push(item.copy());
        });
    }
    CriteriaModalComponent.prototype.ngDoCheck = function () {
        this.isValid = this.checkValid();
    };
    CriteriaModalComponent.prototype.onAddCriterion = function (event) {
        this.criteria.push(new __WEBPACK_IMPORTED_MODULE_3__Criterion__["a" /* Criterion */]('', 'Like', '', ''));
    };
    CriteriaModalComponent.prototype.onApplyCriteria = function () {
        this.criteriaProvider.replaceCriteria(this.criteria);
    };
    CriteriaModalComponent.prototype.onCriteriaRemoved = function (criterion) {
        var index = this.criteria.indexOf(criterion);
        this.criteria.splice(index, 1);
    };
    CriteriaModalComponent.prototype.onClose = function () {
        var _this = this;
        this.criteria = [];
        this.criteriaProvider.criteria.forEach(function (item) {
            _this.criteria.push(item.copy());
        });
    };
    CriteriaModalComponent.prototype.checkValid = function () {
        return this.criteriaItems != null && this.criteriaItems.reduce(function (value, actual) {
            return value && actual.isValid();
        }, true);
    };
    return CriteriaModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_2__criteria_modal_item_criteria_modal_item_component__["a" /* CriteriaModalItemComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], CriteriaModalComponent.prototype, "criteriaItems", void 0);
CriteriaModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-criteria-modal',
        template: __webpack_require__(598),
        styles: [__webpack_require__(499)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__criteria_provider__["a" /* CriteriaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__criteria_provider__["a" /* CriteriaProvider */]) === "function" && _b || Object])
], CriteriaModalComponent);

var _a, _b;
//# sourceMappingURL=criteria-modal.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortButton__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_by_modal_item_sort_by_modal_item_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SortByModalComponent = (function () {
    function SortByModalComponent(sortingColumnsProvider) {
        this.sortingColumnsProvider = sortingColumnsProvider;
        this.sorters = [];
        this.applySortings = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sortByItems = null;
        this.isValid = false;
    }
    SortByModalComponent.prototype.ngDoCheck = function () {
        this.isValid = this.checkValid();
    };
    SortByModalComponent.prototype.onAddSorting = function (event) {
        this.sorters.push(new __WEBPACK_IMPORTED_MODULE_1__SortButton__["a" /* SortButton */]('', 'ASC'));
    };
    SortByModalComponent.prototype.onApplySortings = function () {
        this.sortingColumnsProvider.replaceSorters(this.sorters);
        this.applySortings.emit();
    };
    SortByModalComponent.prototype.onSorterRemoved = function (sorter) {
        var index = this.sorters.indexOf(sorter);
        this.sorters.splice(index, 1);
    };
    SortByModalComponent.prototype.checkValid = function () {
        return this.sortByItems != null && this.sortByItems.reduce(function (value, actual) {
            return value && actual.isValid();
        }, true);
    };
    return SortByModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SortByModalComponent.prototype, "sorters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SortByModalComponent.prototype, "applySortings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3__sort_by_modal_item_sort_by_modal_item_component__["a" /* SortByModalItemComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _b || Object)
], SortByModalComponent.prototype, "sortByItems", void 0);
SortByModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-sort-by-modal',
        template: __webpack_require__(600),
        styles: [__webpack_require__(501)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__["a" /* SortingColumnsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sorting_columns_provider__["a" /* SortingColumnsProvider */]) === "function" && _c || Object])
], SortByModalComponent);

var _a, _b, _c;
//# sourceMappingURL=sort-by-modal.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__criteria_provider__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expressions_expressions_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationBrowserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationBrowserComponent = (function () {
    function InformationBrowserComponent() {
    }
    InformationBrowserComponent.prototype.ngOnInit = function () {
    };
    InformationBrowserComponent.prototype.onDomContentLoaded = function (event) {
        console.log('OnDomReady');
        Ext.manifest = 'modern';
        Ext.env.Ready.fireReady();
    };
    InformationBrowserComponent.prototype.showExpressions = function () {
        this.expressionComponent.show();
    };
    return InformationBrowserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__expressions_expressions_component__["a" /* ExpressionsComponent */]),
    __metadata("design:type", Object)
], InformationBrowserComponent.prototype, "expressionComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:DOMContentLoaded', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InformationBrowserComponent.prototype, "onDomContentLoaded", null);
InformationBrowserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-information-browser',
        template: __webpack_require__(602),
        styles: [__webpack_require__(503)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__criteria_provider__["a" /* CriteriaProvider */]]
    }),
    __metadata("design:paramtypes", [])
], InformationBrowserComponent);

//# sourceMappingURL=information-browser.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_oidc_client__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_oidc_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_oidc_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.mgr = new __WEBPACK_IMPORTED_MODULE_2_oidc_client__["UserManager"](userManagerSettings);
        this.oidcClient = new __WEBPACK_IMPORTED_MODULE_2_oidc_client__["OidcClient"](userManagerSettings);
        this.userLoadededEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loggedIn = false;
        this.mgr.getUser()
            .then(function (user) {
            if (user) {
                _this.loggedIn = true;
                _this.currentUser = user;
                _this.userLoadededEvent.emit(user);
            }
            else {
                _this.loggedIn = false;
            }
        })
            .catch(function (err) {
            _this.loggedIn = false;
        });
    }
    AuthService.prototype.clearState = function () {
        this.mgr.clearStaleState().then(function () {
            console.log("clearStateState success");
        }).catch(function (e) {
            console.log("clearStateState error", e.message);
        });
    };
    AuthService.prototype.getUser = function () {
        var _this = this;
        this.mgr.getUser().then(function (user) {
            console.log("got user", user);
            _this.userLoadededEvent.emit(user);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.removeUser = function () {
        var _this = this;
        this.mgr.removeUser().then(function () {
            _this.userLoadededEvent.emit(null);
            console.log("user removed");
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.startSigninMainWindow = function () {
        this.mgr.signinRedirect({ data: 'some data' }).then(function () {
            console.log("signinRedirect done");
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.endSigninMainWindow = function () {
        this.mgr.signinRedirectCallback().then(function (user) {
            console.log("signed in", user);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.startSignoutMainWindow = function () {
        this.mgr.signoutRedirect().then(function (resp) {
            console.log("signed out", resp);
            setTimeout(5000, function () {
                console.log("testing to see if fired...");
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    AuthService.prototype.endSignoutMainWindow = function () {
        this.mgr.signoutRedirectCallback().then(function (resp) {
            console.log("signed out", resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    /**
     * Example of how you can make auth request using angulars http methods.
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthGet = function (url, options) {
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.get(url, options);
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPut = function (url, data, options) {
        var body = JSON.stringify(data);
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.put(url, body, options);
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthDelete = function (url, options) {
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.delete(url, options);
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPost = function (url, data, options) {
        var body = JSON.stringify(data);
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.post(url, body, options);
    };
    AuthService.prototype._setAuthHeaders = function (user) {
        this.authHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        this.authHeaders.append('Authorization', user.token_type + " " + user.access_token);
        this.authHeaders.append('Content-Type', 'application/json');
    };
    AuthService.prototype._setRequestOptions = function (options) {
        if (options) {
            options.headers.append(this.authHeaders.keys[0], this.authHeaders.values[0]);
        }
        else {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.authHeaders, body: "" });
        }
        return options;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var userManagerSettings = {
    authority: "https://u4ids-sandbox.u4pp.com/identity",
    client_id: "information-browser",
    redirect_uri: "http://ib-dist.azurewebsites.net/token",
    post_logout_redirect_uri: "http://ib-dist.azurewebsites.net",
    response_type: "id_token token",
    scope: "openid",
    acr_values: "tenant:praetorians",
    loadUserInfo: true,
    filterProtocolClaims: true,
    userStore: new __WEBPACK_IMPORTED_MODULE_2_oidc_client__["WebStorageStateStore"]({ store: window.localStorage }),
    silent_redirect_uri: "http://ib-dist.azurewebsites.net"
};
var _a;
// const userManagerSettings: any = {
//       authority: "https://u4ids-sandbox.u4pp.com/identity",      
//       client_id: "information-browser",
//       redirect_uri: "http://localhost:4200/token",
//       post_logout_redirect_uri: "http://localhost:4200/",
//       response_type: "id_token token",
//       scope: "openid",
//       acr_values: "tenant:praetorians",
//       loadUserInfo: true,
//       filterProtocolClaims: true,
//       userStore: new WebStorageStateStore({ store: window.localStorage }),
//       silent_redirect_uri: "http://localhost:4200"
// };
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(http, authService, route, router) {
        this.http = http;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.map(function (fragment) {
            if (fragment !== '' && fragment !== null) {
                _this.saveDataAndRedirectToHome(fragment);
            }
        });
        this.route.fragment.subscribe(function (fragment) {
            if (fragment !== '' && fragment !== null) {
                _this.saveDataAndRedirectToHome(fragment);
            }
        });
    };
    LoginComponent.prototype.saveDataAndRedirectToHome = function (fragment) {
        this.saveData(fragment);
        this.router.navigateByUrl('/', { preserveQueryParams: false });
    };
    LoginComponent.prototype.saveData = function (fragment) {
        var fragmentSplitted = fragment.split('&');
        this.id_token = fragmentSplitted[0].split('=')[1];
        this.access_token = fragmentSplitted[1].split('=')[1];
        this.token_type = fragmentSplitted[2].split('=')[1];
        this.expires_in = fragmentSplitted[3].split('=')[1];
        this.scope = fragmentSplitted[4].split('=')[1];
        this.state = fragmentSplitted[5].split('=')[1];
        this.session_state = fragmentSplitted[6].split('=')[1];
    };
    LoginComponent.prototype.getUserInfo = function () {
        var customHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */]();
        customHeaders.append('Content-Type', 'application/json');
        customHeaders.append('Authorization', 'Bearer ' + this.access_token);
        this.http.get('https://u4ids-sandbox.u4pp.com/identity/connect/userinfo', { headers: customHeaders, withCredentials: false }).subscribe(function (response) {
            console.log(response);
        });
    };
    LoginComponent.prototype.clearState = function () {
        this.authService.clearState();
    };
    LoginComponent.prototype.getUser = function () {
        this.authService.getUser();
    };
    LoginComponent.prototype.removeUser = function () {
        this.authService.removeUser();
    };
    LoginComponent.prototype.startSigninMainWindow = function () {
        this.authService.startSigninMainWindow();
    };
    LoginComponent.prototype.endSigninMainWindow = function () {
        this.authService.endSigninMainWindow();
    };
    LoginComponent.prototype.startSignoutMainWindow = function () {
        this.authService.startSignoutMainWindow();
    };
    LoginComponent.prototype.endSignoutMainWindow = function () {
        this.authService.endSigninMainWindow();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'u4-ib-login',
        template: __webpack_require__(603),
        styles: [__webpack_require__(504)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyPickerNavModel; });
var PropertyPickerNavModel = (function () {
    function PropertyPickerNavModel(fields) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return PropertyPickerNavModel;
}());

//# sourceMappingURL=property-picker-nav-model.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_picker_node_model__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyPickerNodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyPickerNodeComponent = (function () {
    function PropertyPickerNodeComponent() {
        this.navigateObject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.titleMore = 'More...';
        this.titleLess = 'Less...';
    }
    PropertyPickerNodeComponent.prototype.ngOnInit = function () {
        this.maxItemsToShow = this.maxItemsPerGroup = this.calculateMaxItemsToShow();
        this.maxItemsExceeded = this.item.children ? (this.item.children.length > this.maxItemsPerGroup) : false;
        this.toggleTitle = this.titleMore;
        this.moreStatus = true;
    };
    PropertyPickerNodeComponent.prototype.calculateMaxItemsToShow = function () {
        if (this.item.children && (this.item.children.length > this.maxItemsPerGroup)) {
            var maxItems_1 = 0;
            this.item.children.forEach(function (value) {
                if (value.isPropertyCodeChecked || value.isPropertyTextChecked) {
                    maxItems_1++;
                }
            });
            return (maxItems_1 > this.maxItemsPerGroup) ? maxItems_1 : this.maxItemsPerGroup;
        }
        return this.maxItemsPerGroup;
    };
    PropertyPickerNodeComponent.prototype.toggle = function () {
        this.item.expanded = !this.item.expanded;
        this.setMore(true);
    };
    PropertyPickerNodeComponent.prototype.toggleMore = function () {
        this.setMore(!this.moreStatus);
    };
    PropertyPickerNodeComponent.prototype.setMore = function (status) {
        this.moreStatus = status;
        if (this.moreStatus) {
            this.toggleTitle = this.titleMore;
            this.maxItemsToShow = this.maxItemsPerGroup;
        }
        else {
            this.toggleTitle = this.titleLess;
            this.maxItemsToShow = this.item.children.length;
        }
    };
    PropertyPickerNodeComponent.prototype.onNavigate = function () {
        this.emitNavigateObjectEvent(this.item);
    };
    PropertyPickerNodeComponent.prototype.onNavigateObject = function (item) {
        this.emitNavigateObjectEvent(item.property);
    };
    PropertyPickerNodeComponent.prototype.emitNavigateObjectEvent = function (item) {
        this.navigateObject.emit({
            property: item,
            back: false,
            isRoot: false
        });
    };
    return PropertyPickerNodeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__property_picker_node_model__["a" /* PropertyPickerNodeModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__property_picker_node_model__["a" /* PropertyPickerNodeModel */]) === "function" && _a || Object)
], PropertyPickerNodeComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PropertyPickerNodeComponent.prototype, "maxItemsPerGroup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], PropertyPickerNodeComponent.prototype, "navigateObject", void 0);
PropertyPickerNodeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'u4-ib-property-picker-node',
        template: __webpack_require__(605),
        styles: [__webpack_require__(489)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 0, height: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('150ms ease-in')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ opacity: 1 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('150ms ease-in')])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], PropertyPickerNodeComponent);

var _a, _b;
//# sourceMappingURL=property-picker-node.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "ul {\n  margin: 0px;\n  list-style-type: none;\n}\n.item-root {\n  padding: 4px 0px 4px 0px;\n}\n.item-child {\n  padding: 4px 0px 4px 15px;\n}\nli {\n  list-style-type: none;\n  padding-bottom: 3px;\n  font-size: 14px;\n  clear: both;\n}\n.expander {\n  display: inline-block;\n}\n.expander-empty {\n  display: inline-block;\n  padding-right: 10px;\n  clear: both;\n}\n.property-title {\n  display: inline-block;\n  padding-right: 20px;\n  clear: both;\n  cursor: pointer;\n  cursor: hand;\n}\n.more-title {\n  display: inline-block;\n  clear: both;\n  padding-top: 2px;\n  padding-left: 12px;\n  cursor: pointer;\n  cursor: hand;\n  font-weight: bold;\n}\n.actions {\n  float: right;\n  padding-right: 10px;\n}\n.action {\n  width: 55px;\n  display: inline-block;\n  text-align: center;\n}\n.navigation {\n  display: inline-block;\n  padding-top: 2px;\n  vertical-align: top;\n}\n.material-icons {\n  margin: 2px;\n  font-size: 14px;\n  cursor: pointer;\n  cursor: hand;\n  color: #666666;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortButton; });
var SortButton = (function () {
    function SortButton(dataIndex, sortOrder) {
        this.dataIndex = dataIndex;
        this.sortOrder = sortOrder;
    }
    Object.defineProperty(SortButton.prototype, "sortSymbol", {
        get: function () {
            return this.sortOrder == "ASC" ? "⇈" : "⇊";
        },
        enumerable: true,
        configurable: true
    });
    ;
    SortButton.prototype.toggle = function () {
        if (this.sortOrder == "ASC") {
            this.sortOrder = "DESC";
        }
        else {
            this.sortOrder = "ASC";
        }
    };
    SortButton.prototype.copy = function () {
        return new SortButton(this.dataIndex, this.sortOrder);
    };
    return SortButton;
}());

//# sourceMappingURL=SortButton.js.map

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "#main-div {\r\n    max-height: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".material-icons.expression-alert {\r\n  color: red;\r\n  font-size: 20px;\r\n}\r\n\r\n.material-icons.search {\r\n  font-size: 20px;\r\n  color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".description-form-field {\r\n  margin-left: 4%;\r\n}\r\n\r\n.explanation-field {\r\n  margin-left: 4%;\r\n  padding-right: 2px;\r\n}\r\n\r\n.column-title {\r\n  padding-left: 2px;\r\n  font-weight: bold;\r\n}\r\n\r\n.column-list-title {\r\n  width: 40%;\r\n}\r\n\r\n.operators-list-title {\r\n  width: 11%;\r\n}\r\n\r\n.functions-list-title {\r\n  width: 14%;\r\n}\r\n\r\n.macros-list-title {\r\n  width: 25%;\r\n}\r\n\r\n.column-list {\r\n  width: 40%;\r\n  display: inline-block;\r\n}\r\n\r\n.operators-list {\r\n  width: 11%;\r\n}\r\n\r\n.functions-list {\r\n  width: 14%;\r\n}\r\n\r\n.macros-list {\r\n  width: 25%;\r\n}\r\n\r\n.list-bordered {\r\n  border: solid 1px darkgray;\r\n  height: 350px;\r\n}\r\n\r\n.list-tiny-margin {\r\n  margin-left: 1%;\r\n}\r\n\r\n.list-margin {\r\n  margin-left: 3%;\r\n}\r\n\r\n.column-list-item {\r\n  color: grey;\r\n  padding-left: 4px;\r\n  padding-top: 4px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.aling-right {\r\n  alignment: left;\r\n}\r\n\r\n.bottom-form {\r\n  margin-top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".expression-list-item {\r\n  display: block;\r\n}\r\n\r\n.expressions-container {\r\n  width: 900px;\r\n  height: 701px;\r\n  child-align: top;\r\n}\r\n\r\n.expressions-setup-header {\r\n  height: 700px;\r\n  max-width: 682px;\r\n}\r\n\r\n.expressions-setup-header-card-block {\r\n  padding: 0;\r\n}\r\n\r\n.expressions-list-header {\r\n  height: 700px;\r\n  max-width: 210px;\r\n}\r\n\r\n.expressions-setup-block {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".ib-panel-grid-tabs {\r\n  width: 100%;\r\n  height: calc(100% - 30px);\r\n}\r\n\r\n#loading-img {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n#loading-img:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n}\r\n\r\n#loading-img:not(:required) {\r\n    /* hide \"loading...\" text */\r\n    font: 0/0 a;\r\n    color: transparent;\r\n    text-shadow: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\n#loading-img:not(:required):after {\r\n    content: '';\r\n    display: block;\r\n    font-size: 10px;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-top: -0.5em;\r\n    -webkit-animation: spinner 1500ms infinite linear;\r\n    animation: spinner 1500ms infinite linear;\r\n    border-radius: 0.5em;\r\n    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes spinner {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes spinner {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".ib-content {\r\n  height: calc(100% - 30px);\r\n  width: 100%;\r\n}\r\n\r\n.ib-content-pivot {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.ib-fullWidth {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".ib-panel-grid-tabs {\r\n  width: 100%;\r\n  height: calc(100% - 30px);\r\n  overflow-y: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".criteria-item {\r\n  margin-left: 10px\r\n}\r\n\r\n.delete-item-button {\r\n  margin-left: 10px\r\n}\r\n\r\n.criteria-value-tofrom {\r\n  max-width: 95px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".add-criteria-button{\r\n   margin-top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sorting_bar_SortButton__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_column__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortingColumnsProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SortingColumnsProvider = (function () {
    function SortingColumnsProvider() {
        this.sortButtons = [
            new __WEBPACK_IMPORTED_MODULE_1__sorting_bar_SortButton__["a" /* SortButton */]("salary", "ASC")
        ];
    }
    Object.defineProperty(SortingColumnsProvider.prototype, "properties", {
        get: function () {
            return [
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Id', 'employeeNo'),
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Name', 'name'),
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Date of birth', 'dob'),
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Join date', 'joinDate'),
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Notice period', 'noticePeriod'),
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Email address', 'email'),
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Rating', 'rating'),
                new __WEBPACK_IMPORTED_MODULE_2__grid_column__["a" /* GridColumn */]('Salary', 'salary')
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortingColumnsProvider.prototype, "sorters", {
        get: function () {
            return this.sortButtons;
        },
        enumerable: true,
        configurable: true
    });
    SortingColumnsProvider.prototype.setSorter = function (sorter) {
        this.sortButtons = [sorter];
    };
    SortingColumnsProvider.prototype.replaceSorters = function (sorters) {
        this.sortButtons = sorters;
    };
    return SortingColumnsProvider;
}());
SortingColumnsProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SortingColumnsProvider);

//# sourceMappingURL=sorting-columns.provider.js.map

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".sort-by-item {\r\n  margin-left: 10px\r\n}\r\n\r\n.delete-item-button {\r\n  margin-left: 20px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".add-sort-by-button{\r\n  margin-top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".div-sortbar-main {\r\n  min-height: 30px;\r\n  max-height: 30px;\r\n}\r\n\r\n.sort-by-button {\r\n  margin-right: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".card {\r\n    height: 100vh;\r\n    padding:0px;\r\n    margin: 0px;\r\n}\r\n\r\n.card-header {\r\n    min-height: 40px;\r\n    padding: 10px;\r\n    background-color:#e7e9e9;\r\n}\r\n\r\n.card-header #title {\r\n    font-size: 16px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.card-header #logo {\r\n    height: 15px;\r\n}\r\n\r\n.card-block {\r\n    height:90vh;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.card-footer {\r\n    min-height: 50px;\r\n    margin: 0px;\r\n    padding: 10px;\r\n    background-color:#e7e9e9;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".navigation {\r\n    font-size:11px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main {\r\n    border: 1px solid #cccccc;\r\n}\r\n\r\n.header {\r\n    padding: 5px;\r\n    background-color: #dddddd;\r\n    font-size: 14px;\r\n}\r\n\r\n.nav {\r\n    background-color:#9dd8f5;\r\n}\r\n\r\n.actions {\r\n\tfloat: right;\r\n    padding-right: 45px;    \r\n}\r\n\r\n.action {\r\n    display:inline-block;    \r\n    text-align: center;\r\n    width: 50px;\r\n}\r\n\r\n.nodes {  \r\n    overflow-y:scroll;\r\n    padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-div\">\r\n    <button id=\"save-content\" (click)=\"onSaveContent($event)\" class=\"btn btn-secondary btn-sm\">Save Short Content</button>\r\n</div>\r\n"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{expression?.name}} item!\r\n</p>\r\n"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group list-group-flush\">\r\n  <li *ngFor=\"let expression of expressions\" class=\"list-group-item justify-content-between\">\r\n    <span>{{expression.name}}</span>\r\n    <div class=\"float-right\">\r\n      <i class=\"material-icons expression-alert\" (click)=\"selectedExpression(expression)\" style=\"cursor:pointer;\" *ngIf=\"!expression.isValid\">error_outline</i>\r\n      <i class=\"material-icons search\" (click)=\"selectedExpression(expression)\" style=\"cursor:pointer;\" *ngIf=\"expression.isValid\">search</i>\r\n    </div>\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"clearfix\">\r\n    <div class=\"form-group float-left\" style=\"width: 48%\">\r\n      <label for=\"nameField\">Name</label>\r\n      <input type=\"text\" class=\"form-control form-control-sm\" id=\"nameField\" name=\"nameField\" placeholder=\"Name\" required [disabled]=\"expression == null\" [(ngModel)]=\"name\" (change)=\"onChanged()\">\r\n    </div>\r\n    <div class=\"form-group float-left description-form-field\" style=\"width: 48%\">\r\n      <label for=\"descriptionField\">Description</label>\r\n      <input type=\"text\" class=\"form-control form-control-sm\" id=\"descriptionField\" name=\"descriptionField\" placeholder=\"Description\" required [disabled]=\"expression == null\" [(ngModel)]=\"description\" (change)=\"onChanged()\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"expressionField\">Expression</label>\r\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"expressionField\" name=\"expressionField\" placeholder=\"Expression\" required [disabled]=\"expression == null\" [(ngModel)]=\"expressionText\" (change)=\"onChanged()\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"column-title list-tiny-margin column-list-title\">Columns</span>\r\n    <span class=\"column-title list-margin operators-list-title\">Operators</span>\r\n    <span class=\"column-title list-margin functions-list-title\">Functions</span>\r\n    <span class=\"column-title list-margin macros-list-title\">Macros</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"list-bordered list-tiny-margin column-list\">\r\n      <div *ngFor=\"let property of expressionsProvider.columns\" class=\"column-list-item clearfix\">\r\n        <div class=\"float-left\" style=\"width: 50%\">\r\n          <span>{{property.name}}</span>\r\n        </div>\r\n        <div class=\"float-left\">\r\n          <span>{{property.dataIndex}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"list-bordered list-margin operators-list\">\r\n      <div *ngFor=\"let operator of expressionsProvider.operators\" class=\"column-list-item clearfix\">\r\n        <div class=\"float-left\">\r\n          {{operator}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"list-bordered list-margin functions-list\">\r\n      <div *ngFor=\"let func of expressionsProvider.functions\" class=\"column-list-item clearfix\">\r\n        <div class=\"float-left\">\r\n          {{func}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"list-bordered list-margin macros-list\">\r\n      <div *ngFor=\"let macro of expressionsProvider.macros\" class=\"column-list-item clearfix\">\r\n        <div class=\"float-left\">\r\n          {{macro}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix bottom-form\">\r\n    <div class=\"float-left\" style=\"width: 40%\">\r\n      <div class=\"form-group\">\r\n        <label for=\"dataTypeField\">Datatype</label>\r\n        <select class=\"form-control form-control-sm\" id=\"dataTypeField\" [disabled]=\"expression == null\">\r\n          <option>Integer</option>\r\n          <option>String</option>\r\n          <option>Double</option>\r\n          <option>Date</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input\" [disabled]=\"expression == null\">\r\n          Running total\r\n        </label>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"hasSumField\" class=\"col-4 col-form-label\">Has Sum</label>\r\n        <div class=\"col-8\">\r\n          <select class=\"form-control form-control-sm\" id=\"hasSumField\" [disabled]=\"expression == null\">\r\n            <option>None</option>\r\n            <option>Vertical</option>\r\n            <option>Horizontal</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"float-left explanation-field\" style=\"width: 56%\">\r\n      <label for=\"explanationField\">Explanation</label>\r\n      <textarea class=\"form-control form-control-sm\" id=\"explanationField\" rows=\"5\" placeholder=\"Explanation\" disabled>Oh man! Do you really think I'm gonna write all this?</textarea>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<p-dialog [(visible)]=\"isVisible\" width=\"870\" height=\"800\" [modal]=\"true\">\r\n  <p-header>\r\n    Expressions\r\n    <img src=\"assets/help_icon.svg\" width=\"14\" height=\"14\" (click)=\"showMainHelp()\">\r\n  </p-header>\r\n  <div class=\"card-group\">\r\n    <div class=\"card expressions-list-header\">\r\n      <div class=\"card-header\">\r\n        Expression list\r\n      </div>\r\n      <div class=\"card-block expressions-setup-header-card-block\">\r\n        <u4-ib-expression-list #expressionList [expressions]=\"expressions\" (expressionClicked)=\"selectedExpression($event)\"></u4-ib-expression-list>\r\n      </div>\r\n      <div>\r\n        <button id=\"new-expression\" (click)=\"onNewExpression()\" class=\"btn btn-primary btn-sm\">New</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card expressions-setup-header\">\r\n      <div class=\"card-header\">\r\n        Expression Setup\r\n      </div>\r\n      <div class=\"card-block expressions-setup-block\">\r\n        <u4-ib-expression [expression]=\"activeExpression\" (expressionModified)=\"onExpressionModified($event)\"></u4-ib-expression>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <button pButton type=\"button\" label=\"Ok\" (click)=\"onOkClicked()\"></button>\r\n    <button pButton type=\"button\" label=\"Cancel\" class=\"ui-button-secondary\" (click)=\"onCancelClicked()\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div #gridPanelBody class=\"ib-panel-grid-tabs\"></div>\r\n<div id=\"loading-img\" *ngIf=\"loading\">Loading&#8230;></div>\r\n"

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n  <li class=\"nav-item\">\r\n    <a #gridTabLink id=\"gridTabLink\" class=\"nav-link active\" data-toggle=\"tab\" href=\"#gridTab\" role=\"tab\">Grid</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a #pivotGridTabLink id=\"pivotGridTabLink\" class=\"nav-link\" data-toggle=\"tab\" href=\"#pivotGridTab\" role=\"tab\">Pivot Grid</a>\r\n  </li>\r\n</ul>\r\n\r\n<div class=\"tab-content ib-content\">\r\n  <div class=\"tab-pane active ib-content\" id=\"gridTab\" role=\"tabpanel\">\r\n    <u4-ib-sorting-bar #sortBar (toggledButton)=\"grid.sortToggled($event)\" (applySortings)=\"grid.updateSortings()\"\r\n                       (reloadGrid)=\"grid.reload(true)\" (expressionsButtonClicked)=\"onShowExpressions()\"></u4-ib-sorting-bar>\r\n    <u4-ib-grid #grid [sortBar]=\"sortBar\" (sortChanged)=\"sortBar.onSortChanged($event)\"></u4-ib-grid>\r\n  </div>\r\n  <div class=\"tab-pane ib-content-pivot\" id=\"pivotGridTab\" role=\"tabpanel\">\r\n    <u4-ib-pivot-grid #pivotGrid></u4-ib-pivot-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<div #pivotGridContainer class=\"ib-panel-grid-tabs\"></div>\r\n\r\n"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Renaming</h1>\r\n<div md-dialog-content>Please enter the new name for the column:<br>\r\n  <md-input-container>\r\n      <input mdInput placeholder=\"New name\" #newNameInput>\r\n  </md-input-container>\r\n</div>\r\n<div md-dialog-actions>\r\n  <button md-button (click)=\"dialogRef.close(newNameInput.value)\">Rename</button>\r\n  <button md-button (click)=\"dialogRef.close()\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\">\r\n  <div class=\"form-group\" [ngClass]=\"{'has-danger': !isPropertyNameValid}\">\r\n    <label class=\"mr-sm-2\" for=\"propertyNameField\">Property</label>\r\n    <select #propertyNameField class=\"form-control form-control-sm custom-select\" id=\"propertyNameField\" [(ngModel)]=\"criterion.propertyName\" required>\r\n      <option *ngFor=\"let column of criteriaProvider.properties\" [value]=\"column.name\">{{column.name}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group criteria-item\" [ngClass]=\"{'has-danger': !isOperatorValid}\">\r\n    <label class=\"mr-sm-2\" for=\"operatorField\">Operator</label>\r\n    <select #operatorField class=\"form-control form-control-sm custom-select\" id=\"operatorField\" [(ngModel)]=\"criterion.operator\" required>\r\n      <option [value]=\"'Like'\">Like</option>\r\n      <option [value]=\"'Greater Than'\">Greater Than</option>\r\n      <option [value]=\"'Less Than'\">Less Than</option>\r\n      <option [value]=\"'Between'\">Between</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group criteria-item\" [ngClass]=\"{'has-danger': !isValueFromValid}\">\r\n    <label for=\"valueFromField\">Value From</label>\r\n    <input #valueFromField type=\"text\" class=\"form-control form-control-sm criteria-value-tofrom\" id=\"valueFromField\" placeholder=\"Value From\" [ngModel]=\"criterion.valueFrom\" required>\r\n  </div>\r\n\r\n  <div class=\"form-group criteria-item\" [ngClass]=\"{'has-danger': !isValueToValid}\">\r\n    <label for=\"valueToField\">Value To</label>\r\n    <input #valueToField type=\"text\" class=\"form-control form-control-sm criteria-value-tofrom\" id=\"valueToField\" placeholder=\"Value To\" [ngModel]=\"criterion.valueTo\">\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-secondary btn-sm delete-item-button\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\" (click)=\"onCriterionRemoveClicked(criterion)\">\r\n    <img src=\"assets/delete_icon.svg\" height=\"20\" width=\"20\">\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade search-criteria-modal\" data-backdrop='static' tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Search Criteria</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"onClose()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <u4-ib-criteria-modal-item  *ngFor=\"let criterion of criteria\" [criterion]=\"criterion\" (criterionRemoved)=\"onCriteriaRemoved($event)\"></u4-ib-criteria-modal-item>\r\n        <button type=\"button\" class=\"btn btn-secondary btn-sm add-criteria-button\" [disabled]=\"criteria.length == criteriaProvider.properties.length\"\r\n                data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add criterion\" (click)=\"onAddCriterion($event)\"><img src=\"assets/add_icon.svg\"></button>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!isValid\" (click)=\"onApplyCriteria()\" data-dismiss=\"modal\">Apply</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onClose()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\">\r\n  <div class=\"form-group\" [ngClass]=\"{'has-danger': !isPropertyNameValid}\">\r\n    <label class=\"mr-sm-2\" for=\"propertyNameField\">Property</label>\r\n    <select #propertyNameField class=\"form-control form-control-sm custom-select\" id=\"propertyNameField\" [(ngModel)]=\"sorter.dataIndex\" required>\r\n      <option *ngFor=\"let column of sortingColumnsProvider.properties\" [value]=\"column.dataIndex\">{{column.name}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group sort-by-item\"  [ngClass]=\"{'has-danger': !isSortOrderValid}\">\r\n    <label class=\"mr-sm-2\" for=\"orderField\">Sorting order</label>\r\n    <select #sortOrderField class=\"form-control form-control-sm custom-select\" id=\"orderField\" [(ngModel)]=\"sorter.sortOrder\" required>\r\n      <option [value]=\"'ASC'\">Ascending</option>\r\n      <option [value]=\"'DESC'\">Descending</option>\r\n    </select>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-secondary btn-sm delete-item-button\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\" (click)=\"onSorterRemoveClicked(sorter)\">\r\n    <img src=\"assets/delete_icon.svg\" height=\"20\" width=\"20\">\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade sort-by-modal\" tabindex=\"-1\" data-backdrop='static' role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Sort By</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <u4-ib-sort-by-modal-item #sortByItem *ngFor=\"let sortButton of sorters\" [sorter]=\"sortButton\" (sorterRemoved)=\"onSorterRemoved($event)\"></u4-ib-sort-by-modal-item>\r\n        <button class=\"btn btn-secondary btn-sm add-sort-by-button\" [disabled]=\"sorters.length == sortingColumnsProvider.properties.length\" (click)=\"onAddSorting($event)\">Add sorting</button>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!isValid\" (click)=\"onApplySortings()\" data-dismiss=\"modal\">Apply</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<p-overlayPanel #propertyPickerPanel [dismissable]=\"true\" [showCloseIcon]=\"false\">\r\n    <br>\r\n    <u4-ib-property-picker #propertyPicker [rootObject]=\"'Project'\" [data]=\"data\" [maxItemsPerGroup]= \"5\" [width]=\"400\" [height]=\"300\"></u4-ib-property-picker>\r\n    <br>\r\n    <button type=\"button\" pButton icon=\"fa-check\" (click)=\"propertyPickerPanel.hide($event)\" label=\"Apply\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"propertyPickerPanel.hide($event)\" label=\"Cancel\"></button>\r\n</p-overlayPanel>\r\n\r\n<div #sortingBarDropElement class=\"container-fluid div-sortbar-main clearfix\">\r\n  <div class=\"btn-toolbar float-left\" role=\"toolbar\">\r\n    <button type=\"button\" class=\"btn btn-info btn-sm sort-by-button\" data-toggle=\"modal\" data-target=\".sort-by-modal\">Sort by</button>\r\n    <div class=\"btn-group\" role=\"group\">\r\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" *ngFor=\"let sortButton of sortingColumnsProvider.sorters\" (click)=\"onClick(sortButton)\">{{getSortButtonName(sortButton.dataIndex)}} <b>{{sortButton.sortSymbol}}</b></button>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-sm float-right\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n          title=\"Reload\" (click)=\"reload()\"><img src=\"assets/refresh.svg\" height=\"20\" width=\"20\"></button>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-sm float-right\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n          title=\"Expressions\" (click)=\"showExpressions()\"><img src=\"assets/expressions_icon.svg\" height=\"20\" width=\"20\"></button>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-sm float-right\" data-placement=\"bottom\" title=\"Criteria\"\r\n          [ngClass]=\"{'btn-secondary': criteriaProvider.criteria.length == 0, 'btn-success': criteriaProvider.criteria.length != 0 }\"\r\n          data-toggle=\"modal\"  data-target=\".search-criteria-modal\"><img src=\"assets/filter_icon.svg\" height=\"20\" width=\"20\"></button>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-sm float-right\"  data-toggle=\"tooltip\"\r\n          data-placement=\"bottom\" title=\"Properties\" (click)=\"propertyPickerPanel.show($event)\"><img src=\"assets/propertypickericon.svg\" height=\"20\" width=\"20\"></button>\r\n</div>\r\n<u4-ib-sort-by-modal [sorters]=\"sorters\" (applySortings)=\"onApplySortings()\"></u4-ib-sort-by-modal>\r\n<u4-ib-criteria-modal (applyCriteria)=\"onApplyCriteria()\"></u4-ib-criteria-modal>\r\n"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <u4-ib-login></u4-ib-login>\r\n\r\n    <div class=\"card-header\">\r\n        <h1 id=\"title\"><img id=\"logo\" src=\"assets/unit4-information-browser.svg\" alt=\"Information Browser\"></h1>\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <u4-ib-gridtabs #gridTabs (showExpressions)=\"showExpressions()\"></u4-ib-gridtabs>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <u4-ib-action-bar (saveContent)=\"gridTabs.save()\"></u4-ib-action-bar>\r\n    </div>\r\n</div>\r\n<u4-ib-expressions></u4-ib-expressions>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-success\" (click)=\"startSigninMainWindow()\">Log in</button>\n<button class=\"btn btn-danger\" (click)=\"startSignoutMainWindow()\">Log out</button>\n\n<button class=\"btn btn-primary\" (click)=\"getUserInfo()\">Get user info</button>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n    <div class=\"breadcrumb\"><p-breadcrumb [model]=\"items\" ></p-breadcrumb></div>\r\n</div>"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<li [@flyInOut]=\"'in'\">\r\n\r\n  <!-- Item row -->\r\n  <div class=\"node\" *ngIf=\"!item.root\">\r\n    <div class=\"expander\" *ngIf=\"item.children; else blankspace\">\r\n      <a href=\"#\" class =\"iconButton\" (click)=\"toggle()\">\r\n        <span class=\"fa fa-chevron-up\" *ngIf=\"item.expanded\"></span>\r\n        <span class=\"fa fa-chevron-down\" *ngIf=\"!item.expanded\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <ng-template  #blankspace>\r\n      <div class=\"expander-empty\"></div>\r\n    </ng-template>\r\n\r\n    <div  class=\"property-title\" (click)=\"toggle()\">{{item.text}}</div>\r\n\r\n    <div class=\"actions\" *ngIf=\"!item.children\">\r\n      <div class=\"action\"><p-checkbox [(ngModel)]=\"item.isPropertyCodeChecked\" binary=\"true\" [style.visibility]=\"item.showCode ? 'visible' : 'hidden'\" ></p-checkbox></div>\r\n      <div class=\"action\"><p-checkbox class=\"action\" [(ngModel)]=\"item.isPropertyTextChecked\" binary=\"true\" [style.visibility]=\"item.showDescription ? 'visible' : 'hidden'\" ></p-checkbox></div>\r\n      <div class=\"navigation\"><a href=\"#\" [style.visibility]=\"item.isNavigable ? 'visible' : 'hidden'\" (click)=\"onNavigate()\"><span class=\"fa fa-chevron-right\"></span></a></div>\r\n    </div>\r\n  </div>\r\n  <!-- item row -->\r\n\r\n  <!-- Children -->\r\n  <ul *ngIf=\"item.expanded && item.children\" [attr.class]=\"item.root ? 'item-root' : 'item-child'\">\r\n      <u4-ib-property-picker-node  *ngFor=\"let node of item.children | slice:0:maxItemsToShow\" [item]=\"node\" [maxItemsPerGroup]=\"maxItemsToShow\" (navigateObject)=\"onNavigateObject($event);\"></u4-ib-property-picker-node>\r\n      <div class=\"more-title\" *ngIf=\"maxItemsExceeded\" (click)=\"toggleMore()\">{{toggleTitle}}</div>\r\n  </ul>\r\n  <!-- Children -->\r\n\r\n</li>\r\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" [style.width.px]=\"width\">\r\n  <div class=\"nav\" >\r\n      <u4-ib-property-picker-nav #propertyPickerNav [hidden]=\"!showNavigation\" [rootObject]=\"rootObject\" (navigateObject)=\"onNavigateObject($event);\"></u4-ib-property-picker-nav>\r\n  </div>\r\n  <div class=\"header\">\r\n    {{currentObjectTitle}}\r\n    <div class=\"actions\">\r\n      <div class=\"action\">Code</div>\r\n      <div class=\"action\">Text</div>\r\n      <div class=\"space\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"nodes\" [style.height.px]=\"height\">\r\n    <u4-ib-property-picker-node *ngFor=\"let item of data\" [maxItemsPerGroup]=\"maxItemsPerGroup\" [item]=\"item\" (navigateObject)=\"onNavigateObject($event);\"></u4-ib-property-picker-node>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriteriaProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CriteriaProvider = (function () {
    function CriteriaProvider() {
        this.criteriaList = [];
    }
    Object.defineProperty(CriteriaProvider.prototype, "properties", {
        get: function () {
            return [
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Id', 'employeeNo'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Name', 'name'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Date of birth', 'dob'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Join date', 'joinDate'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Notice period', 'noticePeriod'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Email address', 'email'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Rating', 'rating'),
                new __WEBPACK_IMPORTED_MODULE_1__grid_grid_column__["a" /* GridColumn */]('Salary', 'salary')
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriteriaProvider.prototype, "criteria", {
        get: function () {
            return this.criteriaList;
        },
        enumerable: true,
        configurable: true
    });
    CriteriaProvider.prototype.setCriterion = function (criterion) {
        this.criteriaList = [criterion];
    };
    CriteriaProvider.prototype.replaceCriteria = function (criteria) {
        this.criteriaList = criteria;
    };
    return CriteriaProvider;
}());
CriteriaProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CriteriaProvider);

//# sourceMappingURL=criteria.provider.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expression; });
var Expression = (function () {
    function Expression(name, description, expression) {
        this.name = name;
        this.description = description;
        this.expression = expression;
        this.runningTotal = false;
    }
    Object.defineProperty(Expression.prototype, "isValid", {
        get: function () {
            return this.isValidName() && this.isValidDescription() && this.isValidExpression();
        },
        enumerable: true,
        configurable: true
    });
    Expression.prototype.copy = function () {
        var copy = new Expression(this.name, this.description, this.expression);
        copy.runningTotal = this.runningTotal;
        return copy;
    };
    Expression.prototype.isValidName = function () {
        return this.name != null && this.name.trim().length > 0;
    };
    Expression.prototype.isValidDescription = function () {
        return this.description != null && this.description.trim().length > 0;
    };
    Expression.prototype.isValidExpression = function () {
        return this.expression != null && this.expression.trim().length > 0;
    };
    return Expression;
}());

//# sourceMappingURL=expression.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        this.url = 'http://informationbrowserserver.azurewebsites.net/query/results';
    }
    DataProvider.prototype.getData = function (maxData) {
        if (maxData === void 0) { maxData = 100; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('maxData', maxData.toString());
        return this.http.get(this.url, {
            search: params
        }).map(function (data) { return data.json().values; });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataProvider);

var _a;
//# sourceMappingURL=data-provider.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridColumn; });
var GridColumn = (function () {
    function GridColumn(name, dataIndex) {
        this.name = name;
        this.dataIndex = dataIndex;
    }
    GridColumn.prototype.copy = function () {
        return new GridColumn(this.name, this.dataIndex);
    };
    return GridColumn;
}());

//# sourceMappingURL=grid-column.js.map

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(303);


/***/ })

},[840]);
//# sourceMappingURL=main.bundle.js.map