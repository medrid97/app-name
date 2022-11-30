import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newCoach} from '../../actions/coachActions'
import { NEW_COACH_RESET } from '../../constants/coachConstants'
import BannerImage from '../../assets/interior.jpg'
import '../../styles/NewProduct.css'
import { Link } from 'react-router-dom'
const NewCoach = ({ history }) => {
    const dispatch = useDispatch();

    // const newProduct = (productData) => async (dispatch) => {
    //     try {
    
    //         dispatch({ type: "NEW_PRODUCT_REQUEST" })
    
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    
    //         const { data } = await axios.post(`http://localhost:5000/api/v1/product/new`, productData, config) // bch nbdedlou lien berk
    
    //         dispatch({
    //             type: "NEW_PRODUCT_SUCCESS",
    //             payload: data
    //         })
    
    //     } catch (error) {
    //         dispatch({
    //             type: "NEW_PRODUCT_FAIL",
    //             payload: error.response.data.message
    //         })
    //     }
    // }

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
  
    const [stock, setStock] = useState(0);
    
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

   



    const { loading, error, success } = useSelector(state => state.newCoach);

    useEffect(() => {

        if (error) {
            alert(error);
            
        }

        if (success) {
            // history.push('/coachs');
            <Link to="/tr">Coach</Link>
            alert.success('Coach created successfully');
            dispatch({ type: NEW_COACH_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('description', description);
        
        
       

        images.forEach(image => {
            formData.append('images', image)
        })
        // const newProductData ={
        // name : name,
        // price : price , 
        // description : description , 
        // stock : stock ,
        // images : ""}

        dispatch(newCoach(formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }


    return (
        <>
            
            <div className="row" style={{backgroundImage:'url('+BannerImage+')'}}>
                <div className="col-12 col-md-2">
                    
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                              <h1 className="mb-4">New Coach</h1>

                              <div className='form-group'>
                                    <label>Choose Image</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input form-control'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>

                                <div className="form-group">
                                
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                

                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>


                                <button
                                    id="login_button"
                                    onClick={submitHandler}
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </>
    )
}

export default NewCoach
