import React from 'react';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  error,
  required = false,
  className = '',
  textarea = false,
  rows = 4,
  options = [] // for select inputs
}) => {
  const inputBaseStyles = 'w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-300 shadow-sm';
  const labelStyles = 'block text-sm font-semibold text-slate-700 mb-2';

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className={labelStyles}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className={`${inputBaseStyles} resize-none`}
        />
      ) : type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputBaseStyles} appearance-none cursor-pointer`}
        >
          <option value="" disabled hidden>{placeholder || 'Select option'}</option>
          {options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputBaseStyles}
        />
      )}

      {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
};

export default Input;
