export const FormInput = ({ type, label = false, name, placeholder, value, errorMessage = false, onChange }) => {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="capitalize text-start font-semibold mb-2">
          {label}<span className="text-red-600 ms-1">*</span>
        </label>
      ) : null}
      <input
        type={type}
        name={name}
        id={name}
        className={`w-full px-5 py-3 mr-3 text-base text-dark font-medium rounded-lg border ${errorMessage ? 'border-red-600' : 'border-dark/30'} animate-hover hover:border-dark focus:ring-4 ${errorMessage ? 'focus:ring-red-600/90 focus:border-red-600' : 'focus:ring-primary-300'} ${errorMessage ? 'focus-visible:border-red-600' : 'focus-visible:border-primary-300'} hover-animation`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.name, event.target.value)}
        autoComplete="off"
        required
      />
    </>
  );
};
