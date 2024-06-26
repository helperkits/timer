/* * */

class TIMETRACKER {
	//

	private startTime: number;

	constructor() {
		this.startTime = Date.now();
	}

	//

	get(reset = false) {
		//

		const elapsedTime = Date.now() - this.startTime;

		const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
		const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
		const seconds = Math.floor(elapsedTime / 1000) % 60;
		const milliseconds = elapsedTime % 1000;

		let string = '';

		if (hours > 0) string += `${hours}h `;
		if (minutes > 0) string += `${minutes}m `;
		if (seconds > 0) string += `${seconds}s `;
		if (milliseconds > 0) string += `${milliseconds}ms`;

		if (reset) this.reset();

		return string;

		//
	}

	//

	reset() {
		this.startTime = Date.now();
	}

	//
}

/* * */

export default TIMETRACKER;
