import { useState, useEffect, useRef } from "react";
import React from "react";
import { Component } from "react";
import Send from "./Components/Send"
function App() {

	const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

			const [name, setName] = useState("");
			const [country, setCountry] = useState("");
			const [city, setCity] = useState("");
			const [dateOfBirth, setDateOfBirth] = useState("");

				const ref = useRef('');
				const [val] = useState('Здравствуйте, как вас зовут?');
				function onClick() {
					 ref.current.value = `${val}`;
				}
			
				const ref2 = useRef('');
				const [vall] = useState('Приятно познакомиться, я Бот Курт. А в какой стране ты проживаешь?');
				function onSecondClick() {
					 ref2.current.value = `${vall}`;
				}
			
				const ref3 = useRef('');
				const [valll] = useState('Вау, я тоже оттуда! А какой город?');
				function onThirdClick() {
					 ref3.current.value = `${valll}`;
				}
				const ref4 = useRef('');
				const [vallll] = useState('Мой город совсем недалеко от твоего. А родился то ты в каком году?');
				function onFourthClick() {
					 ref4.current.value = `${vallll}`;
				}
				const ref5 = useRef('');
				const [valllll] = useState('Уважаемый "+name+ "! На сегодняшний день Вы проживаете в стране " +country+", в городе " +city+", и вы родились " +dateOfBirth+');
				function onFifthClick() {
					 ref5.current.value = `${valllll}`;
				}
	


  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  function handleChange1(event) {
    setValue1(event.target.value);
  }

  function handleChange2(event) {
    setValue2(event.target.value);
  }



  		function Sum() {
  		  setResult(Number(value1) + Number(value2));
  		}
		
  		function Subtract() {
  		  setResult(Number(value1) - Number(value2));
  		}
		
  		function Multiply() {
  		  setResult(Number(value1) * Number(value2));
  		}

  		function Split() {
  		  setResult((Number(value1) / Number(value2)).toFixed(2));
  		}
			function Module() {
  		  setResult(Number(value1) / Number(value2));
  		}
			


			

  return (
		
			<div className="flex h-screen w-full flex-col">

				<div className="grid h-20 grid-cols-3">
					<h1 className="flex place-self-end my-auto text-xs">Лучше смотреть в тёмной теме</h1>
					<button className="flex  mx-auto my-auto w-1/3 h-1/3 justify-center text-white bg-violet-600 rounded-md scale-95 hover:scale-105 transition-all transform duration-500" onClick={handleClick}>{theme?"Light":"Dark"}</button>
				</div>

				<h2 className="flex mx-auto">Введите 2 числа</h2>

				<div className="flex h-20 flex-row justify-center space-x-2">
      		<input className="flex my-auto text-center text-white rounded-md border-2 border-amber-300 bg-stone-500" value={value1} onChange={handleChange1} />
      		<input className="flex my-auto text-center text-white rounded-md border-2 border-amber-300 bg-stone-500" value={value2} onChange={handleChange2} />
      		<input className="flex my-auto text-center text-white rounded-md border-2 border-amber-300 bg-stone-500" value={result} disabled="disabled"/>
				</div>

				<div className="flex h-10 w-1/2 mx-auto flex-row justify-center space-x-2">
      	<button className="flex w-1/4 h-7 justify-center my-auto text-center text-white rounded-md bg-violet-600 scale-95 hover:scale-105 transition-all transform duration-500" onClick={Sum}>Сложить</button>
      	<button className="flex w-1/4 h-7 justify-center my-auto text-center text-white rounded-md bg-violet-600 scale-95 hover:scale-105 transition-all transform duration-500" onClick={Subtract}>Вычесть</button>
      	<button className="flex w-1/4 h-7 justify-center my-auto text-center text-white rounded-md bg-violet-600 scale-95 hover:scale-105 transition-all transform duration-500" onClick={Multiply}>Умножить</button>
      	<button className="flex w-1/4 h-7 justify-center my-auto text-center text-white rounded-md bg-violet-600 scale-95 hover:scale-105 transition-all transform duration-500" onClick={Split}>Разделить</button>
				<button className="flex w-1/4 lg:w-1/2 md:w-1/2  h-7 justify-center my-auto text-center text-white rounded-md bg-violet-600 scale-95 hover:scale-x-100 ease-in-out duration-300" onClick={Module}>разность модулей</button>
				</div>

				

				<div className="container text-xs flex mt-auto mx-auto flex-col h-2/3 w-1/2">
          <button className="flex mx-auto" onClick={onClick}>Начать общение</button>

          <textarea className="flex my-auto  resize-none w-2/3  text-center form-control text-white rounded-lg bg-indigo-500/40" ref={ref} disabled="disabled" />
					<div className="flex place-self-end space-x-0.5">
						<textarea className="flex my-auto resize-none w-2/3 text-center form-control text-white rounded-lg bg-indigo-500/40" value={name} onChange={e => setName(e.target.value)}/>
						<button className="flex my-auto w-15 place-self-end text-white bg-indigo-500 rounded-full" onClick={onSecondClick}>
						<div className="bg bg-indigo-500 rounded-full">
							<Send/>
						</div>
						</button>
					</div>

					<textarea className="flex my-auto resize-none w-2/3 text-center form-control text-white rounded-lg bg-indigo-500/40" ref={ref2} disabled="disabled"/>
					<div className="flex place-self-end space-x-0.5">
						<textarea className="flex my-auto resize-none w-2/3 text-center form-control text-white rounded-lg bg-indigo-500/40" value={country} onChange={e => setCountry(e.target.value)}/>
						<button className="flex my-auto w-15 place-self-end text-white  bg-indigo-500 rounded-full" onClick={onThirdClick}>
						<div className="bg bg-indigo-500 rounded-full">
							<Send/>
						</div>
						</button>
					</div>

					<textarea className="flex my-auto resize-none w-2/3 text-center form-control text-white rounded-lg bg-indigo-500/40" ref={ref3} disabled="disabled"/>
					<div className="flex place-self-end space-x-0.5">
						<textarea className="flex my-auto resize-none w-2/3 text-center form-control text-white rounded-lg bg-indigo-500/40" value={city} onChange={e => setCity(e.target.value)}/>
						<button className="flex my-auto w-15 place-self-end text-white  bg-indigo-500 rounded-full" onClick={onFourthClick}>
						<div className="bg bg-indigo-500 rounded-full">
							<Send/>
						</div>
						</button>	
					</div>
					
					<textarea className="flex my-auto resize-none w-2/3 text-center form-control text-white rounded-lg bg-indigo-500/40" ref={ref4} disabled="disabled"/>
					<div className="flex place-self-end space-x-0.5">
						<textarea className="flex my-auto resize-none w-2/3 text-center form-control text-white rounded-lg bg-indigo-500/40" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
						<button className="flex my-auto w-15 place-self-end text-white  bg-indigo-500 rounded-full" onClick={onFifthClick}>
						<div className="bg bg-indigo-500 rounded-full">
							<Send/>
						</div>
						</button>	
					</div>
					
					<textarea className="flex my-auto  resize-none w-2/3 text-center  text-white rounded-lg bg-indigo-500/40" ref={ref5} disabled="disabled"/>

				</div>

			</div>
    
    
  );
}
export default App;

