import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const MobileList = () => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div  className='card' style={{textAling:'center'}}>

                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to='/product/mobile/iphone' className='btn btn-primary'>I phone</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/product/mobile/vivo' className='btn btn-primary'>vivo</Link>

                    </li>
                    <li className="list-group-item">
                        <Link to='/product/mobile/samsang' className='btn btn-primary'>samsang</Link>

                    </li>
                </ul>



                {/* <div className="card-body">
                    <h5 className="card-title">Mobile 1</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Rs 1,00,000</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Mobile 2</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Rs 1,00,000</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Mobile 3</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Rs 1,00,000</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> */}


            </div>
            <Outlet/>
        </div>
        


    )

}

export default MobileList