import styled from "styled-components";

const ContactFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 490px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 40px;
	@media (max-width: 575px) {
		align-items: center;
		margin-bottom: 25px;
		button {
			width: 100%;
		}
	}
`;
export default ContactFormWrapper;
