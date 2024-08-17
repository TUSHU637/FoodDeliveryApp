import React from 'react'
function Carausel({CarauselHandle}) {
  return (
   <div>
   <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{"objectFit":"contain"}} data-bs-ride="carousel">
  <div className="carousel-inner" style={{"maxHeight":"500px"}}>
  <div className='carousel-caption' style={{'zIndex':"10"}}>
  <div class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>CarauselHandle(e.target.value)} />
      {/* <button class="btn btn-outline-success text-white fs-3 bg-success" type="submit">Search</button> */}
  </div>
  </div>
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.F6VyuMUgr0Rx8wTNPJ8mBAHaIu?rs=1&pid=ImgDetMain" style={{backgroundPosition:"center",backgroundSize:"cover"}} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/wp/wp3376127.jpg" style={{backgroundPosition:"center",backgroundSize:"cover"}} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.fBe1gguUHhEyZuradl-J6QAAAA?rs=1&pid=ImgDetMain" style={{backgroundPosition:"center",backgroundSize:"cover"}} className="d-block w-100 img-fluid" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carausel