
import './AnalyzeForm.scss';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Button, Form, Select } from "antd";
import { useState } from 'react';
import axios from 'axios';
import CohesionDetail from '../CohesionDetail/CohesionDetail';
import CiclomaticaDetail from '../CiclomaticaDetail/CiclomaticaDetail';
import { Spin, Space } from 'antd';


interface IFormInput {
  filename: string;
  url: string;
  typeanalyze: number;
  algorithm: string;
}
const AnalyzeForm: React.FC = () => {
  const [responseCohesion, setResponseCohesion] = useState<any>();
  const [responseciclomatica, setResponseciclomatica] = useState<any>();
  const { handleSubmit, control, formState: { isValid, errors, isValidating } } = useForm<IFormInput>({
    mode: 'all',
    reValidateMode: 'onChange'
  });
  const { Option } = Select;
  const [loading, setLoading] = useState<boolean>(false);



  const ValidateSelect = (value: IFormInput) => {
    setLoading(true);
    if (value.typeanalyze == 1) {
      setResponseCohesion([]);
      setResponseciclomatica([]);
      axios.post('http://127.0.0.1:8000/cohesion/', {
        "file": value.filename,
        "route": value.url,
        "algoritmo": value.algorithm
      })
        .then(function (response) {
          setResponseCohesion(response.data);
          setResponseciclomatica([]);
          setLoading(false)

        })
        .catch(function (error) {
          setLoading(false)
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    else {
      setResponseCohesion([]);
      setResponseciclomatica([]);
      axios.post('http://127.0.0.1:8000/complexity/', {
        "file": value.filename,
        "route": value.url,
        "algoritmo": value.algorithm
      })
        .then(function (response) {
          // handle success
          setResponseCohesion([]);
          setResponseciclomatica(response.data);
          setLoading(false)

        })
        .catch(function (error) {
          setLoading(false)

          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    }

  }


  const onSubmit: SubmitHandler<IFormInput> = data => {
    debugger
    if (isValid) ValidateSelect(data)
  }

  return (
    <div>


      <Form
        name="fileloadfm"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item label="Nombre del archivo" >
          <div className={errors.filename ? 'ant-form-item-has-error' : ''} >
            <Controller
              render={({ field }) => <Input   {...field} />}
              name="filename"
              control={control}
            />
            {errors.filename && <span className="alerterror">  file name is required </span>}
          </div>
        </Form.Item>


        <Form.Item name="Tipo" label="Tipo de análisis" >

          <div className={errors.typeanalyze ? 'ant-form-item-has-error' : ''} >
            <Controller
              render={({ field }) =>
                <Select
                  placeholder="Select a option"
                  allowClear
                  {...field}
                >
                  <Option value="1">Cohesion</Option>
                  <Option value="2">Complejidad ciclomatica</Option>
                </Select>

              }
              name="typeanalyze"
              control={control}
              rules={{ required: true }}
            />
            {errors.typeanalyze && <span className="alerterror">  Type  is required </span>}
          </div>




        </Form.Item>
        <Form.Item label="Paquete">
          <div className={errors.url ? 'ant-form-item-has-error' : ''} >
            <Controller
              render={({ field }) => <Input    {...field} />}
              name="url"
              control={control}
            />
            {errors.url && <span className="alerterror">  URL name is required </span>}
          </div>
        </Form.Item>

      {loading && 
      <div className="loading">
        <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
        </div>
      }

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary"
            htmlType="submit"
          >
            Analizar
          </Button>
        </Form.Item>

      </Form>
      {
        responseciclomatica != null
        && responseciclomatica.length > 0
        && <CiclomaticaDetail arrayitems={responseciclomatica} />
      }

      {
        responseCohesion != null
        && responseCohesion.length > 0
        && responseCohesion.map((item: any, index: number) => <CohesionDetail key={index} item={item} />)
      }


    </div>
  );
}

export default AnalyzeForm;
