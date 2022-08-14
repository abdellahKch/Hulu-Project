import React from "react";
import { Container, Item, Row, Column, Link, Text, Break, Span} from "./styles/footer"
export default function Footer({ children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Footer.Item = function FooterItem({children, ...restProps}){
    return (<Item { ...restProps}>{children}</Item>)
}
Footer.Row = function FooterRow({children, ...restProps}){
    return (<Row { ...restProps}>{children}</Row>)
}
Footer.Column = function FooterColumn({children, ...restProps}){
    return (<Column { ...restProps}>{children}</Column>)
}
Footer.Link = function FooterLink({children, ...restProps}){
    return (<Link { ...restProps}>{children}</Link>)
}
Footer.Text = function FooterText({children, ...restProps}){
    return (<Text { ...restProps}>{children}</Text>)
}
Footer.Break = function FooterBreak({children, ...restProps}){
    return (<Break { ...restProps}>{children}</Break>)
}
Footer.Span = function FooterSpan({children, ...restProps}){
    return (<Span { ...restProps}>{children}</Span>)
}