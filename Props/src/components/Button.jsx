function Button({lable,bgColor ,textColor}) {
    // console.log("Props",{lable});
    
  return (
    <>
      <button className={`border ${bgColor ? bgColor : "border-blue-400"} ${textColor ? textColor : "text-cyan-400"}   rounded-md p-3 m-4`}>
      {lable}
      </button>
    </>
  );
}
export default Button;