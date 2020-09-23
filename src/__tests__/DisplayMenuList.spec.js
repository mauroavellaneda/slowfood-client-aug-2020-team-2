import React from "react";
import { shallow } from "enzyme";
import MenuList from "../components/MenuList";
import axios from "axios";

describe("<MenuList />", () => {
	it('should fetch MenuList from api using Axios', () => {
		const axiosSpy = jest.spyOn(axios, 'get')
		shallow(<MenuList/>)
		expect(axiosSpy).toBeCalled()
	});
})