// function App() {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);
//   const [result, setResult] = useState(0);

//   function calculateTotal() {
//     setResult(result);
//   }

//   return (
//     <div className="App">
//       <h1>Введите два числа</h1>

//       <div className="number-inputs">
//         <input
//           type="number"
//           value={number1}
//           onChange={e => setNumber1(+e.target.value)}
//           placeholder="0"
//         />
//         <input
//           type="number"
//           value={number2}
//           onChange={e => setNumber2(+e.target.value)}
//           placeholder="0"
//         />
//       </div>

//       <button onClick={calculateTotal}>Посчитать</button>

// 			<input
//           type="number"
//           value={result}
//           onChange={e => setNumber2(+e.target.value)}
//           placeholder="0"

//         />

//     </div>
//   );
// }
// export default App;

// function App() {

// 	const [calc, setCalc] = useState("");
// 	const [result, setResult] = useState("");

// 	const updateCalc = value => {
// 		setCalc(calc + value);

// 	const calculate = () => {
// 		setCalc(eval(calc).toString());
// 	}
// 	}
// 	return (
// 	<div className="App">
// 					<div className="sum">
// 				<div className="display">
// 					<span>(0)</span> 0
// 				</div>
// 					<div type = "button" className="operators flex flex-col space-y-2">
// 							<button  className="flex mx-auto px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">Сложить</button>
// 							<button  className="flex mx-auto px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">Вычесть</button>
// 							<button  className="flex mx-auto px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">Умножить</button>
// 							<button  className="flex mx-auto px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">Разделить</button>
// 					</div>
// 			</div>
// 	</div>
// 	);
// }
// export default App;

// export default function Home() {

//   return (
//     <main>
//       <div className=" my-2 overflow-hidden rounded shadow-lg">
//         <div className="px-6 py-4">
//           <div className="mb-2 text-xl font-bold">Введите числа</div>
//           <div className="flex flex-col container object-cover">
//             <form className="flex flex-row space-x-4" name="publish" onSubmit="{submitNumber}">
//               <input
//                 className="mb-4 border-b-2"
//                 id="first"
//                 name="name"
//                 type="text"
//                 autocomplete="name"
//                 required
//               />

//               <input
//                 className="mb-4 border-b-2"
//                 id="second"
//                 name="name"
//                 type="text"
//                 autocomplete="name"
//                 required
//               />

//               <input
//                 className="mb-4 border-b-2"
//                 id="result"
//                 name="name"
//                 type="text"
//                 autocomplete="name"
//                 required
//               />
//             </form>
//             <button
//               type="button"
//               className="flex mx-auto px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
//             >
//               Посчитать
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>

//   );
// };
