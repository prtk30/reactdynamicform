import { Checkbox, Form } from "antd";
import { FieldType, FormInputProps } from "../../utils/formSchema";

const FormCheckboxComp = ({
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
    <>
      <Form.Item<FieldType>
        label={label}
        name={id}
        rules={[{ required: required, message: message }]}
        layout={layout === "vertical" ? "vertical" : "horizontal"}
        labelCol={{ span: "full" }}
      >
        <Checkbox defaultChecked disabled={disabled} />
      </Form.Item>
    </>
  );
};

export default FormCheckboxComp;
