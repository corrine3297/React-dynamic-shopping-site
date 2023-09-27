import React from 'react';
import MyStyles from '../components/MyStyles.module.css';
import './CreateProduct.css';


function CreateProduct() {


    return (
        <>            
        {/* Product adding section */}
            <div className={MyStyles.productContainer}>
                <div className={MyStyles.productTitle}>
                    Add New Product
                </div>
                <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>  
                <div className="form-container" >
                
                <div className='row'>
                    <div className="col-6 poster">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="ProductName" id="productName" placeholder="Product Name"
                            // onChange={(e) => validateInput(e)}
                            />
                            <label for="productName">Product Name</label>
                            {/* {
                                !isEmailAddressValid &&
                                <div className='mb-3 text-danger'>Invalid Email address</div>
                            } */}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="ProductType" id="productType" placeholder="Product Type"
                            // onChange={(e) => validateInput(e)}
                            />
                            <label for="productType">Product Type</label>
                            {/* {
                                !isEmailAddressValid &&
                                <div className='mb-3 text-danger'>Invalid Email address</div>
                            } */}
                        </div>
                         <div className="form-floating mb-3">
                            <textarea type="text" class="form-control h-25" rows="5" name="ProductDescription" id="productDescription" placeholder="Product Description"
                            // onChange={(e) => validateInput(e)}
                            />
                            <label for="productDescription">Product Description</label>
                            {/* {
                                !isEmailAddressValid &&
                                <div className='mb-3 text-danger'>Invalid Email address</div>
                            } */}
                        </div>
                    </div>
                    <div className="col-6 poster">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" name="ProductPrice" id="productPrice" placeholder="Product Price"
                            // onChange={(e) => validateInput(e)}
                            />
                            <label for="productPrice">Product Price</label>
                            {/* {
                                !isEmailAddressValid &&
                                <div className='mb-3 text-danger'>Invalid Email address</div>
                            } */}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="ProductQuantity" id="productQuantity" placeholder="Product Quantity"
                            // onChange={(e) => validateInput(e)}
                            />
                            <label for="productQuantity">Product Quantity</label>
                            {/* {
                                !isEmailAddressValid &&
                                <div className='mb-3 text-danger'>Invalid Email address</div>
                            } */}
                        </div>
                        <div className='form-floating' style={{marginTop:"60px",display:'flex',flexWrap:'nowrap', justifyContent:'flex-end'}}>
                            {/* <input className={MyStyles.landingButton} style={{marginRight:'20px'}} type="submit" value='submit' /> */}
                            <input className={MyStyles.landingButton} style={{marginRight:'10px'}} type="button" value='submit' />
                            <input className={MyStyles.landingButton} type="button" value='clear' />
                        </div>
                    </div>
                </div>
                </div> 
                </div>


            </div>
        </>
    )
}

export default CreateProduct