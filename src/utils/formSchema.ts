export type FieldType = {
  supplier?: string;
  ship_terminal?: string;
  shipped_via?: string;
  payment_term?: string;
  tax_state?: string;
  ref?: number;
  invoice_number?: number;
  invoice_date?: Date;
  due_date?: Date;
  disc_due_date?: Date;
  posting_date?: Date;
  payment_method?: string;
  payment_hold?: boolean;
  contract_number?: number;
  deferred_invoice_number?: number;
  deferred_tax_due_date?: Date;
  copy_bol_datetime?: boolean;
  product?: string;
  bill_of_landing?: string;
  pickup_date?: Date;
  gross_quantity?: number;
  net_quantity?: number;
  product_rate?: number;
  taxes?: number;
  def_taxes?: number;
  line_total?: number;
  description?: string;
  chart_of_account?: string;
  other_quantity?: number;
  other_rate?: number;
  other_disc?: number;
  other_taxes?: number;
  other_line_total?: number;
  sub_total?: number;
  taxes_total?: number;
  total?: number;
};

// export type FormFields = {
//   field_id: keyof FieldType;
//   field_label: string;
//   field_mandatory: string;
//   field_placeholder: string;
//   field_type: string;
//   field_value: string;
// };

interface FieldOption {
  value: string;
  title?: string;
}

export interface FormInputProps {
  id: keyof FieldType;
  label: string;
  required: boolean;
  placeholder: string;
  disabled: boolean;
  type: string;
  message: string;
  options: FieldOption[];
  layout: string;
}

export interface Field {
  field: string;
  field_id: keyof FieldType;
  field_label: string;
  field_mandatory: string;
  field_placeholder?: string;
  field_disabled?: string;
  field_type: string;
  field_value?: string;
  field_message?: string;
  field_options?: FieldOption[];
  field_layout: string;
}
