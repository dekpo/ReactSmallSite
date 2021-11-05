const Pagination = ({limit,count,page,nextPage}) => (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={"page-item "+(page<2?"disabled":"")}>
          <a className="page-link" href="#" onClick={ ()=>nextPage(page-1) }>Previous</a>
        </li>
        {
          (page-2>0)?(<li className="page-item"><a className="page-link" href="#" onClick={ ()=>nextPage(page-2) }>{page-2}</a></li>):""
        }
        {
          (page-1>0)?(<li className="page-item"><a className="page-link" href="#" onClick={ ()=>nextPage(page-1) }>{page-1}</a></li>):""
        }
        <li className="page-item active"><a className="page-link" href="#" onClick={ ()=>nextPage(page) }>{page}</a></li>
        {
          (page*limit<count)?(<li className="page-item"><a className="page-link" href="#" onClick={ ()=>nextPage(page+1) }>{page+1}</a></li>):""
        }
        {
          ((page+1)*limit<count)?(<li className="page-item"><a className="page-link" href="#" onClick={ ()=>nextPage(page+2) }>{page+2}</a></li>):""
        }
        <li className={"page-item "+((page)*limit>=count?"disabled":"")}>
          <a className="page-link" href="#" onClick={ ()=>nextPage(page+1) }>Next</a>
        </li>
      </ul>
    </nav>
  )
  export default Pagination