import { DatePicker, DatePickerProps, Form } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FieldType, FormInputProps } from "../../utils/formSchema";

dayjs.extend(customParseFormat);

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(dateString);
};

const defaultValue = dayjs("2024-01-01");

const FormDatePickerComp = ({
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
        <DatePicker
          placeholder={placeholder}
          //defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          //minDate={dayjs("2019-08-01", dateFormat)}
          //maxDate={dayjs("2020-10-31", dateFormat)}
        />
      </Form.Item>
    </>
  );
};

export default FormDatePickerComp;
