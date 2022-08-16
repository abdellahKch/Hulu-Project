import React from "react"
import  { Footer }  from "../components"
export function FooterContainer(){
    return(<Footer> 
            <Footer.Megacontainer>
             <Footer.Ultra>
              <Footer.Linkc>
                <Footer.Browsec>
                  <Footer.Hthree>Hello</Footer.Hthree>
                  <Footer.Container>
                    <Footer.Row>
                      <Footer.Link>
                        <Footer.Span>Streaming Library</Footer.Span>
                      </Footer.Link>
                      <Footer.Span><Footer.Link href="#">Live Tv</Footer.Link></Footer.Span>
                      <Footer.Link href="#">Live News</Footer.Link>
                      <Footer.Link href="#">Live Sports</Footer.Link>
                    </Footer.Row>
                  </Footer.Container>
                </Footer.Browsec>
              </Footer.Linkc>
             </Footer.Ultra>
            </Footer.Megacontainer>
          </Footer>)
}