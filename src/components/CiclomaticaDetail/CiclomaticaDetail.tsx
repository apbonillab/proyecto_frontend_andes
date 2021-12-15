import { Table } from 'antd';
import { useEffect, useState } from 'react';
import './CiclomaticaDetail.scss';

const CiclomaticaDetail: React.FC<{ arrayitems: any }> = ({arrayitems }) => {


  const [data, setdata] = useState();


  const columns = [
    { title: 'Nombre', dataIndex: 'file_name', key: 'file_name' },
    { title: 'Estcode_lineatus', dataIndex: 'code_line', key: 'code_line' },
    { title: 'cyclomatic_complexity', dataIndex: 'cyclomatic_complexity', key: 'cyclomatic_complexity' },
    { title: 'maintainability_index ', dataIndex: 'maintainability_index', key: 'maintainability_index' },
    { title: 'Estcode_lineatus ', dataIndex: 'code_line', key: 'code_line' },
    { title: 'unique_operands ', dataIndex: 'unique_operands', key: 'unique_operands' },

  ];
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    loadData();
  },[]);



  const loadData = () =>{
    let  array:any=  arrayitems.map((item: any, index: number) =>{
         return {
          key: index,
          name: item.file_name,
          code_line: item.code_line,
          cyclomatic_complexity: item.cyclomatic_complexity,
          maintainability_index: item.maintainability_index,
          unique_operands: item.unique_operands
         }

    })
    setdata(array);   
  }

  return (
    <Table
    columns={columns}
    dataSource={data}
    pagination={false}
  />
  )
}

export default CiclomaticaDetail;
