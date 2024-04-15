import { useState } from "react";

function App() {
	const [maindata, setmaindata] = useState([]);
	const [expense, setexpense] = useState("");
	const [amount, setamount] = useState("");

	function handleClick(e) {
    e.preventDefault();
		const obj = {
			expense,
			amount,
		};
		setmaindata((prev) => [...prev, obj]);
		setexpense("");
		setamount("");
	}
  function handledelete(expenseName){
    setmaindata(prev => prev.filter((item,ind) => ind !== expenseName));
  }
	return (
		<div className="flex justify-center
   
    flex-col">
			<div
				className=" basis-[60%] md:basis-[40%]
     flex justify-center 
     border-4 
     border-zinc-800 mt-10  flex-col items-center"
			>
				<h1 className=" text-[35px]">EXPENSE TRACKER</h1>
				<input
					type="text"
					value={expense}
					onChange={(e) => setexpense(e.target.value)}
					className="border-[3px] border-zinc-800  px-8 my-4 py-1 text-start"
					placeholder="Expense"
				/>
				<input
					type="text"
					value={amount}
					onChange={(e) => setamount(e.target.value)}
					className="border-[3px] border-zinc-800  px-8 my-4 mt-3 py-1"
					placeholder="Amount"
				/>
				<button className="bg-blue-600 px-20 py-1 mb-5" onClick={handleClick}>
					Add Expense
				</button>
			</div>
      {/* {
        maindata.map((value,index)=>{
          <div key={index}>
            {value}
          </div>
        })
      } */}
      <table className="table-auto">
				<tbody>
					<tr>
						<td>expense</td>
						<td>amount</td>
						<td></td>
					</tr>
					{maindata.map((val, index) =>  (
						<tr key={index}>
							<td>{val.expense}</td>
							<td>{val.amount}</td>
							<td>
								<button onClick={()=>handledelete(index)}>delete</button>
							</td>
						</tr>
					))}
				</tbody>
        
			</table>
		</div>
	);
}

export default App;
