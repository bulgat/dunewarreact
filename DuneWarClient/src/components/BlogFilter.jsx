
import { useEffect, useState } from 'react'

const BlogFilter = ({postQuery,latest,setSearchParams}) => {

const [search,setSearch] = useState(postQuery)
const [checked,setChecked] = useState(latest)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form =e.target;
        const query = form.search.value;
       
        console.log(form)
        console.log("   query ="+query)
   const isLatest = form.latest.checked;
   const params = {}
        console.log("   search")
        console.log("postQuery = "+postQuery)

        if(query.length){
            params.post = query
        }
        if(isLatest){
            params.latest=true;
        }
        setSearchParams(params);
    }

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label style={{ padding: '0 1rem' }}>
                <input type='checkbox' name='latest' checked={checked} onChange={e=>setChecked(e.target.checked)} />new only
            </label>
            <input type='search' name='search'  value={search} onChange={e=>setSearch(e.target.value)}/>
            <input type='submit' value='Search' />
        </form>
    )
}
export { BlogFilter }