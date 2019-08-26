<template>
  <el-data-table v-bind="$data" ref="table">
    <template>
      <el-table-column label="操作" type="text" size="small" min-width="150px">
        <text-button class="view">查看</text-button>
        <text-button class="edit">编辑</text-button>
        <text-button class="changeStatus">上架</text-button>
      </el-table-column>
    </template>
  </el-data-table>
</template>
<script>
export default {
  data() {
    return {
      url: 'http://127.0.0.1:5000/mock/14/fem-get-test',

      //因为后台没有实际的数据库，这里用这些属性辅助模拟有数据库的样子~
      deletedItems: [],
      addedItems: [],
      editedItems: [],

      columns: [
        {type: 'selection'},
        {prop: 'name', label: '组件名称'},
        {prop: 'type', label: '分类'},
        {prop: 'version', label: '版本'},
        {prop: 'language', label: '开发语言'},
        {
          prop: 'lastUpdateTime',
          label: '最后更新时间',
          formatter: row => this.formatTime(new Date(row.lastUpdateTime))
        },
        {
          prop: 'status',
          label: '状态',
          className: 'status',
          formatter: row => {
            return row.status === '上架' ? '上架' : '下架'
          }
        }
      ],

      searchForm: [
        {
          type: 'input',
          id: 'name',
          label: '组件名称',
          collapsible: false,
          el: {placeholder: '请输入组件名称'}
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
              message: '请输入组件名称',
              trigger: 'blur',
              transform: v => v && v.trim()
            }
          ],
          el: {placeholder: '请输入组件名称'}
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
          // inline: true
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
          // inline: true
        }
      ],

      hasDialog: true,

      hasView: false,
      hasEdit: false,
      isTree: false,
      hasNew: false,
      hasOperation: false,

      canDelete: () => {
        return true
      },
      editText: '编辑',
      hasDelete: true,

      hasPagination: true,
      persistSelection: true,

      // extraButtons: [
      //   {
      //     // type: 'text',
      //     // index: 0,
      //     fixed: "left",
      //     style: "border: 1px soid black;border-color: #e1e4e9; color: #2D303B;padding-left: 0.5em; padding-right: 0.5em; font-size: 12px; display:inline-block",
      //     text: row => (row.status !== '上架' ? '上架' : '下架'),
      //     atClick(row) {
      //       row.status = !row.status
      //     }
      //   }
      // ],

      // beforeSearch: () => {
      //   return Promise.resolve()
      // },

      onNew: () => {},
      onEdit: () => {},
      onDelete: selected => {
        if (selected.id) {
          this.deletedItems.push(selected.id)
        } else {
          for (let i = 0; i < selected.length; i++) {
            this.deletedItems.push(selected[i].id)
          }
        }
        this.url = `http://127.0.0.1:5000/mock/14/fem-get-test?deletedItems=${JSON.stringify(
          this.deletedItems
        )}`
        return this.$axios.delete(
          'http://127.0.0.1:5000/mock/14/fem-delete-test',
          {
            data: {deletedItems: this.deletedItems}
          }
        )
      }
    }
  },

  methods: {
    formatTime: date => {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      let formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
      }

      return [year, month, day].map(formatNumber).join('-')
    },

    extraClass() {
      let statusCell = document.querySelector(`.status`)
      console.log(statusCell)
    }
  },

  mounted() {
    console.log(this.$refs.table)
    // console.log(111)
    this.extraClass()
  }
}
</script>

<style></style>
