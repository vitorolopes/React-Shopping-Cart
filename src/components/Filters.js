import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating';
import { useShopContext } from '../context/ShopContextProvider';

const Filters = () => {

  // const [rate, setRate] = useState(3)

  const {filterState:{sortIn, byStock, byFastDelivery, byRating},
         sortByPriceIn, filterByStock, filterByFastDelivery, 
         filterByRating, clearFilters} 
         = useShopContext()
  
  return (
    <div className='filters'>
      <span className="title">Filter Products</span>

      <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>sortByPriceIn( "ascending")}
            checked={sortIn === "ascending" ? true : false}
        />
      </span>

      <span>
        <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={()=>sortByPriceIn("descending")}
            checked={sortIn === "descending" ? true : false}
        />
      </span>

      <span>
        <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={filterByStock}
            checked={byStock}
        />
      </span>

      <span>
        <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={filterByFastDelivery}
            checked={byFastDelivery}
        />
        </span>

        <span>
          <label style={{ paddingRight: 10 }}>Rating: </label>
          <Rating
              rating={byRating} 
              style={{ cursor: "pointer" }}
              onClick={(i)=> filterByRating(i+1)}
          />
        </span>

        <Button
            variant="light" 
            onClick={clearFilters}
        >
          Clear Filters
        </Button>


    </div>
  )
}

export default Filters