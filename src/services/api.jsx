import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:8000/api'

const CreateProduct = () =>{
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
   const [description, setDescription] = useState('')
   const [image, setImage] = useState(null)
   const[disponibility, setDisponibility] = useState(false)
  
   const navigate = useNavigate()

    // Procedimiento para guardar
    const store = async (e) => {
        e.preventDefault();
        try {
            if(!name||!price||image===null||!description){
                alert("Por favor complete todos los campos");
                return;
            }
            let imageUrl = null;
            if(image){
                const formData =new FormData();
                formData.append('image', image);
                const response = await axios.post(`${API_URL}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                imageUrl = response.data.url;
            }
            
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('description', description);
            formData.append('image', imageUrl || image);
            formData.append('disponibility', disponibility);

          await axios.post(`${API_URL}/products`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          navigate('/products');
        }catch (error) {
            console.log(error)
        }
        return
    }    
}
export default CreateProduct;

