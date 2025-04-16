import { useState } from "react";

type DataProduit = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating:{
      rate: number
    }
}
const AjouterProduit = ({tagretId}:{tagretId:string})=>{
    
    // state
    const [produit,setProduit] = useState<DataProduit>({
        id: 0,
        title: '',
        price: 0,
        description: '',
        rating:{
            rate: 0
        },
        image: ''
      });

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
       const {name,value}=e.target;
       if(name=="rating.rate"){
        setProduit((prv)=>({
            ...prv,
            rating: {
                ...prv.rating,
                rate: parseFloat(value),
              },
        }));
       }else{
        setProduit((prev) => ({
            ...prev,
            [name]: value
          }));
       }
      
    }

    const handleSubmit = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        e.preventDefault();
        console.log("save produit",produit);
        
    }

    return <>
        <div className="modal fade" id={tagretId} tabIndex={-1} aria-labelledby="modalAjoutProduit" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="modalAjoutProduit">Ajouter Produit</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Titre</label>
                            <input type="text" className="form-control" value={produit?.title} name="title" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Prix</label>
                            <input type="number" step="0.01" className="form-control" name="price" value={produit.price}  onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" name="description" value={produit.description} rows={3}  onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rate</label>
                            <input type="number" className="form-control" name="rating.rate" value={produit.rating.rate}  onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image (URL)</label>
                            <input type="text" className="form-control" name="image" value={produit.image}  onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
                </div>
            </div>
        </div>
    </>
}

export default AjouterProduit;