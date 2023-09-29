import { Promise } from "es6-promise"; // Import Promise explicitly
import dynamic from "next/dynamic";
import { Fragment } from "react";

const NoSSR = ({ children }) => <Fragment>{children}</Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
	ssr: false,
});
