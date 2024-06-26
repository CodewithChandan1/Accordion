import React from 'react'

export default function Home() {
  return (
    <>
     <div className="wrapper">
    {/* <!-- Accordion Heading One --> */}
    <div className="parent-tab">
      <input type="radio" name="tab" id="tab-1" checked />
      <label for="tab-1">
        <span>Accordion Heading One</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit. Quam, repellendus facere, id porro magnam blanditiiss quoteos dolores ratione quidem ipsam esse quos pariatur, repellat obcaecati!</p>
      </div>
    </div>

    {/* <!-- Accordion Heading Two --> */}
    <div className="parent-tab">
      <input type="radio" name="tab" id="tab-2"/>
      <label for="tab-2">
        <span>Accordion Heading Two</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit. Quam, repellendus facere, id porro magnam blanditiiss quoteos dolores ratione quidem ipsam esse quos pariatur, repellat obcaecati!</p>
      </div>
    </div>

    {/* <!-- Accordion Heading Three --> */}
    <div className="parent-tab tab-3">
      <input type="radio" name="tab" id="tab-3"/>
      <label for="tab-3" className="tab-3">
        <span>Accordion Heading Three</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        {/* <!-- Sub Heading One --> */}
        <div className="child-tab">
          <input type="checkbox" name="sub-tab" id="tab-4"/>
          <label for="tab-4">
            <span>Sub Heading One</span>
            <div className="icon"><i className="fas fa-plus"></i></div>
          </label>
          <div className="sub-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit dolor. Utfacilis labore, exercitationem fuga minima a illo modi vitaerse dignissimos? Vero?</p>
          </div>
        </div>
        {/* <!-- Sub Heading Two --> */}
        <div className="child-tab">
          <input type="checkbox" name="sub-tab" id="tab-5"/>
          <label for="tab-5">
            <span>Sub Heading Two</span>
            <div className="icon"><i className="fas fa-plus"></i></div>
          </label>
          <div className="sub-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit dolor. Utfacilis labore, exercitationem fuga minima a illo modi vitaerse dignissimos? Vero?</p>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Accordion Heading Four --> */}
    <div className="parent-tab">
      <input type="radio" name="tab" id="tab-6"/>
      <label for="tab-6">
        <span>Accordion Heading Four</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing thelit. Quam, repellendus facere, id porro magnam blanditiiss quoteos dolores ratione quidem ipsam esse quos pariatur, repellat obcaecati!</p>
      </div>
    </div>
  </div>
    </>
  )
}
