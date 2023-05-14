export const Label = ({children, ...props}: any) => {
  return (
    <label
      className="block text-sm font-medium text-gray-900"
      {...props}
    >
      {children}
    </label>
  )
}