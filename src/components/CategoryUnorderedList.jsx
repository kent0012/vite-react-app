const CategoryUnorderedList = ({
  data,
  type = "",
  onChange,
  valueKey = "",
  labelKey = "",
}) => {
  return (
    <>
      {data.length === 0 ? (
        <p className="text-center text-lg block w-full">No Category Found</p>
      ) : (
        <ul className="flex flex-row md:flex-col space-x-1 flex-wrap justify-center gap-2">
          {data.map((item) => (
            <li key={item.id}>
              <label className="flex items-center gap-2 text-xm md:text-xm l text-lg font-normal">
                <input
                  className="w-4 h-4  accent-sky-700 text-sm font-semibold "
                  type={type}
                  value={item[valueKey]}
                  onChange={() => onChange?.(item)}
                />
                {item[labelKey]}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryUnorderedList;
