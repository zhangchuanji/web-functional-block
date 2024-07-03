<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    :width="width"
    :before-close="handleClose"
  >
    <el-form :model="formItem" ref="form">
      <el-form-item
        v-for="item in formItem"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
      >
        <component :is="item.type" v-model="item.value" v-bind="item.options">
          <template v-if="item.type === 'el-select'">
            <el-option
              v-for="option in item.options.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </template>

          <template v-if="item.type === 'el-radio-group'">
            <el-radio
              v-for="option in item.options.options"
              :key="option.value"
              :label="option.value"
            >
              {{ option.label }}
            </el-radio>
          </template>

          <template v-if="item.type === 'el-checkbox-group'">
            <el-checkbox
              v-for="option in item.options.options"
              :key="option.value"
              :label="option.value"
            >
              {{ option.label }}
            </el-checkbox>
          </template>

          <template v-if="item.type === 'el-switch'">
            <el-switch v-model="item.value" v-bind="item.options" />
          </template>
        </component>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from "vue";

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: null,
  },
  width: {
    type: Number,
    default: "500",
  },
  formItem: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:dialogVisible", "submit", "reset"]);

const { dialogVisible, formItem, width, title } = toRefs(props);

const handleClose = () => {
  emit("update:dialogVisible", false);
};

const reset = () => {
  emit("reset");
};

const submit = () => {
  const formattedFormItem = formItem.value.reduce((acc, item) => {
    acc[item.prop] = item.value;
    return acc;
  }, {});
  emit("submit", formattedFormItem);
};
</script>

<style scoped lang="less"></style>
