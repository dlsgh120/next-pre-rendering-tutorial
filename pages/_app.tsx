import React from "react";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#e5e5e5;
    padding:0;
    margin:0;
  }
  a{
    text-decoration:none;
    color:#333333;
    cursor: pointer;
  }
`;


interface Props{
    Component: any;
    pageProps: any;
}

class App extends React.Component<Props>{
    render(){
        const {Component, pageProps} = this.props;
        return(
            <>
            <GlobalStyle />
            <Component {...pageProps} />
            </>
        );
    }
}

export default App;