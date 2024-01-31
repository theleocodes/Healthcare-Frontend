import React from 'react'

function Login() {
  return (
    <div>
        <h1>Login to your account</h1>
        <div>
            <select name = "country" id = "country">
                <option value = "india"> 
                {/* <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACUCAMAAAAgTdyMAAAAk1BMVEXxWyUAaTT////wRAAAVgD60crL1MssLG8jI2vd3eXQ0NsYGGfw8PT8/P0AAFjz8/bn5+0fH2qrq7+KiqgnJ20AAGANDWTFxdO/v84SEmVZWYiSkq64uMmCgqOxscRNTX16ep1iYo49PXcyMnJxcZefn7d4eJZERHwAAFKCgptpaYtCQnVcXIOXl640NG4yMmQqKmYmata4AAAD3klEQVR4nO2ai46bOBRAU7e7foDBBoIJNhjybEKYzv9/3RrSaqru7I5UrbOydY/EEMFI9pGvuX5tNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB/yueY2fwRMxsUM8+y44IaPYztOGhDBX9Sqc+xS01pt9s6kVIm9XZ7KU36lHKfYZcXY1KTKqlklmXS3cluNxb5E0p+gp3aE4lJJgd5Z5Td3T0jWJK98l+0d7v8mFWyIla4nymiKHVtJiypJM6O3pvPtx1tayxtUfSILZ+Sxl2cob4orMR1Sz2X7tmO2QRXHV3ExKJychd1zYg47SqcTMxv8X7tBJbVNjNo7WLaXd33u3tisq0LT+G1fK92Yk/IYUlu6RKRi1n7/b5kBC4OhOy96vm0y4+7yrI1s52cRO8UX1zX6532EqEoZbbaef20+LQrElx3SCxhKTqO6BmhbwidKeLd0mJKoK7GSeGxBh7tUlztWld36hoLFQblNnd2y1+zGPXuK1O0u6ryOGzxaDfU5LL+aFwc0lHwseGvvBm5GJ3YqVnfXUg9+KuCP7v8K5YsXRummDmaO1TO4lXMJepmxOc1INOcSfzVX8/zZ6d3pHW1bxa/+ZoLrFTLXlWrFBb5dXZPU8XytCU77a0O3uz4pZJb4bK2dq3Ez7dUTywxLyZhk05vZ5cmCu2yvNjK6uJtQuTNTh3kY6DFi0khPlpB9NBMzaCJsPccqalYpWhLDt7G097sdJJo9OhR4n5hdLTqps1k9E3ZkbLL/ZHG88c/esKXHR8SbHLKFHMWvCdHc72edNM2+nS9miPpXcMJ95bmBieDr9D0ZSdGiY2LO2bKm1YpLSfdl2W7b8uyn6eS5kqfS8Nc7BosR1/DMV921JLktgQmT4V+IVPJTqOWBBOpxxMrp+qlpOnSZPktIdbXTMiXHduTy9sghHZ2X7IML2Ss3NvuzSe9kL2viZA3uwOxbkrHlDF9Meu5KE5HudrJ46lYn/TGuH4nkCUHsPsdIDJ/h7i/KnFnhB/ZvPnXbN4Ems3jHom5UTT5aRSdj5YSfYxmFP3eDEhGMwN6d/aq3mavPOjZ60crD481v2BXHj5aNTLru1BXjSJf8Yt7tTbylfZfdkmW/hXRLknkO1wf7k7aoHcnI99Zdp+W4R9OBVQRnApAv5zooGNUJzrQe6dx6iSa0zjobyepbEwnqRZiPgX3f7H5M2Y2X2Jm8ylmwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5cwC5c4rb7C4H+8Q/k21IlAAAAAElFTkSuQmCC"></img> */}/
                india
                 </option>
                <option value = "usa"> 
                usa
                {/* <img src = "https://www.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg"></img>  */}
                </option>
            </select>
            <input></input>
        </div>
        <div>
            <input type = "checkbox"></input>
            <span>I agree with terms and conditions</span>
        </div>
        <button>Send OTP</button>
    </div>
  )
}

export default Login