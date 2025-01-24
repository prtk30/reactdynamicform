import { Form, Input } from "antd";
import { FieldType, FormInputProps } from "../../utils/formSchema";

const FormInputComp = ({
  id,
  label,
  required,
  placeholder,
  disabled,
  type,
  message,
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
        <Input
          placeholder={placeholder}
          type={type}
          defaultValue={type === "number" ? 0 : ""}
          disabled={disabled}
        />
      </Form.Item>
    </>
  );
};

export default FormInputComp;
