import React from "react"
import { Pagination } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Paginate = ({
  isOwner = false,
  pages,
  page,
  isAdmin = false,
  keyword = "",
}) => {
  return (
    pages > 1 && (
      <Pagination className="mt-5 mx-auto">
        {[...Array(pages ).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            onClick={()=>{
              window.scrollTo({top:400 , behavior:"auto"});

            }}
            to={ !isOwner ? !isAdmin ? keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x+1}` : `/admin/productslist/page/${x+1}` : `/owner/productslist/page/${x+1}` }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    ) 
  )
}

export default Paginate
