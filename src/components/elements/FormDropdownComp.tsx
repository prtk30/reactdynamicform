import { useState } from "react";
import { Form, TreeSelect } from "antd";
import type { TreeSelectProps } from "antd";
import { FieldType, FormInputProps } from "../../utils/formSchema";

const FormDropdownComp = ({
  id,
  label,
  required,
  placeholder,
  disabled,
  type,
  message,
  options,
  layout,
}: FormInputProps) => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll: TreeSelectProps["onPopupScroll"] = (e) => {
    console.log("onPopupScroll", e);
  };

  return (
    <>
      <Form.Item<FieldType>
        label={label}
        name={id}
        rules={[{ required: required, message: message }]}
        layout={layout === "vertical" ? "vertical" : "horizontal"}
        labelCol={{ span: "full" }}
      >
        <TreeSelect
          showSearch
          style={{ width: "100%" }}
          value={value}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder={placeholder}
          allowClear
          treeDefaultExpandAll
          onChange={onChange}
          treeData={options}
          onPopupScroll={onPopupScroll}
          disabled={disabled}
        />
      </Form.Item>
    </>
  );
};

export default FormDropdownComp;
