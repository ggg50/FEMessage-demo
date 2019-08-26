;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    390: function(e, t, o) {
      'use strict'
      o.r(t)
      var l = {
          data: function() {
            return {
              url:
                'https://easy-mock.com/mock/5b586c9dfce1393a862d034d/example/img?a=slotheader',
              columns: [
                {type: 'selection'},
                {prop: 'code', label: '品牌编号'},
                {prop: 'name', label: '品牌名称'},
                {prop: 'alias', label: '品牌别名'},
                {
                  prop: 'status',
                  label: '状态',
                  formatter: function(e) {
                    return 'normal' === e.status ? '启用' : '禁用'
                  }
                }
              ]
            }
          }
        },
        n = o(9),
        component = Object(n.a)(
          l,
          function() {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t
            return o(
              'el-data-table',
              e._b(
                {
                  scopedSlots: e._u([
                    {
                      key: 'header',
                      fn: function(t) {
                        var l = t.selected
                        return [
                          o('el-tag', [e._v('slot=header' + e._s(l.length))]),
                          e._v(' '),
                          o(
                            'el-dropdown',
                            [
                              o(
                                'el-button',
                                {attrs: {type: 'primary', size: 'small'}},
                                [
                                  e._v('\n        更多菜单'),
                                  o('i', {
                                    staticClass:
                                      'el-icon-arrow-down el-icon--right'
                                  })
                                ]
                              ),
                              e._v(' '),
                              o(
                                'el-dropdown-menu',
                                {attrs: {slot: 'dropdown'}, slot: 'dropdown'},
                                [
                                  o('el-dropdown-item', [e._v('黄金糕')]),
                                  e._v(' '),
                                  o('el-dropdown-item', [e._v('狮子头')]),
                                  e._v(' '),
                                  o('el-dropdown-item', [e._v('螺蛳粉')]),
                                  e._v(' '),
                                  o('el-dropdown-item', [e._v('双皮奶')]),
                                  e._v(' '),
                                  o('el-dropdown-item', [e._v('蚵仔煎')])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                'el-data-table',
                e.$data,
                !1
              )
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = component.exports
    }
  }
])
