import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newProduct } from "../../actions/productActions";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import BannerImage from "../../assets/interior.jpg";
import "../../styles/NewProduct.css";
import { Link } from "react-router-dom";
const NewProduct = ({ history }) => {
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

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [stock, setStock] = useState(0);

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, error, success } = useSelector((state) => state.newProduct);

  useEffect(() => {
    if (error) {
      alert(error);
    }

    if (success) {
      // history.push('/products');
      <Link to="/p">Product</Link>;
      alert.success("Product created successfully");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price);
    formData.set("description", description);

    formData.set("stock", stock);

    images.forEach((image) => {
      formData.append("images", image);
    });
    // const newProductData ={
    // name : name,
    // price : price ,
    // description : description ,
    // stock : stock ,
    // images : ""}

    dispatch(newProduct(formData));
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div
        className="row"
        style={{ backgroundImage: "url(" + BannerImage + ")" }}
      >
        <div className="col-12 col-md-12">
          <Fragment>
            <div className="wrapper my-5">
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-4">Fitness First </h1>

                <div className="form-group">
                  


                 
                  
                </div>

                <div className="form-group">
                  <label htmlFor="name_field">User </label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name_field">Password</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    
                    
                  />
                </div>

                

                

               

              <div  >

              <Link to ="/admin/products"><button className="btn-login" > LOGIN </button> </Link>  
              </div>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
