import React  from "react";
import {Footer} from "./components"
export default  function App(){

  return(
  <Footer>
    <Footer.Item> 
      <Footer.Row>
        <Footer.Column margin = {"10"}>
          <Footer.Span hred="#">Streaming</Footer.Span>
          <Footer.Break />
          <Footer.Span hred="#">Library</Footer.Span>
          <Footer.Break />
          <Footer.Link hred="#">Live Tv</Footer.Link>
          <Footer.Link hred="#">Live News</Footer.Link>
          <Footer.Link hred="#">Live Sports</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link hred="#">Tv Shows</Footer.Link>
          <Footer.Link hred="#">Movies</Footer.Link>
          <Footer.Link hred="#">Originals</Footer.Link>
          <Footer.Link hred="#">Networks</Footer.Link>
          <Footer.Link hred="#">Kid </Footer.Link>
          <Footer.Link hred="#">FX</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link hred="#">HBO Max</Footer.Link>
          <Footer.Link hred="#">Cinemax</Footer.Link>
          <Footer.Link hred="#">ShowTime</Footer.Link>
          <Footer.Link hred="#">Starz</Footer.Link>
        </Footer.Column>
        <Footer.Column margin = {"10"}>
          <Footer.Span hred="#">Hulu, Disney+,</Footer.Span>
          <Footer.Break />
          <Footer.Span hred="#">And ESPN Plus</Footer.Span>
          <Footer.Break />
          <Footer.Span hred="#">Hulu (No Ads), </Footer.Span>
          <Footer.Break />
          <Footer.Span hred="#">Disney +, and</Footer.Span>
          <Footer.Break />
          <Footer.Span href="#">ESPN +</Footer.Span>
          <Footer.Link hred="#">Student Discount</Footer.Link>
        </Footer.Column>
        <Footer.Column margin = {"10"}>
          <Footer.Span hred="#">Accounting &</Footer.Span>
          <Footer.Break />
          <Footer.Span hred="#">Billing</Footer.Span>
          <Footer.Break />
          <Footer.Link hred="#">Plans & Pricing</Footer.Link>
          <Footer.Span hred="#">Supported</Footer.Span>
          <Footer.Break />
          <Footer.Span hred="#">Devices</Footer.Span>
          <Footer.Break />
          <Footer.Link hred="#">Accessibility</Footer.Link>
        </Footer.Column>
        <Footer.Column>
        <Footer.Link hred="#">Shop Hulu</Footer.Link>
        <Footer.Link hred="#">Press</Footer.Link>
        <Footer.Link hred="#">Jobs</Footer.Link>
        <Footer.Link hred="#">Constact</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer.Item>
  </Footer>)

}

