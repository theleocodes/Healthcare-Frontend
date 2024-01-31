import React from 'react'

function Home() {
  return (
    <div>


        <div>
        {/* give this div a class , and make  its display property as  flex */}
            <div>
                <h2>Yoga for mind</h2>
                <span>watch our lead yoga <u> jdklfjalkds </u></span>
            </div>
            <div>
                {/* video */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hJbRpHZr_d0?si=CY1nrux3uJEwB5ZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>
         <span>is this for you</span>
        <div>
           {/* give this div a class , and make  its display property as  flex */}
            <div>
                {/* //any icon */}
                <p>hard to feel</p>
                {/* study diff between div, span , paragraph tag */}
                <button>Book trial</button>
            </div>
            <div>
                {/* //any icon */}
                <p>hard to feel</p>
                {/* study diff between div, span , paragraph tag */}
                <button>Book trial</button>
            </div>
            <div>
                {/* //any icon */}
                <p>hard to feel</p>
                {/* study diff between div, span , paragraph tag */}
                <button>Book trial</button>
            </div>
        </div>
    </div>
  )
}

export default Home