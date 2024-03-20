import React from "react";

interface Option {
  value: string;
  label: string;
}

interface FormInputProps {
  input_title?: string;
  default_value?: any;
  variable_identifier: string; // Validation identifier for the field
  register: any; // Adjust the type according to your useForm usage
  errors: any; // Adjust the type according to your useForm usage
  options: Option[]; // Array of options
}

export const FormSelectInput: React.FC<FormInputProps> = ({
  register,
  errors,
  default_value,
  input_title = "",
  variable_identifier,
  options,
}: FormInputProps) => {
  return (
    <>
      <label
        htmlFor={variable_identifier}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {input_title}
      </label>
      <select
        {...register(variable_identifier)} // Use the validation identifier here
        id={variable_identifier}
        name={variable_identifier}
        defaultValue={default_value ? default_value : undefined}
        className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[variable_identifier] && ( // Access errors dynamically based on the validation identifier
        <p className="text-red-600 text-xs mt-1">
          {errors[variable_identifier].message}
        </p>
      )}
    </>
  );
};
