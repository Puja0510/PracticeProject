import styled from 'styled-components';

export const ContentHolder = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
${props => props.margin && `margin : ${props.margin};`}
${props => props.padding && `padding : ${props.padding};`}
${props => props.display &&  `display : ${props.display};`}
${props => props.flexDirection && `flex-direction : ${props.flexDirection};`}
${props => props.jc && `justify-content : ${props.jc};`}
${props => props.ai && `align-items : ${props.ai};`}
${props => props.width && `width : ${props.width};`}
${props => props.height && `height : ${props.height};`}
`

export const InputDiv = styled.input`
 padding: 1rem;
 
  input {
    
  }
`

export const ListItem = styled.div`
 padding: 0.5rem;
 border: 0.5px solid grey;
 display: flex
 align-items: center;
 margin-top: 5px;
`

export const Lists = styled.div`

`

export const Center = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
   display: flex;
   gap: 10px;
   padding: 5px 0 5px 0;
  //  width: 100%;
   justify-content: space-between;

   & input {
       padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    flex: 1;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }
   }
`;

export const Btn = styled.div`
 display: flex;
 justify-content: space-between;
`
