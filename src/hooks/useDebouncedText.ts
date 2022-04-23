import { useEffect, useState } from 'react';

// interface useDebouncedStateProps {
// 	state: { [key: string]: string | number }

// export const useDebouncedText = (state: useDebouncedStateProps) => {
// 	const [debouncedState, setDebouncedState] = useState(state);

//   const valueToDebounce=(property:string,value:string|number)=>
//     setDebouncedState(prev=>({...prev,[property]:value}))

// 	useEffect(() => {
// 		let timer: number;
// 		const listener = () => {
// 			if (timer) clearTimeout(timer);
// 			timer = setTimeout(() => {
// 				setDebouncedState(window.innerWidth);
// 				setDebouncedState(window.innerHeight);
// 				if (window.innerWidth * 0.75 < width) {
// 					setDebouncedState(window.innerWidth * 0.75);
// 				}
// 			}, 100);
// 		};
// 		window.addEventListener('resize', listener);

// 		return () => {
// 			window.removeEventListener('resize', listener);
// 		};
// 	}, [debouncedState]);
// };
