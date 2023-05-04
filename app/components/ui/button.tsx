export const Button = ({ children, ...props }: any) => {
    return (
        <button
            className="w-full text-white bg-amber-300 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            {...props}
        >
            {children}
        </button>
    )
}