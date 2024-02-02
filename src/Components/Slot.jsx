import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./slot.css";

function Slot() {
  return (
    <div className='slot-div'>
      <h1>Yoga for mind</h1>
      <br />
      <iframe className='yoga-video' src="https://www.youtube.com/embed/9MazN_6wdqI?si=6TFAdrzCpTIAMxgP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h2>What is yoga for mind?</h2>
      <br />
      <p>The yoga for mind session involves minimal physical moment and relies on techniques such as pranayam and meditation. Suited for women who cannot perform more physical forms of yoga and looking for relief from concerns such as stress, anxiety, low mood etc.</p>

      <p>Yoga <ArrowRightIcon/> Yoga For Mind <ArrowRightIcon /> Package</p>

      <h2>1 Month Yoga for mind</h2>
      <h4>5 days a week <b>Change Plan</b> </h4>

      <h3>Pick a start date</h3>
      <p>dates are available only for next 2 weeks</p>

      <div className='dates-list'>
        <ArrowLeftIcon />
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
        <div className='dates-div'>
          <p>29th Jan</p>
          <p>Mon</p>
        </div>
      </div>
      <h3>Select time slot</h3>
      <div className='slot-time'>
        <p><AccessTimeIcon></AccessTimeIcon> 05:00PM-05:40PM</p>
        <p>MON,TUE,WED,THU,FRI</p>
      </div>
      <div className='slot-time'>
        <p><AccessTimeIcon></AccessTimeIcon> 05:00PM-05:40PM</p>
        <p>MON,TUE,WED,THU,FRI</p>
      </div>
      <button className='slot-buy'>Buy Package</button>
    </div>
  )
}

export default Slot