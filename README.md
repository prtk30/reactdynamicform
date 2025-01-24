# Dynamic Form Builder in React

## Technologies Used

- **React**: Component-based UI library.
- **TypeScript**: Static typing.
- **Ant Design**: UI framework for components.
- **React Toastify**: For user notifications.
- **JSON Schema**: Define form structure dynamically.

## Installation

- Install dependencies: npm install


The project was built with the following step-by-step approach:

1. **Understanding Requirements**:
   - The goal was to create a highly reusable form component that dynamically renders fields based on a JSON schema.

2. **Dynamic Rendering of Fields**:
   - A JSON schema defines the form structure (field types, labels, validation, etc.).
   - Each field is rendered using a generic `Elements` component, which maps the field type to the corresponding Ant Design component.

3. **Validation**:
   - Used Ant Design's built-in validation system and added a custom validator to ensure user inputs match the available options for autocomplete fields.

4. **Notification System**:
   - Used **React Toastify** to notify users on form submission success.

5. **Reusability and Extensibility**:
   - The `Elements` component was designed to make it easy to add support for new field types with minimal effort.
   - The form component supports any JSON schema, making it reusable across different projects.
