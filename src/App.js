import React  from "react";
import {Footer} from "./components"
export default  function App(){

  return(
  <Footer>
    <Footer.Item>
      <Footer.Row>
        <Footer.Column>
          <Footer.Span hred="#">Streaming</Footer.Span>
          <Footer.Break />
          <Footer.Span hred="#">Library</Footer.Span>
          <Footer.Break />
          <Footer.Link hred="#">Live Tv</Footer.Link>
          <Footer.Link hred="#">Live News</Footer.Link>
          <Footer.Link hred="#">Live Sports</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer.Item>
  </Footer>)

}

