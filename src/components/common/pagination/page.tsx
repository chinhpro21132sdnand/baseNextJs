import React from 'react';
import { Pagination } from 'antd';

interface PaginationComponentProps {
    total: number; 
    PageSize: number;
    onChange: (page: number, total: number) => void; 
  }

const PaginationComponent: React.FC<PaginationComponentProps> = ({ total, PageSize,onChange }) => (
  <>
    <Pagination
  style={{
    display: 'flex',
    justifyContent: 'flex-end', 
    margin: '20px',
  }}
  total={total}
  defaultPageSize={PageSize}
  defaultCurrent={1}
  onChange={onChange}
/>
  </>
);

export default PaginationComponent;
