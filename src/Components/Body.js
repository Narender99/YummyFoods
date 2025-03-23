import { ResturantCard } from "./ResturantCard"

export const Body = () => {
    return <div>
        <div>
            <input type="search" placeholder="Search for food" className="search-bar"/>
            <div className="resturant-container">
                <ResturantCard />
            </div>
        </div>
    </div>
}