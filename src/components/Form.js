import React, { useState } from "react";

const Form = () => {
	const [active, setActive] = useState(false);
	return (
		<div id="form-wrapper">
			<form
				id="form"
				onMouseEnter={() => {
					setActive(true);
				}}
				onClick={() => {
					setActive(true);
				}}
				onMouseLeave={() => {
					setActive(false);
				}}>
				<div>
					<label
						htmlFor="what"
						className={active === true ? "focus-label" : "label"}>
						What are you planning?
					</label>
					<select
						id="what"
						name="what"
						defaultValue=""
						className={active === true ? "focus-select" : "select"}>
						<option value="" disabled hidden>
							What?
						</option>
						<option value="1">Select</option>
						<option value="2">Select</option>
						<option value="3">Select</option>
						<option value="4">Select</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="which"
						className={active === true ? "focus-label" : "label"}>
						Activity
					</label>
					<select
						id="which"
						name="which"
						defaultValue=""
						className={active === true ? "focus-select" : "select"}>
						<option value="" disabled hidden>
							Which?
						</option>
						<option value="1">Select</option>
						<option value="2">Select</option>
						<option value="3">Select</option>
						<option value="4">Select</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="where"
						className={active === true ? "focus-label" : "label"}>
						Location
					</label>
					<select
						id="where"
						name="where"
						defaultValue=""
						className={active === true ? "focus-select" : "select"}>
						<option value="" disabled hidden>
							Where?
						</option>
						<option value="1">Select</option>
						<option value="2">Select</option>
						<option value="3">Select</option>
						<option value="4">Select</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="when"
						className={active === true ? "focus-label" : "label"}>
						Date
					</label>
					<input
						type="date"
						id="when"
						name="when"
						placeholder="When?"
						className={active === true ? "focus-input" : "input"}
					/>
				</div>
				<input type="submit" value="Search" id="submit" />
			</form>
		</div>
	);
};

export default Form;
