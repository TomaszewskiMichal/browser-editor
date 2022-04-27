import { useEffect, useState } from 'react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

export const useDebouncedText = () => {
	const [debouncedState, setDebouncedState] = useState('');
	let timer: NodeJS.Timeout;

	const debounceText = (text: string) => setDebouncedState(text);

	const debounce = () => {
		timer = setTimeout(() => {
			setDebouncedState(
				prettier
					.format(debouncedState, {
						parser: 'babel',
						plugins: [parser],
						useTabs: false,
						semi: true,
						singleQuote: true,
					})
					.replace(/\n$/, '')
			);
		}, 3500);
	};

	useEffect(() => {
		debounce();
		return () => clearTimeout(timer);
	}, [debouncedState]);

	return { debouncedText: debouncedState, debounceText };

	// const valueToDebounce=(property:string,value:string|number)=>
	//   setDebouncedState(prev=>({...prev,[property]:value}))

	// useEffect(() => {
	// 	let timer: number;
	// 	const listener = () => {
	// 		if (timer) clearTimeout(timer);
	// 		timer = setTimeout(() => {
	// 			setDebouncedState(window.innerWidth);
	// 			setDebouncedState(window.innerHeight);
	// 			if (window.innerWidth * 0.75 < width) {
	// 				setDebouncedState(window.innerWidth * 0.75);
	// 			}
	// 		}, 100);
	// 	};
	// 	window.addEventListener('resize', listener);

	// 	return () => {
	// 		window.removeEventListener('resize', listener);
	// 	};
	// }, [debouncedState]);
};
