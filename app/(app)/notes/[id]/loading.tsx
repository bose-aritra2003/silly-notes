const Loading = () => {
  return (
    <div className={"px-20 animate-pulse"}>
      <div className={"mt-5 h-10 bg-gray-200 rounded-sm w-1/2 mx-auto sm:w-1/4 sm:ml-0 mb-4"}></div>
      <div className={"mt-10"}>
        <div className={"h-32 w-11/12 sm:w-3/4 bg-gray-200 rounded-sm mx-auto"}></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
export default Loading;