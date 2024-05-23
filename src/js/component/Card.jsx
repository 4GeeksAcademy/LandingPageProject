import React from "react";
import PropTypes from 'prop-types';

const Card = () => {
    return(
			<div className="col-sm-12 col-lg-3 d-flex justify-content-center">
				<div className="card mt-3" style={{width: '25rem'}}>
					<img src= "https://as1.ftcdn.net/v2/jpg/03/66/97/98/1000_F_366979862_5ck0VAnKsrhYNiReIXpouEWt6Bqk39Uz.jpg" className="card-img-top" alt=""/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
    )
}

export default Card