const Loading = () => {
    return (
        <div className={"px-20 animate-pulse"}>
            <div className={"mt-5 h-10 bg-gray-200 rounded-sm w-1/4 mb-4"}></div>
            <div className={"grid grid-cols-4 gap-16 mt-10"}>
                <div className={"h-32 w-60 bg-gray-200 rounded-sm"}></div>
                <div className={"h-32 w-60 bg-gray-200 rounded-sm"}></div>
                <div className={"h-32 w-60 bg-gray-200 rounded-sm"}></div>
                <div className={"h-32 w-60 bg-gray-200 rounded-sm"}></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}
export default Loading;