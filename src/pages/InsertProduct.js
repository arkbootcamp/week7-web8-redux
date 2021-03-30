import React, { useState, useRef } from 'react'
import {useDispatch} from 'react-redux'
import {insertProduct} from '../configs/redux/actions/film'
import Button from '../components/Button'

function InsertProduct() {
  const dispatch = useDispatch()
  const imageRef = useRef(null)
  const [formProduct, setFormProduct] =useState({
    name: '',
    description: '',
    price: 0,
    idCategory: '',
    image: null
  })
  const handleChange = (e)=>{
    setFormProduct({
      ...formProduct,
      [e.target.name] : e.target.value
    })
  }
  const handleChangeImage = (e) =>{
    setFormProduct({
      ...formProduct,
      image: e.target.files[0]
    })
    console.log(e.target.files[0]);
  }
  const handleSaveProduct = (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', formProduct.name)
    formData.append('description', formProduct.description)
    formData.append('price', formProduct.price)
    formData.append('idCategory', formProduct.idCategory)
    formData.append('image', formProduct.image)
    imageRef.current.value = ""
    dispatch(insertProduct(formData))
    .then((res)=>{
      setFormProduct({
        name: '',
        description: '',
        price: 0,
        idCategory: '',
        image: null
      })

      alert('success insert product')
    })
    .catch((err)=>{
      alert('insert failed')
    })
  }
  return (
    <div className="container">
      <h1>Insert Product</h1>
      {/* <form> */}
      {/* <button onClick={() => imageRef.current.click()}>coba</button> */}
      <Button color="primary" title="simpan"/>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input type="text" name="name" value={formProduct.name} onChange={e => handleChange(e)} className="form-control" id="Name" />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description</label>
          <input type="text" name="description" value={formProduct.description} onChange={e => handleChange(e)} className="form-control" id="description" />
        </div>
        <div className="form-group">
        <label htmlFor="price">Price</label>
          <input type="number" name="price" value={formProduct.price} onChange={e => handleChange(e)} className="form-control" id="price" />
        </div>
        <div className="form-group">
        <label htmlFor="category">Kategory</label>
          <input type="text" name="idCategory" value={formProduct.idCategory} onChange={e => handleChange(e)} className="form-control" id="category" />
        </div>
        <div className="form-group">
        <label htmlFor="image">Image</label>
          <input type="file" ref={imageRef}  name="image" onChange={e => handleChangeImage(e)} className="form-control" id="image" />
        </div>
        <button type="submit" onClick={handleSaveProduct}>Simpan</button>
      {/* </form> */}
    </div>
  )
}

export default InsertProduct
