import React from 'react'

export default function About() {
    return (
        <div id="description" className="basic-1" style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="https://kefalomaniacarrental.com/wp-content/uploads/2021/05/about-us-banner.jpg" alt="alternative" />
                        </div> {/* end of image-container */}
                    </div> {/* end of col */}
                    <div className="col-lg-6">
                        <div className="text-container" style={{ textAlign: 'justify' }}>
                            <h2>We Are Career Craftors</h2>
                            <p>Career Craftors has a long history of connecting opportunities at great companies with highly skilled job seekers. Bolstered by the strength of our brand, people, technology, and professional business model, we find substantial and exciting employment for the candidates we place. Also, provide clients access to the specialized talent they need to help grow their businesses.</p>

                            <p>We were the first to introduce the concept of professional talent solutions, and as the needs of businesses have changed, so have we. Our management team saw the value in shifting to a more specialized talent solutions strategy and began hiring contract workers with greater skill levels.</p>

                            <p>Our clients and candidates found value in professional-level talent solutions, which is why we launched a series of contract professional staffing divisions in the finance and accounting, legal, creative and marketing, technology, and administrative fields. Local businesses of all sizes turn to Career Kraftors for our personalized recruitment approach and unprecedented access to the most qualified talent for interim recruitment, project consulting, and permanent recruitment needs.</p>

                        </div> {/* end of text-container */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div>
    )
}
