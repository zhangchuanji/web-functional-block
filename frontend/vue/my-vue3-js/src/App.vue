<template>
  <div>
    <el-button type="primary" plain @click="addItem">新增</el-button>
    <dialogForm
      :dialogVisible="dialogVisible"
      :title="'新增表单'"
      :width="1000"
      :formItem="formItems"
      @submit="handleSubmit"
      @reset="handleReset"
    />
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import dialogForm from "@/components/dialogForm/index.vue";

const data = reactive({
  formItems: [
    { type: "el-input", label: "输入框", prop: "input", value: "" },
    {
      type: "el-select",
      label: "选择框",
      prop: "select",
      value: "",
      options: {
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
        ],
      },
    },
    {
      type: "el-radio-group",
      label: "单选框",
      prop: "radio",
      value: "",
      options: {
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
        ],
      },
    },
    {
      type: "el-checkbox-group",
      label: "复选框",
      prop: "checkbox",
      value: [],
      options: {
        options: [
          { label: "选项1", value: "1" },
          { label: "选项2", value: "2" },
        ],
      },
    },
    { type: "el-switch", label: "开关", prop: "switch", value: false },
    {
      label: "日期",
      prop: "time",
      type: "el-date-picker",
      value: "",
      options: {
        type: "date",
        placeholder: "选择日期",
        valueFormat: "YYYY-MM-DD",
      },
    },
  ],
  dialogVisible: false,
});

const { formItems, dialogVisible } = toRefs(data);

const handleSubmit = (form) => {
  console.log("提交表单:", form);
  dialogVisible.value = false;
};

const handleReset = () => {
  formItems.value.forEach((item) => (item.value = ""));
};

function addItem() {
  dialogVisible.value = true;
}
</script>
<style scoped lang="less"></style>
