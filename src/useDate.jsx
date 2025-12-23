import { useState, useEffect } from "react";

function useDate() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const date = now.toLocaleDateString("it-IT");
	const time = now.toLocaleTimeString("it-IT");

	return { date, time, now };
}

export default useDate;

