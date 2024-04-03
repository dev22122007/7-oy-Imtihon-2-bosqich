import {Link} from "react-router-dom"
import "../styles/CategoryList.css"

function CategoryList(props) {

    const categoryNames = ["headphones", "speakers", "earphones"]
    const categoryPhotoLinks = ["/assets/shared/desktop/image-category-thumbnail-headphones.png","/assets/shared/desktop/image-category-thumbnail-speakers.png","/assets/shared/desktop/image-category-thumbnail-earphones.png"]
    
    let categoryListElements = []

    function renderCategoryListElements() {
        for(let i = 0; i < categoryNames.length; i++) {
            categoryListElements.push(
                <div key={i} className="categoryList_category"> 
                    <img className="categoryList_img" src={categoryPhotoLinks[i]} />
                    <h2 className="categoryList_name"> {categoryNames[i]}</h2>
                    <div className="categoryList_link-container">
                        <Link alt="link to shop the selected category" onClick={props.onClick} to="/ProductList" state={{ category: categoryNames[i]}} className="categoryList_link">shop </Link>
                        <svg className="categoryList_svg" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                            <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            )
        } 
        return categoryListElements
    }

    return (
        <section className="categoryList_container">
            {renderCategoryListElements()}
        </section>
    )
}

export default CategoryList