import React, { useEffect, useState } from 'react';
import './ClassType.scss';
import { Table } from 'antd';


const ClassType: React.FC<{classtypeArray:any}> = ({classtypeArray}) => {

  const [data, setdata] = useState();


  const columns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Cantidad', dataIndex: 'cantidad', key: 'cantidad' }
  ];

   

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    loadData();
  },[]);






  const loadData = () =>{
    let  array:any=  classtypeArray?.map((classtype: any, index: number) =>{
         return {
          key: index,
          name: classtype.name,
          cantidad: classtype.functions?.length,
          render:  <FuntiosDetail  funtios ={classtype.functions} /> ,
         }

    })
    setdata(array);   
  }

return(
<Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <div style={{ margin: 0 }}>{record.render}</div>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
    pagination={false}
  />
);

}

export default ClassType;


const FuntiosDetail: React.FC<{funtios:any}> = ({funtios}) =>{

  const [data, setdata] = useState();


  const columns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Numero ', dataIndex: 'nuber', key: 'number' },
    { title: 'Porcentaje ', dataIndex: 'percentageval', key: 'percentageval' }
  ];
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    loadData();
  },[]);



  const loadData = () =>{
    let  array:any=  funtios?.map((item: any, index: number) =>{
         return {
          key: index,
          name: item.name,
          nuber: item.number,
          percentageval: item.percentageval,
          render: <VariablesDetail  variables={item.variable} />,
         }

    })
    setdata(array);   
  }
  return (

<Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <div style={{ margin: 0 }}>{record.render}</div>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
    pagination={false}
  />
  )
}


const VariablesDetail: React.FC<{variables:any}> = ({variables}) =>{

  const [data, setdata] = useState();


  const columns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Estatus ', dataIndex: 'status', key: 'status' },

  ];
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    loadData();
  },[]);



  const loadData = () =>{
    let  array:any=  variables?.map((item: any, index: number) =>{
         return {
          key: index,
          name: item.name,
          status: item.status? 'true':'false'
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