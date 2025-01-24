import { Field } from "../utils/formSchema";
import FormAutoCompleteComp from "./elements/FormAutoCompleteComp";
import FormCheckboxComp from "./elements/FormCheckboxComp";
import FormDatePickerComp from "./elements/FormDatePickerComp";
import FormDropdownComp from "./elements/FormDropdownComp";
import FormInputComp from "./elements/FormInputComp";
import FormToggleComp from "./elements/FormToggleComp";

const Elements = ({ fields }: { fields: Field }) => {
  const {
    field,
    field_id,
    field_label,
    field_mandatory,
    field_placeholder,
    field_disabled,
    field_type,
    field_message,
    field_options,
    field_layout,
  } = fields;

  switch (field) {
    case "input":
      return (
        <FormInputComp
          id={field_id}
          label={field_label}
          required={field_mandatory === "true"}
          placeholder={field_placeholder || ""}
          disabled={field_disabled === "true"}
          type={field_type}
          message={field_message || ""}
          options={field_options || []}
          layout={field_layout || "vertical"}
        />
      );
    case "autocomplete":
      return (
        <FormAutoCompleteComp
          id={field_id}
          label={field_label}
          required={field_mandatory === "true"}
          placeholder={field_placeholder || ""}
          disabled={field_disabled === "true"}
          type={field_type}
          message={field_message || ""}
          options={field_options || []}
          layout={field_layout}
        />
      );
    case "datepicker":
      return (
        <FormDatePickerComp
          id={field_id}
          label={field_label}
          required={field_mandatory === "true"}
          placeholder={field_placeholder || ""}
          disabled={field_disabled === "true"}
          type={field_type}
          message={field_message || ""}
          options={field_options || []}
          layout={field_layout}
        />
      );
    case "dropdown":
      return (
        <FormDropdownComp
          id={field_id}
          label={field_label}
          required={field_mandatory === "true"}
          placeholder={field_placeholder || ""}
          disabled={field_disabled === "true"}
          type={field_type}
          message={field_message || ""}
          options={field_options || []}
          layout={field_layout}
        />
      );
    case "toggle":
      return (
        <FormToggleComp
          id={field_id}
          label={field_label}
          required={field_mandatory === "true"}
          placeholder={field_placeholder || ""}
          disabled={field_disabled === "true"}
          type={field_type}
          message={field_message || ""}
          options={field_options || []}
          layout={field_layout}
        />
      );
    case "checkbox":
      return (
        <FormCheckboxComp
          id={field_id}
          label={field_label}
          required={field_mandatory === "true"}
          placeholder={field_placeholder || ""}
          disabled={field_disabled === "true"}
          type={field_type}
          message={field_message || ""}
          options={field_options || []}
          layout={field_layout}
        />
      );

    default:
      return null;
  }
};

export default Elements;
