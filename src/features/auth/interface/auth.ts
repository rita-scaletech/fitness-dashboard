export interface IAuthState {
	isLogin: boolean;
	userData: IUserData;
	userDetails: IUserDetails;
}

export interface ILoginResponse {
	data: IUserData;
	token: string;
}

export interface IUserData {
	id: string;
	email: string;
	role: string;
	status: string;
	avatar: string | null;
	name: string;
	token: string;
}

export interface IUserDetails {
	id: string;
	name: string;
	email: string;
	age: number;
	height: number;
	weight: number;
}
