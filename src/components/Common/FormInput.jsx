export const FormInput = ({ type, label = false, name, placeholder }) => {
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
        className="w-full px-5 py-3 mr-3 text-base text-dark font-medium rounded-lg border border-dark/30 animate-hover hover:border-dark focus:ring-4 focus:ring-primary-300 hover-animation"
        placeholder={placeholder}
        required
      />
    </>
  );
};
