import { useCallback, useEffect, useState } from "@lynx-js/react";

import "../styles.scss";
import { ToggleTheme } from "./ToggleTheme.jsx";

export function Home() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	return(
		<page>
			<view className={isDarkMode ? 'view-dark' : 'view-ligh'}>
				<text>Hello world!</text>
			</view>
			<ToggleTheme></ToggleTheme>
		</page>
	);
}
