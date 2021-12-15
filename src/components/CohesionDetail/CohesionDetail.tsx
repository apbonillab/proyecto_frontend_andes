
import './CohesionDetail.scss';
import { Statistic, Row, Col, Button, Card } from 'antd';
import ClassType from '../ClassType/ClassType';

const CohesionDetail: React.FC<{ item: any }> = ({ item }) => {



  return (
    <Card className="card" title={item?.file_name} bordered={false}   >
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Total" value={item?.total} />
        </Col>

        
        <Col span={12}>
         <Statistic title="Nombre  Archivo" value={item?.file_name} />
        </Col>
      </Row>

      <Row gutter={32}>

        <Col  span={20}>
              <ClassType classtypeArray={item.classtype} />
        </Col>
      </Row>




    </Card>
  );
}

export default CohesionDetail;
