import React from 'react'
import { API } from '../../backend';


const Imagehelper = ({ product }) => {
    const imageurl = product ? `${API}/product/photo/${product._id}` : `https://images.pexels.com/photos/3130370/pexels-photo-3130370.jpeg?cs=srgb&dl=grayscale-photo-of-man-in-sleeveless-shirt-3130370.jpg&fm=jpg`

    return (
        <div className="rounded border border-primary p-2">
            <img
                src={imageurl}
                alt="photo"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    )
}
export default Imagehelper;