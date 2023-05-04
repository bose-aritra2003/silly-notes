const Loading = () => {
    return (
        <div className={"px-20 animate-pulse"}>
            <div className={"mt-5 h-10 bg-gray-200 rounded-sm w-1/4 mb-4"}></div>
            <div className={"mx-auto h-32 w-1/2 bg-gray-200 rounded-sm mt-10"}></div>
            <span className={"sr-only"}>Loading...</span>
        </div>
    );
}
export default Loading;