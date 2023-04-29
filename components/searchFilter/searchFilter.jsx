import {React ,useState , useMemo} from "react";
import { Dropdown ,Input} from "@nextui-org/react";
import {FaSearch} from 'react-icons/fa'
import styles from './searchFilter.module.scss'
import { CourseCard } from "../courseCard/courseCard";



const SearchFilter = (props) => {
    const [selected, setSelected] = useState(new Set(["Category"]));

    const selectedValue = useMemo(
      () => Array.from(selected).join(", ").replaceAll("_", " "),
      [selected]
    );
  const categories = require('../../data/categories.json')
  const courses = require('../../data/courses.json')
  const [searchInput, setsearchInput] = useState("")
  console.log(searchInput)
  console.log(selectedValue)
    return (
<div>
    <div className={styles.searchFilter_container}>
        <Dropdown>
            <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
            {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
            aria-label="Single selection actions"
            color="primary"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
            >
                <Dropdown.Item key="All">All</Dropdown.Item>
                {
                    categories.map((category , index)=>{
                        return(
                            <Dropdown.Item key={category.name}>{category.name}</Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>

        <Input 
        clearable   
        bordered 
        labelPlaceholder="Course name" 
        color="primary" 
        contentRight={<FaSearch/>} 
        onChange={(event)=>{
            setsearchInput(event.target.value)
            

            }}
        />
    </div>
    <div className={styles.searchResult_container}>
            {
                courses.filter((course , index)=>((course.name).toLowerCase().includes(searchInput) && searchInput != "") 
                    && ((course.category == selectedValue) || (selectedValue == 'All')))
                .map((course ,index)=>{
                    return(
                        <CourseCard name={course.name} category={course.category} img={course.img}/>
                    )
                })
            }
    </div>
</div>
    );
}

export default SearchFilter