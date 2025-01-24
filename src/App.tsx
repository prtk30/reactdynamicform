import type { FormProps } from "antd";
import { Button, Form } from "antd";
import { FieldType } from "./utils/formSchema";
import { useEffect, useState } from "react";
import { fieldsJson, FormScheme } from "./utils/formFields";
import Elements from "./components/Elements";
import "./index.css";
import dayjs from "dayjs";
import { toast, ToastContainer } from "react-toastify";

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
  toast.success("form submitted successfully");
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const initialValues = {
  remember: true,
  ref: 0,
  invoice_number: 0,
  invoice_date: dayjs("2025-01-25"),
  due_date: dayjs("2025-01-25"),
  disc_due_date: dayjs("2025-01-25"),
  posting_date: dayjs("2025-01-25"),
  contract_number: 0,
  deferred_invoice_number: 0,
  deferred_tax_due_date: dayjs("2025-01-25"),
  pickup_date: dayjs("2025-01-25"),
  gross_quantity: 0,
  net_quantity: 0,
  product_rate: 0,
  taxes: 0,
  other_quantity: 0,
  other_rate: 0,
  other_disc: 0,
  other_taxes: 0,
  def_taxes: 0,
  line_total: 0,
  other_line_total: 0,
  sub_total: 0,
  taxes_total: 0,
  total: 0,
};

function App() {
  const [elements, setElements] = useState<FormScheme | null>(null);

  useEffect(() => {
    setElements(fieldsJson[0]);
    console.log("json 0", fieldsJson[0]);
  }, []);

  const { fields } = elements ?? {};
  console.log("fields ", fields);

  //fields -- input, calender, toggle, dropdown, checkbox, autocomplete

  return (
    <div className="bg-gray-100">
      <h2 className="font-semibold">Create Fuel Voucher</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: "full" }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="py-10"
      >
        <div className="grid grid-cols-4 gap-4 w-full items-center justify-center">
          {fields
            ? fields
                .slice(0, 16)
                .map((field, i) => <Elements key={i} fields={field} />)
            : null}
        </div>

        <h2 className="py-4 font-semibold">Product charges</h2>
        <div className="grid grid-cols-4 gap-4 w-full items-center justify-center">
          {fields
            ? fields
                .slice(16, 26)
                .map((field, i) => <Elements key={i} fields={field} />)
            : null}
        </div>

        <h2 className="py-4 font-semibold">Other charges</h2>
        <div className="grid grid-cols-4 gap-4 w-full items-center justify-center">
          {fields
            ? fields
                .slice(26, 33)
                .map((field, i) => <Elements key={i} fields={field} />)
            : null}
        </div>

        <div className="flex flex-col items-end">
          {fields
            ? fields
                .slice(33)
                .map((field, i) => <Elements key={i} fields={field} />)
            : null}
        </div>

        <Form.Item label={null} className="flex w-full justify-center">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default App;
