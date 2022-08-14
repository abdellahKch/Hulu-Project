import styled from "styled-components/macro"
//  Container, Item, Row, Column, Link, Text

export const Container = styled.div`
width: 100%;
background-color: #e8eaed;
display: flex;
padding: 70px 0;
margin: auto ;
max-width: 1000px;
flex-direction: column;
`
export const Item = styled.div`
width: 80%;
display: flex;
border-bottom: 1.5px solid #333;
border-width: 80%;
padding: 50px 5%;
color: white;
overflow: hidden;
`
export const Row = styled.div`
`
export const Column = styled.div`
width: 150px;
`
export const Link = styled.p`
color: black;
margin-buttom: 50px;
font-family: Graphik Web';

`
export const Text = styled.p`
`
export const Break = styled.div`
`
export const Span = styled.span`
color: black;
font-family: Graphik Web'
font-size: 13px;
text-decoration: none;
`