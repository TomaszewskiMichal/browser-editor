import { useEffect, useState } from 'react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

export const useDebouncedText = () => {
	const [debouncedState, setDebouncedState] = useState('');
	const [rawInput, setRawInput] = useState('');
	let timer: NodeJS.Timeout;

	const debounceText = (text: string) => setRawInput(text);

	const debounce = () => {
		timer = setTimeout(() => {
			setDebouncedState(
				prettier
					.format(rawInput, {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rawInput]);

	return { debouncedText: debouncedState, debounceText };
};
