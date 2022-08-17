import React from "react";
import { Wraper,
         Megacontainer,
         Ultra,
         Linkc,
         Browsec,
         Hthree,
         Container,
         Row,
         Link,
         Span,
         Break,
         Column,
         Logocon,
         LegalLinksc,
         LegaLR,
         Containerl,
         Linkimg,
         Linklogo} from "./styles/footer"
export default function Footer( {children, ...restProps}){ 
    
    return (
            <Wraper {...restProps}>{children}</Wraper>
   
    )
}
Footer.Megacontainer = function MegaContainer({children, ...restProps}){
    return (<Megacontainer { ...restProps}>{children}</Megacontainer>)
} 
Footer.Ultra = function MegaUltra({children, ...restProps}){
    return (<Ultra { ...restProps}>{children}</Ultra>)
}
Footer.Linkc = function Linkconc({ children, ...restProps}){
    return(<Linkc {...restProps}>{children}</Linkc>)
} 
Footer.Browsec = function FooterBrowec({children, ...restProps}){
    return (<Browsec {...restProps}>{children}</Browsec>)
}
Footer.Hthree = function FooterHthree({children, ...restProps}){
    return(<Hthree {...restProps}>{children}</Hthree>)
}
Footer.Container = function FooterContainer({children, ...restProps}){
    return(<Container {...restProps}>{children}</Container>)
}
Footer.Row = function FooterRow({children, ...restProps}){
    return(<Row {...restProps}>{children}</Row>)
}
Footer.Link = function FooterLink({children, ...restProps}){
    return(<Link {...restProps}>{children}</Link>)
}
Footer.Span = function FooterSpan({children, ...restProps}){
    return(<Span {...restProps}>{children}</Span>)
}
Footer.Break = function FooterBreak({children, ...restProps}){
    return(<Break {...restProps}>{children}</Break>)
}
Footer.Column = function FooterColumn({children, ...restProps}){
    return(<Column {...restProps}>{children}</Column>)
}
Footer.Logocon = function FooterLogoc({children, ...restProps}){
    return(<Logocon {...restProps}>{children}</Logocon>)
}
Footer.LegalLinksc = function FooterLegalLinksc({children, ...restProps}){
    return(<LegalLinksc {...restProps}>{children}</LegalLinksc>)
}
Footer.LegaLR = function FooterLegaLR({children, ...restProps}){
    return(<LegaLR {...restProps}>{children}</LegaLR>)
}
Footer.Containerl = function FooterLegaLR({children, ...restProps}){
    return(<Containerl {...restProps}>{children}</Containerl>)
}
Footer.Linkimg = function FooterLinkimg({children, ...restProps}){
    return(<Linkimg {...restProps}>{children}</Linkimg>)
}
Footer.Linklogo = function FooterLink({children, ...restProps}){
    return(<Linklogo {...restProps}>{children}</Linklogo>)
}
