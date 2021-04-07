import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
     margin:0;
     padding:0;
     box-sizing:border-box;
 }

 body {
   background: #212529;
   font-size: 14px;
   color:#e9ecef;
   font-family:'Roboto',sans-serif  
 }

`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	max-width: 1300px;
	margin: auto;
`;
