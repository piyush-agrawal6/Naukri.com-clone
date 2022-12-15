import {
	REGISTER_FAILURE,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
} from "./actionTypesRegister";
import axios from "axios";

export const registerAPI = (creds) => (dispatch) => {
	dispatch({ type: REGISTER_LOADING});

	let data = {
		name: creds.name,
		email:creds.email,
		password: creds.password,
		username: creds.username,
		mobile: creds.mobile,
		description: creds.description,
	};
	
	localStorage.setItem("nameUser", JSON.stringify(creds.name));

	data=JSON.stringify(data)

	const headers = {
		"Content-Type": "application/json",
	};
	
	axios
		.post("https://masai-api-mocker.herokuapp.com/auth/register", data, {
			headers: headers,
		})
		.then((r) => dispatch({ type: REGISTER_SUCCESS, payload: r.data }))
		.catch((e) => dispatch({ type: REGISTER_FAILURE,payload:e }));
};