;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    391: function(t, e, l) {
      'use strict'
      l.r(e)
      l(50)
      var n = {
          data: function() {
            return {
              url:
                'https://easy-mock.com/mock/5b586c9dfce1393a862d034d/example/img?a=slot-form',
              columns: [
                {prop: 'code', label: '品牌编号'},
                {prop: 'name', label: '品牌名称'},
                {prop: 'alias', label: '品牌别名'}
              ],
              hasOperation: !1,
              form: [
                {
                  type: 'input',
                  id: 'name',
                  label: '品牌名称',
                  rules: [
                    {
                      required: !0,
                      message: '请输入品牌名称',
                      trigger: 'blur',
                      transform: function(t) {
                        return t && t.trim()
                      }
                    }
                  ],
                  el: {placeholder: '请输入品牌名称'}
                }
              ],
              dialogVisible: !1,
              details: {id: '', name: '', alias: ''}
            }
          },
          methods: {
            showDialog: function(t) {
              var e = t.row
              this.$set(this.details, 'id', e.id),
                this.$set(this.details, 'name', e.name),
                this.$set(this.details, 'alias', e.alias),
                (this.dialogVisible = !0)
            }
          }
        },
        o = l(9),
        component = Object(o.a)(
          n,
          function() {
            var t = this,
              e = t.$createElement,
              l = t._self._c || e
            return l(
              'div',
              [
                l(
                  'el-data-table',
                  t._b({}, 'el-data-table', t.$data, !1),
                  [
                    [
                      l('el-table-column', {
                        attrs: {label: '操作', type: 'text'},
                        scopedSlots: t._u([
                          {
                            key: 'default',
                            fn: function(e) {
                              return [
                                l(
                                  'el-button',
                                  {
                                    attrs: {type: 'text', size: 'small'},
                                    on: {
                                      click: function(l) {
                                        return t.showDialog(e)
                                      }
                                    }
                                  },
                                  [t._v('查看')]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ]
                  ],
                  2
                ),
                t._v(' '),
                l(
                  'el-dialog',
                  {
                    staticClass: 'detailsDialog',
                    attrs: {
                      title: '查看',
                      visible: t.dialogVisible,
                      width: '30%',
                      center: ''
                    },
                    on: {
                      'update:visible': function(e) {
                        t.dialogVisible = e
                      }
                    }
                  },
                  [
                    l(
                      'div',
                      {
                        staticStyle: {
                          'font-size': '15px',
                          'line-height': '30px'
                        }
                      },
                      [
                        l('div', [
                          t._v('id: '),
                          l('span', [t._v(t._s(t.details.id))])
                        ]),
                        t._v(' '),
                        l('div', [
                          t._v('name: '),
                          l('span', [t._v(t._s(t.details.name))])
                        ]),
                        t._v(' '),
                        l('div', [
                          t._v('alias:'),
                          l('span', [t._v(t._s(t.details.alias))])
                        ])
                      ]
                    ),
                    t._v(' '),
                    l(
                      'div',
                      {
                        staticClass: 'tips',
                        staticStyle: {'font-size': '12px', color: 'red'}
                      },
                      [t._v('(这个是自定义弹窗)')]
                    )
                  ]
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = component.exports
    }
  }
])
