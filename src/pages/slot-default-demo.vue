<template>
  <div>
    <el-data-table v-bind="$data">
      <template>
        <el-table-column label="操作" type="text">
          <template v-slot="scope">
            <el-button type="text" size="small" @click="showDialog(scope)"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </template>
    </el-data-table>

    <el-dialog
      class="detailsDialog"
      title="查看"
      :visible.sync="dialogVisible"
      width="30%"
      center
    >
      <div style="font-size: 15px; line-height: 30px;">
        <div>
          id: <span>{{ details.id }}</span>
        </div>
        <div>
          name: <span>{{ details.name }}</span>
        </div>
        <div>
          alias:<span>{{ details.alias }}</span>
        </div>
      </div>
      <div class="tips" style="font-size: 12px; color: red;">
        (这个是自定义弹窗)
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        'https://easy-mock.com/mock/5b586c9dfce1393a862d034d/example/img?a=slot-form',
      columns: [
        {prop: 'code', label: '品牌编号'},
        {prop: 'name', label: '品牌名称'},
        {prop: 'alias', label: '品牌别名'}
      ],
      hasOperation: false,
      form: [
        {
          type: 'input',
          id: 'name',
          label: '品牌名称',
          rules: [
            {
              required: true,
              message: '请输入品牌名称',
              trigger: 'blur',
              transform: v => v && v.trim()
            }
          ],
          el: {placeholder: '请输入品牌名称'}
        }
      ],

      //自定义属性
      dialogVisible: false,
      details: {
        id: '',
        name: '',
        alias: ''
      }
    }
  },
  methods: {
    showDialog(scope) {
      let row = scope.row
      this.$set(this.details, 'id', row.id)
      this.$set(this.details, 'name', row.name)
      this.$set(this.details, 'alias', row.alias)
      this.dialogVisible = true
    }
  }
}
</script>
