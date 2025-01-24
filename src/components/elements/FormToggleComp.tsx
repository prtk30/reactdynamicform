import { Form, Switch } from "antd";
import { FieldType, FormInputProps } from "../../utils/formSchema";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const FormToggleComp = ({
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
  return (
    <Form.Item<FieldType>
      label={label}
      name={id}
      rules={[{ required: required, message: message }]}
      layout={layout === "vertical" ? "vertical" : "horizontal"}
      labelCol={{ span: "full" }}
    >
      <Switch defaultChecked={false} onChange={onChange} disabled={disabled} />
    </Form.Item>
  );
};

export default FormToggleComp;
