import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AjouterProduit from "./AjouterProduit";

type DataProduit = {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    rating:{
      rate: number,
      count: number
    }
}

const Product = ()=>{
  
    //-----> state
    const [produits,setProduits]=useState<DataProduit[]>([]);
    const [produitsAffiches,setProduitsAffiches]=useState<DataProduit[]>([]);
    const [pageProduit,setPageProduit]=useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 2;
    // const [pageSize,setPageSize]=useState(0);
    //---------> la logique 
    // recuperer tous les produits
    useEffect(()=>{
        const produitDate = async ()=>{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProduits(data);
            const page = Math.ceil(data.length/itemsPerPage);
            const pages = Array.from({length:page},(_,i)=>i+1);
            setPageProduit(pages);
        }
        produitDate();
    },[]);
    // filtre les produits a travers la pagination
    useEffect(()=>{
        const start = (currentPage - 1) * itemsPerPage;
        const end = currentPage * itemsPerPage;
        const produitsAffiche = produits.slice(start, end);
        setProduitsAffiches(produitsAffiche);
    },[produits, currentPage])
    //-----> suprimer produit a travers id
    const handleRemove=async (id:number,title:string)=>{
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`,{method:"DELETE"});
            if(!res.ok){
                toast.error("Erreur lors de la suppression du produit: "+title);
                return;
            }
            const data = await res.text();
            console.log("response delete produit",data);
            // mettre a jour a produits
            const produitsFiltres = produits.filter((p) => p.id !== id);
            setProduits(produitsFiltres);
            toast.success("Produit supprimé avec succès !");
             // Recalculer les pages
            const totalPages = Math.ceil(produitsFiltres.length / itemsPerPage);
            const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
            setPageProduit(pages);

            // Corriger la page actuelle si elle dépasse le total
            const newCurrentPage = currentPage > totalPages ? totalPages : currentPage;
            setCurrentPage(newCurrentPage);

            // Mettre à jour les produits affichés
            const newProduitsAffiches = produitsFiltres.slice(
            (newCurrentPage - 1) * itemsPerPage,
            newCurrentPage * itemsPerPage
            );
            setProduitsAffiches(newProduitsAffiches);
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    }

    //----->rendu
    return <>
        <div className="container-fluid mx-auto w-75 my-3 ">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2>Liste des Produits</h2>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ajouterProduit" >+ Ajouter un Produit</button>
                <AjouterProduit tagretId = "ajouterProduit"/>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Image</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Description</th>
                    <th scope="col">Note</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {produitsAffiches.map((fruit, index) => (
                    <tr key={index}>
                    <th scope="row">{(currentPage - 1) * itemsPerPage + index + 1}</th>
                    <td>{fruit.title}</td>
                    <td>
                        <img
                        src={fruit.image}
                        alt={fruit.title}
                        style={{ width: '50px', height: 'auto' }} 
                        />
                    </td>
                    <td>{fruit.price} €</td>
                    <td>{fruit.description.length > 50 ? fruit.description.slice(0, 50) + "..." : fruit.description}</td>
                    <td>{fruit.rating.rate} / 5</td>
                    <td>
                        <button type="button" className="btn btn-danger mt-2" onClick={() => handleRemove(fruit.id, fruit.title)}>Supprimer</button>
                        <button type="button" className="btn btn-success mt-2">Modifier</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="m-auto">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                     <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
                    </li>

                    {pageProduit.map((page) => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                     <a className="page-link" href="#" onClick={() => setCurrentPage(page)}>{page}</a>
                    </li>
                    ))}

                    <li className={`page-item ${currentPage === pageProduit.length ? 'disabled' : ''}`}>
                     <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>Next</a>
                    </li>

                </ul>
            </nav>
        </div>
    </>
}
export default Product;