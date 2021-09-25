import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #121212;

}

body::-webkit-scrollbar {
  width: 10px;
  
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
}
 
body::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 30px;
}

`