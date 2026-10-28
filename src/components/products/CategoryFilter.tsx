import Button from "../common/Button";
import type { Category } from "../../types";

interface CategoryFilterProps{
    categories:Category[],
    selectedId:number|undefined,
    onSelect:(select:number|undefined) => void
}

const CategoryFilter = ({categories,onSelect,selectedId}:CategoryFilterProps) => {

    return <div className="flex flex-wrap gap-2 mb-6">
        <Button onClick={()=>onSelect(undefined)} variant={selectedId===undefined?"primary":"secondary"}>הכול</Button>
        {categories.map((category)=><Button key={category.id} onClick={()=>onSelect(category.id)} variant={selectedId===category.id? "primary":"secondary"}>{category.name}</Button>)}
    </div>
}

export default CategoryFilter;