import { Info } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../../styles/Home.module.css'

interface NavigationProps {
    setPageNumber: Dispatch<SetStateAction<number>>;
    prevNextInfo: Info;
  }
  
const Navigation = ({setPageNumber, prevNextInfo}: NavigationProps) => {


  return (
    <ReactPaginate 
        className='pagination font-monospace justify-content-center mt-4 gap-2'
        nextLabel= 'Next'
        previousLabel= 'Prev'
        nextLinkClassName={`page-link ${styles.prevnext}`}
        pageLinkClassName={`page-link ${styles.prevnext}`}
        pageClassName='page-item'
        onPageChange={ (page)=> setPageNumber(page.selected + 1)}
        pageCount={prevNextInfo.pages}
    />
  )
}

export default Navigation
