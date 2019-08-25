<template>
  <el-data-table v-bind="$data" ref="table" />
</template>
<script>
export default {
  data() {
    return {
      url: 'http://127.0.0.1:5000/mock/14/fem-test',
      // url: "https://easy-mock.com/mock/5b586c9dfce1393a862d034d/example/img?a=slotheader",

      columns: [
        {type: 'selection'},
        {prop: 'name', label: '组件名称'},
        {prop: 'type', label: '分类'},
        {prop: 'version', label: '版本'},
        {prop: 'language', label: '开发语言'},
        {prop: 'lastUpdateTime', label: '最后更新时间'},
        {
          prop: 'status',
          label: '状态',
          formatter: row => (row.status === 'normal' ? '上架' : '下架')
        }
      ],

      searchForm: [
        {
          type: 'input',
          id: 'name',
          label: '组件名称',
          collapsible: false,
          el: {placeholder: '请输入用户名'}
        },
        {
          type: 'select',
          id: 'type',
          label: '分类',
          el: {
            placeholder: '请选择'
          },
          options: [
            {value: '前端组件'},
            {value: '分布式工具'},
            {value: '引用服务'},
            {value: '数据存储'},
            {value: '测试子组件'}
          ]
        },
        {
          type: 'select',
          id: 'status',
          label: '状态',
          options: [
            {
              value: '上架'
            },
            {
              value: '下架'
            }
          ]
        }
      ],

      form: [
        {
          type: 'input',
          id: 'name',
          label: '组件名称',
          rules: [
            {
              required: true,
              message: '请输入品牌名称',
              trigger: 'blur',
              transform: v => v && v.trim()
            }
          ],
          el: {placeholder: '请输入品牌名称'}
        },
        {
          type: 'input',
          id: 'version',
          label: '版本',
          rules: [
            {
              required: true,
              message: '请输入版本',
              trigger: 'blur',
              transform: v => v && v.trim()
            }
          ],
          el: {placeholder: '请输入版本'}
        },
        {
          type: 'select',
          id: 'type',
          label: '分类',
          options: [
            {value: '前端组件'},
            {value: '分布式工具'},
            {value: '引用服务'},
            {value: '数据存储'},
            {value: '测试子组件'}
          ]
        },
        {
          type: 'select',
          id: 'language',
          label: '开发语言',
          options: [
            {value: 'javascript'},
            {value: 'java'},
            {value: 'nodejs'},
            {value: 'python'},
            {value: 'c++'}
          ]
        }
      ],

      hasDialog: true,
      hasView: true,
      hasEdit: true,
      canDelete: () => {
        return true
      },
      editText: '编辑',
      hasDelete: true,
      hasOperation: true,
      hasPagination: true,
      persistSelection: true,

      extraButtons: [
        {
          type: 'success',
          text: row => (row.status !== 'normal' ? '上架' : '下架'),
          atClick(row) {
            row.status = !row.status
          }
        }
      ],

      beforeSearch: () => {
        this.url =
          'https://easy-mock.com/mock/5b586c9dfce1393a862d034d/example/tree'
        return Promise.resolve()
      }

      // onDelete(selected){
      //   console.log(1)
      //   selected.shift()
      //   return new Promise(()=>{})
      // }
    }
  }
}
</script>
