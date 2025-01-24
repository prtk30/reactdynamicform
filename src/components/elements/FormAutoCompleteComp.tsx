import { AutoComplete, Form } from "antd";
import { FieldType, FormInputProps } from "../../utils/formSchema";

const FormAutoCompleteComp = ({
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
        rules={[
          { required: required, message: message },
          {
            validator: (_, value) =>
              !value || options.some((option) => option.value === value)
                ? Promise.resolve()
                : Promise.reject("Please select a valid option from the list!"),
          },
        ]}
        layout={layout === "vertical" ? "vertical" : "horizontal"}
      >
        <AutoComplete
          // style={{ width: 200 }}
          options={options}
          placeholder={placeholder}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          disabled={disabled}
        />
      </Form.Item>
    </>
  );
};

export default FormAutoCompleteComp;
